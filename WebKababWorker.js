
var kababConfig = new com.addons.kabab.KababConfig();



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
            var KababMain = (function (_super) {
//                __extends(KababMain, _super);
                function KababMain() {
                    var _this = this;
                    /*private*/ _this.mLaptiServerIndex = null;
                    /*private*/ _this.mLastRequestUrl = null;
                    ///*private*/ _this.mRefreshTimer = com.montezumba.lib.utils.TimerFactory.instance().createTimer();
                    /*private*/ _this.mStreams = (new java.util.HashMap());
                    ///*private*/ _this.mKillTimer = com.montezumba.lib.utils.TimerFactory.instance().createTimer();
                    ///*private*/ _this.mLiveUrlWorker = com.montezumba.lib.utils.WorkerFactory.instance().createWorker("Kabab-Live", com.montezumba.lib.utils.WorkerFactory.WorkerType.PERSISTENT_WORKER);
                    ///*private*/ _this.mTvGuideWorker = com.montezumba.lib.utils.WorkerFactory.instance().createWorker("Kabab-Guide", com.montezumba.lib.utils.WorkerFactory.WorkerType.ONE_TIME_WORKER);
                    ///*private*/ _this.mPlaylistWorker = com.montezumba.lib.utils.WorkerFactory.instance().createWorker("Kabab-Playlist", com.montezumba.lib.utils.WorkerFactory.WorkerType.ONE_TIME_WORKER);
                    /*private*/ _this.mWriter = null;
                    return _this;
                }

                KababMain.FIX_GRABBER_PATTERN_STRING_$LI$ = function () { if (KababMain.FIX_GRABBER_PATTERN_STRING == null)
                    KababMain.FIX_GRABBER_PATTERN_STRING = "@@(?:" + KababMain.FIX_GRABBER_ITEM + ";?)+@@"; return KababMain.FIX_GRABBER_PATTERN_STRING; };
                ;
                KababMain.sFixGrabberPattern_$LI$ = function () { if (KababMain.sFixGrabberPattern == null)
                    KababMain.sFixGrabberPattern = java.util.regex.Pattern.compile(KababMain.FIX_GRABBER_ITEM); return KababMain.sFixGrabberPattern; };
                ;
                KababMain.sDays_$LI$ = function () { if (KababMain.sDays == null)
                    KababMain.sDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; return KababMain.sDays; };
                ;
                /**
                 *
                 * @param {com.montezumba.lib.types.AddonRequest} params
                 */

                KababMain.prototype.generateTvGuide = function (source) {
                    var tempPath = null;
                    try {
                        tempPath = com.montezumba.lib.io.StorageHandler.instance().getAppTempPath();
                        var guidePath = com.montezumba.lib.io.StorageHandler.instance().getAppStoragePath();
                        tempPath = com.montezumba.lib.io.StorageHandler.instance().generateFullPath(tempPath, com.addons.kabab.KababConfig.XMLTV_TEMP_PATH);
                        guidePath = com.montezumba.lib.io.StorageHandler.instance().generateFullPath(guidePath, com.addons.kabab.KababConfig.XMLTV_PATH);
                        this.mWriter = com.montezumba.lib.io.StorageHandler.instance().openOutputFile(tempPath, false);
                        this.mWriter['write$java_lang_String'](KababMain.XMLTV_HEADER);
                        var channelIdGrabber = java.util.regex.Pattern.compile$java_lang_String(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mChannelIdsGrabber);
                        var programIdGrabber = java.util.regex.Pattern.compile$java_lang_String(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mProgramIdsGrabber);
                        var programNameGrabber = java.util.regex.Pattern.compile$java_lang_String(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mProgramNameGrabber);
                        var programDescGrabber = java.util.regex.Pattern.compile$java_lang_String(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mProgramDescGrabber);
                        var programStartTimeGrabber = java.util.regex.Pattern.compile$java_lang_String(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mProgramStartTimeGrabber);
                        var programEndTimeGrabber = java.util.regex.Pattern.compile$java_lang_String(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mProgramEndTimeGrabber);
                        var dateGrabber = java.util.regex.Pattern.compile$java_lang_String(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mCurrentDateGrabber);
                        var programGrabber = (com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mProgramInfoGrabber.length === 0) ? null : java.util.regex.Pattern.compile$java_lang_String(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mProgramInfoGrabber);
                        var matcher = null;
                        var channels = (new java.util.HashSet());
                        com.montezumba.lib.types.MediaLog.instance().debug("Grabbing Channels: ");
                        var baseUrl = com.montezumba.lib.io.StorageHandler.instance().openFile$java_lang_String$java_lang_String(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mBaseUrl, com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mEncoding).readAll();
                        com.montezumba.lib.types.MediaLog.instance().debug(baseUrl);
                        matcher = this.getMatcher(channelIdGrabber, baseUrl);
                        while ((matcher.find())) {
                            {
                                var channelId = matcher.group$int(1);
                                var channelName = org.apache.commons.lang3.StringEscapeUtils.unescapeJava(matcher.group$int(2));
                                var found = false;
                                for (var index121 = 0; index121 < com.addons.kabab.KababConfig.sRequestedChannels_$LI$().length; index121++) {
                                    var s = com.addons.kabab.KababConfig.sRequestedChannels_$LI$()[index121];
                                    {
                                        com.montezumba.lib.types.MediaLog.instance().debug("comparing " + s + " to " + channelName);
                                        if ((function (o1, o2) { if (o1 && o1.equals) {
                                            return o1.equals(o2);
                                        }
                                        else {
                                            return o1 === o2;
                                        } })(channelName, s)) {
                                            found = true;
                                            break;
                                        }
                                    }
                                }
                                if (found) {
                                    com.montezumba.lib.types.MediaLog.instance().debug("Found Channel id=" + channelId + " name=" + channelName);
                                    var channel = new com.montezumba.lib.types.TvChannel(channelName);
                                    channel.id = channelId;
                                    channels.add(channel);
                                }
                            }
                        }
                        ;
                        this.writeChannels(channels);
                        com.montezumba.lib.types.MediaLog.instance().debug("Grabbing date");
                        var dateMatcher = dateGrabber.matcher(baseUrl);
                        if (!dateMatcher.find()) {
                            throw new java.io.IOException("Failed to grab date from: " + com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mBaseUrl);
                        }
                        var year = dateMatcher.group$int(1);
                        var month = dateMatcher.group$int(2);
                        var day = dateMatcher.group$int(3);
                        com.montezumba.lib.types.MediaLog.instance().debug("Current date is = " + day + "/" + month + "/" + year);
                        var zone = com.montezumba.lib.utils.TimerFactory.instance().getTimeZoneOffset(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mCountry);
                        com.montezumba.lib.types.MediaLog.instance().debug("Zone offset is = " + zone);
                        var today = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$int$int$int$int$int$int$int(javaemul.internal.IntegerHelper.parseInt(year), javaemul.internal.IntegerHelper.parseInt(month), javaemul.internal.IntegerHelper.parseInt(day), 0, 0, 0, 0);
                        com.montezumba.lib.types.MediaLog.instance().debug("Today is = " + today.format("%day%-%month%-%year% %hour%:%minute%", true) + " day of week=" + today.getWeekDay(true) + " ordinal=" + com.montezumba.lib.types.TimeStamp.WeekDay[com.montezumba.lib.types.TimeStamp.WeekDay[today.getWeekDay(true)]]);
                        var zoneString = "";
                        if (zone !== 0) {
                            var zoneHours = (zone / 60 | 0);
                            var zoneHoursStr = new String(Math.abs(zoneHours)).toString();
                            var zoneSign = (zone > 0) ? "+" : "-";
                            if (zoneHours < 10) {
                                zoneHoursStr = "0" + zoneHoursStr;
                            }
                            var zoneMinutes = zone % 60;
                            var zoneMinutesStr = new String(Math.abs(zoneMinutes)).toString();
                            if (zoneMinutes < 10) {
                                zoneMinutesStr = "0" + zoneMinutesStr;
                            }
                            zoneString = zoneSign + zoneHoursStr + zoneMinutesStr;
                        }
                        com.montezumba.lib.types.MediaLog.instance().debug("Zone string is: " + zoneString);
                        var dates = [null, null, null, null, null, null, null];
                        var daysOffset = void 0;
                        for (var i = 0; i < 7; ++i) {
                            {
                                if (i < com.montezumba.lib.types.TimeStamp.WeekDay[com.montezumba.lib.types.TimeStamp.WeekDay[today.getWeekDay(true)]]) {
                                    daysOffset = 7 - com.montezumba.lib.types.TimeStamp.WeekDay[com.montezumba.lib.types.TimeStamp.WeekDay[today.getWeekDay(true)]] + i;
                                }
                                else {
                                    daysOffset = i - com.montezumba.lib.types.TimeStamp.WeekDay[com.montezumba.lib.types.TimeStamp.WeekDay[today.getWeekDay(true)]];
                                }
                                if (daysOffset < com.addons.kabab.KababConfig.MAX_TVGUIDE_DAYS) {
                                    dates[i] = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$int$int$int$int$int$int$int(javaemul.internal.IntegerHelper.parseInt(year), javaemul.internal.IntegerHelper.parseInt(month), javaemul.internal.IntegerHelper.parseInt(day), 0, 0, 0, 0);
                                    dates[i].addTime(daysOffset * com.montezumba.lib.types.Constants.DAYS_$LI$());
                                    com.montezumba.lib.types.MediaLog.instance().debug("Date for " + function () { var result = []; for (var val in com.montezumba.lib.types.TimeStamp.WeekDay) {
                                        if (!isNaN(val)) {
                                            result.push(parseInt(val, 10));
                                        }
                                    } return result; }()[i] + " is " + dates[i].format("%day%-%month%-%year%", true));
                                }
                                else {
                                    dates[i] = null;
                                }
                            }
                            ;
                        }
                        com.montezumba.lib.types.MediaLog.instance().debug("Grabbing Programs: ");
                        for (var index122 = channels.iterator(); index122.hasNext();) {
                            var channel = index122.next();
                            {
                                com.montezumba.lib.types.MediaLog.instance().debug("Grabbing programs for channel = " + channel.displayString);
                                for (var i = 0; i < 7; ++i) {
                                    {
                                        if (dates[i] == null) {
                                            continue;
                                        }
                                        var dayOver = false;
                                        var prevStartHour = 24;
                                        var prevEndHour = 24;
                                        var weekday = KababMain.sDays_$LI$()[i];
                                        com.montezumba.lib.types.MediaLog.instance().debug("Grabbing for day = " + weekday);
                                        var channelPage = baseUrl;
                                        if (!(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mChannelUrl.length === 0)) {
                                            var date = dates[i].format("%year%-%month%-%day%", true);
                                            var dayOrder = dates[i].getDay(true) - today.getDay(true);
                                            var channelUrl = com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mChannelUrl.split("<@1@>").join(channel.id).split("<@2@>").join(weekday).split("<@3@>").join(date).split("<@4@>").join(/* valueOf */ new String(dayOrder).toString());
                                            com.montezumba.lib.types.MediaLog.instance().debug("Grabbing from " + channelUrl);
                                            channelPage = com.montezumba.lib.io.StorageHandler.instance().openFile$java_lang_String$java_lang_String(channelUrl, com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mEncoding).readAll();
                                        }
                                        var channelContent = channelPage;
                                        if (!(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mChannelInfoGrabber.length === 0)) {
                                            var channelGrabber = java.util.regex.Pattern.compile$java_lang_String(/* replace */ com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mChannelInfoGrabber.split("<@2@>").join(channel.displayString));
                                            matcher = channelGrabber.matcher(channelPage);
                                            if (!matcher.find()) {
                                                com.montezumba.lib.types.MediaLog.instance().error$java_lang_String("Failed to grab channel info for channel=" + channel.displayString + " for day=" + weekday);
                                                continue;
                                            }
                                            channelContent = matcher.group$int(1);
                                        }
                                        var programPages = (new java.util.ArrayList());
                                        if (!(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mProgramUrl.length === 0)) {
                                            var programMatcher = programIdGrabber.matcher(channelContent);
                                            while ((programMatcher.find())) {
                                                {
                                                    var id = programMatcher.group$int(1);
                                                    var page = com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mProgramUrl.split("<@1@>").join(channel.id).split("<@2@>").join(id).split("<@3@>").join(weekday);
                                                    com.montezumba.lib.types.MediaLog.instance().debug("Found program url=" + page);
                                                    programPages.add(page);
                                                }
                                            }
                                            ;
                                        }
                                        else {
                                            programPages.add(channelPage);
                                        }
                                        for (var index123 = programPages.iterator(); index123.hasNext();) {
                                            var page = index123.next();
                                            {
                                                var programsContent = void 0;
                                                com.montezumba.lib.types.MediaLog.instance().debug("Grabbing programs from=" + page);
                                                if ((function (o1, o2) { if (o1 && o1.equals) {
                                                    return o1.equals(o2);
                                                }
                                                else {
                                                    return o1 === o2;
                                                } })(page, channelPage)) {
                                                    programsContent = channelContent;
                                                }
                                                else {
                                                    programsContent = com.montezumba.lib.io.StorageHandler.instance().openFile$java_lang_String$java_lang_String(page, com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mEncoding).readAll();
                                                }
                                                var programsToParse = (new java.util.ArrayList());
                                                if (programGrabber != null) {
                                                    var programsMatcher = programGrabber.matcher(programsContent);
                                                    while ((programsMatcher.find())) {
                                                        {
                                                            var programContent = programsMatcher.group$int(1);
                                                            programsToParse.add(programContent);
                                                        }
                                                    }
                                                    ;
                                                }
                                                else {
                                                    programsToParse.add(programsContent);
                                                }
                                                for (var index124 = programsToParse.iterator(); index124.hasNext();) {
                                                    var programContent = index124.next();
                                                    {
                                                        var programParamsMatcher = programNameGrabber.matcher(programContent);
                                                        if (!programParamsMatcher.find()) {
                                                            throw new java.io.IOException("Failed to grab program name from: " + programContent);
                                                        }
                                                        var programName = org.apache.commons.lang3.StringEscapeUtils.unescapeJava(programParamsMatcher.group$int(1));
                                                        com.montezumba.lib.types.MediaLog.instance().debug("name = " + programName);
                                                        programParamsMatcher = programDescGrabber.matcher(programContent);
                                                        if (!programParamsMatcher.find()) {
                                                            throw new java.io.IOException("Failed to grab program description from: " + programContent);
                                                        }
                                                        var programDesc = org.apache.commons.lang3.StringEscapeUtils.unescapeJava(programParamsMatcher.group$int(1));
                                                        com.montezumba.lib.types.MediaLog.instance().debug("desc = " + programDesc);
                                                        programParamsMatcher = programStartTimeGrabber.matcher(programContent);
                                                        if (!programParamsMatcher.find()) {
                                                            throw new java.io.IOException("Failed to grab start time description from: " + programContent);
                                                        }
                                                        var startHours = programParamsMatcher.group$int(1);
                                                        var startMinutes = programParamsMatcher.group$int(2);
                                                        programParamsMatcher = programEndTimeGrabber.matcher(programContent);
                                                        if (!programParamsMatcher.find()) {
                                                            throw new java.io.IOException("Failed to grab end time description from: " + programContent);
                                                        }
                                                        var endHours = programParamsMatcher.group$int(1);
                                                        var endMinutes = programParamsMatcher.group$int(2);
                                                        com.montezumba.lib.types.MediaLog.instance().debug("Start time = " + startHours + ":" + startMinutes);
                                                        com.montezumba.lib.types.MediaLog.instance().debug("End time = " + endHours + ":" + endMinutes);
                                                        var startTime = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$int$int$int$int$int$int$int(dates[i].getYear(true), dates[i].getMonth(true), dates[i].getDay(true), javaemul.internal.IntegerHelper.valueOf(startHours), javaemul.internal.IntegerHelper.valueOf(startMinutes), 0, 0);
                                                        var endTime = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$int$int$int$int$int$int$int(dates[i].getYear(true), dates[i].getMonth(true), dates[i].getDay(true), javaemul.internal.IntegerHelper.valueOf(endHours), javaemul.internal.IntegerHelper.valueOf(endMinutes), 0, 0);
                                                        if (startTime.getHour(true) > prevEndHour) {
                                                            startTime.addTime(1 * com.montezumba.lib.types.Constants.DAYS_$LI$());
                                                            endTime.addTime(1 * com.montezumba.lib.types.Constants.DAYS_$LI$());
                                                        }
                                                        else if (startTime.getHour(true) > endTime.getHour(true)) {
                                                            endTime.addTime(1 * com.montezumba.lib.types.Constants.DAYS_$LI$());
                                                        }
                                                        prevEndHour = endTime.getHour(true);
                                                        prevStartHour = startTime.getHour(true);
                                                        com.montezumba.lib.types.MediaLog.instance().debug("Start time = " + startTime.format("%day%-%month%-%year% %hour%:%minute%", true));
                                                        com.montezumba.lib.types.MediaLog.instance().debug("End time = " + endTime.format("%day%-%month%-%year% %hour%:%minute%", true));
                                                        var program = new com.montezumba.lib.types.TvProgram(programName);
                                                        program.mChannel = channel.id;
                                                        program.mDesc = programDesc;
                                                        program.mStartTime = startTime;
                                                        program.mEndTime = endTime;
                                                        this.writeProgram(program, zoneString, com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mLanguage);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    ;
                                }
                            }
                        }
                        this.mWriter['write$java_lang_String'](KababMain.XMLTV_FOOTER);
                        com.montezumba.lib.types.MediaLog.instance().debug("Finished Grabbing");
                        com.montezumba.lib.types.MediaLog.instance().debug("Start Rename...");
                        com.montezumba.lib.io.StorageHandler.instance().rename(tempPath, guidePath);
                        com.montezumba.lib.types.MediaLog.instance().debug("End Rename...");
                    }
                    catch (e) {
                        console.error(e.message, e);
                        com.montezumba.lib.io.StorageHandler.instance()["delete"](tempPath);
                    }
                    finally {
                        this.mWriter.close();
                    }
                    ;
                };
                KababMain.prototype.getMatcher = function (grabber, input) {
                    var result;
                    if (new RegExp(grabber.toString()).test(KababMain.FIX_GRABBER_PATTERN_STRING_$LI$())) {
                        com.montezumba.lib.types.MediaLog.instance().debug("Got fix pattern string");
                        return KababMain.sFixGrabberPattern_$LI$().matcher(grabber.toString());
                    }
                    return grabber.matcher(input);
                };
                KababMain.prototype.writeProgram = function (program, zone, language) {
                    this.mWriter['write$java_lang_String']("\t<programme start=\"" + program.mStartTime.format("%year%%month%%day%%hour%%minute%%second%", true) + " " + zone + "\"");
                    this.mWriter['write$java_lang_String'](" stop=\"" + program.mEndTime.format("%year%%month%%day%%hour%%minute%%second%", true) + " " + zone + "\"");
                    this.mWriter['write$java_lang_String'](" channel=\"" + program.mChannel + "\">\n");
                    this.mWriter['write$java_lang_String']("\t\t<title lang=\"" + language + "\">" + program.displayString + "</title>\n");
                    this.mWriter['write$java_lang_String']("\t\t<desc lang=\"" + language + "\">" + program.mDesc + "</desc>\n");
                    this.mWriter['write$java_lang_String']("\t</programme>\n");
                };
                KababMain.prototype.writeChannels = function (channels) {
                    for (var index125 = channels.iterator(); index125.hasNext();) {
                        var channel = index125.next();
                        {
                            this.mWriter['write$java_lang_String']("\t<channel id=\"" + channel.id + "\">\n");
                            this.mWriter['write$java_lang_String']("\t\t<display-name>" + channel.displayString + "</display-name>\n");
                            this.mWriter['write$java_lang_String']("\t</channel>\n");
                        }
                    }
                };
                KababMain.prototype.extractStream = function (site, channelId, result, request) {
                    var title = new com.montezumba.lib.types.HTMLVideoTitle(/* valueOf */ new String(channelId).toString());
                    title.url = com.addons.kabab.KababConfig.Sites["_$wrappers"][site].getStreamUrls()[channelId];
                    title.refreshRate = 1 * com.montezumba.lib.types.Constants.MINUTES_$LI$();
                    com.montezumba.lib.types.MediaLog.instance().debug("Update url=" + title.url);
                    result.mediaResults.add(title.toTrasportableTitle());
                    this.done();
                    com.treynix.tiviapplive.provider.AddonHandler.instance().sendIndexerResponse(result);
                    return;
                };

                KababMain.prototype.requestTvGuide = function(req) {
                    var guide = new com.montezumba.lib.types.TvGuide("Kabab Guide");
                    var guidePath = window.localStorage.getItem("xmlguide");
                    //var guidePath = com.montezumba.lib.io.StorageHandler.instance().getAppStoragePath();
                    //guidePath = com.montezumba.lib.io.StorageHandler.instance().generateFullPath(guidePath, com.addons.kabab.KababConfig.XMLTV_PATH);

                    guide.pathToGuide = guidePath;
                    var refresh = false;
                    var valid = false;
                    if (localStorage.getItem("xmlguide") !== null) {
                        try {

                            var lastModified = localStorage.getItem("xmlguide_lastDate");
                            guide.startDate = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$long(lastModified.getEpoch());
                            var currentTime = com.montezumba.lib.utils.TimerFactory.instance().getCurrentTime().toLocalTime();
                            com.montezumba.lib.types.MediaLog.instance().debug("Current time = " + currentTime.toString());
                            currentTime.addTime(-com.addons.kabab.KababConfig.TVGUIDE_REFRESH_HOURS * com.montezumba.lib.types.Constants.HOURS_$LI$());
                            com.montezumba.lib.types.MediaLog.instance().debug("Current time = " + currentTime.toString() + " modified time=" + lastModified.toString());
                            if (currentTime.after(lastModified)) {
                                com.montezumba.lib.types.MediaLog.instance().debug("Need to refresh...");
                                refresh = true;
                            }
                            currentTime = com.montezumba.lib.utils.TimerFactory.instance().getCurrentTime().toLocalTime();
                            currentTime.addTime(-com.addons.kabab.KababConfig.TV_GUIDE_VALIDITY_DAYS * com.montezumba.lib.types.Constants.DAYS_$LI$());
                            if (currentTime.before(lastModified)) {
                                com.montezumba.lib.types.MediaLog.instance().debug("Tv guide is valid");
                                valid = true;
                            }
                            lastModified.addTime(com.addons.kabab.KababConfig.TV_GUIDE_VALIDITY_DAYS * com.montezumba.lib.types.Constants.DAYS_$LI$());
                            guide.endDate = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$long(lastModified.getEpoch());
                        }
                        catch (e) {
                            com.treynix.tiviapplive.provider.AddonHandler.instance().sendError(this.params, "Failed to open guide file");
                            this.__parent.done();
                        }
                        ;
                    }
                    else {
                        com.montezumba.lib.types.MediaLog.instance().debug("Cannot find guide");
                        refresh = true;
                    }
                    if (valid) {
                        com.montezumba.lib.types.MediaLog.instance().debug("Sending tv guide...");
                        this.result.mediaResults.add(guide.toTrasportableTitle());
                        this.__parent.done();
                        com.treynix.tiviapplive.provider.AddonHandler.instance().sendIndexerResponse(this.result);
                    }
                    if (refresh) {
                        try {
                            this.generateTvGuide(com.addons.kabab.KababConfig.TvGuideSources.YES);
                            if (!valid && com.montezumba.lib.io.StorageHandler.instance().isExist(guidePath)) {
                                guide.startDate = com.montezumba.lib.utils.TimerFactory.instance().getCurrentTime().toLocalTime();
                                guide.endDate = com.montezumba.lib.utils.TimerFactory.instance().getCurrentTime().toLocalTime();
                                guide.endDate.addTime(com.addons.kabab.KababConfig.TV_GUIDE_VALIDITY_DAYS * com.montezumba.lib.types.Constants.DAYS_$LI$());
                                TiviProvider.sendTvGuide(req, "Hello World EPG", "TBD", 2);                                
                            }
                        }
                        catch (e) {
                            com.montezumba.lib.types.MediaLog.instance().error(e.message, e);
                            if (!valid) {
                                TiviProvider.reportError(req, "Failed to generate tv-guide");
                                this.__parent.done();
                            }
                        }
                        ;
                    }
                };
                KababMain.generateThisWeek = function (today, zoneOffset) {
                    var dates = [null, null, null, null, null, null, null];
                    var daysOffset;
                    for (var i = 0; i < 7; ++i) {
                        {
                            if (i < com.montezumba.lib.types.TimeStamp.WeekDay[com.montezumba.lib.types.TimeStamp.WeekDay[today.getWeekDay(false)]]) {
                                daysOffset = 7 - com.montezumba.lib.types.TimeStamp.WeekDay[com.montezumba.lib.types.TimeStamp.WeekDay[today.getWeekDay(false)]] + i;
                            }
                            else {
                                daysOffset = i - com.montezumba.lib.types.TimeStamp.WeekDay[com.montezumba.lib.types.TimeStamp.WeekDay[today.getWeekDay(false)]];
                            }
                            dates[i] = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$long$int(today.getEpoch(), zoneOffset);
                            dates[i].addTime(daysOffset * com.montezumba.lib.types.Constants.DAYS_$LI$());
                            com.montezumba.lib.types.MediaLog.instance().debug("Date for " + function () { var result = []; for (var val in com.montezumba.lib.types.TimeStamp.WeekDay) {
                                if (!isNaN(val)) {
                                    result.push(parseInt(val, 10));
                                }
                            } return result; }()[i] + " is " + dates[i].format("%day%-%month%-%year%", false));
                        }
                        ;
                    }
                    return dates;
                };

                return KababMain;
            }());

            KababMain.FIX_GRABBER_ITEM = "<(.*?),(.*?)>";
            KababMain.XMLTV_HEADER = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<tv>\n";
            KababMain.XMLTV_FOOTER = "</tv>";
            kabab.KababMain = KababMain;
            KababMain["__class"] = "com.addons.kabab.KababMain";

        })(kabab = addons.kabab || (addons.kabab = {}));
    })(addons = com.addons || (com.addons = {}));
})(com || (com = {}));
com.addons.kabab.KababMain.sDays_$LI$();
com.addons.kabab.KababMain.sFixGrabberPattern_$LI$();
com.addons.kabab.KababMain.FIX_GRABBER_PATTERN_STRING_$LI$();




