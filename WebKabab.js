"use strict";
function doInBackground() {




/*
    onmessage = function(params) {




    
    var proc = params.data.proc;
    var req = params.data.req;
    var path = params.data.url;
    var files = params.data.testFiles;
    
    
    
    
    
    var index = path.lastIndexOf('/');
    path = path.substring(0, index) + '/';
    console.info(path);
    


    
    importScripts(path + 'j4ts.js');
    importScripts(path + 'JavaBasic.js');
    importScripts(path + 'montezumbaLib.js');
    //importScripts(path + 'TiviProviderStub.js');
    importScripts(path + 'KababConfig.js');
    importScripts(path + 'KababMain.js');
    

    var TiviProvider = {
        
    }

    */

    /*
    importScripts('https://www.dropbox.com/s/2i07zzyzbrk3ruq/j4ts.js?dl=1');
    importScripts('https://www.dropbox.com/s/qgnpoj7663lvcce/JavaBasic.js?dl=1');
    importScripts('https://www.dropbox.com/s/cub1zqm8werw5y0/montezumbaLib.js?dl=1');
    importScripts('https://www.dropbox.com/s/t0qfz8zzlpv9x49/TiviProviderStub.js?dl=1');
    importScripts('https://www.dropbox.com/s/6ybhtg7rhg7exgn/KababConfig.js?dl=1');
    importScripts('https://www.dropbox.com/s/yv7jrr8kendns22/KababMain.js?dl=1');
    */



    var window = self;
    var kababConfig = new com.addons.kabab.KababConfig();


    //postMessage("req="+req+"<br/>");
    //postMessage("proc="+proc+"<br/>");

    //TiviProvider.setTestFiles(files);


    // initialize montezumbalib stuff
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };


    var TempFileReader = (function () {
        function TempFileReader(path, encoding) {
            //setTimeout(function() {
                this.fd = TiviProvider.openFile(req, path, encoding, true);
                //console.info("openFile fd="+this.fd);
                if (!this.fd) throw Error("Cannot open file: " + path);
            //}, 1000)            
            return this;
        }

        TempFileReader.prototype.readAll = function () {
            //console.info("readll fd="+this.fd);
            return TiviProvider.readAll(req, this.fd);
        }

        TempFileReader.prototype.close = function () {
            TiviProvider.close(req, this.fd);
        }

        return TempFileReader;

    }());
    TempFileReader["__class"] = "TempFileReader";

    var TempFileWriter = (function () {


        function TempFileWriter(path, isAppend) {
            //setTimeout(function() {
                this.fd = TiviProvider.createOutputFile(req, path, isAppend);
                if (this.fd === null) throw new IOException("Cannot create output file: " + path);
                return this;
            //}, 1000);            
        }

        TempFileWriter.prototype.write$java_lang_String = function (input) {
            //setTimeout(function() {
                if (!TiviProvider.writeToFile(req, this.fd, input)) {
                    throw "Cannot write to file";
                }
            //}, 1000)            
        };

        TempFileWriter.prototype.close = function () {
            TiviProvider.close(req, this.fd);
        };

        return TempFileWriter;
    }());
    TempFileWriter["__class"] = "TempFileWriter";

    var TempStorageHandler = (function (_super) {
        __extends(TempStorageHandler, _super);

        function TempStorageHandler() { }

        TempStorageHandler.prototype.getAppStoragePath = function () {
            return "_app_";
        };

        TempStorageHandler.prototype.getAppTempPath = function () {
            return "_app_";
        };

        TempStorageHandler.prototype.generateFullPath = function (first, second) {
            return first + "/" + second;
        };

        TempStorageHandler.prototype.openOutputFile = function (path, isAppend) {
            return new TempFileWriter(path, isAppend);
        };

        TempStorageHandler.prototype.openFile$java_lang_String$java_lang_String = function (path, encoding) {
            return new TempFileReader(path, encoding);
        };

        TempStorageHandler.prototype.delete = function (path) {
            TiviProvider.delete(req, path);
        };

        TempStorageHandler.prototype.isExist = function (path) {
            return TiviProvider.isExist(req, path);
        };

        TempStorageHandler.prototype.rename = function (path, name) {
            TiviProvider.rename(req, path, name);
        };

        return TempStorageHandler;

    }(com.montezumba.lib.io.StorageHandler));
    TempStorageHandler["__class"] = "TempStorageHandler";

    var WebKababComponentManager = (function (_super) {
        __extends(WebKababComponentManager, _super);

        function WebKababComponentManager() {
            var _this = _super.apply(this, arguments) || this;
            return _this;
        }

        WebKababComponentManager.prototype.doCreate = function () {
            com.montezumba.lib.utils.TimerFactory.create(com.montezumba.lib.utils.jsweet.TimerFactoryJSweet);
            com.montezumba.lib.types.MediaLog.create(com.montezumba.lib.types.jsweet.MediaLogJSweet);
            com.montezumba.lib.types.MediaLog.instance().enableAll();
            com.montezumba.lib.io.StorageHandler.create(TempStorageHandler);
        };
        return WebKababComponentManager;
    }(com.montezumba.lib.types.ComponentManager));
    WebKababComponentManager["__class"] = "WebKababComponentManager";

    com.montezumba.lib.types.ComponentManager.create(WebKababComponentManager);
    com.montezumba.lib.types.ComponentManager.instance().create();

    var kababMain = new com.addons.kabab.KababMain();




    console.info("Got request: " + proc);

    switch (proc) {
        case "request_live_playlist":	// This procedure requests a playlist (or several playlists) from this server.                

            console.debug("request live playlist");            
            TiviProvider.sendPlaylist(req, "Kabab Hebrew Channels", "https://raw.githubusercontent.com/webkabab/webkabab/master/playlists/webkabab.m3u", "LIVE");
            TiviProvider.sendPlaylist(req, "Kabab VOD Channels", "https://raw.githubusercontent.com/webkabab/webkabab/master/playlists/webkabab_vod.m3u", "VOD");
            //TiviProvider.sendPlaylist(req, "Kabab Russian Channels", "https://prodigtv.ru/play/iptv.m3u", "LIVE");

            var tempPath = com.montezumba.lib.io.StorageHandler.instance().getAppTempPath();
            var seriesPath = com.montezumba.lib.io.StorageHandler.instance().getAppStoragePath();
            tempPath = com.montezumba.lib.io.StorageHandler.instance().generateFullPath(tempPath, "temp_series.m3u");
            seriesPath = com.montezumba.lib.io.StorageHandler.instance().generateFullPath(seriesPath, "kabab_series.m3u");
            

            console.debug("request live playlist... done");
            TiviProvider.done(req);

            break;

        case "request_tvguide": // This procedure requests a TV Guide (or several TV Guides) from this server.
            // Use the 'sendTvGuide' procedure to deliver a single TV Guide (EPG) information back to the client. The arguments for this procedure are:
            // 'req' - The request identifier. This value should be mirrored "as-is" from what was sent in the 'req' GET argument
            // 'name' - Provides a name for this EPG. This text will be displayed in the Settings menu
            // 'url' - A URL for this EPG. Should point to a valid "XMLTV" file.
            // 'validity' - A number of days for which this TV Guide is valid. After this period an automatic retrieval of a newer version will occur.
                        
            console.debug("request tv guide");
            //TiviProvider.sendTvGuide(req, "Kabab Russian Guide", "http://epg.it999.ru/edem.xml.gz", 3); // TODO: restore after debug buffering in tv series
            TiviProvider.done(req);
            /*  // TODO: disable until we find a better source than HOT                              
            kababMain.requestTvGuide(req, function() {
                console.debug("callback");
                //TiviProvider.sendTvGuide(req, "Kabab Russian Guide", "http://api.torrent-tv.ru/ttv.xmltv.xml.gz", 3);
                TiviProvider.sendTvGuide(req, "Kabab Russian Guide", "http://epg.it999.ru/edem.xml.gz", 3);
                    
                // After all playlists were delivered - you should call the 'done' method to finish this session.
                // WARNING: If you don't call the 'done' method, your Provider will be considered as "not responding". You must finish any request (even if errors were found) by calling 'done'
                //postMessage({type: 'done'});
                TiviProvider.done(req);
            });            
            */
            
            break;

        case "request_live_url":

            // Parse several parts:
            var parts = query.split("&");
            console.debug("full query="+query+", query name="+parts[0]);
            var resolverName = parts[0];
            
            switch (resolverName) {
                case "keshet":
                    //var tokenUrl = "https://mass.mako.co.il/ClicksStatistics/entitlementsServicesV2.jsp?et=gt&lp=/hls/live/512036/CH2LIVE_OTT/index.m3u8?as=1&rv=AKAMAI";
                    var tokenUrl = "https://mass.mako.co.il/ClicksStatistics/entitlementsServicesV2.jsp?et=ngt&lp=/stream/hls/live/2033791/k12dvr/index.m3u8?&rv=AKAMAI";
                    var makoJson = com.montezumba.lib.io.StorageHandler.instance().openFile$java_lang_String$java_lang_String(tokenUrl, "UTF-8").readAll();
                    //console.debug(makoJson);
                    var json = JSON.parse(makoJson);
                    var tickets = json['tickets'];
                    //var result = "http://keshethlslive-i.akamaihd.net/hls/live/512036/CH2LIVE_OTT/index.m3u8?" + tickets[0]['ticket'] + "&as=1";
                    var result = "https://mako-streaming.akamaized.net/stream/hls/live/2033791/k12dvr/index.m3u8?" + tickets[0]['ticket'] + "&as=1&b-in-range=800-2400";
                    TiviProvider.sendResolvedVideo(req, result);
                    TiviProvider.done(req);
                    break;
                
                case "kan":                    
                    var dmURL = "https://www.dailymotion.com/embed/video/x7wjmog?autoplay=1";
                    var result = extractDailymotion(dmURL);
                    TiviProvider.sendResolvedVideo(req, result);
                    TiviProvider.done(req);
                    break;

                case "russia_1":                    
                    var dmURL = "https://player.smotrim.ru/iframe/datalive/id/2961/sid/smotrim_r1";
                    var result = extractSmotrimRu(dmURL);
                    TiviProvider.sendResolvedVideo(req, result);
                    TiviProvider.done(req);
                    break;

                case "russia_24":                    
                    var dmURL = "https://player.smotrim.ru/iframe/datalive/id/21/sid/smotrim_r24";
                    var result = extractSmotrimRu(dmURL);
                    TiviProvider.sendResolvedVideo(req, result);
                    TiviProvider.done(req);
                    break;

                case "russia_rtr":                    
                    var dmURL = "https://player.smotrim.ru/iframe/datalive/id/4941/sid/smotrim_rtr";
                    var result = extractSmotrimRu(dmURL);
                    TiviProvider.sendResolvedVideo(req, result);
                    TiviProvider.done(req);
                    break;

                case "perviy_kanal":                    
                    var dmURL = "https://stream.1tv.ru/api/playlist/1tvch-v1_as_array.json";
                    var result = extractPerviyKanal(dmURL);
                    TiviProvider.sendResolvedVideo(req, result);
                    TiviProvider.done(req);
                    break;

                default:
                    // Plugin resolvers... 
                    // TODO: need to move all of them to here
                    if(resolverPlugins && resolverPlugins[resolverName]) {                        
                        var onSucess = function(result) {
                            console.debug("Got result: "+result);
                            TiviProvider.sendResolvedVideo(req, result);
                            TiviProvider.done(req);
                        }
                        var onError = function(error) {
                            TiviProvider.sendError(req, "Error in query=" + query + "for resolver="+resolverName+" error: "+ error);
                            TiviProvider.done(req);    
                        }                        
                        resolverPlugins[resolverName](req, parts, onSucess, onError);
                    }
                    
                    TiviProvider.sendError(req, "Cannot identify query=" + query);
                    TiviProvider.done(req);
            }

            break;

        case "request_search_query_live":

            console.debug("query=" + query);
            var results = searchKinoprofi(req, query);            
            for (var name in results) {
                TiviProvider.sendSearchResult(req, name, results[name], false);
            }

            TiviProvider.done(req);
            break;

        case "ping":
            console.debug("ping request");
            TiviProvider.done(req);
            break;


        case "request_search_query_vod":

            console.debug("query=" + query);            
            try {                
                if(searchPlugins) {
                    for (var i in searchPlugins) {                        
                        var results = searchPlugins[i](req, query);
                        for (var name in results) {
                            TiviProvider.sendSearchResult(req, name, results[name], true);
                        }
                    }                
                }
            }
            catch(e) {
                TiviProvider.sendError(req, "Failed to search="+query+" error="+e);
            }
            TiviProvider.done(req);
            break;


        /*
        default:
            // Use the 'reportError' procedure to report any errors back to the TiviApp client. The arguments for this procedure are:
            // 'req' - The request identifier. This value should be mirrored "as-is" from what was sent in the 'req' GET argument
            // 'error' - Text describing the error. This message may be shown in some cases to the user and will be logged for future debug.
            TiviProvider.reportError(req, "Unsupported Request");
            // After all playlists were delivered - you should call the 'done' method to finish this session.
            // WARNING: If you don't call the 'done' method, your Provider will be considered as "not responding". You must finish any request (even if errors were found) by calling 'done'
            TiviProvider.done();
            */
    }
}
//}


