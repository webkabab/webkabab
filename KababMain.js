
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

                KababMain.prototype.generateTvGuide = function (source, callback, onError) {

                    var batches = [];
                    
                    var that = this;

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
                        //var dateGrabber = java.util.regex.Pattern.compile$java_lang_String(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mCurrentDateGrabber);
                        var dateGrabber = new RegExp(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mCurrentDateGrabber);
                        var programGrabber = (com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mProgramInfoGrabber.length === 0) ? null : java.util.regex.Pattern.compile$java_lang_String(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mProgramInfoGrabber);
                        var matcher = null;
                        var channels = (new java.util.HashSet());
                        com.montezumba.lib.types.MediaLog.instance().debug("Grabbing Channels: ");
						var file = com.montezumba.lib.io.StorageHandler.instance().openFile$java_lang_String$java_lang_String(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mBaseUrl, com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mEncoding);
                        var baseUrl = file.readAll();
                        //com.montezumba.lib.types.MediaLog.instance().debug("baseUrl="+baseUrl);
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
						//console.info("baseUrl="+baseUrl+", dateGrabber="+dateGrabber);
                        
                        var dateMatcher = dateGrabber.exec(baseUrl);
						
                        if (dateMatcher == null) {                            
                            throw new java.io.IOException("Failed to grab date from: " + com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mBaseUrl);
                        }
						
                        var year = dateMatcher.groups.year;						
                        var month = dateMatcher.groups.month;						
                        var day = dateMatcher.groups.day;

                        //var year = dateMatcher.group$string("year");						
                        //var month = dateMatcher.group$string("month");						
                        //var day = dateMatcher.group$string("day");

                        com.montezumba.lib.types.MediaLog.instance().debug("Current date is = " + day + "/" + month + "/" + year);
                        var zone = com.montezumba.lib.utils.TimerFactory.instance().getTimeZoneOffset(com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mCountry);
                        com.montezumba.lib.types.MediaLog.instance().debug("Zone offset is = " + zone);
                        var today = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$int$int$int$int$int$int$int(javaemul.internal.IntegerHelper.parseInt(year), javaemul.internal.IntegerHelper.parseInt(month), javaemul.internal.IntegerHelper.parseInt(day), 0, 0, 0, 0);
                        com.montezumba.lib.types.MediaLog.instance().debug("Today is = " + today.format("%day%-%month%-%year% %hour%:%minute%", true) + " day of week=" + today.getWeekDay(true) + " ordinal=" + com.montezumba.lib.types.TimeStamp.WeekDay[com.montezumba.lib.types.TimeStamp.WeekDay[today.getWeekDay(true)]]);
                        var zoneString = "";
                        if (zone !== 0) {
                            var zoneHours = (zone / 60 | 0);
                            com.montezumba.lib.types.MediaLog.instance().debug("Zone hours raw: "+zoneHours);
                            var zoneHoursStr = new String(Math.abs(zoneHours)).toString();
                            var zoneSign = (zone > 0) ? "+" : "-";
                            if (zoneHours < 10) {
                                zoneHoursStr = "0" + zoneHoursStr;
                            }
                            com.montezumba.lib.types.MediaLog.instance().debug("Zone hours final: "+zoneHours);
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
                                //console.debug("weekDay calc is: "+com.montezumba.lib.types.TimeStamp.WeekDay[com.montezumba.lib.types.TimeStamp.WeekDay[today.getWeekDay(true)]]);
                                if (i < com.montezumba.lib.types.TimeStamp.WeekDay[com.montezumba.lib.types.TimeStamp.WeekDay[today.getWeekDay(true)]]) {
                                    daysOffset = 7 - com.montezumba.lib.types.TimeStamp.WeekDay[com.montezumba.lib.types.TimeStamp.WeekDay[today.getWeekDay(true)]] + i;
                                }
                                else {
                                    daysOffset = i - com.montezumba.lib.types.TimeStamp.WeekDay[com.montezumba.lib.types.TimeStamp.WeekDay[today.getWeekDay(true)]];
                                }
                                if (daysOffset < com.addons.kabab.KababConfig.MAX_TVGUIDE_DAYS) {
                                    //console.debug("days offset for "+i+" is: "+daysOffset);
                                    dates[i] = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$int$int$int$int$int$int$int(javaemul.internal.IntegerHelper.parseInt(year), javaemul.internal.IntegerHelper.parseInt(month), javaemul.internal.IntegerHelper.parseInt(day), 0, 0, 1, 0);
                                    //console.debug("pure date is: "+dates[i].format("%day%-%month%-%year%", true));
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
                                            //var date = dates[i].format("%year%-%month%-%day%", true);
                                            var day = dates[i].format("%day%", true);
                                            var month = dates[i].format("%month%", true);
                                            var year = dates[i].format("%year%", true);
                                         
                                            var dayOrder = dates[i].getDay(true) - today.getDay(true);
                                            var channelUrl = com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mChannelUrl.split("<@1@>").join(channel.id).split("<@2@>").join(weekday).split("<@3@>").join(day).split("<@4@>").join(month).split("<@5@>").join(year).split("<@6@>").join(/* valueOf */ new String(dayOrder).toString());
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
                                                    //com.montezumba.lib.types.MediaLog.instance().debug("Found program url=" + page);
                                                    if(!programPages.contains(page)) {
                                                        //com.montezumba.lib.types.MediaLog.instance().debug("Adding program url=" + page);
                                                        programPages.add(page);
                                                    }
                                                }
                                            }
                                            ;
                                        }
                                        else {
                                            programPages.add(channelPage);
                                        }
                                        
                                        batches.push({'batch': function(date, programPages, channel, channelContent, channelPage) {
                                        
                                        console.debug("parsing programs...");
                                        for (var index123 = programPages.iterator(); index123.hasNext();) {
                                            var page = index123.next();
                                            {
                                                var programsContent = void 0;
                                                //com.montezumba.lib.types.MediaLog.instance().debug("Grabbing programs from=" + page);
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
													programsContent = programsContent.replace(/\\u([0-9]+)/g, "&#x$1");
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
                                                        //com.montezumba.lib.types.MediaLog.instance().debug("name = " + programName);
                                                        programParamsMatcher = programDescGrabber.matcher(programContent);
                                                        if (!programParamsMatcher.find()) {
                                                            throw new java.io.IOException("Failed to grab program description from: " + programContent);
                                                        }
                                                        var programDesc = org.apache.commons.lang3.StringEscapeUtils.unescapeJava(programParamsMatcher.group$int(1));
                                                        //com.montezumba.lib.types.MediaLog.instance().debug("desc = " + programDesc);
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
                                                        //com.montezumba.lib.types.MediaLog.instance().debug("Start time = " + startHours + ":" + startMinutes);
                                                        //com.montezumba.lib.types.MediaLog.instance().debug("End time = " + endHours + ":" + endMinutes);
                                                        var startTime = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$int$int$int$int$int$int$int(date.getYear(true), date.getMonth(true), date.getDay(true), parseInt(startHours), parseInt(startMinutes), 0, 0);
                                                        var endTime = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$int$int$int$int$int$int$int(date.getYear(true), date.getMonth(true), date.getDay(true), parseInt(endHours), parseInt(endMinutes), 0, 0);
                                                        if (startTime.getHour(true) > prevEndHour) {
                                                            startTime.addTime(1 * com.montezumba.lib.types.Constants.DAYS_$LI$());
                                                            endTime.addTime(1 * com.montezumba.lib.types.Constants.DAYS_$LI$());
                                                        }
                                                        else if (startTime.getHour(true) > endTime.getHour(true)) {
                                                            endTime.addTime(1 * com.montezumba.lib.types.Constants.DAYS_$LI$());
                                                        }
                                                        prevEndHour = endTime.getHour(true);
                                                        prevStartHour = startTime.getHour(true);
                                                        //com.montezumba.lib.types.MediaLog.instance().debug("Start time = " + startTime.format("%day%-%month%-%year% %hour%:%minute%", true));
                                                        //com.montezumba.lib.types.MediaLog.instance().debug("End time = " + endTime.format("%day%-%month%-%year% %hour%:%minute%", true));
                                                        var program = new com.montezumba.lib.types.TvProgram(programName);
                                                        program.mChannel = channel.id;
                                                        program.mDesc = programDesc;
                                                        program.mStartTime = startTime;
                                                        program.mEndTime = endTime;                                                                                                                                                                    
                                                        that.writeProgram(program, zoneString, com.addons.kabab.KababConfig.TvGuideSources["_$wrappers"][source].mLanguage);
                                                    }
                                                    
                                                }                                                
                                            }
                                        }
                                        //console.debug("parsing programs.... end");
                                    }, 'date': dates[i], 'programPages': programPages, 'channel': channel, 'channelContent': channelContent, 'channelPage': channelPage});
                                    }
                                    ;
                                }
                            }
                        }
                        batches.push({'batch' : function() {
                            console.debug("final batch...");
                            that.mWriter['write$java_lang_String'](KababMain.XMLTV_FOOTER);
                            com.montezumba.lib.types.MediaLog.instance().debug("Finished Grabbing");
                            com.montezumba.lib.types.MediaLog.instance().debug("Start Rename...");
                            com.montezumba.lib.io.StorageHandler.instance().rename(tempPath, guidePath);
                            com.montezumba.lib.types.MediaLog.instance().debug("End Rename...");
                            that.mWriter.close();
                            if(callback) {
                                console.debug("calling callback...");
                                callback();
                            }

                        }, 'date': null, 'programPages': null, 'channel': null, 'channelContent': null, 'channelPage': null});
                        
                    }
                    catch (e) {
                        console.error(e.message+" at:"+e.fileName+" "+e.lineNumber+" "+e.stack);
                        com.montezumba.lib.io.StorageHandler.instance()["delete"](tempPath);
                        this.mWriter.close();
                        if(onError) onError(e);
                    }
                    /*
                    finally {
                        this.mWriter.close();
                    }
                    */

                    // In order to avoid starving the only thread in JS, we had to divide the execution of this
                    // method into smaller peaces - each running async. but in a fixed order
                    // in JS (earlier versions) we can do it by calling the setTimeout method.
                    // Each 'batch' holds the piece that deals with a specific day and its parameters
                    
                    //console.debug("processing all batches");
                    function processBatch() {
                        console.debug("process batch... start");
                        batch = batches.shift();
                        //console.debug("batch is: "+batch);

                        if(batch) {
                            console.debug("process batch... processing");
                            func = batch.batch;
                            date = batch.date;
                            programPages = batch.programPages;
                            channel = batch.channel;
                            channelContent = batch.channelContent;
                            channelPage = batch.channelPage;
                            try {
                                func(date, programPages, channel, channelContent, channelPage);
                                setTimeout(processBatch, 100);
                            }
                            catch (e) {
                                console.error(e.message+" at:"+e.fileName+" "+e.lineNumber+" "+e.stack);
                                com.montezumba.lib.io.StorageHandler.instance()["delete"](tempPath);
                                that.mWriter.close();
                                if(onError) onError(e);
                            }                                                        
                        }
                        console.debug("process batch... done");
                    }
                    setTimeout(processBatch, 100);
                    
                };


                KababMain.prototype.getMatcher = function (grabber, input) {
                    var result;
                    if (grabber.toString().match(KababMain.FIX_GRABBER_PATTERN_STRING_$LI$())) {
                        com.montezumba.lib.types.MediaLog.instance().debug("Got fix pattern string");
                        return KababMain.sFixGrabberPattern_$LI$().matcher(grabber.toString());
                    }
                    return grabber.matcher(input);
                };
                KababMain.prototype.writeProgram = function (program, zone, language) {
                    //console.debug("writing program..."+program.displayString);
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
                    com.treynix.tiviapplive.provider.AddonHandler.instance().sendIndexerResponse(result);
                    //this.done();                    
                    return;
                };

                KababMain.prototype.requestTvGuide = function(req, callback) {
                    var guide = new com.montezumba.lib.types.TvGuide("Kabab Guide");
                    //var guidePath = window.localStorage.getItem("xmlguide");
                    var guidePath = com.montezumba.lib.io.StorageHandler.instance().getAppStoragePath();
                    guidePath = com.montezumba.lib.io.StorageHandler.instance().generateFullPath(guidePath, com.addons.kabab.KababConfig.XMLTV_PATH);
					console.info("guide path="+guidePath);

                    guide.pathToGuide = guidePath;
                    var refresh = false;
                    var valid = false;
                    if (com.montezumba.lib.io.StorageHandler.instance().isExist(guidePath)) {
                        try {

                            var lastModified = TiviProvider.getLastModifiedDate(req, guidePath);
							if(lastModified === -1) 
								throw new Error("Cannot get last modified of: "+guidePath);
							com.montezumba.lib.types.MediaLog.instance().debug("last modified="+lastModified);
                            guide.startDate = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$long(lastModified);
                            var currentTime = com.montezumba.lib.utils.TimerFactory.instance().getCurrentTime().toLocalTime();
                            com.montezumba.lib.types.MediaLog.instance().debug("Current time = " + currentTime.toString());
                            currentTime.addTime(-com.addons.kabab.KababConfig.TVGUIDE_REFRESH_HOURS * com.montezumba.lib.types.Constants.HOURS_$LI$());
                            com.montezumba.lib.types.MediaLog.instance().debug("Current time = " + currentTime.toString() + " modified time=" + lastModified.toString());
							var lastModifiedDate = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$long(lastModified);
                            if (currentTime.after(lastModifiedDate)) {
                                com.montezumba.lib.types.MediaLog.instance().debug("Need to refresh...");
                                refresh = true;
                            }
                            currentTime = com.montezumba.lib.utils.TimerFactory.instance().getCurrentTime().toLocalTime();
                            currentTime.addTime(-com.addons.kabab.KababConfig.TV_GUIDE_VALIDITY_DAYS * com.montezumba.lib.types.Constants.DAYS_$LI$());
                            if (currentTime.before(lastModifiedDate)) {
                                com.montezumba.lib.types.MediaLog.instance().debug("Tv guide is valid");
                                valid = true;
                            }
                            lastModified += com.addons.kabab.KababConfig.TV_GUIDE_VALIDITY_DAYS * com.montezumba.lib.types.Constants.DAYS_$LI$();
                            guide.endDate = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$long(lastModified);
                        }
                        catch (e) {
							console.error(e.message+" "+e.stack);
                            //com.treynix.tiviapplive.provider.AddonHandler.instance().sendError(this.params, "Failed to open guide file");
                            TiviProvider.sendError(req,"Failed to open guide file: " +guidePath);
                            if(callback) callback();
                            //TiviProvider.done(req);
                        }                        
                    }
                    else {
                        com.montezumba.lib.types.MediaLog.instance().debug("Cannot find guide");
                        refresh = true;
                    }
                    if (valid && !refresh) {
                        com.montezumba.lib.types.MediaLog.instance().debug("Sending tv guide...");
                        //this.result.mediaResults.add(guide.toTrasportableTitle());
						TiviProvider.sendLocalTvGuide(req, "Kabab Hebrew Guide", guidePath, 2); 
                        //TiviProvider.done(req);
                        if(callback) callback();
                        return;                        
                    }
                    if (refresh) {
                        try {
							com.montezumba.lib.types.MediaLog.instance().debug("Need to refresh...");	
                            this.generateTvGuide(com.addons.kabab.KababConfig.TvGuideSources.HOT, function() {
                                if (com.montezumba.lib.io.StorageHandler.instance().isExist(guidePath)) {
                                    /*
                                    guide.startDate = com.montezumba.lib.utils.TimerFactory.instance().getCurrentTime().toLocalTime();
                                    guide.endDate = com.montezumba.lib.utils.TimerFactory.instance().getCurrentTime().toLocalTime();
                                    guide.endDate.addTime(com.addons.kabab.KababConfig.TV_GUIDE_VALIDITY_DAYS * com.montezumba.lib.types.Constants.DAYS_$LI$());                                    
                                    */
                                    TiviProvider.sendLocalTvGuide(req, "Kabab Hebrew Guide", guidePath, 2);
                                    //TiviProvider.done(req);
                                }
                                else {
                                    TiviProvider.reportError(req, "Failed to generate tv-guide (2)");    
                                }                                
                                if(callback) callback();
                            }, function() {
                                TiviProvider.reportError(req, "Failed to generate tv-guide (1)");
                                if(callback) callback();
                            });
                            
                        }
                        catch (e) {
                            com.montezumba.lib.types.MediaLog.instance().error(e.message, e);
                            if (!valid) {
                                TiviProvider.reportError(req, "Failed to generate tv-guide");
                                if(callback) callback();
                                //TiviProvider.done(req);
                            }
                        }                        
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