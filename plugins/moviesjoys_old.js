var SITE_BASE = "https://moviesjoys.cc";
var MAX_SEARCH_PAGES = 3;
var MAX_SEARCH_ITEMS = 3;



// register for resolver plugins
if(typeof resolverPlugins === 'undefined') {
    resolverPlugins = {};
}
resolverPlugins["moviesjoys"] = resolveMoviesJoysVOD; 

// register for search plugins
if(typeof searchPlugins === 'undefined') {
    searchPlugins = [];
}
searchPlugins.push(searchMoviesJoys);

function resolveMoviesJoysVOD(req, parts, onSuccess, onError) {
    console.debug("inside resolve moviesjoys VOD");
    var series = null;
    var season = null;
    var episode = null;    
    var server = null;
    var type = null;
    var token = null;
    var movie = null;
    var id = null;
    
    for(let i in parts) {
        let part = parts[i];
        let keyValue = part.split("=");
        if(keyValue.length === 2) {
            let key = keyValue[0];
            let value = keyValue[1];
            switch(key) {
                case "series":
                    series = value;
                    break;

                case "season":
                    season = value;
                    break;

                case "ep":
                    episode = value;
                    break;

                case "server":
                    server = value;
                    break;

                case "type":
                    type = value;
                    break;

                case "movie":
                    movie = value;
                    break;

                case "id":
                    id = value;
                    break;

                case "token":
                    token = value;
                    break;                    
            }
        }
    }

    if(series && season && episode && server && type) {
        console.debug("extract moviesjoys series="+series+", s="+season+", e="+episode);    
        extractMoviesJoysSeries(series, season, episode, server, type, onSuccess, onError);
    }
    else if(movie && server && id && token) {
        console.debug("extract moviesjoys movie="+movie);    
        extractMoviesJoysMovie(movie, id, server, token, onSuccess, onError);
    }
    else {
        if(onError) {
            onError.error("Invalid MoviesJoys query=" + query);
        }
    }    
}

function extractMoviesJoysStream(streamApi, name, season, episode, onSuccess, onError) {
    let matchURL = new URL(streamApi);
    let refererStr = matchURL.protocol + "//"+matchURL.host;
    params = {};
    headers = {};    
    for (const [key, value] of matchURL.searchParams) {
        params[key] = value;
    }                    
    streamApi = refererStr + matchURL.pathname;                                                        
    headers["Referer"] = refererStr;
    result = sendHTTPRequest(req, streamApi, "GET", headers, params, true);
    message = result.message;           
    cookies = result.cookies;
                
    if(message) {       
        // Get the subtitles
        let subRegex = /tracks:[+](.*?),[+\s]*?image/g;
        let match = subRegex.exec(message);        
        if(match) {
            let tracks = match[1];
            console.debug("Got subs JSON: "+tracks);
            let subs = JSON.parse(tracks);
            let hebrewFound = false;
            for(var i in subs) {
                let track = subs[i];
                let subURL = track.file;
                let language = track.label;                
                let languageCode = LANGUAGE_CODES[language];
                if(languageCode == "he") {
                    hebrewFound = true;
                }
                if(!languageCode) languageCode = "en" // default
                console.debug("Found sub: "+subURL+" language: "+language+" code: "+languageCode);
                TiviProvider.sendSubtitle(req, language, subURL, languageCode);                
            }
            if(!hebrewFound && subsPlugins) {
                //fetchExternalSubs(name, ["he"]);
                for(var i in subsPlugins) {
                    let fetchExtSubtitle = subsPlugins[i];
                    if(fetchExtSubtitle(name, season, episode, ["he"])) {
                        break;
                    }
                }
            }
        }
        else {
            console.error("Failed to fetch subtitles "+message);
        }
         // Get the stream
         console.debug("Got server API response: "+message);
         let re = /file:[+]"(.*?)"/g;
         match = re.exec(message);                      
         if(match)  {
             let stream_url = match[1];
             if(stream_url) {                                                    
                 console.debug("Got json response from stream server="+stream_url);                        
                 onSuccess(stream_url);                            
             }
         }
         else {
             onError("Bad server API response: "+message);
         }
    }
    else {
        onError("Can't get valid response from the server API");
    }    
}

