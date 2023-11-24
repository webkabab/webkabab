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
//searchPlugins.push(searchMoviesJoys); // TODO: enable once working

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
                server_api = refererStr + "/" + matchURL.pathname;
                console.debug("Got URL="+server_api);
                
                //headers["Host"] = refererStr;  
                headers["Referer"] = refererStr;
                result = sendHTTPRequest(req, server_api, "GET", headers, params, true);
                message = result.message;           
                cookies = result.cookies;
                            
                if(message) {
                    console.debug("Got server API response: "+message);
                    let re = /playerInstance[.]setup[(](.*?)[)]/g;
                    let match = re.exec(message);
                    let server_response_json = match[1];
                    if(server_response_json) {
                        console.debug("Got json response from stream server="+server_response_json);
                        server_response_json = server_response_json.replaceAll("+"," ");
                        stream_json = JSON.parse(server_response_json);
                        sources = stream_json.sources;
                        if(sources) {
                            for(var i in sources) {
                                console.debug("Got source: "+sources[i]);
                                onSuccess(sources[i]);
                            }
                        }
                        else {
                            onError("Got no sources!");
                        }
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