// Helper method for extracting GET parameters that are sent by the TiviApp client
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}



function createSeriesM3U(req, series, fd) {

    for (var show in series) {
        for (var season in series[show]) {
            for (var episode in series[show][season]) {
                var episodeName = show + " S" + season + " E" + episode;
                TiviProvider.writeLineToFile(req, fd, "#EXTINF:-1 group-title=\"" + show + "\"," + episodeName + "\"");
                TiviProvider.writeLineToFile(req, fd, series[show][season][episode] + "");
            }
        }
    }
}


function searchKinoprofi(req, query) {
    var fd = TiviProvider.openFile(req, "http://kinoprofi.vip/search/f:" + query, "UTF-8", false);
    var content = TiviProvider.readAll(req, fd);
    TiviProvider.close(req, fd);
    //var reg = /class="title-main"[\\s\\S]*?itemprop/gis;        
    var links = [];
    var names = [];


    var results = "";
    var urlReg = new RegExp("class=\"title-main\"[\\s\\S]*?href=\"(.*?)\"", "g");
    var i = 0;
    do {
        results = urlReg.exec(content);
        if (results !== null) {
            links[i] = results[1];
        }
        i++;
    } while (results !== null);


    results = "";
    var nameReg = new RegExp("title='(.*?)'", "g");
    i = 0;
    do {
        results = nameReg.exec(content);
        if (results !== null) {
            names[i] = results[1];
        }
        i++;
    } while (results !== null);

    var resultsMap = {};
    for (i = 0; i < links.length; i++) {
        resultsMap[names[i]] = links[i];
    }

    return resultsMap;
}


