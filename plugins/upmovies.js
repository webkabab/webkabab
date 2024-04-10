var SITE_BASE = "https://upmovies.net";
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


function resolveUpMoviesVOD(parts, onSuccess, onError) {
    if(onError) {
        onError("Not Implemented Yet!");
    }
}

function searchUpMovies(req, query) {
    
    let SEARCH_API = SITE_BASE + "/search-movies/" + query + ".html";
    
    let params = {};    
    let mediaItems = [];        
    let result = sendHTTPRequest(req, SEARCH_API, "GET", {}, params, true);
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
                    name = name.replaceAll("+", " ");
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
            extractTvShow(req, results, tvShows[uniqueItem.name]);
        }
        else {
            extractMovie(req, results, movies[uniqueItem.name]);
        }
    }

    return results;
}

function extractTvShow(req, results, name, show) {
           
    for(var i in show) {
        let season = show[i].season;
        let id = show[i].id;
        let SEASON_PAGE = SITE_BASE + "/watch/" + id + "-season-" + season + ".html";        
        let result = sendHTTPRequest(req, SEASON_PAGE, "GET", {}, {}, true);
        let resultHTML = result.message;
        if(resultHTML) {
            console.log("Got episodes for: "+name+" url="+SEASON_PAGE);
            // Get all episodes for this season:
            let episodesRegex = /class="episode[+]episode_series_link[+]esp-circle"[+]href="(.*?)[.]html">([0-9]+)</g;
            let match;
            while(match = episodesRegex.exec(resultHTML)) {
                let episodeId = match[1];
                let episodeNum = match[2];
                console.debug("Found episode for series="+name+" s="+season+" ep="+episodeNum+" id="+episodeId);
                results[formatName(name) + " S"+season+"E"+episodeId] = 
                        "addon://https%3A%2F%2Fwebkabab.github.io%2Fwebkabab%2Faddon.html/request_live_url/upmovies"                        
                        + "&season=" + season
                        + "&ep=" + episodeNum
                        + "&id=" + episodeId
                        + "&type=tvshow";                    
            }
        }
        else {
            console.error("Can't open series page: "+SEASON_PAGE);
        }
    }    
}

function extractMovie(req, results, movie) {

    results[formatName(movie.name)] = 
        "addon://https%3A%2F%2Fwebkabab.github.io%2Fwebkabab%2Faddon.html/request_live_url/upmovies"        
        + "&type=movie"
        + "&id=" + movie.id;
}