// Read the 'req' argument, which identifies the current request
var req = getParameterByName("req");
// Read the 'proc' argument, which identifies the requested procedure
var proc = getParameterByName("proc");


document.write("req="+req+"<br/>");
document.write("proc="+proc+"<br/>");



// initialize montezumbalib stuff

class TempFileReader {
    constructor(path, encoding) {
        this.fd = TiviProvider.openFile(path, encoding);
        if(this.fd === null) throw new IOException("Cannot open file: "+path);
    }

    readAll() {
        return TiviProvider.readAll(this.fd);
    }
}


class TempFileWriter {
    

    constructor(path, isAppend) {
        this.fd = TiviProvider.createOutputFile(path, isAppend);
        if(this.fd === null) throw new IOException("Cannot create output file: "+path);
    }

    write$java_lang_String(input) {
        if(!TiviProvider.writeToFile(this.fd, input)) {
            throw new IOException("Cannot write to file");
        }
    }

    close() {
        TiviProvider.close(this.fd);
    }
}

class TempStorageHandler extends com.montezumba.lib.io.StorageHandler {
    getAppStoragePath() {
        return "_temp_";
    }

    getAppTempPath() {
        return "_app_";
    }
    
    generateFullPath(first, second) {
        return first + "/" + second;
    }

    openOutputFile(path, isAppend) {
        return new TempFileWriter(path, isAppend);
    }

    openFile$java_lang_String$java_lang_String(path, encoding) {
        return new TempFileReader(path, encoding);
    }

    delete(path) {
        TiviProvider.delete(path);
    }

    isExist(path) {
        return TiviProvider.isExist(path);
    }

}

class WebKababComponentManager extends com.montezumba.lib.types.ComponentManager {
    doCreate() {
        com.montezumba.lib.utils.TimerFactory.create(com.montezumba.lib.utils.jsweet.TimerFactoryJSweet);
        com.montezumba.lib.types.MediaLog.create(com.montezumba.lib.types.jsweet.MediaLogJSweet);
        com.montezumba.lib.types.MediaLog.instance().enableAll();
        com.montezumba.lib.io.StorageHandler.create(TempStorageHandler);
    }
}

com.montezumba.lib.types.ComponentManager.create(WebKababComponentManager);
com.montezumba.lib.types.ComponentManager.instance().create();