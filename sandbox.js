function doInBackground() {



    onmessage = function (params) {
        var path = params.data.url;
        var files = params.data.testFiles;

        var index = path.lastIndexOf('/');
        path = path.substring(0, index) + '/';

        importScripts(path + 'j4ts.js');
        importScripts(path + 'JavaBasic.js');
        importScripts(path + 'montezumbaLib.js');
        importScripts(path + 'TiviProviderStub.js');

        TiviProvider.setTestFiles(files);

        sandboxMain();



    }

    /**
     * Use this method to test code in the browser...
     */
    function sandboxMain() {

        var req = "test";
        var path = "path";
      
        var result = searchKinoprofi(req, "memento");
        console.debug(result);
    }

    // http://kinoprofi.vip/search/f:<search query>
    // catch: title-main
    function searchKinoprofi(req, query) {        
        var fd = TiviProvider.openFile(req, "http://kinoprofi.vip/search/f:"+query, "UTF-8");
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
        for(i = 0; i < links.length; i++) {
            resultsMap[names[i]] = links[i];
        }

        return resultsMap;
    }


    /*

    function getSdarotList() {

        var path = TiviProvider.openFile("test", "https://sdarot.world/series", "UTF-8");        
        var content = TiviProvider.readAll("test", path);

        var results = content.match(/<a class="btn btn-bold btn-transparent" href="(.*?)"/g);

        return results;

    }
    */

    function generateSdarotSeries(req, shows, fd) {
        for(show in shows) {
            var series = {}
            series[show] = parseSdarotTvShow(req, shows[show]);
            createSeriesM3U(req, series, fd);
        }
    }

    function createSeriesM3U(req, series, fd) {
            
        for(var show in series) {            
            for(var season in series[show]) {
                for(var episode in series[show][season]) {
                    var episodeName = show + " S"+season+" E"+episode;
                    TiviProvider.writeToFile(req, fd, "#EXTINF:-1 group-title=\""+show+"\","+episodeName+"\"\n");
                    TiviProvider.writeToFile(req, fd, series[show][season][episode]+"\n");
                }
            }
        }        
    }

    function parseSdarotTvShow(req, path) {
        var base = "https://sdarot.world";
        var fd = TiviProvider.openFile(req, path, "UTF-8");
        var content = TiviProvider.readAll(req, fd);
        TiviProvider.close(req, fd);
        var seasons = {};
        var reg = /data-season="([0-9]+?)".*?href="(.*?)"/igs;
        var results = "";
        do {
            results = reg.exec(content);              
            if (results !== null) {                
                seasons[results[1]] = {};                
                var fd1 = TiviProvider.openFile(req, base + results[2], "UTF-8");
                var content1 = TiviProvider.readAll(req, fd1);                
                TiviProvider.close(req, fd1);
                var reg1 = /data-episode="([0-9]+?)".*?href="(.*?)"/igs;
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


}


var worker = new Worker(URL.createObjectURL(new Blob(["(" + doInBackground.toString() + ")()"], { type: 'text/javascript' })));

document.querySelector("#testFiles").onchange = function () {

    worker.postMessage({ 'url': document.URL, 'testFiles': document.querySelector("#testFiles").files });


}

