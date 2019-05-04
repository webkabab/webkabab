var TiviProvider = {


    setTestFiles: function (files) {
        this.files = files;
    },

    sendPlaylist: function (req, name, url) {
        postMessage("sendPlaylist req=" + req + " name=" + name + " url=" + url + "<br/>");
    },

    sendTvGuide: function (req, name, url, days) {
        postMessage("sendTvGuide req=" + req + " name=" + name + " url=" + url + " days=" + days + "<br/>");
    },

    sendLocalTvGuide: function (req, name, url, days) {
        postMessage("sendTvGuideLocal req=" + req + " name=" + name + " url=" + url + " days=" + days + "<br/>");
    },

    done: function (req) {
        //document.write("done <br/>");
        postMessage("done <br/>");
    },

    readFromUrl: function (req, url, encoding) {
        console.info("*** readFromUrl: " + url + "," + encoding + " ***");
        return "stub";
    },

    createOutputFile: function (req, path, isAppend) {
        console.info("*** readFromUrl: " + path + "," + isAppend + " ***");
        return path;
    },

    writeToFile: function (req, fd, input) {
        if (!this.fileContent) {
            this.fileContent = [];
        }
        if (!this.fileContent[fd]) {
            this.fileContent[fd] = "";
        }
        this.fileContent[fd] += input;
        return true;
    },

    openFile: function (req, path, encoding) {
        console.info("*** openFile: " + path + " ***");
        return path;
    },

    readAll: function (req, fd) {
        console.info("*** readAll: " + fd + " ***");
        //return "temp file content";
        //console.info(this.files);


        if (!this.testFiles) {
            this.testFiles = [];
            for (var i = 0; i < this.files.length; ++i) {
                if (this.files[i].name === 'test.html') {
                    this.testFiles['main'] = this.files[i];
                }
                else if (this.files[i].name === 'program.json') {
                    this.testFiles['program'] = this.files[i];
                }
                else if (this.files[i].name === 'channel.html') {
                    this.testFiles['channel'] = this.files[i];
                }
                else if (this.files[i].name === 'sdarot_list.html') {
                    this.testFiles['sdarot_list'] = this.files[i];
                }
                else if (this.files[i].name === 'sidra.html') {
                    this.testFiles['sidra'] = this.files[i];
                }
                else if (this.files[i].name === 'sidra2.html') {
                    this.testFiles['sidra2'] = this.files[i];
                }
                else if (this.files[i].name === 'kinoprofi_list.html') {
                    this.testFiles['kinoprofi'] = this.files[i];
                }
            }
        }

        if (fd === 'https://www.yes.co.il/content/tvguide') {
            return readFile(this.testFiles['main']);
        }
        else if (fd.startsWith('https://www.yes.co.il/content/YesChannelsHandler.ashx?action=GetProgramDataByScheduleItemID')) {
            return readFile(this.testFiles['program']);
        }
        else if (fd.startsWith('https://www.yes.co.il/content/YesChannelsHandler.ashx?action=GetDailyShowsByDayAndChannelCode')) {
            return readFile(this.testFiles['channel']);
        }
        else if (fd.startsWith('https://sdarot.world/series')) {
            return readFile(this.testFiles['sdarot_list']);
        }
        else if (fd.startsWith('https://sdarot.world/watch/1207')) {
            return readFile(this.testFiles['sidra']);
        }
        else if (fd.startsWith('https://sdarot.world/watch/82')) {
            return readFile(this.testFiles['sidra2']);
        }
        else if (fd.startsWith('http://kinoprofi.vip/search/f:memento')) {
            return readFile(this.testFiles['kinoprofi']);
        }
        return null;

    },

    close: function (req, fd) {
        if (this.fileContent && this.fileContent[fd]) {
            console.info("Dumping File " + fd + ":");
            console.info(this.fileContent[fd]);
        }
    },

    delete: function (req, path) {

    },

    isExist: function (req, path) {
        console.info("*** isExist: " + path + " ***");
        return true;
    },

    rename: function (req, path, name) {
        console.info("*** rename: " + path + "," + name + " ***");
    }


};


function readFile(file) {
    var reader = new FileReaderSync();
    return reader.readAsText(file);
}
