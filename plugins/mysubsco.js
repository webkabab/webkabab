var MYSUBS_BASE = "https://my-subs.co/";
var SIMILARTY_THRESHOLD = 0.7;


// register for search plugins
if(typeof subsPlugins === 'undefined') {
    subsPlugins = [];
}
subsPlugins.push(searchSubs);


function searchSubs(name, season, episode, languages) {
    let SEARCH_API = MYSUBS_BASE + "search.php";
    console.debug("searching subs: "+SEARCH_API);
    params = {};
    params["key"] = name;

    let result = sendHTTPRequest(req, SEARCH_API, "GET", {}, params, true);
    let message = result.message;
    let searchResults = [];
    if(message) {
        let re = /list-group-item"[+]title="(.*?)"[+]href="(.*?)">/g;        
        while(match = re.exec(message)) {
            let title = match[1];
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
                    let subsRegex = /Language[+][:].*?<i>(.+?)<.*?rel="nofollow"[+]href="(.+?)"/g;
                    let subtitles = [];
                    while(match = subsRegex.exec(message)) {
                        let language = match[1];
                        let subtitleUrl = match[2];
                        console.debug("Found ext. subtitle: "+subtitleUrl+" language: "+language);
                        if(LANGUAGE_CODES[language] in languages) {
                            console.debug("Found ext subtitle of langauge: "+language);
                            subtitles.push({
                                "name" : language,
                                "language" : LANGUAGE_CODES[language],
                                "url" : MYSUBS_BASE + subtitleUrl
                            });
                        }
                    }
                    for(var i in subtitles) {
                        let subtitle = subtitles[i];
                        TiviProvider.sendSubtitle(req, subtitle.name, subtitle.url, subtitle.language);   
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
}