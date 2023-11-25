var SITE_BASE = "https://moviesjoys.cc";

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

function resolveMoviesJoysVOD(parts, onSucess, onError) {
    console.debug("inside resolve moviesjoys VOD");
    var series = null;
    var season = null;
    var episode = null;    
    var server = null;
    var type = null;
    
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
            }
        }
    }

    if(!series || !season || !episode) {        
        if(onError) {
            onError.error("Invalid MoviesJoys query=" + query);
        }
        return;
    }
    
    console.debug("extract moviesjoys video... series="+series+", s="+season+", e="+episode);    
    extractMoviesJoysVideo(series, season, episode, server, type, onSucess, onError);
}


function extractMoviesJoysVideo(series, season, episode, server, type, onSuccess, onError) {
    
    try {    

        let headers = {};
        headers["Accept"] =  "*/*";
        //headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
        //headers["User-Agent"], "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36";
        //headers["sec-ch-ua-mobile"] = "0?";
        //headers["sec-ch-ua-platform"] =  "\"Windows\"";
        //headers["sec-ch-ua"] = "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"";
        //headers["X-Requested-With"] = "XMLHttpRequest";
        //headers["Host"] = SITE_BASE;    
        //headers["Accept-Encoding"] = "gzip, deflate, br";
        //headers["Connection"] = "keep-alive";
        headers["Referer"] = SITE_BASE;
    
        let params = {};
        params["ep"] = String(series);
        params["s"] = String(season);
        params["e"] = String(episode);
        params["server_name"] = String(server);
        params["type"] = String(type);        

        console.debug("sending stream query...");              
        let apiLink = SITE_BASE + "/j/grabber.php";
        let result = sendHTTPRequest(req, apiLink, "GET", headers, params, true);
        let message = result.message;           
        let cookies = result.cookies;

    
        console.debug("Got a stream server part: "+message);        
        console.debug("Got cookies="+cookies);
    
        if(message) {
            let re = /src="(.*?)"/g;
            let match = re.exec(message);
            let server_api = match[1];
            if(server_api) {
                console.debug("Got server API: "+server_api);
                let matchURL = new URL(server_api);
                let refererStr = matchURL.protocol + "//"+matchURL.host;
                params = {};
                for (const [key, value] of matchURL.searchParams) {
                    params[key] = value;
                }
                console.debug("Server host path="+refererStr);
                server_api = refererStr + matchURL.pathname;
                console.debug("Got URL="+server_api);
                
                //headers["Host"] = refererStr;  
                headers["Referer"] = refererStr;
                result = sendHTTPRequest(req, server_api, "GET", headers, params, true);
                message = result.message;           
                cookies = result.cookies;
                            
                if(message) {
                    console.debug("Got server API response: "+message);
                    //let re = /playerInstance[.]setup[(](.*?)[)]/g;
                    let re = /file:[+]"(.*?)"/g;
                    let match = re.exec(message);
                    //let server_response_json = match[1];
                    let stream_url = match[1];
                    if(stream_url) {                        
                        ///server_response_json = server_response_json.replaceAll("+"," ");
                        console.debug("Got json response from stream server="+stream_url);                        
                        onSuccess(stream_url);
                        //stream_json = JSON.parse(server_response_json);
                        //sources = stream_json.sources;
                        /*
                        if(sources) {
                            for(var i in sources) {
                                console.debug("Got source: "+sources[i]);
                                onSuccess(sources[i]);
                            }
                        }
                        else {
                            onError("Got no sources!");
                        }
                        */                        
                    }
                }
                else {
                    onError("Can't get valid response from the server API");
                }    
            }
            else {
                onError("Can't capture server URI");                
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

    params["s"] = query;
    let result = sendHTTPRequest(req, SEARCH_API, "GET", {}, params, true);
    let searchResults = result.message;
    console.log("Got search results for q="+query+": "+searchResults);    
    if(searchResults) {        
        let count = 0;
        let itemRegex = /class="name"[+]href="\/([a-zA-Z]*?)-watch\/(.*?)"/g;        
        while(match = itemRegex.exec(searchResults)) {
            let type = match[1];
            let name = match[2];        
            if(type == "tvshow") {
                let tvShowsRegex = /(.*?)-season-([0-9]+)/g
                let match1 = tvShowsRegex.exec(name);
                if(match1) {
                    name = match1[1];
                    let season = match1[2];
                    console.log("Got series result: "+name+" of type="+type+" season="+season);                                        
                    if(!(name in series)) {
                        series[name] = {};
                    }            
                    series[name][season] = [];
                    // Get all episodes of this season
                    let SEASONS_API = SITE_BASE + "/j/ul-vrf.php";
                    params = {};
                    params["t"] = name;
                    params["s"] = season;
                    params["vrf"] = "true";
                    let headers = {};
                    headers["Referer"] = SITE_BASE;
                    result = sendHTTPRequest(req, SEARCH_API, "GET", headers, params, true);
                    let seasonsInfo = result.message;
                    if(seasonsInfo) {
                        let episodesRegex = /myFunction[)]">([0-9]+)<\/a>/g;
                        let match2 = episodesRegex.exec(seasonsInfo);
                        if(match2) {
                            let episode = match2[1];
                            series[name][season].push(episode);
                        }
                        else {
                            console.error("Can't capture episode params for: "+name+" in season="+season+" raw="+seasonsInfo);
                        }
                    }
                    else {
                        console.error("Failed to get seasons info of: "+name+" season="+season);
                    }
                }
                else {
                    console.error("Can't capture series params in: "+name);
                }
            }            
            else if(type == "movie") {
                console.log("Got movies result: "+name+" of type="+type);
            }
            else {
                console.log("Got bad result: "+match[0]);
            }
        }
        
        for(var serie in series) {
            console.debug("Recorded series "+serie+" with "+Object.keys(series[serie]).length+" seasons");
            for(season in series[serie]) {
                console.debug("   Season: "+season+" has "+series[serie][season].length+" episodes");
            }
        }

        /*
        searchResults = JSON.parse(searchResults);
        for(let i in searchResults) {
            if(count >= LIMIT_RESULTS) 
                break;
            count = count + 1;

            let searchResult = searchResults[i];
            console.log("got search result: "+JSON.stringify(searchResult));
            let seriesId = searchResult["id"];
            let name = searchResult["name"];
            console.debug("Got search result... name="+name+", series="+seriesId);

            // visit the series page to get more info
            let seriesUrl = SDAROT_BASE + "/watch/"+seriesId;
            let fd = TiviProvider.openFile(req, seriesUrl, "UTF-8", false);
            let content = TiviProvider.readAll(req, fd);            
            TiviProvider.close(req, fd);
            // find the regex with the english name
            let matches = "";            
            let englishName = "";
            let nameReg = new RegExp("<span class=\"ltr\">(.*?)<\/span><\/strong>", "g");                        
            matches = nameReg.exec(content);
            if (matches !== null) {
                englishName = matches[1];
            }
            else {
                console.error("Cannot find english name in="+content);
                englishName = name;
            }
            console.debug("English name="+englishName);
            // find the regex with all seasons
            let seasons = [];
            let seasonReg = new RegExp("<li\\s*data\\-season=\"([0-9]+)\"", "g");            
            matches = "";
            do {
                matches = seasonReg.exec(content);
                if (matches !== null) {
                    console.debug("found season="+matches[1]);
                    seasons.push(matches[1]);
                }                
            } while(matches !== null);
            if(seasons.length == 0) {
                console.error("Cannot find any seasons");
            }
            
            for(let j in seasons) {
                let season = seasons[j];

                // get the episodes for each season
                let episodeListUrl = SDAROT_BASE + "/ajax/watch?episodeList="+seriesId+"&season="+season;
                console.debug("getting episode list="+episodeListUrl);
                //fd = TiviProvider.openFile(req, episodeListUrl, "UTF-8", false);
                //content = TiviProvider.readAll(req, fd);            
                //TiviProvider.close(req, fd);
                let result = sendHTTPRequest(req, episodeListUrl, "GET", headers, params, true);
                content = decodeURIComponent(result.message).replace(/\+/g, " ");                

                let episodes = [];
                let episodesReg = new RegExp("<li\\s*data\\-episode=\"([0-9]+)\"", "g");
                matches = "";
                do {
                    matches = episodesReg.exec(content);
                    if(matches !== null) {
                        console.debug("found episode="+matches[1]);
                        episodes.push(matches[1]);
                    }
                } while(matches !== null);
                if(episodes.length == 0) {
                    console.error("Cannot find any episodes");
                }

                for(let k in episodes) {
                    let episode = episodes[k];
                    
                    results[englishName + " S"+season+"E"+episode] = 
                            "addon://https%3A%2F%2Fwebkabab.github.io%2Fwebkabab%2Faddon.html/request_live_url/sdarot"
                    + "&series=" + seriesId
                    + "&season=" + season
                    + "&ep=" + episode;
                }
            }

            
          
        }
        */
    }
    return results;
}
