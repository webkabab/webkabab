//var SITE_BASE = "https://upmovies.net";
var SITE_BASE = "https://freemovies.homes"
var MAX_SEARCH_PAGES = 3;
var MAX_SEARCH_ITEMS = 3;



// register for resolver plugins
if(typeof resolverPlugins === 'undefined') {
    resolverPlugins = {};
}
resolverPlugins["upmovies"] = resolveUpMoviesVOD; 

// register for search plugins
if(typeof searchPlugins === 'undefined') {
    searchPlugins = [];
}
searchPlugins.push(searchUpMovies);


function resolveUpMoviesVOD(req, parts, onSuccess, onError) {
    try {
        console.debug("inside resolve UpMovies VOD");
        var series = null;
        var season = null;
        var episode = null;    
        var server = null;
        var type = null;
        var token = null;
        var movie = null;
        var id = null;
        var fullName = null;
        
        for(let i in parts) {
            let part = parts[i];
            let keyValue = part.split("=");
            if(keyValue.length === 2) {
                let key = keyValue[0];
                let value = keyValue[1];
                switch(key) {

                    case 'name':
                        fullName = value;
                        break;

                    case "s":
                        season = value;
                        break;

                    case "ep":
                        episode = value;
                        break;

                    case "id":
                        id = value;
                        break;
                }
            }
        }
        
        if(id && fullName) {
            console.debug("extract UpMovies item="+id+" season="+season+" episode="+episode);
            let pageURL = SITE_BASE + "/watch/" + id;
            if(episode) {
                pageURL = pageURL + "/episode-"+episode;
            }
            pageURL = pageURL + ".html";
            if(!episode) episode = -1;
            if(!season) season = -1;

            // TODO: move out to the main page
            // Fetch subtitles - hebrew           
            for(var i in subsPlugins) {
                let fetchExtSubtitle = subsPlugins[i];
                if(fetchExtSubtitle(fullName, season, episode, ["he"])) {
                    break;
                }
            }
            // Fetch subtitles - english
            for(var i in subsPlugins) {
                let fetchExtSubtitle = subsPlugins[i];
                if(fetchExtSubtitle(fullName, season, episode, ["en"])) {
                    break;
                }
            }

            extractUpMoviesStream(req, pageURL, fullName, id, onSuccess, onError);
        }
        else if(onError) {
            onError.error("Invalid MoviesJoys query=" + query);        
        }
    }
    catch(e) {
        onError(e);
    }
}

