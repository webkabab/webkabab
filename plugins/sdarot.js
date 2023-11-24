var SDAROT_BASE = "https://sdarot.tw";

// register for resolver plugins
if(typeof resolverPlugins === 'undefined') {
    resolverPlugins = {};
}
resolverPlugins["sdarot"] = resolveSdarotVOD;

// register for search plugins
if(typeof searchPlugins === 'undefined') {
    searchPlugins = [];
}
searchPlugins.push(searchSdarot);


function resolveSdarotVOD(parts, onSucess, onError) {
    console.debug("inside resolve sdarot VOD");
    var series = null;
    var season = null;
    var episode = null;
    var token = null;
    
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

                case "token":
                    token = value;
                    break;
            }
        }
    }

    if(!series || !season || !episode) {
        //TiviProvider.sendError(req, "Invalid SDAROT query=" + query);
        //TiviProvider.done();    
        if(onError) {
            onError.error("Invalid SDAROT query=" + query);
        }
        return;
    }
    

    console.debug("extract sdarot video... series="+series+", s="+season+", e="+episode);    
    extractSdarotVideo(series, season, episode, token, onSucess, onError);
                   
}

function extractSdarotVideo(series, season, episode, token, onSuccess, onError) {

   
    let API_LINK = SDAROT_BASE + "/ajax/watch";

    // Build general headers:
    let headers = getSdarotHeaders();

    let params = {};
    params["SID"] = String(series);
    params["season"] = String(season);
    params["ep"] = String(episode);
    params["preWatch"] = "false";
    let error = "";


    let getToken = function() {

        // Perform login
        let LOGIN_API = SDAROT_BASE + "/login";
        params = {};
        params["username"] = "kabab11";
        params["password"] = "Kabab4ever123";
        params["location"] = "/index";
        params["login_remember"] = "1";
        params["submit_login"] = "";        
        sendHTTPRequest(req, LOGIN_API, "POST", headers, params, false); 

        params = {};
        params["SID"] = String(series);
        params["season"] = String(season);
        params["ep"] = String(episode);
        params["preWatch"] = "false";
        console.debug("sending token query...");            
        let result = sendHTTPRequest(req, API_LINK, "POST", headers, params, true);
        token = result.message;
        if(token) {    
            console.debug("Got token="+token);
            // Need to wait for 30 seconds. Send a special html that will trigger back to this page
            onSuccess("https://webkabab.github.io/webkabab/pages/sdarot.html?serie="
                        +series+"&s="+season+"&e="+episode+"&token="+token+"&error="+error);
        }
        else {
            onError("Failed to get token");
        }
    };


    // Send token request
    try {
        if(!token) {            
            getToken();
        }
        else {

            /* // TODO: debug
            console.debug("sending VAST query...")
            params = {};
            params["vast"] = "true";
            sendHTTPRequest(req, API_LINK, "POST", headers, params, false);
            */

            console.debug("sending stream query...");
            params = {};
            params["serie"] = String(series);
            params["season"] = String(season);
            params["episode"] = String(episode);
            params["type"] = "episode";
            params["watch"] = "false";
            params["token"] = token;
                
            let result = sendHTTPRequest(req, API_LINK, "POST", headers, params, true);
            let stream = result.message;           
            let cookies = result.cookies;
            console.debug("Got a JSON with info: "+stream);
            console.debug("Got cookies="+cookies);

            if(stream && cookies) {
                stream = decodeURIComponent(stream);
                console.debug("Got a JSON with info: "+stream);
                stream = JSON.parse(stream);                
                //cookies = decodeURIComponent(cookies);
                console.debug("Got cookies="+cookies);
                cookies = JSON.parse(cookies);

                if(stream["error"]) {                    
                    console.debug("error: "+stream["error"]);
                    error = stream["error"];
                    getToken();
                }
                else if(stream["watch"] && cookies["Sdarot"]) {
                    console.debug("Got stream="+stream["watch"]);
                    onSuccess("https:"+stream["watch"]["480"]+"|Cookie="+encodeURIComponent("Sdarot="+cookies["Sdarot"]));
                }
                else {
                    onError("strange json structure...");
                }
            }
            else {
                onError("got no stream JSON");
            }
            
        }          
    }
    catch(e) {
        onError(e);
    }        
}


function searchSdarot(req, query) {
    let SEARCH_API = SDAROT_BASE + "/ajax/index";
    let LIMIT_RESULTS = 1;

    let results = {};
    let headers = getSdarotHeaders();
    let params = {};
    params["search"] = query;
    let result = sendHTTPRequest(req, SEARCH_API, "GET", headers, params, true);
    let searchResults = result.message;
    console.log("Got search results for q="+query+": "+searchResults);    
    if(searchResults) {        
        let count = 0;
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
    }
    return results;
}

function getSdarotHeaders() {
    let headers = {};
    headers["Accept"] =  "*/*";
    headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
    headers["User-Agent"], "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36";
    headers["sec-ch-ua-mobile"] = "0?";
    headers["sec-ch-ua-platform"] =  "\"Windows\"";
    headers["sec-ch-ua"] = "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"";
    headers["X-Requested-With"] = "XMLHttpRequest";
    headers["Host"] = "sdarot.tw";    
    //headers["Accept-Encoding"] = "gzip, deflate, br";
    headers["Connection"] = "keep-alive";
    headers["Referer"] = "http://sdarot.tw";    
    // Set cookies
    // TODO: Figure out why the "remember" cookie isn't working
    //let REMEMBER_COOKIE = "remember=a%3A2%3A%7Bs%3A8%3A%22username%22%3Bs%3A7%3A%22sheldom%22%3Bs%3A5%3A%22check%22%3Bs%3A128%3A%22484d953e6d3b040ed93c4168d88633a4aa6288ea3afccfb9db8595f46e6b5e43e780de14da73e5684c2ea9e5e3e36f77298a9590e95eb86794c0d5d279b48dbb%22%3B%7D";    
    let REMEMBER_COOKIE = "remember=a%3A2%3A%7Bs%3A8%3A%22username%22%3Bs%3A7%3A%22kabab11%22%3Bs%3A5%3A%22check%22%3Bs%3A128%3A%22f4ce9c4c4c0bfd714f6432cf3ed733be339d31073ecfcb9317c2af16b0f0e025061a6fa646d422c5011dcc5fb04cf0540dc713aad177a382e867d9cdd30d61b9%22%3B%7D";
    // This cookie is very important - it set also the login state
    let SDAROT_COOKIE = "Sdarot=U9hZieAjV8h2INHQRy4jvXMmqZQ4SL1f35ieKY2uUd7Uulm568Xc%2C5ctviqiTvZfS3YL0Yn0dYbKROie3Uz-MrbN1Ik5KeUNicjT0uqp2fHMjAmVHzCiMZ%2C78EO1tBFb";
    //headers["Cookie"] =  /*REMEMBER_COOKIE + "; " +*/ SDAROT_COOKIE; // TODO: debug
    //headers["Cookie"] =  REMEMBER_COOKIE; // TODO: debug
    
    return headers;
}


function generateSdarotSeries(req, shows, fd) {
    for (show in shows) {
        var series = {}
        series[show] = parseSdarotTvShow(req, shows[show]);
        createSeriesM3U(req, series, fd);
    }
}
