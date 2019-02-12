var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var com;
(function (com) {
    var addons;
    (function (addons) {
        var kabab;
        (function (kabab) {
            var KababConfig = (function (_super) {
                
                function KababConfig() {
                    
                }
                KababConfig.sh_$LI$ = function () { if (KababConfig.sh == null)
                    KababConfig.sh = com.montezumba.lib.io.StorageHandler.instance(); return KababConfig.sh; };
                ;
                KababConfig.RUSSIAN_STREAM_$LI$ = function () { if (KababConfig.RUSSIAN_STREAM == null)
                    KababConfig.RUSSIAN_STREAM = "http://178.162.205.76/video/zWLP_WvNCMBCQKNnTfwt0w/" + KababConfig.PARAM_ENCODING + "/playlist.m3u8"; return KababConfig.RUSSIAN_STREAM; };
                ;
                KababConfig.sRequestedChannels_$LI$ = function () { if (KababConfig.sRequestedChannels == null)
                    KababConfig.sRequestedChannels = ["\u05e2\u05e8\u05d5\u05e5 \u05e2\u05e9\u05e8", "\u05e7\u05e9\u05ea", "\u05e8\u05e9\u05ea", "\u05d9\u05e9\u05e8\u05d0\u05dc \u05e4\u05dc\u05d5\u05e1", "\u05de\u05d5\u05e1\u05d9\u05e7\u05d4 24", "HD \u05db\u05d0\u05df"]; return KababConfig.sRequestedChannels; };
                ;
                return KababConfig;
            }());
            KababConfig.PARAM_ENCODING = "<@@>";
            KababConfig.M3U_PATH = "https://www.dropbox.com/s/y9yyi16nuwploav/myRussianList.m3u?dl=1";
            KababConfig.PLAYLIST_NAME = "Israeli & Russian Channels";
            KababConfig.RUSSIAN_SITE = "http://www.online-perviy.tv/now/";
            KababConfig.XMLTV_TEMP_PATH = "temp_guide.xml";
            KababConfig.XMLTV_PATH = "kabab_guide.xml";
            KababConfig.MAX_TVGUIDE_DAYS = 3;
            KababConfig.TV_GUIDE_VALIDITY_DAYS = 2;
            KababConfig.TVGUIDE_REFRESH_HOURS = 8;
            kabab.KababConfig = KababConfig;
            KababConfig["__class"] = "com.addons.kabab.KababConfig";
            (function (KababConfig) {
                var Sites;
                (function (Sites) {
                    Sites[Sites["PERVIY_KANAL"] = 0] = "PERVIY_KANAL";
                    Sites[Sites["KINESKOP"] = 1] = "KINESKOP";
                    Sites[Sites["ONLYTV"] = 2] = "ONLYTV";
                    Sites[Sites["CRICFREE"] = 3] = "CRICFREE";
                    Sites[Sites["LAPTI"] = 4] = "LAPTI";
                })(Sites = KababConfig.Sites || (KababConfig.Sites = {}));
                /** @ignore */
                var Sites_$WRAPPER = (function () {
                    function Sites_$WRAPPER(_$ordinal, _$name, siteUrl, refreshRate, loadAll, streamUrls, additionalServers) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.mSiteUrl === undefined)
                            this.mSiteUrl = null;
                        if (this.mStreamUrls === undefined)
                            this.mStreamUrls = null;
                        if (this.mAdditionalServers === undefined)
                            this.mAdditionalServers = null;
                        if (this.mRefreshRate === undefined)
                            this.mRefreshRate = 0;
                        if (this.mLoadAllResources === undefined)
                            this.mLoadAllResources = false;
                        this.mSiteUrl = siteUrl;
                        this.mStreamUrls = streamUrls;
                        this.mRefreshRate = refreshRate;
                        if (additionalServers != null) {
                            this.mAdditionalServers = additionalServers;
                        }
                        else {
                            this.mAdditionalServers = [];
                        }
                        this.mLoadAllResources = loadAll;
                    }
                    Sites_$WRAPPER.prototype.getSiteUrl = function () {
                        return this.mSiteUrl;
                    };
                    Sites_$WRAPPER.prototype.getStreamUrls = function () {
                        return this.mStreamUrls;
                    };
                    Sites_$WRAPPER.prototype.getRefreshRate = function () {
                        return this.mRefreshRate;
                    };
                    Sites_$WRAPPER.prototype.shouldLoadAll = function () {
                        return this.mLoadAllResources;
                    };
                    Sites_$WRAPPER.prototype.getValidDomains = function () {
                        return this.mAdditionalServers;
                    };
                    Sites_$WRAPPER.prototype.name = function () { return this._$name; };
                    Sites_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
                    return Sites_$WRAPPER;
                }());
                KababConfig.Sites_$WRAPPER = Sites_$WRAPPER;
                Sites["__class"] = "com.addons.kabab.KababConfig.Sites";
                Sites["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
                Sites["_$wrappers"] = [new Sites_$WRAPPER(0, "PERVIY_KANAL", "http://www.1tv.ru/com.montezumba.wewatch.com.montezumba.com.treynix.com.treynix.tiviapp", 0 * com.montezumba.lib.types.Constants.MINUTES_$LI$(), true, ["http://mobdrm.1tv.ru/hls-live10/streams/1tv/1tv4.m3u8?cdn=cdn9.1internet.tv&s="], null), new Sites_$WRAPPER(1, "KINESKOP", "kineskop.tv", 1 * com.montezumba.lib.types.Constants.MINUTES_$LI$(), true, ["http://kineskop.tv/?page=watch&ch=256", "http://kineskop.tv/?page=watch&ch=42", "http://kineskop.tv/?page=watch&ch=182", "http://kineskop.tv/?page=watch&ch=208", "http://kineskop.tv/?page=watch&ch=307", "http://kineskop.tv/?page=watch&ch=309", "http://kineskop.tv/?page=watch&ch=453", "http://kineskop.tv/?page=watch&ch=452", "http://kineskop.tv/?page=watch&ch=319", "http://kineskop.tv/?page=watch&ch=379", "http://kineskop.tv/?page=watch&ch=380", "http://kineskop.tv/?page=watch&ch=210", "http://kineskop.tv/?page=watch&ch=10", "http://kineskop.tv/?page=watch&ch=55", "http://kineskop.tv/?page=watch&ch=52", "http://kineskop.tv/?page=watch&ch=212", "http://kineskop.tv/?page=watch&ch=206", "http://kineskop.tv/?page=watch&ch=177", "http://kineskop.tv/?page=watch&ch=240", "http://kineskop.tv/?page=watch&ch=205", "http://kineskop.tv/?page=watch&ch=203", "http://kineskop.tv/?page=watch&ch=430", "http://kineskop.tv/?page=watch&ch=240", "http://kineskop.tv/?page=watch&ch=72", "http://kineskop.tv/?page=watch&ch=275", "http://kineskop.tv/?page=watch&ch=119", "http://kineskop.tv/?page=watch&ch=250", "http://kineskop.tv/?page=watch&ch=425", "http://kineskop.tv/?page=watch&ch=79", "http://kineskop.tv/?page=watch&ch=251", "http://kineskop.tv/?page=watch&ch=98", "http://kineskop.tv/?page=watch&ch=179", "http://kineskop.tv/?page=watch&ch=321", "http://kineskop.tv/?page=watch&ch=102", "http://kineskop.tv/?page=watch&ch=100", "http://kineskop.tv/?page=watch&ch=114", "http://kineskop.tv/?page=watch&ch=429", "http://kineskop.tv/?page=watch&ch=273", "http://kineskop.tv/?page=watch&ch=49", "http://kineskop.tv/?page=watch&ch=315", "http://kineskop.tv/?page=watch&ch=93", "http://kineskop.tv/?page=watch&ch=223", "http://kineskop.tv/?page=watch&ch=106", "http://kineskop.tv/?page=watch&ch=220", "http://kineskop.tv/?page=watch&ch=82", "http://kineskop.tv/?page=watch&ch=299", "http://kineskop.tv/?page=watch&ch=313", "http://kineskop.tv/?page=watch&ch=51", "http://kineskop.tv/?page=watch&ch=53", "http://kineskop.tv/?page=watch&ch=132", "http://kineskop.tv/?page=watch&ch=131", "http://kineskop.tv/?page=watch&ch=133", "http://kineskop.tv/?page=watch&ch=58", "http://kineskop.tv/?page=watch&ch=132", "http://kineskop.tv/?page=watch&ch=131", "http://kineskop.tv/?page=watch&ch=133", "http://kineskop.tv/?page=watch&ch=68", "http://kineskop.tv/?page=watch&ch=274", "http://kineskop.tv/?page=watch&ch=75", "http://kineskop.tv/?page=watch&ch=113", "http://kineskop.tv/?page=watch&ch=295", "http://kineskop.tv/?page=watch&ch=311", "http://kineskop.tv/?page=watch&ch=296", "http://kineskop.tv/?page=watch&ch=336", "http://kineskop.tv/?page=watch&ch=199", "http://kineskop.tv/?page=watch&ch=209", "http://kineskop.tv/?page=watch&ch=50", "http://kineskop.tv/?page=watch&ch=45", "http://kineskop.tv/?page=watch&ch=86", "http://kineskop.tv/?page=watch&ch=87", "http://kineskop.tv/?page=watch&ch=188", "http://kineskop.tv/?page=watch&ch=202", "http://kineskop.tv/?page=watch&ch=209", "http://kineskop.tv/?page=watch&ch=77", "http://kineskop.tv/?page=watch&ch=78", "http://kineskop.tv/?page=watch&ch=207", "http://kineskop.tv/?page=watch&ch=81", "http://kineskop.tv/?page=watch&ch=287", "http://kineskop.tv/?page=watch&ch=454", "http://kineskop.tv/?page=watch&ch=246", "http://kineskop.tv/?page=watch&ch=455", "http://kineskop.tv/?page=watch&ch=123", "http://kineskop.tv/?page=watch&ch=57", "http://kineskop.tv/?page=watch&ch=84", "http://kineskop.tv/?page=watch&ch=248", "http://kineskop.tv/?page=watch&ch=108", "http://kineskop.tv/?page=watch&ch=174", "http://kineskop.tv/?page=watch&ch=193", "http://kineskop.tv/?page=watch&ch=191", "http://kineskop.tv/?page=watch&ch=90", "http://kineskop.tv/?page=watch&ch=176", "http://kineskop.tv/?page=watch&ch=91", "http://kineskop.tv/?page=watch&ch=211", "http://kineskop.tv/?page=watch&ch=228", "http://kineskop.tv/?page=watch&ch=456", "http://kineskop.tv/?page=watch&ch=85", "http://kineskop.tv/?page=watch&ch=62", "http://kineskop.tv/?page=watch&ch=94", "http://kineskop.tv/?page=watch&ch=420", "http://kineskop.tv/?page=watch&ch=262", "http://kineskop.tv/?page=watch&ch=61", "http://kineskop.tv/?page=watch&ch=268", "http://kineskop.tv/?page=watch&ch=7", "http://kineskop.tv/?page=watch&ch=184", "http://kineskop.tv/?page=watch&ch=419", "http://kineskop.tv/?page=watch&ch=172", "http://kineskop.tv/?page=watch&ch=219"], null), new Sites_$WRAPPER(2, "ONLYTV", "only-tv.org", 5 * com.montezumba.lib.types.Constants.MINUTES_$LI$(), false, ["http://only-tv.org/9-kanal-izrail.html", "http://only-tv.org/sts.html", "http://only-tv.org/tnt.html", "http://only-tv.org/rossiya-1.html", "http://only-tv.org/ntv.html", "http://only-tv.org/1-plus-1.html (5)", "http://only-tv.org/national-geographic.html", "http://only-tv.org/nat-geo-wild.html", "http://only-tv.org/galaxy-tv.html (8)", "http://only-tv.org/vh1.html", "http://only-tv.org/viasat-hockey.html", "http://only-tv.org/setanta-sports.html", "http://only-tv.org/sport-1-ukraina.html", "http://only-tv.org/sport-2-ukraina.html", "http://only-tv.org/xsport.html"], ["youtvonlinefree.com", "privit.pro"]), new Sites_$WRAPPER(3, "CRICFREE", "cricfree.cc", 5 * com.montezumba.lib.types.Constants.MINUTES_$LI$(), true, ["http://cricfree.cc/stream2watch/espn-usa.php", "http://cricfree.cc/stream2watch/fox-hd.php", "http://www.stream2watch.cc/streams/30/72274"], []), new Sites_$WRAPPER(4, "LAPTI", "lapti.tv", 5 * com.montezumba.lib.types.Constants.MINUTES_$LI$(), true, ["http://www.online-perviy.tv/show/", "https://www.1tv.ru/", "http://pervii-kanal.lapti.tv", "http://rus24.tv/perviy_kanal.html"], null)];
                var PlaylistSource;
                (function (PlaylistSource) {
                    PlaylistSource[PlaylistSource["ISRAEL"] = 0] = "ISRAEL";
                    PlaylistSource[PlaylistSource["TV545"] = 1] = "TV545";
                })(PlaylistSource = KababConfig.PlaylistSource || (KababConfig.PlaylistSource = {}));
                /** @ignore */
                var PlaylistSource_$WRAPPER = (function () {
                    function PlaylistSource_$WRAPPER(_$ordinal, _$name, name, path) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.mPlaylist === undefined)
                            this.mPlaylist = null;
                        this.mPlaylist = new com.montezumba.lib.types.Playlist(name);
                        this.mPlaylist.pathToPlaylist = path;
                    }
                    PlaylistSource_$WRAPPER.prototype.getPlaylist = function () {
                        return this.mPlaylist;
                    };
                    PlaylistSource_$WRAPPER.prototype.name = function () { return this._$name; };
                    PlaylistSource_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
                    return PlaylistSource_$WRAPPER;
                }());
                KababConfig.PlaylistSource_$WRAPPER = PlaylistSource_$WRAPPER;
                PlaylistSource["__class"] = "com.addons.kabab.KababConfig.PlaylistSource";
                PlaylistSource["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
                PlaylistSource["_$wrappers"] = [new PlaylistSource_$WRAPPER(0, "ISRAEL", "Israeli & Russian Channels", "https://www.dropbox.com/s/y9yyi16nuwploav/myRussianList.m3u?dl=1"), new PlaylistSource_$WRAPPER(1, "TV545", "\u0420\u0443\u0441\u0441\u043a\u0438\u0435 \u043a\u0430\u043d\u0430\u043b\u044b [545-tv.com]", "http://545-tv.com/iptvRU.m3u8")];
                var TvGuideSources;
                (function (TvGuideSources) {
                    TvGuideSources[TvGuideSources["WALLA"] = 0] = "WALLA";
                    TvGuideSources[TvGuideSources["YES"] = 1] = "YES";
                })(TvGuideSources = KababConfig.TvGuideSources || (KababConfig.TvGuideSources = {}));
                /** @ignore */
                var TvGuideSources_$WRAPPER = (function () {
                    function TvGuideSources_$WRAPPER(_$ordinal, _$name, baseUrl, channelIdsGrabber, programIdsGrabber, channelUrl, programUrl, channelInfoGrabber, programInfoGrabber, programNameGrabber, programDescGrabber, programStartTimeGrabber, programEndTimeGrabber, currentDateGrabber, encoding, language, country) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.mBaseUrl === undefined)
                            this.mBaseUrl = null;
                        if (this.mChannelIdsGrabber === undefined)
                            this.mChannelIdsGrabber = null;
                        if (this.mProgramIdsGrabber === undefined)
                            this.mProgramIdsGrabber = null;
                        if (this.mChannelUrl === undefined)
                            this.mChannelUrl = null;
                        if (this.mProgramUrl === undefined)
                            this.mProgramUrl = null;
                        if (this.mChannelInfoGrabber === undefined)
                            this.mChannelInfoGrabber = null;
                        if (this.mProgramInfoGrabber === undefined)
                            this.mProgramInfoGrabber = null;
                        if (this.mProgramNameGrabber === undefined)
                            this.mProgramNameGrabber = null;
                        if (this.mProgramDescGrabber === undefined)
                            this.mProgramDescGrabber = null;
                        if (this.mProgramStartTimeGrabber === undefined)
                            this.mProgramStartTimeGrabber = null;
                        if (this.mProgramEndTimeGrabber === undefined)
                            this.mProgramEndTimeGrabber = null;
                        if (this.mCurrentDateGrabber === undefined)
                            this.mCurrentDateGrabber = null;
                        if (this.mEncoding === undefined)
                            this.mEncoding = null;
                        if (this.mLanguage === undefined)
                            this.mLanguage = null;
                        if (this.mCountry === undefined)
                            this.mCountry = null;
                        this.mBaseUrl = baseUrl;
                        this.mChannelIdsGrabber = channelIdsGrabber;
                        this.mProgramIdsGrabber = programIdsGrabber;
                        this.mChannelUrl = channelUrl;
                        this.mProgramUrl = programUrl;
                        this.mChannelInfoGrabber = channelInfoGrabber;
                        this.mProgramInfoGrabber = programInfoGrabber;
                        this.mProgramNameGrabber = programNameGrabber;
                        this.mProgramDescGrabber = programDescGrabber;
                        this.mProgramStartTimeGrabber = programStartTimeGrabber;
                        this.mProgramEndTimeGrabber = programEndTimeGrabber;
                        this.mCurrentDateGrabber = currentDateGrabber;
                        this.mEncoding = encoding;
                        this.mLanguage = language;
                        this.mCountry = country;
                    }
                    TvGuideSources_$WRAPPER.prototype.name = function () { return this._$name; };
                    TvGuideSources_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
                    return TvGuideSources_$WRAPPER;
                }());
                KababConfig.TvGuideSources_$WRAPPER = TvGuideSources_$WRAPPER;
                TvGuideSources["__class"] = "com.addons.kabab.KababConfig.TvGuideSources";
                TvGuideSources["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
                TvGuideSources["_$wrappers"] = [
                new TvGuideSources_$WRAPPER(0, 
                    "WALLA", 
                    "https://tv-guide.walla.co.il", 
                    "<a class=\"tv-guide-channels-logos-title\" href=\"/channel/([0-9]+)\">.*?<span class=\"screen-reader\">([^<]*?)</span>", 
                    "", 
                    "https://tv-guide.walla.co.il/?ts=<@3@>", 
                    "", 
                    "<h2 class=\"screen-reader\"><@2@></h2> <ol class=\"tv-guide-channel\">(.*?)</ol>", 
                    "data-obj=\'(.*?)\'", 
                    "\"name\":\"(.*?)\",", 
                    "\"description\":\"(.*?)\",", 
                    "\"start_time\":\"([0-9][0-9])[:]([0-9][0-9])\",", 
                    "\"end_time\":\"([0-9][0-9])[:]([0-9][0-9])\"", 
                    "<li class=\"selected\">[^<]*?<a href=\"[?]ts=([0-9]{4})-([0-9]{2})-([0-9]{2})\">", 
                    "UTF-8", 
                    "he",
                    "Asia/Jerusalem"
                ), 
                new TvGuideSources_$WRAPPER(1, 
                    "YES", 
                    "https://www.yes.co.il/content/tvguide", 
                    "@@<TV50,\u05d9\u05e9\u05e8\u05d0\u05dc \u05e4\u05dc\u05d5\u05e1>;<TV04,\u05e2\u05e8\u05d5\u05e5 \u05e2\u05e9\u05e8>;<CH30,HD \u05db\u05d0\u05df>;<CH36,\u05e8\u05e9\u05ea>;<CH34,\u05e7\u05e9\u05ea>;<TV67,\u05de\u05d5\u05e1\u05d9\u05e7\u05d4 24>@@", 
                    "Schedule_Item_ID=\"([0-9]+?)\"", 
                    "https://www.yes.co.il/content/YesChannelsHandler.ashx?action=GetDailyShowsByDayAndChannelCode&dayValue=<@4@>&dayPartByHalfHour=0&channelCode=<@1@>", 
                    "https://www.yes.co.il/content/YesChannelsHandler.ashx?action=GetProgramDataByScheduleItemID&ScheduleItemID=<@2@>", 
                    "", 
                    "", 
                    "\"Hebrew_Name\":\"(.*?)\"", 
                    "\"PreviewText\":\"(.*?)\"", 
                    "\"Start_Time_Fix\":\"([0-9][0-9])[:]([0-9][0-9])\"", 
                    "\"End_Time_Fix\":\"([0-9][0-9])[:]([0-9][0-9])\"", 
                    "clientServerTimeDelta: new Date[(]\"([0-9]{4})-([0-9]{2})-([0-9]{2})", 
                    "UTF-8", 
                    "he", 
                    "Asia/Jerusalem"
                )];
            })(KababConfig = kabab.KababConfig || (kabab.KababConfig = {}));
        })(kabab = addons.kabab || (addons.kabab = {}));
    })(addons = com.addons || (com.addons = {}));
})(com || (com = {}));
com.addons.kabab.KababConfig.sRequestedChannels_$LI$();
com.addons.kabab.KababConfig.RUSSIAN_STREAM_$LI$();
com.addons.kabab.KababConfig.sh_$LI$();