function extractMoviesJoysMovie(movie, id, server, token, onSuccess, onError) {
    try {

        let MOVIE_STREAM_API = SITE_BASE + "/ajax/episode/info/";

        let headers = {};
        headers["Accept"] =  "*/*";
        headers["Referer"] = SITE_BASE;
    
        let params = {};
        params["id"] = String(token);
        params["server"] = String(server);
       
        let result = sendHTTPRequest(req, MOVIE_STREAM_API, "GET", headers, params, true);
        let message = result.message;
        if(message) {
            console.debug("Got result: "+message);
            let moviesJson = JSON.parse(message);
            let target = moviesJson.target;
            target = target.replace(SITE_BASE, movie + "-" + id);
            console.debug("Got stream API: "+ target);
            extractMoviesJoysStream(target, formatName(movie), -1, -1, onSuccess, onError);            
        }
        else {
            onError("Can't get response from movies API: "+MOVIE_STREAM_API);
        }        
    }
    catch(e) {
        onError(e);
    }
}

function extractMoviesJoysSeries(series, season, episode, server, type, onSuccess, onError) {
    
    try {    

        let headers = {};
        headers["Accept"] =  "*/*";
        headers["Referer"] = SITE_BASE;
    
        let params = {};
        params["ep"] = String(series);
        params["s"] = String(season);
        params["e"] = String(episode);
        params["server_name"] = String(server);
        params["type"] = String(type);        
        
        let apiLink = SITE_BASE + "/j/grabber.php";
        let result = sendHTTPRequest(req, apiLink, "GET", headers, params, true);
        let message = result.message;           
        let cookies = result.cookies;
    
        if(message) {
            let re = /src="(.*?)"/g;
            let match = re.exec(message);
            if(match) {
                let streamApi = match[1];
                if(streamApi) {                                 
                    extractMoviesJoysStream(streamApi, formatName(series), season, episode, onSuccess, onError);                    
                }
                else {
                    onError("Can't capture server URI");                
                }            
            }
            else {
                onError("Got API error: "+message);
            }
            
        }
        else {
            onError("Got bad result from the API");
        }            
    }
    catch(e) {
        onError(e);
    }        
}

function searchMoviesJoys(req, query) {
    
    let SEARCH_API = SITE_BASE + "/searchs/";
    
    let LIMIT_RESULTS = 3;

    let results = {};
    let params = {};
    let series = {};
    let mediaItems = [];

    params["s"] = query;
    let result = sendHTTPRequest(req, SEARCH_API, "GET", {}, params, true);
    let searchResults = result.message;
    console.log("Got search results for q="+query+": "+searchResults);    
    if(searchResults) {                
        let pageMatch;
        let pageRegex = /[&]page=([0-9])">/g;
        let pageIdx = 0;
        do {
            if(pageMatch) {
                pageIdx = pageMatch[1];
                console.debug("Found page: "+pageIdx);
                if(pageIdx && pageIdx > 1 && pageIdx <= MAX_SEARCH_PAGES) {
                    params["page"] = pageIdx;
                    result = sendHTTPRequest(req, SEARCH_API, "GET", {}, params, true);
                    searchResults = result.message;
                }
            }

            if((pageIdx == 0 || pageIdx > 1) && searchResults) {
                let itemRegex = /class="name"[+]href="\/([a-zA-Z]*?)-watch\/(.*?)"/g;        
                while(match = itemRegex.exec(searchResults)) {
                    let type = match[1];
                    let name = match[2];        
                    let season = -1;
                    // check for series
                    if(type == "tvshow") {
                        let tvShowsRegex = /(.*?)-season-([0-9]+)/g
                        let showMatch = tvShowsRegex.exec(name);
                        if(showMatch) {
                            name = showMatch[1];
                            season = showMatch[2];
                        }
                    }
                    else if(type == "movie") {
                        let movieRegex = /(.*)-([0-9]+)/g;
                        let movieMatch = movieRegex.exec(name);
                        if(movieMatch) {
                            name = movieMatch[1];
                            season = movieMatch[2];
                        }
                    }
                    console.debug("Got media item: "+name+" of type: "+type+" season: "+season);
                    mediaItems.push({
                        'name' : name,
                        'type' : type,
                        'season' : season
                    });           
                }
            }
                        
        } while(pageMatch = pageRegex.exec(searchResults));

        return filterSearchResults(query, mediaItems);    
        
    }
    else {
        console.error("Cannot open search page for query: "+query);
        return {};
    }
}