function extractDailymotion(url) {
    // Get metadata link:
    var parts = url.split('/');
    var vidID = parts[parts.length - 1].split('?')[0];
    var metadataURL =
    'https://www.dailymotion.com/player/metadata/video/' + vidID;
        

    var dmJson = com.montezumba.lib.io.StorageHandler.instance().openFile$java_lang_String$java_lang_String(metadataURL, "UTF-8").readAll();                
    var json = JSON.parse(dmJson);    

    var qualities = json["qualities"];
    for(quality in qualities) {
        return qualities[quality][0]["url"];        
    }
    return "";
}

function extractSmotrimRu(url) {
    // Open URL
    var dmJson = com.montezumba.lib.io.StorageHandler.instance().openFile$java_lang_String$java_lang_String(url, "UTF-8").readAll();
    var json = JSON.parse(dmJson);    
    try {
        var sources = json["data"]["playlist"]["medialist"][0]["sources"];
        return sources["m3u8"]["auto"];        
    } catch(error) {
        console.error(error);
        return "";
    }    
}

function extractPerviyKanal(url) {
    // Open URL
    var dmJson = com.montezumba.lib.io.StorageHandler.instance().openFile$java_lang_String$java_lang_String(url, "UTF-8").readAll();
    var json = JSON.parse(dmJson);    
    try {
        return json["mpd"][0];           
    } catch(error) {
        console.error(error);se
        return "";
    }    
}