function extractUpMoviesStream(req, pageURL, fullName, id, onSuccess, onError) {
        
    let result = sendHTTPRequest(req, pageURL, "GET", {}, {}, true);
    let html = result.message;
    if(html) {

        // Extract all alternative sources
        let sources = {};
        sources["urls"] = [];
        sources["selected"] = 0;
        sources["stream"] = "";
        const sourcesRegex = /<p[+]class="server_servername"><a[+]href="https:\/\/upmovies[.]net\/watch\/((.*?)-.*?-season-(.*?))\/episode-(.*?)[.].*?">(.*?)<\/a>/gm;
        let i = 0;                
        let match;
        console.debug("Before founding sources... id="+id);
        while(match = sourcesRegex.exec(html)) {
            const sourceId =  match[1].replace(/[+]/g, " ");
            const videoId = match[2];
            const season = match[3];
            const episodeNum = match[4];
            const sourceName = match[5].replace(/[+]/g, " ");
            
            const url = "addon://https%3A%2F%2Fwebkabab.github.io%2Fwebkabab%2Faddon.html/request_live_url/upmovies" 
                    + "&id=" + sourceId 
                    + "&s=" + season 
                    + "&ep=" + episodeNum 
                    + "&name="+ fullName;
            console.debug("Found source="+sourceName+" uri="+url+" sourceId="+sourceId);
            sources["urls"].push({
                "name" : sourceName,
                "url" : url
            });            
            if(id === sourceId) {
                sources["selected"] = i;
            }
            i++;
        }
        console.debug("After founding sources...");

        const playerIframeRegex = /class="player-iframe.*?decode[(]"(.*?)"/g;
        match = playerIframeRegex.exec(html);
        if(match) {
            const base64 = match[1];
            console.debug("base64 url="+base64);
            const serverHTML = atob(base64);
            console.debug("decoded="+serverHTML);
            const streamRegex = /src="(.*?)"/g;
            const streamMatch = streamRegex.exec(serverHTML);
            if(streamMatch && onSuccess) {                
                let streamURL = streamMatch[1];
                const url = new URL(streamURL);                    
                const referer = "Referer=" + url.protocol + "//" + url.hostname;
                if(url.hostname === "eplayvid.net") {
                    console.debug("Special case for eplayvid");
                    let server = sendHTTPRequest(req, url, "GET", {}, {}, true);
                    server = server.message;
                    if(server) {
                        let streamRegex = /<source[+]src="(.*?)"/g;
                        let streamResult = streamRegex.exec(server);
                        if(streamResult) {
                            streamURL = streamResult[1];
                            streamURL = streamURL + "|" + referer;
                            console.debug("Grabbed video: "+streamURL);
                            sources["stream"] = streamURL;
                            //onSuccess(streamURL);
                            onSuccess(JSON.stringify(sources));
                            return;
                        }
                        else {
                            console.debug("Failed to grab="+server);
                        }
                    }
                }
                streamURL = streamURL + "|" + referer;
                console.debug("Got stream URL="+streamURL);
                sources["stream"] = streamURL;
                //nSuccess(streamURL);
                onSuccess(JSON.stringify(sources));
            }
            else if(onError) {
                onError("Cannot extract server");
            }
        }
        else if(onError) {
            onError("Cannot find base64: "+html);
        }
    }
    else if(onError) {
        onError("Failed to open movie page="+MOVIE_PAGE);
    }    
}




function searchUpMovies(req, query) {
    
    //let SEARCH_API = SITE_BASE + "/search-movies/" + query + ".html";
    let SEARCH_API = SITE_BASE;
    
    let params = {};    
    let mediaItems = [];        
    let result = sendHTTPRequest(req, SEARCH_API, "GET", {"s" : query}, params, true);
    let searchResults = result.message;
    console.log("Got search results from UpMovies for q="+query+": "+searchResults); 
    if(searchResults) {    
        
        // get the number of pages
        let numPagesRegex = /class="pagelinkEnd".*?href=".*?page-([0-9]+)[.]html"/g;
        let totalPages = 1;
        let match;
        if(match = numPagesRegex.exec(searchResults)) {
            totalPages = match[1];            
            console.debug("Found "+ totalPages +" results");
        }

        for(var currPage = 1; currPage <= totalPages && currPage <= MAX_SEARCH_PAGES; currPage++) {
            if(currPage > 1) {
                // fetch the current page
                SEARCH_API = SITE_BASE + "/search-movies/" + query + "/page-" + currPage + ".html";
                let result = sendHTTPRequest(req, SEARCH_API, "GET", {}, params, true);
                let searchResults = result.message;
                console.log("Got search results from UpMovies for q="+query+": "+searchResults+" page="+currPage); 
            }

            if(searchResults) {
                let itemRegex = /class="title"><a[+]href=\"(.*?)\">(.*?)</g;
                             
                while(match = itemRegex.exec(searchResults)) {
                    let url = match[1];
                    let name = match[2];    
                    //name = name.replaceAll("+", " ");
                    name = name.replace(/[+]/g, " ")
                    console.debug("Got title: "+name+" url="+url);
                    let parts = url.split("/");
                    let id = parts[parts.length - 1];
                    id = id.replace(".html", "");
                    console.debug("Clean ID="+id);
                    // extract type
                    let typeRegex = /(.*)-season-([0-9]+)/g;
                    let typeMatch = typeRegex.exec(id);
                    let type = typeMatch ? "tvshow" : "movie";  

                    let season = -1;
                    // check for series
                    if(type == "tvshow") {
                        id = typeMatch[1];
                        season = typeMatch[2];
                        // clean the series name
                        let seriesNameRegex = /(.*)[:]\s*?Season\s*[0-9]+/g;
                        let seriesNameMatch = seriesNameRegex.exec(name);
                        if(seriesNameMatch) {
                            name = seriesNameMatch[1];
                        }
                    }                    
                    console.debug("Got media item: "+name+" of type: "+type+" id: "+id+" season:"+season);
                    mediaItems.push({
                        'name' : name,
                        'type' : type,
                        'id' : id,
                        'season' : season
                    });
                }
            }
        }

        return filterSearchResults(req, query, mediaItems);    
        
    }
    else {
        console.error("Cannot open search page for query: "+query);
        return {};
    }
}


