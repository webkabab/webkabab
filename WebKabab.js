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
            this.fd = TiviProvider.openFile(req, path, encoding, true);
            //console.info("openFile fd="+this.fd);
            if (!this.fd) throw Error("Cannot open file: " + path);
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
            this.fd = TiviProvider.createOutputFile(req, path, isAppend);
            if (this.fd === null) throw new IOException("Cannot create output file: " + path);
            return this;
        }

        TempFileWriter.prototype.write$java_lang_String = function (input) {
            if (!TiviProvider.writeToFile(req, this.fd, input)) {
                throw "Cannot write to file";
            }
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
            TiviProvider.sendPlaylist(req, "Web Kabab Channels", "https://www.dropbox.com/s/9ra1194cekuprob/webkabab.m3u?dl=1", "LIVE");
            // generate tv shows from scrappers
            var shows = {};
            shows["Peaky Blinders"] = "https://sdarot.services/watch/1207";            
            shows["Handmaid's Tale"] = "https://sdarot.services/watch/2803";
            shows["Black Mirror"] = "https://sdarot.services/watch/144";
            shows["Stranger Things"] = "https://sdarot.services/watch/2435";
            shows["Killing Eve"] = "https://sdarot.services/watch/3698"
            var tempPath = com.montezumba.lib.io.StorageHandler.instance().getAppTempPath();
            var seriesPath = com.montezumba.lib.io.StorageHandler.instance().getAppStoragePath();
            tempPath = com.montezumba.lib.io.StorageHandler.instance().generateFullPath(tempPath, "temp_series.m3u");
            seriesPath = com.montezumba.lib.io.StorageHandler.instance().generateFullPath(seriesPath, "kabab_series.m3u");
            /*
            var fd = TiviProvider.createOutputFile(req, tempPath, true);
            TiviProvider.writeLineToFile(req, fd, "#EXTM3U\n");
            generateSdarotSeries(req, shows, fd);
            TiviProvider.close(req, fd);
            com.montezumba.lib.io.StorageHandler.instance().rename(tempPath, seriesPath);
            TiviProvider.sendLocalPlaylist(req, "Web Kabab TV Shows", seriesPath, "VOD");
            */

            console.debug("request live playlist... done");
            TiviProvider.done(req);

            break;

        case "request_tvguide": // This procedure requests a TV Guide (or several TV Guides) from this server.
            // Use the 'sendTvGuide' procedure to deliver a single TV Guide (EPG) information back to the client. The arguments for this procedure are:
            // 'req' - The request identifier. This value should be mirrored "as-is" from what was sent in the 'req' GET argument
            // 'name' - Provides a name for this EPG. This text will be displayed in the Settings menu
            // 'url' - A URL for this EPG. Should point to a valid "XMLTV" file.
            // 'validity' - A number of days for which this TV Guide is valid. After this period an automatic retrieval of a newer version will occur.
            /*
            executeAsync(function() {
                console.debug("request tv guide");
                kababMain.requestTvGuide(req);
                //TiviProvider.sendTvGuide(req, "Kabab Russian Guide", "http://api.torrent-tv.ru/ttv.xmltv.xml.gz", 3);
                TiviProvider.sendTvGuide(req, "Kabab Russian Guide", "http://epg.it999.ru/edem.xml.gz", 3);
    
                // After all playlists were delivered - you should call the 'done' method to finish this session.
                // WARNING: If you don't call the 'done' method, your Provider will be considered as "not responding". You must finish any request (even if errors were found) by calling 'done'
                //postMessage({type: 'done'});
                TiviProvider.done(req);
            })
            */
            executeAsync();   
                                     
             //setTimeout(doInBackground, 1000);
             console.debug("end normal exec");

            break;

        case "request_live_url":

            switch (query) {
                case "keshet":
                    var makoJson = com.montezumba.lib.io.StorageHandler.instance().openFile$java_lang_String$java_lang_String("https://mass.mako.co.il/ClicksStatistics/entitlementsServicesV2.jsp?et=gt&lp=/hls/live/512036/CH2LIVE_OTT/index.m3u8?as=1&rv=AKAMAI", "UTF-8").readAll();
                    console.debug(makoJson);
                    var json = JSON.parse(makoJson);
                    var tickets = json['tickets'];
                    var result = "http://keshethlslive-i.akamaihd.net/hls/live/512036/CH2LIVE_OTT/index.m3u8?" + tickets[0]['ticket'] + "&as=1";
                    TiviProvider.sendResolvedVideo(req, result);
                    TiviProvider.done(req);
                    break;
                default:
                    TiviProvider.sendError(req, "Cannot identify query=" + query);
                    TiviProvider.done();
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
            var results = searchKinoprofi(req, query);
            for (var name in results) {
                TiviProvider.sendSearchResult(req, name, results[name], true);
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


function generateSdarotSeries(req, shows, fd) {
    for (show in shows) {
        var series = {}
        series[show] = parseSdarotTvShow(req, shows[show]);
        createSeriesM3U(req, series, fd);
    }
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


function parseSdarotTvShow(req, path) {
    var base = "https://sdarot.world";
    var fd = TiviProvider.openFile(req, path, "UTF-8", false);
    var content = TiviProvider.readAll(req, fd);
    TiviProvider.close(req, fd);
    var seasons = {};
    //var reg = /data-season="([0-9]+?)".*?href="(.*?)"/gs;
    var reg = new RegExp("data-season=\"([0-9]+?)\"[\\s\\S]*?href=\"(.*?)\"", "g");
    var results = "";
    do {
        results = reg.exec(content);
        if (results !== null) {
            seasons[results[1]] = {};
            var fd1 = TiviProvider.openFile(req, base + results[2], "UTF-8", false);
            var content1 = TiviProvider.readAll(req, fd1);
            TiviProvider.close(req, fd1);
            //var reg1 = /data-episode="([0-9]+?)".*?href="(.*?)"/gs;
            var reg1 = new RegExp("data-episode=\"([0-9]+?)\"[\\s\\S]*?href=\"(.*?)\"", "g");
            var results1 = "";

            do {
                results1 = reg1.exec(content1);
                if (results1 !== null) {
                    seasons[results[1]][results1[1]] = base + results1[2];
                }
            } while (results1 !== null)
        }
    } while (results !== null);



    return seasons;
}


// Read the 'req' argument, which identifies the current request
var req = getParameterByName("req");
// Read the 'proc' argument, which identifies the requested procedure
var proc = getParameterByName("proc");
// Read the 'q' argument, which identifies the requested query
var query = getParameterByName("q");

doInBackground();

/*
async function test() {
    console.debug("async worked!!!");
}

console.debug("calling async");
test();
*/


/*
setTimeout(function () {
    console.debug("async workerd(2)!!!");    
}, 1000);
*/



 

/*
var promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.debug("async workerd(1)!!!");
        resolve("async worked!!!");
    }, 1000);
});


console.debug("calling async");
promise.then(function(val) {
    console.log(val);
});
*/


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

    
            console.debug("in backgroundTask... start");
            console.debug("request tv guide");
            kababMain.requestTvGuide(req);
            //TiviProvider.sendTvGuide(req, "Kabab Russian Guide", "http://api.torrent-tv.ru/ttv.xmltv.xml.gz", 3);
            TiviProvider.sendTvGuide(req, "Kabab Russian Guide", "http://epg.it999.ru/edem.xml.gz", 3);
    
            // After all playlists were delivered - you should call the 'done' method to finish this session.
            // WARNING: If you don't call the 'done' method, your Provider will be considered as "not responding". You must finish any request (even if errors were found) by calling 'done'
            //postMessage({type: 'done'});
            
            console.debug("Hello async wolrd!");
            TiviProvider.done(req);
            console.debug("in backgroundTask... end");
        }        
    }

    var worker = new Worker(URL.createObjectURL(new Blob(["("+backgroundTask.toString()+")()"], {type: 'text/javascript'})));
    console.info("starting worker...");
    //worker.postMessage();
    worker.postMessage({'proc' : proc, 'req' : req, 'url' : document.URL});
}


/*
var worker = new Worker(URL.createObjectURL(new Blob(["("+doInBackground.toString()+")()"], {type: 'text/javascript'})));

console.info("starting worker...");
worker.postMessage({'proc' : proc, 'req' : req, 'url' : document.URL});
*/

/*
document.querySelector("#testFiles").onchange = function() {
    worker.postMessage({'proc' : proc, 'req' : req, 'url' : document.URL, 'testFiles' : document.querySelector("#testFiles").files});
}
*/

/*
worker.onmessage = function(e){
	console.info("got TiviMessage: "+e);
	var type = e.data.type;
	var content = e.data.content;
	switch(type) {
		case 'sendPlaylist':
			TiviProvider.sendPlaylist(req, content.name, content.url);
			break;
		case 'sendTvGuide':
			TiviProvider.sendTvGuide(req, content.name, content.url, content.days);
			break;
		case 'sendTvGuide':
			TiviProvider.sendLocalTvGuide(req, content.name, content.url, content.days);
			break;
		case 'done':
			TiviProvider.done(req);
			break;
		case 'readFromUrl':
			TiviProvider.readFromUrl(req, content.url, content.encoding);
			break;
		case 'createOutputFile':
			TiviProvider.createOutputFile(req, content.path, content.isAppend);
			break;

		default:
			console.error("bad message");
	}
}
*/