function filterSearchResults(query, mediaItems) {

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
            tvShows[item.name].push(item.season);
        }
        else {
            movies[item.name] = item.season;            
            uniqueNames.push({
                'name' : item.name,
                'type' : item.type                
            });
        }
    }

    let cleanQuery = query.toLowerCase();
    uniqueNames.sort(function(a,b) {
        console.log("a="+JSON.stringify(a));
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
        console.debug(" Item: "+uniqueItem.name);  
        if(uniqueItem.type == 'tvshow') {
            // extract all episodes
            extractTvShow(results, uniqueItem.name, tvShows[uniqueItem.name]);
        }
        else {
            extractMovie(results, uniqueItem.name, movies[uniqueItem.name]);
        }
    }

    return results;
}

function extractTvShow(results, name, seasons) {
       
    for(var i in seasons) {
        let season = seasons[i];
        // Get all episodes of this season
        let SEASONS_API = SITE_BASE + "/j/ul-vrf.php";
        params = {};
        params["t"] = name;
        params["s"] = season;
        params["vrf"] = "true";
        let headers = {};
        headers["Referer"] = SITE_BASE;
        let result = sendHTTPRequest(req, SEASONS_API, "GET", headers, params, true);
        let seasonsInfo = result.message;
        if(seasonsInfo) {
            let episodesRegex = /&server_name=(.+?)&s=[0-9]+&e=[0-9]+&type=(.+?)',[+]myFunction[)]">([0-9]+)<\/a>/g;
            let match;
            while(match = episodesRegex.exec(seasonsInfo)) {
                if(match) {
                    let server = match[1];
                    let type = match[2];
                    let episode = match[3];                                
                    results[formatName(name) + " S"+season+"E"+episode] = 
                        "addon://https%3A%2F%2Fwebkabab.github.io%2Fwebkabab%2Faddon.html/request_live_url/moviesjoys"
                        + "&series=" + name
                        + "&season=" + season
                        + "&ep=" + episode
                        + "&server=" + server
                        + "&type=" + type;                    
                }
                else {
                    console.error("Can't capture episode params for: "+name+" in season="+season+" raw="+seasonsInfo);
                }
            }
            
        }
        else {
            console.error("Failed to get seasons info of: "+name+" season="+season);
        }
    }    
}

function extractMovie(results, name, id) {
    let params = {};
    let headers = {};

    let MOVIE_API = SITE_BASE + "/movie-watch/" + name; //+ "-" + id;
    let result = sendHTTPRequest(req, MOVIE_API, "GET", headers, params, true);
    let moviesInfo = result.message;
    if(moviesInfo) {
        // TODO: it captures only the first server.
        //let movieRegex = /<div[+]id="servers">.*?<div[+]class="server[+]row"[+]data-type="iframe"[+]data-id="([0-9]+)">.*?<a class=".*?"[+]data-id="(.*?)"/gms;
        let movieRegex = /<div[+]id="servers">.*?<div[+]class="server[+]row"[+]data-type="iframe"[+]data-id="([0-9]+)">.*?<a[+]class=".*?"[+]data-id="(.*?)"/gms;
        console.debug(moviesInfo);
        let match = movieRegex.exec(moviesInfo);
        if(match) {
            let serverId = match[1];
            let token = match[2];
            results[formatName(name)] = 
                        "addon://https%3A%2F%2Fwebkabab.github.io%2Fwebkabab%2Faddon.html/request_live_url/moviesjoys"
                        + "&movie=" + name
                        + "&server=" + serverId
                        + "&id=" + id
                        + "&token=" + token;
        }
        else {
            console.error("Can't find any server... "+MOVIE_API);
        }
    }
}