function filterSearchResults(req, query, mediaItems) {
    
    let results = {};
    let tvShows = {};
    let movies = {};
    let uniqueNames = [];
    for(var i in mediaItems) {            
        let item = mediaItems[i];
        if(item.type == "tvshow") {                
            if(!tvShows[item.name]) {
                tvShows[item.name] = [];
                uniqueNames.push({
                    'name' : item.name,
                    'type' : item.type
                });
            }
            tvShows[item.name].push({
                'season' : item.season,
                'id' : item.id
            });
        }
        else {
            movies[item.name] = item.id;            
            uniqueNames.push({
                'name' : item.name,
                'type' : item.type
            });
        }
    }

    let cleanQuery = query.toLowerCase();
    uniqueNames.sort(function(a,b) {
        //console.log("a="+JSON.stringify(a));
        let cleanA = a.name.replace(/-/g, " ");
        cleanA = cleanA.toLowerCase();
        let similarityA = exports.stringSimilarity(cleanA, cleanQuery);
        let cleanB = b.name.replace(/-/g, " ");
        cleanB = cleanB.toLowerCase();
        let similarityB = exports.stringSimilarity(cleanB, cleanQuery);
        return similarityB - similarityA;
    });

    console.debug("Sorted items:");
    for(var item in uniqueNames) {
        if(item >= MAX_SEARCH_ITEMS) {
            break;
        }             
        let uniqueItem = uniqueNames[item];           
        console.debug(" Item: "+uniqueItem.name+" of type: "+uniqueItem.type);  
        if(uniqueItem.type == 'tvshow') {
            // extract all episodes
            extractTvShow(req, results, uniqueItem.name, tvShows[uniqueItem.name]);
        }
        else {
            extractMovie(req, results, uniqueItem.name, movies[uniqueItem.name]);
        }
    }

    return results;
}

function extractTvShow(req, results, name, show) {
    
    console.debug("Extractin TV SHOW: "+name);
    for(var i in show) {
        let season = show[i].season;
        let id = show[i].id;
        let SEASON_PAGE = SITE_BASE + "/watch/" + id + "-season-" + season + ".html";        
        let result = sendHTTPRequest(req, SEASON_PAGE, "GET", {}, {}, true);
        let resultHTML = result.message;
        if(resultHTML) {
            console.log("Got episodes for: "+name+" url="+SEASON_PAGE);
            // Get all episodes for this season:
            let episodesRegex = /class="episode[+]episode_series_link[+](?:active[+])?esp-circle"[+]href="(.*?)[.]html">([0-9]+)</g;
            let match;
            while(match = episodesRegex.exec(resultHTML)) {
                let episodeId = match[1];
                let parts = episodeId.split("/");
                episodeId = parts[parts.length - 2];
                let episodeNum = match[2];
                console.debug("Found episode for series="+name+" s="+season+" ep="+episodeNum+" id="+episodeId);
                results[formatName(name) + " S"+season+"E"+episodeNum] = 
                    "addon://https%3A%2F%2Fwebkabab.github.io%2Fwebkabab%2Faddon.html/request_live_url/upmovies&id=" + episodeId 
                    + "&s=" + season 
                    + "&ep=" + episodeNum 
                    + "&name="+name;
            }
        }
        else {
            // send erro
            console.error("Can't open series page: "+SEASON_PAGE);
        }
    }    
}

function extractMovie(req, results, name, movie) {

    console.debug("Extractin MOVIE: "+name);
    results[formatName(name)] = 
        "addon://https%3A%2F%2Fwebkabab.github.io%2Fwebkabab%2Faddon.html/request_live_url/upmovies&id=" + movie + "&name="+name;
}



