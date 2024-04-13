// register for subtitle search plugins
if(typeof subsPlugins === 'undefined') {
    subsPlugins = [];
}
subsPlugins.push(searchMySubs);


function searchMySubs(name, season, episode, languages) {

    let MYSUBS_BASE = "https://my-subs.co/";
    let SIMILARTY_THRESHOLD = 0.7;
    let MAX_SUBTITLES = 3;


    let SEARCH_API = MYSUBS_BASE + "search.php";
    console.debug("Searching MySubs.co subs: "+SEARCH_API+" languages="+languages);
    params = {};
    params["key"] = name;

    let result = sendHTTPRequest(req, SEARCH_API, "GET", {}, params, true);
    let message = result.message;
    let searchResults = [];
    if(message) {
        let re = /list-group-item"[+]title="(.*?)"[+]href="(.*?)">/g;        
        while(match = re.exec(message)) {
            let title = match[1].replace(/[+]/g, ' ');
            let href = match[2];
            console.debug("Got title="+title+" href="+href);
            searchResults.push({
                "name" : title,
                "url" : href
            });            
        }
        searchResults.sort(function(a,b) {
            let tempA = a.name.toLowerCase();
            let tempB = b.name.toLowerCase();                                    
            let similarityA = exports.stringSimilarity(tempA, name);                    
            let similarityB = exports.stringSimilarity(tempB, name);
            return similarityB - similarityA;
        }); 
        
        if(searchResults.length > 0) {
            let beseResult = searchResults[0];
            // calculate similarity to ensure the right match
            let similarity = exports.stringSimilarity(beseResult.name, name);
            console.debug("The best subs search result for: "+name+" is: "+beseResult.name+" with similarity: "+similarity);
            if(similarity > SIMILARTY_THRESHOLD) {
                let url = beseResult.url;
                // replace season and episode numbers for series
                if(season > 0 && episode > 0) {
                    console.debug("Fetcing sub for series... s="+season+" e="+episode);
                    let seriesNumRegex = /showlistsubtitles-([0-9]+?)-(.+?)/g;
                    let match = seriesNumRegex.exec(url);
                    if(match) {
                        let seriesNum = match[1];
                        let seriesName = match[2];
                        // update url
                        url = "versions-"+seriesNum+"-"+episode+"-"+season+"-"+seriesName+"-subtitles";
                    }
                    else {
                        console.error("Cannot find episode="+episode+" and season="+season+" for series="+name);
                    }
                }

                let SEARCH_RESULT_PAGE = MYSUBS_BASE + url;
                let result = sendHTTPRequest(req, SEARCH_RESULT_PAGE, "GET", {}, {}, true);
                let message = result.message;
                if(message) {
                    console.debug("Getting subs...");
                    let subsRegex = /"flag-icon[+]flag-icon-.*?"[+]title="(.+?)".*?rel="nofollow"[+]href="(.+?)"/gms;
                    let subtitles = [];
                    while(match = subsRegex.exec(message)) {
                        let language = match[1];
                        let subtitleUrl = match[2];
                        console.debug("Found ext. subtitle: "+subtitleUrl+" language: "+language);
                        if(languages.includes(LANGUAGE_CODES[formatWord(language)])) {
                            console.debug("Found ext subtitle of langauge: "+language);
                            // get the subs download page
                            let downloadUrl = MYSUBS_BASE + subtitleUrl;
                            let result = sendHTTPRequest(req, downloadUrl, "GET", {}, {}, true);
                            let message = result.message;
                            if(message) {
                                let downloadRegex = /<a[+]href="([^>]*?)"><button/g;
                                match = downloadRegex.exec(message);
                                if(match) {
                                    let subUrl = match[1];
                                    console.debug("Got sub download link: "+ subUrl);
                                    subtitles.push({
                                        "name" : language,
                                        "language" : LANGUAGE_CODES[formatWord(language)],
                                        "url" : MYSUBS_BASE + subUrl + "|Referer=https://my-subs.co"
                                    });
                                }
                                else {
                                    console.error("Cannot get download link");
                                }
                            }
                            else {
                                console.error("Cannot get download page: "+downloadUrl);                                
                            }
                            
                        }
                    }
                    for(var i in subtitles) {
                        if(i >= MAX_SUBTITLES) break;
                        let subtitle = subtitles[i];
                        TiviProvider.sendSubtitle(req, subtitle.name, subtitle.url, subtitle.language);   
                    }
                    if(subtitles.length > 0) { // found at least one matching subtitle
                        return true;
                    }
                }
                else {
                    console.error("Cannot open search result page: "+SEARCH_RESULT_PAGE);
                }
            }
            else {
                console.debug("No matching subs!");
            }
        }
    }
    else {
        console.error("Can't fetch subtitles for: "+name+" languages="+languages);
    }
    return false;
}