function sendHTTPRequest(req, url, method, headers, params, readResponse)  {
    
    console.debug("Sending HTTP request: "+url+" headers: "+JSON.stringify(headers)+" params: "+JSON.stringify(params));
    let response = TiviProvider.sendHTTPRequest(req, method, encodeURI(url), JSON.stringify(headers), JSON.stringify(params), readResponse);
    console.debug("Got response="+response);

    if(!response) {
        throw Error("Bad http response");
    }    
    response = JSON.parse(response);
    if(response.code == 999) {
        throw Error("http error: " + response.message);
    }
    if(response.code < 200 || response.code >= 400) {
        throw Error("http bad response code: "+response.code);
    }
    

    let result = {
        message : decodeURIComponent(response.message), 
        cookies : decodeURIComponent(response.cookies)
    };
    return result;

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Read the 'req' argument, which identifies the current request
var req = getParameterByName("req");
// Read the 'proc' argument, which identifies the requested procedure
var proc = getParameterByName("proc");
// Read the 'q' argument, which identifies the requested query
var query = getParameterByName("q");
if(query) {
    query = decodeURIComponent(query);
}

doInBackground();




function executeAsync() {

    function backgroundTask() {

        onmessage = function(params) {

            var req = params.data.req;
            //var path = params.data.url;
            var path = "https://webkabab.github.io/webkabab/"

            importScripts(path + 'j4ts.js');
            importScripts(path + 'JavaBasic.js');
            importScripts(path + 'montezumbaLib.js');
            //importScripts(path + 'TiviProviderStub.js');
            importScripts(path + 'KababConfig.js');
            importScripts(path + 'KababMain.js');
            importScripts(path + 'plugins/sdarot.js');
            importScripts(path + 'plugins/i24news.js');
            
        }        
    }

    var worker = new Worker(URL.createObjectURL(new Blob(["("+backgroundTask.toString()+")()"], {type: 'text/javascript'})));
    console.info("starting worker...");
    //worker.postMessage();
    worker.postMessage({'proc' : proc, 'req' : req, 'url' : document.URL});
}


