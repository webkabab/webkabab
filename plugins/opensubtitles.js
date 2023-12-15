// register for subtitle search plugins
if(typeof subsPlugins === 'undefined') {
    subsPlugins = [];
}
subsPlugins.push(searchOpenSubtitles);

function searchOpenSubtitles(name, season, episode, languages) {

    let API_BASE = "https://api.opensubtitles.com/api/v1/";
    let SIMILARTY_THRESHOLD = 0.8;
    let MAX_SUBTITLES = 2;
    let OPENSUBTITLES_CACHE_KEY = "OpenSubtitles";
    let API_KEY = "gSpy0LRf1Rez8yR96GB2orq7r9niG937";

    // search for subtitles:
    let SEARCH_SUBS_API = API_BASE + "subtitles";
    let headers = {};
    headers["Api-Key"] = API_KEY;
    headers["User-Agent"] = "WebKabab/1.0.0";
    headers["Accept"] = "*/*";    
    let params = {};
    params["query"] = name;
    if(season > 0 && episode > 0) {
        params["season_number"] = season;
        params["episode_number"] = episode;
    }
    let languagesSet = "";
    for(var i in languages) {
        let language = languages[i];
        if(i > 0) {
            languagesSet += ",";
        }
        languagesSet += language;
    }
    params["languages"] = languagesSet;

    try {
        let result = sendHTTPRequest(req, SEARCH_SUBS_API, "GET", headers, params, true);
        let message = result.message;
        if(message) {
            message = decodeURIComponent(message);
            console.debug("Got subs from OpenSubtitles: "+message);
            let subs = [];
            let resultJSON = JSON.parse(message);
            let data = resultJSON.data;
            for(var i in data) {
                let details = data[i].attributes.feature_details;
                let titleName = null;
                if(season > 0 && episode > 0) {
                    titleName = details.parent_title;
                }            
                if(titleName == null) {
                    titleName = details.title;
                }
                let sub = {};
                sub.name = titleName;
                sub.language = data[i].attributes.language;
                let files = data[i].attributes.files;
                if(files.length > 0) {
                    sub.file_id = files[0].file_id;
                    subs.push(sub);
                }
                else {
                    console.error("The sub "+data[i].id+" has not files");
                }            
            }
            // sort the files
            subs.sort(function(a,b) {
                let tempA = a.name.toLowerCase();
                let tempB = b.name.toLowerCase();         
                let original = name.toLowerCase();                           
                let similarityA = exports.stringSimilarity(tempA, original);
                let similarityB = exports.stringSimilarity(tempB, original);
                return similarityB - similarityA;
            }); 
    
            let found = false;
            for(var i in subs) {
                if(i >= MAX_SUBTITLES) {
                    break;
                }
                let sub = subs[i];
                let similarity = exports.stringSimilarity(sub.name.toLowerCase(), name.toLowerCase());                  
                console.debug("Found sub on OpenSubtitles: "+sub.name+" language="+sub.language);
                if(similarity < SIMILARTY_THRESHOLD) {
                    console.debug("Too low similarity for: "+sub.name+" with: "+similarity);
                    break;
                }
    
                // Try cache:
                let link = Cookies.get(OPENSUBTITLES_CACHE_KEY + "_" + sub.file_id);
                if(link) {
                    console.debug("Using cached subtitile: "+link);
                    TiviProvider.sendSubtitle(req, CODE_TO_LANGUAGE[sub.language], link, sub.language);
                    found = true;
                }
                else {
                    let DOWNLOAD_SUBS_API = API_BASE + "download";
                    params = {};
                    params["file_id"] = sub.file_id;
                    try {
                        let result = sendHTTPRequest(req, DOWNLOAD_SUBS_API, "POST", headers, params, true);
                        let message = result.message;
                        if(message) {
                            message = decodeURIComponent(message);
                            console.debug("Download sub JSON: "+message);
                            let downloadJSON = JSON.parse(message);
                            let link = downloadJSON.link;
                            console.debug("Download link from sub:" + link);
                            Cookies.set(OPENSUBTITLES_CACHE_KEY + "_" + sub.file_id, link, { expires: 1 });
                            found = true;
                            TiviProvider.sendSubtitle(req, CODE_TO_LANGUAGE[sub.language], link, sub.language);
                        }
                        else {
                            console.error("Cannot download from OS: "+DOWNLOAD_SUBS_API);
                        }
                    }
                    catch(e) {
                        console.error(e);
                    }
                }                                
            }
            if(found) {
                return true;
            }
        }
        else {
            console.error("Got nothing from OS search API: "+SEARCH_SUBS_API);
        }
    }
    catch (e) {
        console.error(e);
    }
    

    return false;
    
}