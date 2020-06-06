var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var com;
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var AddonRequest = (function () {
                    function AddonRequest(source) {
                        var _this = this;
                        this.requestId = null;
                        this.addonAddress = "";
                        this.addonName = "";
                        this.type = null;
                        this.procName = "";
                        this.query = "";
                        this.callback = null;
                        this.active = true;
                        this.timeout = null;
                        this.requestTimeout = 0;
                        this.isVirtual = false;
                        if (((source != null && source instanceof com.montezumba.lib.types.AddonRequest) || source === null)) {
                            var __args = arguments;
                            this.requestId = null;
                            this.addonAddress = "";
                            this.addonName = "";
                            this.type = null;
                            this.procName = "";
                            this.query = "";
                            this.callback = null;
                            this.active = true;
                            this.timeout = null;
                            this.requestTimeout = 0;
                            this.isVirtual = false;
                            (function () {
                                _this.addonAddress = source.addonAddress;
                                _this.addonName = source.addonName;
                                _this.type = source.type;
                                _this.procName = source.procName;
                                _this.query = source.query;
                                _this.callback = source.callback;
                                _this.active = source.active;
                                _this.requestTimeout = source.requestTimeout;
                                _this.timeout = null;
                                _this.requestId = source.requestId;
                                _this.isVirtual = source.isVirtual;
                            })();
                        }
                        else if (source === undefined) {
                            var __args = arguments;
                            this.requestId = null;
                            this.addonAddress = "";
                            this.addonName = "";
                            this.type = null;
                            this.procName = "";
                            this.query = "";
                            this.callback = null;
                            this.active = true;
                            this.timeout = null;
                            this.requestTimeout = 0;
                            this.isVirtual = false;
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    /**
                     *
                     * @return {number}
                     */
                    AddonRequest.prototype.hashCode = function () {
                        var hashCode = new org.apache.commons.lang3.builder.HashCodeBuilder();
                        hashCode.append(this.procName);
                        hashCode.append(this.addonAddress);
                        hashCode.append(this.addonName);
                        hashCode.append(this.query);
                        hashCode.append(this.type);
                        return hashCode.toHashCode();
                    };
                    /**
                     *
                     * @param {*} obj
                     * @return {boolean}
                     */
                    AddonRequest.prototype.equals = function (obj) {
                        if (!(obj != null && obj instanceof com.montezumba.lib.types.AddonRequest))
                            return false;
                        if (obj === this)
                            return true;
                        var rhs = obj;
                        return new org.apache.commons.lang3.builder.EqualsBuilder().append(this.addonAddress, rhs.addonAddress).append(this.addonName, rhs.addonName).append(this.procName, rhs.procName).append(this.type, rhs.type).append(this.query, rhs.query).isEquals();
                    };
                    return AddonRequest;
                }());
                types.AddonRequest = AddonRequest;
                AddonRequest["__class"] = "com.montezumba.lib.types.AddonRequest";
                (function (AddonRequest) {
                    /**
                     * Type of requests
                     * @enum
                     * @property {com.montezumba.lib.types.AddonRequest.AddonMessage} MESSAGE_TO_SEND_INDEXER_QUERY
                     * @property {com.montezumba.lib.types.AddonRequest.AddonMessage} MESSAGE_TO_SEND_TVGUIDE_QUERY
                     * @property {com.montezumba.lib.types.AddonRequest.AddonMessage} MESSAGE_TO_CANCEL_INDEXER_QUERY
                     * @property {com.montezumba.lib.types.AddonRequest.AddonMessage} MESSAGE_TO_PING
                     * @property {com.montezumba.lib.types.AddonRequest.AddonMessage} MESSAGE_FROM_INDEXER_RESULT
                     * @property {com.montezumba.lib.types.AddonRequest.AddonMessage} MESSAGE_FROM_HOST_REQUEST
                     * @property {com.montezumba.lib.types.AddonRequest.AddonMessage} MESSAGE_FROM_PONG
                     * @property {com.montezumba.lib.types.AddonRequest.AddonMessage} MESSAGE_FROM_INDEXER_ERROR
                     * @class
                     */
                    var AddonMessage;
                    (function (AddonMessage) {
                        AddonMessage[AddonMessage["MESSAGE_TO_SEND_INDEXER_QUERY"] = 0] = "MESSAGE_TO_SEND_INDEXER_QUERY";
                        AddonMessage[AddonMessage["MESSAGE_TO_SEND_TVGUIDE_QUERY"] = 1] = "MESSAGE_TO_SEND_TVGUIDE_QUERY";
                        AddonMessage[AddonMessage["MESSAGE_TO_CANCEL_INDEXER_QUERY"] = 2] = "MESSAGE_TO_CANCEL_INDEXER_QUERY";
                        AddonMessage[AddonMessage["MESSAGE_TO_PING"] = 3] = "MESSAGE_TO_PING";
                        AddonMessage[AddonMessage["MESSAGE_FROM_INDEXER_RESULT"] = 4] = "MESSAGE_FROM_INDEXER_RESULT";
                        AddonMessage[AddonMessage["MESSAGE_FROM_HOST_REQUEST"] = 5] = "MESSAGE_FROM_HOST_REQUEST";
                        AddonMessage[AddonMessage["MESSAGE_FROM_PONG"] = 6] = "MESSAGE_FROM_PONG";
                        AddonMessage[AddonMessage["MESSAGE_FROM_INDEXER_ERROR"] = 7] = "MESSAGE_FROM_INDEXER_ERROR";
                    })(AddonMessage = AddonRequest.AddonMessage || (AddonRequest.AddonMessage = {}));
                })(AddonRequest = types.AddonRequest || (types.AddonRequest = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var AddonResponse = (function () {
                    function AddonResponse(requestId, mediaResults) {
                        var _this = this;
                        this.requestId = null;
                        this.mediaResults = null;
                        if (((typeof requestId === 'number') || requestId === null) && ((mediaResults != null && (mediaResults instanceof Array)) || mediaResults === null)) {
                            var __args = arguments;
                            this.requestId = null;
                            this.mediaResults = null;
                            (function () {
                                _this.requestId = requestId;
                                _this.mediaResults = mediaResults;
                            })();
                        }
                        else if (requestId === undefined && mediaResults === undefined) {
                            var __args = arguments;
                            this.requestId = null;
                            this.mediaResults = null;
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    AddonResponse.prototype.importTitles = function (titles) {
                        this.mediaResults = ([]);
                        for (var index121 = 0; index121 < titles.length; index121++) {
                            var title = titles[index121];
                            {
                                if (title != null && (title["__interfaces"] != null && title["__interfaces"].indexOf("com.montezumba.lib.types.Title.Transportable") >= 0 || title.constructor != null && title.constructor["__interfaces"] != null && title.constructor["__interfaces"].indexOf("com.montezumba.lib.types.Title.Transportable") >= 0)) {
                                    /* add */ (this.mediaResults.push(title.toTrasportableTitle()) > 0);
                                }
                                else {
                                    throw new com.montezumba.lib.types.exceptions.AddonException("The title->" + title.displayString + " is not transportable");
                                }
                            }
                        }
                    };
                    return AddonResponse;
                }());
                types.AddonResponse = AddonResponse;
                AddonResponse["__class"] = "com.montezumba.lib.types.AddonResponse";
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var ARGB = (function () {
                    function ARGB(a, r, g, b) {
                        if (this.red === undefined)
                            this.red = 0;
                        if (this.blue === undefined)
                            this.blue = 0;
                        if (this.green === undefined)
                            this.green = 0;
                        if (this.alpha === undefined)
                            this.alpha = 0;
                        this.red = r;
                        this.green = g;
                        this.blue = b;
                        this.alpha = a;
                    }
                    return ARGB;
                }());
                types.ARGB = ARGB;
                ARGB["__class"] = "com.montezumba.lib.types.ARGB";
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var Component = (function () {
                    function Component() {
                        com.montezumba.lib.types.ComponentManager.instance().register(this);
                    }
                    /**
                     * An optional callback to be executed after *ALL* other components were finished their "init()"
                     * This is useful, for example, to perform some logic that may trigger events (if performed during init(), not all listeners may have been registered)
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    Component.prototype.afterAllInit = function (mode) {
                    };
                    return Component;
                }());
                types.Component = Component;
                Component["__class"] = "com.montezumba.lib.types.Component";
                (function (Component) {
                    var InitMode;
                    (function (InitMode) {
                        InitMode[InitMode["NO_INIT"] = 0] = "NO_INIT";
                        InitMode[InitMode["WARM_UP"] = 1] = "WARM_UP";
                        InitMode[InitMode["BACKGROUND_INIT"] = 2] = "BACKGROUND_INIT";
                        InitMode[InitMode["NORMAL_INIT"] = 3] = "NORMAL_INIT";
                    })(InitMode = Component.InitMode || (Component.InitMode = {}));
                    /** @ignore */
                    var InitMode_$WRAPPER = (function () {
                        function InitMode_$WRAPPER(_$ordinal, _$name, level) {
                            this._$ordinal = _$ordinal;
                            this._$name = _$name;
                            if (this.level === undefined)
                                this.level = 0;
                            this.level = level;
                        }
                        InitMode_$WRAPPER.prototype.name = function () { return this._$name; };
                        InitMode_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
                        return InitMode_$WRAPPER;
                    }());
                    Component.InitMode_$WRAPPER = InitMode_$WRAPPER;
                    InitMode["__class"] = "com.montezumba.lib.types.Component.InitMode";
                    InitMode["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
                    InitMode["_$wrappers"] = [new InitMode_$WRAPPER(0, "NO_INIT", -1), new InitMode_$WRAPPER(1, "WARM_UP", 0), new InitMode_$WRAPPER(2, "BACKGROUND_INIT", 1), new InitMode_$WRAPPER(3, "NORMAL_INIT", 2)];
                })(Component = types.Component || (types.Component = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var ComponentManager = (function () {
                    function ComponentManager() {
                        /*private*/ this.mIsCreated = false;
                        /*private*/ this.mIsInitialized = false;
                        /*private*/ this.mComponentSet = ([]);
                        /*private*/ this.mCurrentInitMode = com.montezumba.lib.types.Component.InitMode.NO_INIT;
                    }
                    ComponentManager.instance = function () {
                        return ComponentManager.__instance;
                    };
                    ComponentManager.create = function (type) {
                        if (ComponentManager.__instance == null) {
                            try {
                                ComponentManager.__instance = new (type)();
                            }
                            catch (__e) {
                                if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                    var e = __e;
                                    console.error(e.message, e);
                                }
                                if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                    var e = __e;
                                    console.error(e.message, e);
                                }
                            }
                            ;
                        }
                    };
                    ComponentManager.prototype.create = function () {
                        if (!this.mIsCreated) {
                            this.doCreate();
                            this.mIsCreated = true;
                        }
                    };
                    ComponentManager.prototype.init = function (initMode) {
                        com.montezumba.lib.types.MediaLog.instance().debug("Init mode = " + initMode);
                        if (this.mIsInitialized && com.montezumba.lib.types.Component.InitMode["_$wrappers"][initMode].level > com.montezumba.lib.types.Component.InitMode["_$wrappers"][this.mCurrentInitMode].level) {
                            com.montezumba.lib.types.MediaLog.instance().debug("destroying existing instance");
                            this.destroy();
                        }
                        if (!this.mIsInitialized) {
                            this.doInit();
                            for (var index122 = 0; index122 < this.mComponentSet.length; index122++) {
                                var component = this.mComponentSet[index122];
                                {
                                    component.init(initMode);
                                    com.montezumba.lib.types.MediaLog.instance().debug("end init for: " + component.toString());
                                }
                            }
                            this.mIsInitialized = true;
                            this.mCurrentInitMode = initMode;
                            for (var index123 = 0; index123 < this.mComponentSet.length; index123++) {
                                var component = this.mComponentSet[index123];
                                {
                                    component.afterAllInit(initMode);
                                    com.montezumba.lib.types.MediaLog.instance().debug("end after-init init for: " + component.toString());
                                }
                            }
                            com.montezumba.lib.types.MediaLog.instance().debug("All initializations were completed");
                        }
                    };
                    ComponentManager.prototype.destroy = function () {
                        com.montezumba.lib.types.MediaLog.instance().debug("Destroying...");
                        if (this.mIsCreated && this.mIsInitialized) {
                            this.doDestroy();
                            for (var index124 = 0; index124 < this.mComponentSet.length; index124++) {
                                var component = this.mComponentSet[index124];
                                {
                                    component.destroy();
                                }
                            }
                            this.mIsInitialized = false;
                        }
                    };
                    ComponentManager.prototype.isCreated = function () {
                        return this.mIsCreated;
                    };
                    ComponentManager.prototype.isInitialized = function () {
                        return this.mIsInitialized;
                    };
                    ComponentManager.prototype.register = function (component) {
                        /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                            s.push(e);
                            return true;
                        }
                        else {
                            return false;
                        } })(this.mComponentSet, component);
                    };
                    ComponentManager.prototype.getInitMode = function () {
                        return this.mCurrentInitMode;
                    };
                    return ComponentManager;
                }());
                ComponentManager.__instance = null;
                types.ComponentManager = ComponentManager;
                ComponentManager["__class"] = "com.montezumba.lib.types.ComponentManager";
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var Constants = (function () {
                    function Constants() {
                    }
                    Constants.SECONDS_$LI$ = function () { if (Constants.SECONDS == null)
                        Constants.SECONDS = 1000 * Constants.MILLISECONDS; return Constants.SECONDS; };
                    ;
                    Constants.MINUTES_$LI$ = function () { if (Constants.MINUTES == null)
                        Constants.MINUTES = 60 * Constants.SECONDS_$LI$(); return Constants.MINUTES; };
                    ;
                    Constants.HOURS_$LI$ = function () { if (Constants.HOURS == null)
                        Constants.HOURS = 60 * Constants.MINUTES_$LI$(); return Constants.HOURS; };
                    ;
                    Constants.DAYS_$LI$ = function () { if (Constants.DAYS == null)
                        Constants.DAYS = 24 * Constants.HOURS_$LI$(); return Constants.DAYS; };
                    ;
                    Constants.WEEKS_$LI$ = function () { if (Constants.WEEKS == null)
                        Constants.WEEKS = 7 * Constants.DAYS_$LI$(); return Constants.WEEKS; };
                    ;
                    Constants.KB_$LI$ = function () { if (Constants.KB == null)
                        Constants.KB = 1024 * Constants.BYTES; return Constants.KB; };
                    ;
                    Constants.MB_$LI$ = function () { if (Constants.MB == null)
                        Constants.MB = 1024 * Constants.KB_$LI$(); return Constants.MB; };
                    ;
                    Constants.GB_$LI$ = function () { if (Constants.GB == null)
                        Constants.GB = 1024 * Constants.MB_$LI$(); return Constants.GB; };
                    ;
                    return Constants;
                }());
                /**
                 * The hour when morning begins (for most people)
                 */
                Constants.MORNING = 5;
                /**
                 * The hour when night begins (for most people)
                 */
                Constants.NIGHT = 1;
                /**
                 * Milli-to-seconds factor
                 */
                Constants.IN_SECONDS = 0.001;
                /**
                 * Milli-to-milli seconds factor (just for readability/completeness)
                 */
                Constants.IN_MILLIS = 1;
                /**
                 * Milli-to-micro seconds factor
                 */
                Constants.IN_MICROS = 1000;
                /**
                 * Milli-to-nano seconds factor
                 */
                Constants.IN_NANOS = 1000000;
                /**
                 * Number of milliseconds in a millisecond
                 */
                Constants.MILLISECONDS = 1;
                /**
                 * Number of bytes in a bit
                 */
                Constants.BITS = (1 / 8 | 0);
                /**
                 * Number of bytes in a byte
                 */
                Constants.BYTES = 1;
                /**
                 * Percentage
                 */
                Constants.PERCENT = 0.01;
                /**
                 * Number of pixels in 720P resolution
                 */
                Constants.HD_720P_PIXELS_HEIGHT = 720;
                /**
                 * Number of pixels in 1080P resolution
                 */
                Constants.HD_1080P_PIXELS_HEIGHT = 1080;
                /**
                 * Number of pixels in 4K resolution
                 */
                Constants.HD_4K_PIXELS_HEIGHT = 2160;
                types.Constants = Constants;
                Constants["__class"] = "com.montezumba.lib.types.Constants";
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var AddonException = (function (_super) {
                        __extends(AddonException, _super);
                        function AddonException(string) {
                            var _this = this;
                            if (((typeof string === 'string') || string === null)) {
                                var __args = arguments;
                                _this = _super.call(this, string) || this;
                                _this.message = string;
                                Object.setPrototypeOf(_this, AddonException.prototype);
                            }
                            else if (((string != null && (string["__classes"] && string["__classes"].indexOf("java.lang.Exception") >= 0) || string != null && string instanceof Error) || string === null)) {
                                var __args = arguments;
                                var e = __args[0];
                                _this = _super.call(this, e) || this;
                                _this.message = e;
                                Object.setPrototypeOf(_this, AddonException.prototype);
                            }
                            else if (string === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, AddonException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return AddonException;
                    }(Error));
                    /**
                     *
                     */
                    AddonException.serialVersionUID = 5925170631980049632;
                    exceptions.AddonException = AddonException;
                    AddonException["__class"] = "com.montezumba.lib.types.exceptions.AddonException";
                    AddonException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var DataBaseException = (function (_super) {
                        __extends(DataBaseException, _super);
                        function DataBaseException(msg, e) {
                            var _this = this;
                            if (((typeof msg === 'string') || msg === null) && ((e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.Exception") >= 0) || e != null && e instanceof Error) || e === null)) {
                                var __args = arguments;
                                _this = _super.call(this, msg + "\n" + e.message) || this;
                                _this.message = msg + "\n" + e.message;
                                Object.setPrototypeOf(_this, DataBaseException.prototype);
                            }
                            else if (((msg != null && (msg["__classes"] && msg["__classes"].indexOf("java.lang.Exception") >= 0) || msg != null && msg instanceof Error) || msg === null) && e === undefined) {
                                var __args = arguments;
                                var e_1 = __args[0];
                                _this = _super.call(this, e_1) || this;
                                _this.message = e_1;
                                Object.setPrototypeOf(_this, DataBaseException.prototype);
                            }
                            else if (((typeof msg === 'string') || msg === null) && e === undefined) {
                                var __args = arguments;
                                _this = _super.call(this, msg) || this;
                                _this.message = msg;
                                Object.setPrototypeOf(_this, DataBaseException.prototype);
                            }
                            else if (msg === undefined && e === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, DataBaseException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return DataBaseException;
                    }(Error));
                    /**
                     *
                     */
                    DataBaseException.serialVersionUID = 1957689991372158051;
                    exceptions.DataBaseException = DataBaseException;
                    DataBaseException["__class"] = "com.montezumba.lib.types.exceptions.DataBaseException";
                    DataBaseException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var MemoryPoolException = (function (_super) {
                        __extends(MemoryPoolException, _super);
                        function MemoryPoolException(e) {
                            var _this = this;
                            if (((e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.Exception") >= 0) || e != null && e instanceof Error) || e === null)) {
                                var __args = arguments;
                                _this = _super.call(this, e) || this;
                                _this.message = e;
                                Object.setPrototypeOf(_this, MemoryPoolException.prototype);
                            }
                            else if (((typeof e === 'string') || e === null)) {
                                var __args = arguments;
                                var msg = __args[0];
                                _this = _super.call(this, msg) || this;
                                _this.message = msg;
                                Object.setPrototypeOf(_this, MemoryPoolException.prototype);
                            }
                            else if (e === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, MemoryPoolException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return MemoryPoolException;
                    }(Error));
                    /**
                     *
                     */
                    MemoryPoolException.serialVersionUID = 1957689991372158052;
                    exceptions.MemoryPoolException = MemoryPoolException;
                    MemoryPoolException["__class"] = "com.montezumba.lib.types.exceptions.MemoryPoolException";
                    MemoryPoolException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var NetworkException = (function (_super) {
                        __extends(NetworkException, _super);
                        function NetworkException(msg) {
                            var _this = this;
                            if (((typeof msg === 'string') || msg === null)) {
                                var __args = arguments;
                                _this = _super.call(this, msg) || this;
                                _this.message = msg;
                                Object.setPrototypeOf(_this, NetworkException.prototype);
                            }
                            else if (((msg != null && (msg["__classes"] && msg["__classes"].indexOf("java.lang.Exception") >= 0) || msg != null && msg instanceof Error) || msg === null)) {
                                var __args = arguments;
                                var e = __args[0];
                                _this = _super.call(this, e) || this;
                                _this.message = e;
                                Object.setPrototypeOf(_this, NetworkException.prototype);
                            }
                            else if (msg === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, NetworkException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return NetworkException;
                    }(Error));
                    /**
                     *
                     */
                    NetworkException.serialVersionUID = -2101550977684696129;
                    exceptions.NetworkException = NetworkException;
                    NetworkException["__class"] = "com.montezumba.lib.types.exceptions.NetworkException";
                    NetworkException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var NotEnoughSpaceException = (function (_super) {
                        __extends(NotEnoughSpaceException, _super);
                        function NotEnoughSpaceException() {
                            var _this = _super.call(this) || this;
                            Object.setPrototypeOf(_this, NotEnoughSpaceException.prototype);
                            return _this;
                        }
                        return NotEnoughSpaceException;
                    }(Error));
                    /**
                     *
                     */
                    NotEnoughSpaceException.serialVersionUID = -1595373174351769408;
                    exceptions.NotEnoughSpaceException = NotEnoughSpaceException;
                    NotEnoughSpaceException["__class"] = "com.montezumba.lib.types.exceptions.NotEnoughSpaceException";
                    NotEnoughSpaceException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var ParserException = (function (_super) {
                        __extends(ParserException, _super);
                        function ParserException(msg) {
                            var _this = this;
                            if (((typeof msg === 'string') || msg === null)) {
                                var __args = arguments;
                                _this = _super.call(this, msg) || this;
                                _this.message = msg;
                                Object.setPrototypeOf(_this, ParserException.prototype);
                            }
                            else if (((msg != null && (msg["__classes"] && msg["__classes"].indexOf("java.lang.Exception") >= 0) || msg != null && msg instanceof Error) || msg === null)) {
                                var __args = arguments;
                                var e = __args[0];
                                _this = _super.call(this, e) || this;
                                _this.message = e;
                                Object.setPrototypeOf(_this, ParserException.prototype);
                            }
                            else if (msg === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, ParserException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return ParserException;
                    }(Error));
                    /**
                     *
                     */
                    ParserException.serialVersionUID = -7392666000909526654;
                    exceptions.ParserException = ParserException;
                    ParserException["__class"] = "com.montezumba.lib.types.exceptions.ParserException";
                    ParserException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var RecordingException = (function (_super) {
                        __extends(RecordingException, _super);
                        function RecordingException(error) {
                            var _this = this;
                            if (((typeof error === 'string') || error === null)) {
                                var __args = arguments;
                                _this = _super.call(this, error) || this;
                                _this.message = error;
                                Object.setPrototypeOf(_this, RecordingException.prototype);
                            }
                            else if (((error != null && (error["__classes"] && error["__classes"].indexOf("java.lang.Exception") >= 0) || error != null && error instanceof Error) || error === null)) {
                                var __args = arguments;
                                var e = __args[0];
                                _this = _super.call(this, e) || this;
                                _this.message = e;
                                Object.setPrototypeOf(_this, RecordingException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return RecordingException;
                    }(Error));
                    /**
                     *
                     */
                    RecordingException.serialVersionUID = 1454314607432399773;
                    exceptions.RecordingException = RecordingException;
                    RecordingException["__class"] = "com.montezumba.lib.types.exceptions.RecordingException";
                    RecordingException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var RegistryException = (function (_super) {
                        __extends(RegistryException, _super);
                        function RegistryException(e) {
                            var _this = this;
                            if (((e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.Exception") >= 0) || e != null && e instanceof Error) || e === null)) {
                                var __args = arguments;
                                _this = _super.call(this, e) || this;
                                _this.message = e;
                                Object.setPrototypeOf(_this, RegistryException.prototype);
                            }
                            else if (((typeof e === 'string') || e === null)) {
                                var __args = arguments;
                                var msg = __args[0];
                                _this = _super.call(this, msg) || this;
                                _this.message = msg;
                                Object.setPrototypeOf(_this, RegistryException.prototype);
                            }
                            else if (e === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, RegistryException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return RegistryException;
                    }(Error));
                    /**
                     *
                     */
                    RegistryException.serialVersionUID = 1957689991372168051;
                    exceptions.RegistryException = RegistryException;
                    RegistryException["__class"] = "com.montezumba.lib.types.exceptions.RegistryException";
                    RegistryException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var ScriptException = (function (_super) {
                        __extends(ScriptException, _super);
                        function ScriptException(e) {
                            var _this = this;
                            if (((e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.Exception") >= 0) || e != null && e instanceof Error) || e === null)) {
                                var __args = arguments;
                                _this = _super.call(this, e) || this;
                                _this.message = e;
                                Object.setPrototypeOf(_this, ScriptException.prototype);
                            }
                            else if (((typeof e === 'string') || e === null)) {
                                var __args = arguments;
                                var msg = __args[0];
                                _this = _super.call(this, msg) || this;
                                _this.message = msg;
                                Object.setPrototypeOf(_this, ScriptException.prototype);
                            }
                            else if (e === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, ScriptException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return ScriptException;
                    }(Error));
                    /**
                     *
                     */
                    ScriptException.serialVersionUID = -8195439605376607685;
                    exceptions.ScriptException = ScriptException;
                    ScriptException["__class"] = "com.montezumba.lib.types.exceptions.ScriptException";
                    ScriptException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var SecurityException = (function (_super) {
                        __extends(SecurityException, _super);
                        function SecurityException(e) {
                            var _this = this;
                            if (((e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.Exception") >= 0) || e != null && e instanceof Error) || e === null)) {
                                var __args = arguments;
                                _this = _super.call(this, e) || this;
                                _this.message = e;
                                Object.setPrototypeOf(_this, SecurityException.prototype);
                            }
                            else if (((typeof e === 'string') || e === null)) {
                                var __args = arguments;
                                var msg = __args[0];
                                _this = _super.call(this, msg) || this;
                                _this.message = msg;
                                Object.setPrototypeOf(_this, SecurityException.prototype);
                            }
                            else if (e === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, SecurityException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return SecurityException;
                    }(Error));
                    /**
                     *
                     */
                    SecurityException.serialVersionUID = -8195439605376607685;
                    exceptions.SecurityException = SecurityException;
                    SecurityException["__class"] = "com.montezumba.lib.types.exceptions.SecurityException";
                    SecurityException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var SharedObjectLostException = (function (_super) {
                        __extends(SharedObjectLostException, _super);
                        function SharedObjectLostException(msg) {
                            var _this = this;
                            if (((typeof msg === 'string') || msg === null)) {
                                var __args = arguments;
                                _this = _super.call(this, msg) || this;
                                _this.message = msg;
                                Object.setPrototypeOf(_this, SharedObjectLostException.prototype);
                            }
                            else if (((msg != null && (msg["__classes"] && msg["__classes"].indexOf("java.lang.Exception") >= 0) || msg != null && msg instanceof Error) || msg === null)) {
                                var __args = arguments;
                                var e_2 = __args[0];
                                _this = _super.call(this, e_2) || this;
                                _this.message = e_2;
                                Object.setPrototypeOf(_this, SharedObjectLostException.prototype);
                                (function () {
                                    com.montezumba.lib.types.MediaLog.instance().error$java_lang_String$java_lang_Throwable("shared object lost", e_2);
                                    _this.setStackTrace(e_2.getStackTrace());
                                })();
                            }
                            else if (msg === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, SharedObjectLostException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return SharedObjectLostException;
                    }(Error));
                    /**
                     *
                     */
                    SharedObjectLostException.serialVersionUID = 7765687294960490367;
                    exceptions.SharedObjectLostException = SharedObjectLostException;
                    SharedObjectLostException["__class"] = "com.montezumba.lib.types.exceptions.SharedObjectLostException";
                    SharedObjectLostException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var WorkerException = (function (_super) {
                        __extends(WorkerException, _super);
                        function WorkerException(msg) {
                            var _this = this;
                            if (((typeof msg === 'string') || msg === null)) {
                                var __args = arguments;
                                _this = _super.call(this, msg) || this;
                                _this.message = msg;
                                Object.setPrototypeOf(_this, WorkerException.prototype);
                            }
                            else if (((msg != null && (msg["__classes"] && msg["__classes"].indexOf("java.lang.Exception") >= 0) || msg != null && msg instanceof Error) || msg === null)) {
                                var __args = arguments;
                                var e_3 = __args[0];
                                _this = _super.call(this, e_3) || this;
                                _this.message = e_3;
                                Object.setPrototypeOf(_this, WorkerException.prototype);
                                (function () {
                                    com.montezumba.lib.types.MediaLog.instance().error$java_lang_String$java_lang_Throwable("worker exception", e_3);
                                    _this.setStackTrace(e_3.getStackTrace());
                                })();
                            }
                            else if (msg === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, WorkerException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return WorkerException;
                    }(Error));
                    WorkerException.serialVersionUID = 1;
                    exceptions.WorkerException = WorkerException;
                    WorkerException["__class"] = "com.montezumba.lib.types.exceptions.WorkerException";
                    WorkerException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var exceptions;
                (function (exceptions) {
                    var XMLException = (function (_super) {
                        __extends(XMLException, _super);
                        function XMLException(msg) {
                            var _this = this;
                            if (((typeof msg === 'string') || msg === null)) {
                                var __args = arguments;
                                _this = _super.call(this, msg) || this;
                                _this.message = msg;
                                Object.setPrototypeOf(_this, XMLException.prototype);
                            }
                            else if (((msg != null && (msg["__classes"] && msg["__classes"].indexOf("java.lang.Exception") >= 0) || msg != null && msg instanceof Error) || msg === null)) {
                                var __args = arguments;
                                var e = __args[0];
                                _this = _super.call(this, e) || this;
                                _this.message = e;
                                Object.setPrototypeOf(_this, XMLException.prototype);
                            }
                            else if (msg === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, XMLException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return XMLException;
                    }(Error));
                    /**
                     *
                     */
                    XMLException.serialVersionUID = -2844743933882662796;
                    exceptions.XMLException = XMLException;
                    XMLException["__class"] = "com.montezumba.lib.types.exceptions.XMLException";
                    XMLException["__interfaces"] = ["java.io.Serializable"];
                })(exceptions = types.exceptions || (types.exceptions = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var PlaybackInfo = (function () {
                    function PlaybackInfo() {
                        this.height = -1;
                        this.width = -1;
                        this.videoFrameRate = -1;
                        this.audioFrameRate = -1;
                        this.language = "?";
                        this.coding = "?";
                        this.bitRate = -1;
                        this.downloadRate = -1;
                        this.flag3D = false;
                    }
                    return PlaybackInfo;
                }());
                types.PlaybackInfo = PlaybackInfo;
                PlaybackInfo["__class"] = "com.montezumba.lib.types.PlaybackInfo";
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var PlayerException = (function (_super) {
                    __extends(PlayerException, _super);
                    function PlayerException(msg) {
                        var _this = this;
                        if (((typeof msg === 'string') || msg === null)) {
                            var __args = arguments;
                            _this = _super.call(this, msg) || this;
                            _this.message = msg;
                            Object.setPrototypeOf(_this, PlayerException.prototype);
                        }
                        else if (msg === undefined) {
                            var __args = arguments;
                            _this = _super.call(this) || this;
                            Object.setPrototypeOf(_this, PlayerException.prototype);
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    return PlayerException;
                }(Error));
                /**
                 *
                 */
                PlayerException.serialVersionUID = 2989145950521159179;
                types.PlayerException = PlayerException;
                PlayerException["__class"] = "com.montezumba.lib.types.PlayerException";
                PlayerException["__interfaces"] = ["java.io.Serializable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var StorageItem = (function () {
                    function StorageItem() {
                        if (this.path === undefined)
                            this.path = null;
                        if (this.type === undefined)
                            this.type = null;
                    }
                    return StorageItem;
                }());
                types.StorageItem = StorageItem;
                StorageItem["__class"] = "com.montezumba.lib.types.StorageItem";
                (function (StorageItem) {
                    var StorageItemType;
                    (function (StorageItemType) {
                        StorageItemType[StorageItemType["FILE"] = 0] = "FILE";
                        StorageItemType[StorageItemType["FOLDER"] = 1] = "FOLDER";
                    })(StorageItemType = StorageItem.StorageItemType || (StorageItem.StorageItemType = {}));
                })(StorageItem = types.StorageItem || (types.StorageItem = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var TimeStamp = (function () {
                    function TimeStamp(year, month, day, hour, minute, second, timezoneMinutesOffset) {
                        var _this = this;
                        this.mLocalTime = new TimeStamp.DateTime(this);
                        this.mUTCTime = new TimeStamp.DateTime(this);
                        this.mUTCMillis = 0;
                        this.mTimezoneMinutesOffset = 0;
                        if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof day === 'number') || day === null) && ((typeof hour === 'number') || hour === null) && ((typeof minute === 'number') || minute === null) && ((typeof second === 'number') || second === null) && ((typeof timezoneMinutesOffset === 'number') || timezoneMinutesOffset === null)) {
                            var __args = arguments;
                            this.mLocalTime = new TimeStamp.DateTime(this);
                            this.mUTCTime = new TimeStamp.DateTime(this);
                            this.mUTCMillis = 0;
                            this.mTimezoneMinutesOffset = 0;
                            (function () {
                                if (year < 1970)
                                    throw Object.defineProperty(new Error("Invalid year | " + year), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                if (month < 1 || month > 12)
                                    throw Object.defineProperty(new Error("Invalid month | " + month), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                if (day < 1 || day > 31)
                                    throw Object.defineProperty(new Error("Invalid day | " + day), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                if (hour < 0 || hour > 59)
                                    throw Object.defineProperty(new Error("Invalid hour | " + hour), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                if (minute < 0 || minute > 59)
                                    throw Object.defineProperty(new Error("Invalid minute | " + minute), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                if (second < 0 || second > 59)
                                    throw Object.defineProperty(new Error("Invalid hour | " + second), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                if (timezoneMinutesOffset < -12 * 60 || timezoneMinutesOffset > 12 * 60)
                                    throw Object.defineProperty(new Error("Invalid timezone | " + timezoneMinutesOffset), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                _this.mLocalTime.year = year;
                                _this.mLocalTime.month = month;
                                _this.mLocalTime.day = day;
                                _this.mLocalTime.hour = hour;
                                _this.mLocalTime.minute = minute;
                                _this.mLocalTime.second = second;
                                _this.mTimezoneMinutesOffset = timezoneMinutesOffset;
                                _this.mUTCMillis = _this.packTimeStamp(_this.mLocalTime, _this.mTimezoneMinutesOffset);
                                _this.mLocalTime.weekDay = _this._getWeekDay(_this.mUTCMillis, _this.mTimezoneMinutesOffset);                                
                                _this.mLocalTime.weekDay = (_this.mLocalTime.weekDay + 0) % 7; // TODO: Patch for wrong week of day calculation
                                if (_this.mTimezoneMinutesOffset !== 0) {
                                    _this.mUTCTime = _this.unpackTimeStamp(_this.mUTCMillis - _this.mTimezoneMinutesOffset * com.montezumba.lib.types.Constants.MINUTES_$LI$());
                                }
                                else {
                                    _this.mUTCTime = new TimeStamp.DateTime(_this, _this.mLocalTime);
                                }
                            })();
                        }
                        else if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && day === undefined && hour === undefined && minute === undefined && second === undefined && timezoneMinutesOffset === undefined) {
                            var __args = arguments;
                            var milliseconds_1 = __args[0];
                            var timezoneMinutesOffset_1 = __args[1];
                            this.mLocalTime = new TimeStamp.DateTime(this);
                            this.mUTCTime = new TimeStamp.DateTime(this);
                            this.mUTCMillis = 0;
                            this.mTimezoneMinutesOffset = 0;
                            (function () {
                                if (milliseconds_1 < 0)
                                    throw Object.defineProperty(new Error("Invalid milliseconds | " + milliseconds_1), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                _this.mUTCMillis = milliseconds_1;
                                _this.mTimezoneMinutesOffset = timezoneMinutesOffset_1;
                                _this.mLocalTime = _this.unpackTimeStamp(milliseconds_1 + _this.mTimezoneMinutesOffset * com.montezumba.lib.types.Constants.MINUTES_$LI$());
                                if (_this.mTimezoneMinutesOffset !== 0) {
                                    _this.mUTCTime = _this.unpackTimeStamp(_this.mUTCMillis);
                                }
                                else {
                                    _this.mUTCTime = new TimeStamp.DateTime(_this, _this.mLocalTime);
                                }
                            })();
                        }
                        else if (year === undefined && month === undefined && day === undefined && hour === undefined && minute === undefined && second === undefined && timezoneMinutesOffset === undefined) {
                            var __args = arguments;
                            this.mLocalTime = new TimeStamp.DateTime(this);
                            this.mUTCTime = new TimeStamp.DateTime(this);
                            this.mUTCMillis = 0;
                            this.mTimezoneMinutesOffset = 0;
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    TimeStamp.sStringBuilder_$LI$ = function () { if (TimeStamp.sStringBuilder == null)
                        TimeStamp.sStringBuilder = { str: "", toString: function () { return this.str; } }; return TimeStamp.sStringBuilder; };
                    ;
                    TimeStamp.sBuilderLock_$LI$ = function () { if (TimeStamp.sBuilderLock == null)
                        TimeStamp.sBuilderLock = new Object(); return TimeStamp.sBuilderLock; };
                    ;
                    /**
                     * Represent as ISO 8601 Date/Time string (UTC time)
                     * @return {string}
                     */
                    TimeStamp.prototype.toString = function () {
                        return this.format("%year%-%month%-%day% %hour%:%minute%:%second%.%nano%", false);
                    };
                    /**
                     * Format the date-time according to the given format
                     * @param {string} formatStr - user format for which "%%" match time element (for example: "%day%-%month%-%year%" will format as 22.05.2016) Valid options are: day,month,year,hour,minute,second,epoch,nano
                     * @return
                     * @param {boolean} isUTC
                     * @return {string}
                     */
                    TimeStamp.prototype.format = function (formatStr, isUTC) {
                        {
                            var dt_1;
                            if (isUTC) {
                                dt_1 = this.mUTCTime;
                            }
                            else {
                                dt_1 = this.mLocalTime;
                            }
                            var yearString = ('' + (dt_1.year));
                            if (yearString.length < 4) {
                                throw Object.defineProperty(new Error("TimeStamp: error - yearString is " + yearString), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                            }
                            /* setLength */ (function (sb, length) { return sb.str = sb.str.substring(0, length); })(TimeStamp.sStringBuilder_$LI$(), 0);
                            /* append */ (function (sb) { sb.str = sb.str.concat(('' + (dt_1.month))); return sb; })(TimeStamp.sStringBuilder_$LI$());
                            if (TimeStamp.sStringBuilder_$LI$().str.length < 2) {
                                if (TimeStamp.sStringBuilder_$LI$().str.length !== 1)
                                    throw Object.defineProperty(new Error("TimeStamp: error - monthString is " + TimeStamp.sStringBuilder_$LI$().str), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                /* insert */ (function (sb, index, c) { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(TimeStamp.sStringBuilder_$LI$(), 0, '0');
                            }
                            var monthString = TimeStamp.sStringBuilder_$LI$().str;
                            /* setLength */ (function (sb, length) { return sb.str = sb.str.substring(0, length); })(TimeStamp.sStringBuilder_$LI$(), 0);
                            /* append */ (function (sb) { sb.str = sb.str.concat(('' + (dt_1.day))); return sb; })(TimeStamp.sStringBuilder_$LI$());
                            if (TimeStamp.sStringBuilder_$LI$().str.length < 2) {
                                if (TimeStamp.sStringBuilder_$LI$().str.length !== 1)
                                    throw Object.defineProperty(new Error("TimeStamp: error - dayString is " + TimeStamp.sStringBuilder_$LI$().str), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                /* insert */ (function (sb, index, c) { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(TimeStamp.sStringBuilder_$LI$(), 0, '0');
                            }
                            var dayString = TimeStamp.sStringBuilder_$LI$().str;
                            /* setLength */ (function (sb, length) { return sb.str = sb.str.substring(0, length); })(TimeStamp.sStringBuilder_$LI$(), 0);
                            /* append */ (function (sb) { sb.str = sb.str.concat(('' + (dt_1.hour))); return sb; })(TimeStamp.sStringBuilder_$LI$());
                            if (TimeStamp.sStringBuilder_$LI$().str.length < 2) {
                                if (TimeStamp.sStringBuilder_$LI$().str.length !== 1)
                                    throw Object.defineProperty(new Error("TimeStamp: error - hourString is " + TimeStamp.sStringBuilder_$LI$().str), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                /* insert */ (function (sb, index, c) { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(TimeStamp.sStringBuilder_$LI$(), 0, '0');
                            }
                            var hourString = TimeStamp.sStringBuilder_$LI$().str;
                            /* setLength */ (function (sb, length) { return sb.str = sb.str.substring(0, length); })(TimeStamp.sStringBuilder_$LI$(), 0);
                            /* append */ (function (sb) { sb.str = sb.str.concat(('' + (dt_1.minute))); return sb; })(TimeStamp.sStringBuilder_$LI$());
                            if (TimeStamp.sStringBuilder_$LI$().str.length < 2) {
                                if (TimeStamp.sStringBuilder_$LI$().str.length !== 1)
                                    throw Object.defineProperty(new Error("TimeStamp: error - minuteString is " + TimeStamp.sStringBuilder_$LI$().str), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                /* insert */ (function (sb, index, c) { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(TimeStamp.sStringBuilder_$LI$(), 0, '0');
                            }
                            var minuteString = TimeStamp.sStringBuilder_$LI$().str;
                            /* setLength */ (function (sb, length) { return sb.str = sb.str.substring(0, length); })(TimeStamp.sStringBuilder_$LI$(), 0);
                            /* append */ (function (sb) { sb.str = sb.str.concat(('' + ((Math.floor(dt_1.second) | 0)))); return sb; })(TimeStamp.sStringBuilder_$LI$());
                            if (TimeStamp.sStringBuilder_$LI$().str.length < 2) {
                                if (TimeStamp.sStringBuilder_$LI$().str.length !== 1)
                                    throw Object.defineProperty(new Error("TimeStamp: error - secondString is " + TimeStamp.sStringBuilder_$LI$().str), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.security.InvalidParameterException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                                /* insert */ (function (sb, index, c) { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(TimeStamp.sStringBuilder_$LI$(), 0, '0');
                            }
                            var secondString = TimeStamp.sStringBuilder_$LI$().str;
                            /* setLength */ (function (sb, length) { return sb.str = sb.str.substring(0, length); })(TimeStamp.sStringBuilder_$LI$(), 0);
                            /* append */ (function (sb) { sb.str = sb.str.concat(('' + ((((dt_1.second - Math.floor(dt_1.second)) * 1000000) | 0)))); return sb; })(TimeStamp.sStringBuilder_$LI$());
                            if (TimeStamp.sStringBuilder_$LI$().str.length < 6) {
                                for (var i = TimeStamp.sStringBuilder_$LI$().str.length; i <= 6; ++i) {
                                    {
                                        /* append */ (function (sb) { sb.str = sb.str.concat('0'); return sb; })(TimeStamp.sStringBuilder_$LI$());
                                    }
                                    ;
                                }
                            }
                            var nanoString = TimeStamp.sStringBuilder_$LI$().str;
                            var result = new String(formatStr);
                            result = result.split("%day%").join(dayString);
                            result = result.split("%month%").join(monthString);
                            result = result.split("%year%").join(yearString);
                            result = result.split("%hour%").join(hourString);
                            result = result.split("%minute%").join(minuteString);
                            result = result.split("%second%").join(secondString);
                            result = result.split("%nano%").join(nanoString);
                            result = result.split("%epoch%").join(/* toString */ ('' + (this.mUTCMillis)));
                            return result;
                        }
                        ;
                    };
                    /**
                     * Checks whether two this timestamp lies withing a given interval relatively to other one
                     * @param {com.montezumba.lib.types.TimeStamp} other - another timestamp
                     * @param {number} interval - interval in miliseconds
                     * @return {boolean} true if ||this - other|| <= interval
                     */
                    TimeStamp.prototype.isWithinInterval = function (other, interval) {
                        return Math.abs(this.mUTCMillis - other.mUTCMillis) <= interval;
                    };
                    /**
                     * Add miliseconds to this timestamp
                     * @param {number} deltaMilliseconds - number of milliseconds to add
                     */
                    TimeStamp.prototype.addTime = function (deltaMilliseconds) {
                        //console.debug("adding ms="+deltaMilliseconds);
                        this.mUTCMillis += deltaMilliseconds;
                        this.mLocalTime = this.unpackTimeStamp(this.mUTCMillis);
                        this.mUTCTime = this.unpackTimeStamp(this.mUTCMillis - this.mTimezoneMinutesOffset * com.montezumba.lib.types.Constants.MINUTES_$LI$());
                    };
                    /**
                     * checks whether this timestamp occurs before another one
                     * @param {com.montezumba.lib.types.TimeStamp} other - another timestamp
                     * @return {boolean} true - if this timestamp occurs before 'other'
                     */
                    TimeStamp.prototype.before = function (other) {
                        return (this.mUTCMillis < other.mUTCMillis);
                    };
                    /**
                     * checks whether this timestamp occurs after another one
                     * @param {com.montezumba.lib.types.TimeStamp} other - another timestamp
                     * @return {boolean} true - if this timestamp occurs after 'other'
                     */
                    TimeStamp.prototype.after = function (other) {
                        return (this.mUTCMillis > other.mUTCMillis);
                    };
                    TimeStamp.prototype.toLocalTime$int = function (offset) {
                        var result = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$long$int(this.mUTCMillis, offset);
                        return result;
                    };
                    /**
                     * Transfer to local time (considering a specific zone offset)
                     * @param {number} offset Number of minutes from UTS (in ms)
                     * @return {com.montezumba.lib.types.TimeStamp} new timestamp
                     */
                    TimeStamp.prototype.toLocalTime = function (offset) {
                        if (((typeof offset === 'number') || offset === null)) {
                            return this.toLocalTime$int(offset);
                        }
                        else if (offset === undefined) {
                            return this.toLocalTime$();
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    TimeStamp.prototype.toLocalTime$ = function () {
                        return this.toLocalTime$int(com.montezumba.lib.utils.TimerFactory.instance().getCurrentTimeZoneOffset());
                    };
                    /**
                     * Set the minute value
                     * @param {number} minute
                     * @param {boolean} isUTC if true, the value will be considered as UTC time
                     */
                    TimeStamp.prototype.setMinute = function (minute, isUTC) {
                        if (isUTC) {
                            this.mUTCTime.minute = minute;
                            this.mUTCMillis = this.packTimeStamp(this.mUTCTime, 0);
                            this.mLocalTime = this.unpackTimeStamp(this.mUTCMillis + this.mTimezoneMinutesOffset);
                        }
                        else {
                            this.mLocalTime.minute = minute;
                            this.mUTCMillis = this.packTimeStamp(this.mLocalTime, this.mTimezoneMinutesOffset);
                            this.mUTCTime = this.unpackTimeStamp(this.mUTCMillis);
                        }
                    };
                    /**
                     * Set the hour value
                     * @param {number} hour
                     * @param {boolean} isUTC if true, the value will be considered as UTC time
                     */
                    TimeStamp.prototype.setHour = function (hour, isUTC) {
                        if (isUTC) {
                            this.mUTCTime.hour = hour;
                            this.mUTCMillis = this.packTimeStamp(this.mUTCTime, 0);
                            this.mLocalTime = this.unpackTimeStamp(this.mUTCMillis + this.mTimezoneMinutesOffset);
                        }
                        else {
                            this.mLocalTime.hour = hour;
                            this.mUTCMillis = this.packTimeStamp(this.mLocalTime, this.mTimezoneMinutesOffset);
                            this.mUTCTime = this.unpackTimeStamp(this.mUTCMillis);
                        }
                    };
                    /**
                     * Set the second value
                     * @param {number} second
                     */
                    TimeStamp.prototype.setSecond = function (second) {
                        this.mUTCTime.second = second;
                        this.mUTCMillis = this.packTimeStamp(this.mUTCTime, 0);
                        this.mLocalTime = this.unpackTimeStamp(this.mUTCMillis + this.mTimezoneMinutesOffset);
                    };
                    /**
                     * Set the year value
                     * @param {number} year
                     * @param {boolean} isUTC if true, the value will be considered as UTC time
                     */
                    TimeStamp.prototype.setYear = function (year, isUTC) {
                        if (isUTC) {
                            this.mUTCTime.year = year;
                            this.mUTCMillis = this.packTimeStamp(this.mUTCTime, 0);
                            this.mLocalTime = this.unpackTimeStamp(this.mUTCMillis + this.mTimezoneMinutesOffset);
                        }
                        else {
                            this.mLocalTime.year = year;
                            this.mUTCMillis = this.packTimeStamp(this.mLocalTime, this.mTimezoneMinutesOffset);
                            this.mUTCTime = this.unpackTimeStamp(this.mUTCMillis);
                        }
                    };
                    /**
                     * Set the month value
                     * @param {number} month
                     * @param {boolean} isUTC if true, the value will be considered as UTC time
                     */
                    TimeStamp.prototype.setMonth = function (month, isUTC) {
                        if (isUTC) {
                            this.mUTCTime.month = month;
                            this.mUTCMillis = this.packTimeStamp(this.mUTCTime, 0);
                            this.mLocalTime = this.unpackTimeStamp(this.mUTCMillis + this.mTimezoneMinutesOffset);
                        }
                        else {
                            this.mLocalTime.month = month;
                            this.mUTCMillis = this.packTimeStamp(this.mLocalTime, this.mTimezoneMinutesOffset);
                            this.mUTCTime = this.unpackTimeStamp(this.mUTCMillis);
                        }
                    };
                    /**
                     * Set the day value
                     * @param {number} day
                     * @param {boolean} isUTC if true, the value will be considered as UTC time
                     */
                    TimeStamp.prototype.setDay = function (day, isUTC) {
                        if (isUTC) {
                            this.mUTCTime.day = day;
                            this.mUTCMillis = this.packTimeStamp(this.mUTCTime, 0);
                            this.mLocalTime = this.unpackTimeStamp(this.mUTCMillis + this.mTimezoneMinutesOffset);
                        }
                        else {
                            this.mLocalTime.day = day;
                            this.mUTCMillis = this.packTimeStamp(this.mLocalTime, this.mTimezoneMinutesOffset);
                            this.mUTCTime = this.unpackTimeStamp(this.mUTCMillis);
                        }
                    };
                    /**
                     * Set the time values
                     * @param {number} hour
                     * @param {number} minute
                     * @param {number} second
                     * @param {boolean} isUTC if true, the value will be considered as UTC. Otherwise, as local time
                     */
                    TimeStamp.prototype.setTime = function (hour, minute, second, isUTC) {
                        if (isUTC) {
                            this.mUTCTime.hour = hour;
                            this.mUTCTime.minute = minute;
                            this.mUTCTime.second = second;
                            this.mUTCMillis = this.packTimeStamp(this.mUTCTime, 0);
                            this.mLocalTime = this.unpackTimeStamp(this.mUTCMillis + this.mTimezoneMinutesOffset);
                        }
                        else {
                            this.mLocalTime.hour = hour;
                            this.mLocalTime.minute = minute;
                            this.mLocalTime.second = second;
                            this.mUTCMillis = this.packTimeStamp(this.mLocalTime, this.mTimezoneMinutesOffset);
                            this.mUTCTime = this.unpackTimeStamp(this.mUTCMillis);
                        }
                    };
                    /**
                     * Set the date values
                     * @param {number} year
                     * @param {number} month
                     * @param {number} day
                     * @param {boolean} isUTC if true, the value will be considered as UTC. Otherwise, as local time
                     */
                    TimeStamp.prototype.setDate = function (year, month, day, isUTC) {
                        if (isUTC) {
                            this.mUTCTime.year = year;
                            this.mUTCTime.month = month;
                            this.mUTCTime.day = day;
                            this.mUTCMillis = this.packTimeStamp(this.mUTCTime, 0);
                            this.mLocalTime = this.unpackTimeStamp(this.mUTCMillis + this.mTimezoneMinutesOffset);
                        }
                        else {
                            this.mLocalTime.year = year;
                            this.mLocalTime.month = month;
                            this.mLocalTime.day = day;
                            this.mUTCMillis = this.packTimeStamp(this.mLocalTime, this.mTimezoneMinutesOffset);
                            this.mUTCTime = this.unpackTimeStamp(this.mUTCMillis);
                        }
                    };
                    /**
                     * Get the hour value
                     * @param {boolean} isUTC If true, the value will be retrieved according to UTC time
                     * @return {number} the value in local/UTC time
                     */
                    TimeStamp.prototype.getHour = function (isUTC) {
                        if (isUTC)
                            return this.mUTCTime.hour;
                        else
                            return this.mLocalTime.hour;
                    };
                    /**
                     * Get the minute value
                     * @param {boolean} isUTC If true, the value will be retrieved according to UTC time
                     * @return {number} the value in local/UTC time
                     */
                    TimeStamp.prototype.getMinute = function (isUTC) {
                        if (isUTC)
                            return this.mUTCTime.minute;
                        else
                            return this.mLocalTime.minute;
                    };
                    /**
                     * Get the second value
                     * @return {number} the value
                     */
                    TimeStamp.prototype.getSecond = function () {
                        return this.mUTCTime.second;
                    };
                    /**
                     * Get the total millisecond of this value from 1.1.1970 (UTC)
                     * @return {number} the value
                     */
                    TimeStamp.prototype.getEpoch = function () {
                        return this.mUTCMillis;
                    };
                    /**
                     * Get the year value
                     * @param {boolean} isUTC If true, the value will be retrieved according to UTC time
                     * @return {number} the value in local/UTC time
                     */
                    TimeStamp.prototype.getYear = function (isUTC) {
                        if (isUTC)
                            return this.mUTCTime.year;
                        else
                            return this.mLocalTime.year;
                    };
                    /**
                     * Get the month value
                     * @param {boolean} isUTC If true, the value will be retrieved according to UTC time
                     * @return {number} the value in local/UTC time
                     */
                    TimeStamp.prototype.getMonth = function (isUTC) {
                        if (isUTC)
                            return this.mUTCTime.month;
                        else
                            return this.mLocalTime.month;
                    };
                    /**
                     * Get the day value
                     * @param {boolean} isUTC If true, the value will be retrieved according to UTC time
                     * @return {number} the value in local/UTC time
                     */
                    TimeStamp.prototype.getDay = function (isUTC) {
                        if (isUTC)
                            return this.mUTCTime.day;
                        else
                            return this.mLocalTime.day;
                    };
                    /**
                     * Get the day of the week
                     * @param {boolean} isUTC If true, the value will be retrieved according to UTC time
                     * @return {com.montezumba.lib.types.TimeStamp.WeekDay} the value in local/UTC time
                     */
                    TimeStamp.prototype.getWeekDay = function (isUTC) {
                        if (isUTC)                            
                            return this.mUTCTime.weekDay; 
                        else
                            return this.mLocalTime.weekDay;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    TimeStamp.prototype.equals = function (o) {
                        if (this === o)
                            return true;
                        if (!(o != null && o instanceof com.montezumba.lib.types.TimeStamp))
                            return false;
                        var other = o;
                        return other.mUTCMillis === this.mUTCMillis;
                    };
                    /**
                     *
                     * @return {number}
                     */
                    TimeStamp.prototype.hashCode = function () {
                        var builder = new org.apache.commons.lang3.builder.HashCodeBuilder();
                        builder.append(this.mUTCMillis);
                        return builder.build();
                    };
                    return TimeStamp;
                }());
                types.TimeStamp = TimeStamp;
                TimeStamp["__class"] = "com.montezumba.lib.types.TimeStamp";
                (function (TimeStamp) {
                    var WeekDay;
                    (function (WeekDay) {
                        WeekDay[WeekDay["SUNDAY"] = 0] = "SUNDAY";
                        WeekDay[WeekDay["MONDAY"] = 1] = "MONDAY";
                        WeekDay[WeekDay["TUESDAY"] = 2] = "TUESDAY";
                        WeekDay[WeekDay["WEDNESDAY"] = 3] = "WEDNESDAY";
                        WeekDay[WeekDay["THURSDAY"] = 4] = "THURSDAY";
                        WeekDay[WeekDay["FRIDAY"] = 5] = "FRIDAY";
                        WeekDay[WeekDay["SATURDAY"] = 6] = "SATURDAY";
                    })(WeekDay = TimeStamp.WeekDay || (TimeStamp.WeekDay = {}));
                    var DateTime = (function () {
                        function DateTime(__parent, other) {
                            var _this = this;
                            if (((other != null && other instanceof com.montezumba.lib.types.TimeStamp.DateTime) || other === null)) {
                                var __args = Array.prototype.slice.call(arguments, [1]);
                                this.day = 0;
                                this.month = 0;
                                this.year = 0;
                                this.hour = 0;
                                this.minute = 0;
                                this.second = 0.0;
                                this.weekDay = null;
                                this.__parent = __parent;
                                this.day = 0;
                                this.month = 0;
                                this.year = 0;
                                this.hour = 0;
                                this.minute = 0;
                                this.second = 0.0;
                                this.weekDay = null;
                                (function () {
                                    _this.day = other.day;
                                    _this.month = other.month;
                                    _this.year = other.year;
                                    _this.hour = other.hour;
                                    _this.minute = other.minute;
                                    _this.second = other.second;
                                    _this.weekDay = other.weekDay;
                                })();
                            }
                            else if (other === undefined) {
                                var __args = Array.prototype.slice.call(arguments, [1]);
                                this.day = 0;
                                this.month = 0;
                                this.year = 0;
                                this.hour = 0;
                                this.minute = 0;
                                this.second = 0.0;
                                this.weekDay = null;
                                this.__parent = __parent;
                                this.day = 0;
                                this.month = 0;
                                this.year = 0;
                                this.hour = 0;
                                this.minute = 0;
                                this.second = 0.0;
                                this.weekDay = null;
                            }
                            else
                                throw new Error('invalid overload');
                        }
                        return DateTime;
                    }());
                    TimeStamp.DateTime = DateTime;
                    DateTime["__class"] = "com.montezumba.lib.types.TimeStamp.DateTime";
                })(TimeStamp = types.TimeStamp || (types.TimeStamp = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var Title = (function () {
                    function Title(name, id, group, logo) {
                        var _this = this;
                        this.displayString = null;
                        this.id = "";
                        this.group = "";
                        this.logo = "";
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            {
                                var __args_1 = arguments;
                                this.displayString = null;
                                this.id = "";
                                this.group = "";
                                this.logo = "";
                                (function () {
                                    _this.displayString = name;
                                })();
                            }
                            (function () {
                                _this.id = id;
                                _this.group = group;
                                _this.logo = logo;
                            })();
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            this.displayString = null;
                            this.id = "";
                            this.group = "";
                            this.logo = "";
                            (function () {
                                _this.displayString = name;
                            })();
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    /**
                     *
                     * @return {string}
                     */
                    Title.prototype.toString = function () {
                        return this.displayString;
                    };
                    Title.prototype.copyBasicInfoFrom = function (title, forceOverride) {
                        if ((this.displayString.length === 0) || forceOverride)
                            this.displayString = title.displayString;
                        if ((this.id.length === 0) || forceOverride)
                            this.id = title.id;
                        if ((this.logo.length === 0) || forceOverride)
                            this.logo = title.logo;
                        if ((this.group.length === 0) || forceOverride)
                            this.group = title.group;
                    };
                    return Title;
                }());
                Title.DEFAULT_ACTIONS_NUM = 10;
                types.Title = Title;
                Title["__class"] = "com.montezumba.lib.types.Title";
                (function (Title) {
                    var TransportableException = (function (_super) {
                        __extends(TransportableException, _super);
                        function TransportableException(msg) {
                            var _this = this;
                            if (((typeof msg === 'string') || msg === null)) {
                                var __args = arguments;
                                _this = _super.call(this, msg) || this;
                                _this.message = msg;
                                Object.setPrototypeOf(_this, TransportableException.prototype);
                            }
                            else if (((msg != null && (msg["__classes"] && msg["__classes"].indexOf("java.lang.Exception") >= 0) || msg != null && msg instanceof Error) || msg === null)) {
                                var __args = arguments;
                                var e = __args[0];
                                _this = _super.call(this, e) || this;
                                _this.message = e;
                                Object.setPrototypeOf(_this, TransportableException.prototype);
                            }
                            else if (msg === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, TransportableException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return TransportableException;
                    }(Error));
                    TransportableException.serialVersionUID = -6521245163155413576;
                    Title.TransportableException = TransportableException;
                    TransportableException["__class"] = "com.montezumba.lib.types.Title.TransportableException";
                    TransportableException["__interfaces"] = ["java.io.Serializable"];
                    var MediaType;
                    (function (MediaType) {
                        MediaType[MediaType["MEDIA_TYPE_ADDON"] = 0] = "MEDIA_TYPE_ADDON";
                        MediaType[MediaType["MEDIA_TYPE_FOLDER"] = 1] = "MEDIA_TYPE_FOLDER";
                        MediaType[MediaType["MEDIA_TYPE_VIDEO"] = 2] = "MEDIA_TYPE_VIDEO";
                        MediaType[MediaType["MEDIA_TYPE_PREVIOUS"] = 3] = "MEDIA_TYPE_PREVIOUS";
                    })(MediaType = Title.MediaType || (Title.MediaType = {}));
                    var DataSource;
                    (function (DataSource) {
                        DataSource[DataSource["DATA_SOURCE_URI"] = 0] = "DATA_SOURCE_URI";
                        DataSource[DataSource["DATA_SOURCE_ADDON"] = 1] = "DATA_SOURCE_ADDON";
                        DataSource[DataSource["DATA_SOURCE_HTML"] = 2] = "DATA_SOURCE_HTML";
                    })(DataSource = Title.DataSource || (Title.DataSource = {}));
                })(Title = types.Title || (types.Title = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var UiComponent = (function () {
                    function UiComponent() {
                        this.onClosedListeners = ([]);
                    }
                    UiComponent.prototype.setOnClosedListener = function (runnable) {
                        /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                            s.push(e);
                            return true;
                        }
                        else {
                            return false;
                        } })(this.onClosedListeners, runnable);
                    };
                    UiComponent.prototype.onClosed = function () {
                        for (var index125 = 0; index125 < this.onClosedListeners.length; index125++) {
                            var r = this.onClosedListeners[index125];
                            {
                                (function (target) { return (typeof target === 'function') ? target() : target.run(); })(r);
                            }
                        }
                    };
                    return UiComponent;
                }());
                types.UiComponent = UiComponent;
                UiComponent["__class"] = "com.montezumba.lib.types.UiComponent";
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var ui;
            (function (ui) {
                var DialogFactory = (function () {
                    function DialogFactory() {
                    }
                    DialogFactory.instance = function () {
                        return DialogFactory.__instance;
                    };
                    DialogFactory.create = function (type) {
                        try {
                            DialogFactory.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                        }
                        ;
                    };
                    return DialogFactory;
                }());
                DialogFactory.__instance = null;
                ui.DialogFactory = DialogFactory;
                DialogFactory["__class"] = "com.montezumba.lib.ui.DialogFactory";
                (function (DialogFactory) {
                    var DialogType;
                    (function (DialogType) {
                        DialogType[DialogType["INPUT_DIALOG"] = 0] = "INPUT_DIALOG";
                    })(DialogType = DialogFactory.DialogType || (DialogFactory.DialogType = {}));
                })(DialogFactory = ui.DialogFactory || (ui.DialogFactory = {}));
            })(ui = lib.ui || (lib.ui = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var ui;
            (function (ui) {
                var MediaProgress = (function () {
                    function MediaProgress() {
                        this.onCancelListener = null;
                    }
                    return MediaProgress;
                }());
                ui.MediaProgress = MediaProgress;
                MediaProgress["__class"] = "com.montezumba.lib.ui.MediaProgress";
            })(ui = lib.ui || (lib.ui = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var ui;
            (function (ui) {
                var MediaProgressFactory = (function () {
                    function MediaProgressFactory() {
                    }
                    MediaProgressFactory.instance = function () {
                        return MediaProgressFactory.__instance;
                    };
                    MediaProgressFactory.create = function (type) {
                        try {
                            MediaProgressFactory.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                            }
                        }
                        ;
                    };
                    return MediaProgressFactory;
                }());
                MediaProgressFactory.__instance = null;
                ui.MediaProgressFactory = MediaProgressFactory;
                MediaProgressFactory["__class"] = "com.montezumba.lib.ui.MediaProgressFactory";
                (function (MediaProgressFactory) {
                    var MediaProgressType;
                    (function (MediaProgressType) {
                        MediaProgressType[MediaProgressType["VIDEO_OPEN_PROGRESS"] = 0] = "VIDEO_OPEN_PROGRESS";
                        MediaProgressType[MediaProgressType["MEDIA_LOADING_PROGRESS"] = 1] = "MEDIA_LOADING_PROGRESS";
                        MediaProgressType[MediaProgressType["MEDIA_BACKGROUND_PROGRESS"] = 2] = "MEDIA_BACKGROUND_PROGRESS";
                        MediaProgressType[MediaProgressType["VIDEO_BUFFERING_PROGRESS"] = 3] = "VIDEO_BUFFERING_PROGRESS";
                    })(MediaProgressType = MediaProgressFactory.MediaProgressType || (MediaProgressFactory.MediaProgressType = {}));
                })(MediaProgressFactory = ui.MediaProgressFactory || (ui.MediaProgressFactory = {}));
            })(ui = lib.ui || (lib.ui = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var ui;
            (function (ui) {
                var PopupFactory = (function () {
                    function PopupFactory() {
                    }
                    PopupFactory.instance = function () {
                        return PopupFactory.__instance;
                    };
                    PopupFactory.create = function (type) {
                        try {
                            PopupFactory.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                            }
                        }
                        ;
                    };
                    return PopupFactory;
                }());
                PopupFactory.__instance = null;
                ui.PopupFactory = PopupFactory;
                PopupFactory["__class"] = "com.montezumba.lib.ui.PopupFactory";
            })(ui = lib.ui || (lib.ui = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var ui;
            (function (ui) {
                /**
                 * A fully-functional Web Browser with milti-tab support. Can be used for either background web executions (without rendering) or for presenting web content
                 * Each application can have only one instance of this browser
                 * @class
                 */
                var WebBrowser = (function () {
                    function WebBrowser() {
                    }
                    WebBrowser.instance = function () {
                        return WebBrowser.__instance;
                    };
                    WebBrowser.create = function (type) {
                        try {
                            WebBrowser.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                        }
                        ;
                    };
                    return WebBrowser;
                }());
                WebBrowser.__instance = null;
                ui.WebBrowser = WebBrowser;
                WebBrowser["__class"] = "com.montezumba.lib.ui.WebBrowser";
            })(ui = lib.ui || (lib.ui = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var ArchiveReader;
                (function (ArchiveReader) {
                    var ArchivedItem = (function () {
                        function ArchivedItem() {
                            this.name = null;
                            this.archiveTime = -1;
                            this.size = -1;
                            this.isDirectory = false;
                            this.crc = -1;
                        }
                        return ArchivedItem;
                    }());
                    ArchiveReader.ArchivedItem = ArchivedItem;
                    ArchivedItem["__class"] = "com.montezumba.lib.utils.ArchiveReader.ArchivedItem";
                })(ArchiveReader = utils.ArchiveReader || (utils.ArchiveReader = {}));
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var DynamicMemoryPool = (function () {
                    function DynamicMemoryPool() {
                    }
                    /**
                     *
                     * @param {number} size
                     * @return {com.montezumba.lib.utils.MemoryPool.Data}
                     */
                    DynamicMemoryPool.prototype.allocate = function (size) {
                        var chunks = ([]);
                        var chunk = new utils.MemoryPool.DataRef();
                        chunk.start = 0;
                        chunk.end = size - 1;
                        /* add */ (chunks.push(chunk) > 0);
                        return new utils.MemoryPool.Data(this, (function (s) { var a = []; while (s-- > 0)
                            a.push(0); return a; })(size), chunks, size);
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.utils.MemoryPool.Data} data
                     */
                    DynamicMemoryPool.prototype.release = function (data) {
                    };
                    /**
                     *
                     * @return {number}
                     */
                    DynamicMemoryPool.prototype.getUsedSize = function () {
                        return 0;
                    };
                    return DynamicMemoryPool;
                }());
                utils.DynamicMemoryPool = DynamicMemoryPool;
                DynamicMemoryPool["__class"] = "com.montezumba.lib.utils.DynamicMemoryPool";
                DynamicMemoryPool["__interfaces"] = ["com.montezumba.lib.utils.MemoryPool"];
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var Event = (function () {
                    function Event(name, reportEvent) {
                        var _this = this;
                        /*private*/ this.listeners = (new java.util.concurrent.CopyOnWriteArraySet());
                        if (((typeof name === 'string') || name === null) && ((typeof reportEvent === 'boolean') || reportEvent === null)) {
                            var __args = arguments;
                            if (this.mEventName === undefined)
                                this.mEventName = null;
                            if (this.mReportEvent === undefined)
                                this.mReportEvent = false;
                            this.listeners = (new java.util.concurrent.CopyOnWriteArraySet());
                            if (this.mEventName === undefined)
                                this.mEventName = null;
                            if (this.mReportEvent === undefined)
                                this.mReportEvent = false;
                            (function () {
                                _this.mEventName = name;
                                _this.mReportEvent = reportEvent;
                            })();
                        }
                        else if (((name != null) || name === null) && ((typeof reportEvent === 'boolean') || reportEvent === null)) {
                            var __args = arguments;
                            var defualtListener_1 = __args[0];
                            if (this.mEventName === undefined)
                                this.mEventName = null;
                            if (this.mReportEvent === undefined)
                                this.mReportEvent = false;
                            this.listeners = (new java.util.concurrent.CopyOnWriteArraySet());
                            if (this.mEventName === undefined)
                                this.mEventName = null;
                            if (this.mReportEvent === undefined)
                                this.mReportEvent = false;
                            (function () {
                                var weak = (new com.montezumba.lib.utils.WeakObject(defualtListener_1));
                                /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                }
                                else {
                                    return false;
                                } })(_this.listeners, weak);
                                _this.mReportEvent = reportEvent;
                            })();
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    Event.prototype.register = function (listener) {
                        var weak = (new com.montezumba.lib.utils.WeakObject(listener));
                        if (!(this.listeners.indexOf((weak)) >= 0))
                            (function (s, e) { if (s.indexOf(e) == -1) {
                                s.push(e);
                                return true;
                            }
                            else {
                                return false;
                            } })(this.listeners, weak);
                    };
                    Event.prototype.clear = function (listener) {
                        var weak = (new com.montezumba.lib.utils.WeakObject(listener));
                        if ((this.listeners.indexOf((weak)) >= 0))
                            (function (a) { var index = a.indexOf(weak); if (index >= 0) {
                                a.splice(index, 1);
                                return true;
                            }
                            else {
                                return false;
                            } })(this.listeners);
                    };
                    Event.prototype.clearAll = function () {
                        /* clear */ (this.listeners.length = 0);
                    };
                    Event.prototype.fire = function (executor) {
                        var deadObjects = ([]);
                        for (var index126 = 0; index126 < this.listeners.length; index126++) {
                            var listener = this.listeners[index126];
                            {
                                var object = listener.get();
                                if (object != null) {
                                    executor.execute(object);
                                }
                                else {
                                    com.montezumba.lib.types.MediaLog.instance().debug("dead listener for " + this.mEventName);
                                    /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                                        s.push(e);
                                        return true;
                                    }
                                    else {
                                        return false;
                                    } })(deadObjects, listener);
                                }
                            }
                        }
                        var _loop_1 = function (index127) {
                            var object = deadObjects[index127];
                            {
                                /* remove */ (function (a) { var index = a.indexOf(object); if (index >= 0) {
                                    a.splice(index, 1);
                                    return true;
                                }
                                else {
                                    return false;
                                } })(this_1.listeners);
                            }
                        };
                        var this_1 = this;
                        for (var index127 = 0; index127 < deadObjects.length; index127++) {
                            _loop_1(index127);
                        }
                        if (this.mReportEvent) {
                            com.montezumba.lib.utils.ReportHandler.instance().report$com_montezumba_lib_utils_ReportHandler_ReportLevel$java_lang_String$java_lang_String$long(com.montezumba.lib.utils.ReportHandler.ReportLevel.REPORT_LEVEL_EVENT, this.mEventName, this.mEventName, 0);
                            com.montezumba.lib.types.MediaLog.instance().debug("number of listeners for event: " + this.mEventName + " " + this.listeners.length);
                        }
                    };
                    return Event;
                }());
                utils.Event = Event;
                Event["__class"] = "com.montezumba.lib.utils.Event";
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var FTPConnector;
                (function (FTPConnector) {
                    var FTPException = (function (_super) {
                        __extends(FTPException, _super);
                        function FTPException(e) {
                            var _this = this;
                            if (((e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.Exception") >= 0) || e != null && e instanceof Error) || e === null)) {
                                var __args = arguments;
                                _this = _super.call(this, e) || this;
                                _this.message = e;
                                Object.setPrototypeOf(_this, FTPException.prototype);
                            }
                            else if (((typeof e === 'string') || e === null)) {
                                var __args = arguments;
                                var msg = __args[0];
                                _this = _super.call(this, msg) || this;
                                _this.message = msg;
                                Object.setPrototypeOf(_this, FTPException.prototype);
                            }
                            else if (e === undefined) {
                                var __args = arguments;
                                _this = _super.call(this) || this;
                                Object.setPrototypeOf(_this, FTPException.prototype);
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        return FTPException;
                    }(Error));
                    /**
                     *
                     */
                    FTPException.serialVersionUID = -2711214569714470931;
                    FTPConnector.FTPException = FTPException;
                    FTPException["__class"] = "com.montezumba.lib.utils.FTPConnector.FTPException";
                    FTPException["__interfaces"] = ["java.io.Serializable"];
                })(FTPConnector = utils.FTPConnector || (utils.FTPConnector = {}));
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var JSONReader = (function () {
                    function JSONReader() {
                    }
                    return JSONReader;
                }());
                utils.JSONReader = JSONReader;
                JSONReader["__class"] = "com.montezumba.lib.utils.JSONReader";
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var MemoryPool;
                (function (MemoryPool) {
                    var DataRef = (function () {
                        function DataRef() {
                            if (this.start === undefined)
                                this.start = 0;
                            if (this.end === undefined)
                                this.end = 0;
                        }
                        return DataRef;
                    }());
                    MemoryPool.DataRef = DataRef;
                    DataRef["__class"] = "com.montezumba.lib.utils.MemoryPool.DataRef";
                    var Data = (function () {
                        function Data(pool, data, pieces, size) {
                            if (this.mData === undefined)
                                this.mData = null;
                            if (this.mDataRefs === undefined)
                                this.mDataRefs = null;
                            if (this.mSize === undefined)
                                this.mSize = 0;
                            if (this.mMemPool === undefined)
                                this.mMemPool = null;
                            this.mMemPool = pool;
                            this.mData = data;
                            this.mDataRefs = pieces;
                            this.mSize = size;
                        }
                        /**
                         * Export the data into a byte array
                         * @param {Array} target The target buffer
                         * @param {number} offset Offset within the target buffer
                         * @param {number} size Number of bytes to export
                         */
                        Data.prototype.exportTo = function (target, offset, size) {
                            if (target == null || size < 0 || offset < 0 || offset > target.length || target.length - offset < size) {
                                throw new com.montezumba.lib.types.exceptions.MemoryPoolException("Cannot export data. size=" + size + ", offset=" + offset + ", length=" + ((target == null) ? "null" : target.length));
                            }
                            if (this.mSize < size) {
                                throw new com.montezumba.lib.types.exceptions.MemoryPoolException("Requested size is smaller than data size. requested=" + size + ", current=" + this.mSize);
                            }
                            var accumSize = 0;
                            for (var index128 = 0; index128 < this.mDataRefs.length; index128++) {
                                var ref = this.mDataRefs[index128];
                                {
                                    var currentSize = (ref.end - ref.start + 1);
                                    if (accumSize + currentSize > size) {
                                        currentSize = size - accumSize;
                                    }
                                    /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
                                        while (--size >= 0)
                                            dstPts[dstOff++] = srcPts[srcOff++];
                                    }
                                    else {
                                        var tmp = srcPts.slice(srcOff, srcOff + size);
                                        for (var i = 0; i < size; i++)
                                            dstPts[dstOff++] = tmp[i];
                                    } })(this.mData, ref.start, target, offset + accumSize, currentSize);
                                    accumSize += currentSize;
                                    if (accumSize === size) {
                                        break;
                                    }
                                }
                            }
                        };
                        /**
                         * Import the data from a byte array
                         * @param {Array} source The source buffer
                         * @param {number} offset Offset within the source buffer
                         * @param {number} size Number of bytes to import
                         */
                        Data.prototype.importFrom = function (source, offset, size) {
                            if (source == null || size < 0 || offset < 0 || offset > source.length || source.length - offset < size) {
                                throw new com.montezumba.lib.types.exceptions.MemoryPoolException("Cannot import data. size=" + size + ", offset=" + offset + ", length=" + ((source == null) ? "null" : source.length));
                            }
                            if (this.mSize < size) {
                                throw new com.montezumba.lib.types.exceptions.MemoryPoolException("Not enough space to fill in the requested data. requested=" + size + ", current=" + this.mSize);
                            }
                            var accumSize = 0;
                            for (var index129 = 0; index129 < this.mDataRefs.length; index129++) {
                                var ref = this.mDataRefs[index129];
                                {
                                    var currentSize = (ref.end - ref.start + 1);
                                    if (accumSize + currentSize > size) {
                                        currentSize = size - accumSize;
                                    }
                                    /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
                                        while (--size >= 0)
                                            dstPts[dstOff++] = srcPts[srcOff++];
                                    }
                                    else {
                                        var tmp = srcPts.slice(srcOff, srcOff + size);
                                        for (var i = 0; i < size; i++)
                                            dstPts[dstOff++] = tmp[i];
                                    } })(source, offset + accumSize, this.mData, ref.start, currentSize);
                                    accumSize += currentSize;
                                    if (accumSize === size) {
                                        break;
                                    }
                                }
                            }
                        };
                        Data.prototype.getSize = function () {
                            return this.mSize;
                        };
                        Data.prototype.release = function () {
                            this.mMemPool.release(this);
                        };
                        Data.prototype.getDataRefs = function () {
                            return this.mDataRefs;
                        };
                        return Data;
                    }());
                    MemoryPool.Data = Data;
                    Data["__class"] = "com.montezumba.lib.utils.MemoryPool.Data";
                })(MemoryPool = utils.MemoryPool || (utils.MemoryPool = {}));
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var Notification = (function () {
                    function Notification() {
                    }
                    Notification.instance = function () {
                        return Notification.__instance;
                    };
                    Notification.create = function (type) {
                        try {
                            Notification.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                            }
                        }
                        ;
                    };
                    Notification.prototype.show$java_lang_String$int = function (msg, duration) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
                    Notification.prototype.show = function (msg, duration) {
                        if (((typeof msg === 'string') || msg === null) && ((typeof duration === 'number') || duration === null)) {
                            return this.show$java_lang_String$int(msg, duration);
                        }
                        else if (((typeof msg === 'string') || msg === null) && duration === undefined) {
                            return this.show$java_lang_String(msg);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    Notification.prototype.show$java_lang_String = function (msg) {
                        this.show$java_lang_String$int(msg, 1000);
                    };
                    return Notification;
                }());
                Notification.__instance = null;
                utils.Notification = Notification;
                Notification["__class"] = "com.montezumba.lib.utils.Notification";
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                /**
                 * Creates a Rolling Buffer with a predefined size
                 * @param {number} bufferSize - maximal size for this pool
                 * @class
                 */
                var RollingBufferMemoryPool = (function () {
                    function RollingBufferMemoryPool(bufferSize) {
                        /*private*/ this.mUsedSpace = 0;
                        /*private*/ this.mDataStart = -1;
                        /*private*/ this.mDataEnd = -1;
                        if (this.mDataPool === undefined)
                            this.mDataPool = null;
                        this.mDataPool = (function (s) { var a = []; while (s-- > 0)
                            a.push(0); return a; })(bufferSize);
                    }
                    /**
                     *
                     * @param {number} size
                     * @return {com.montezumba.lib.utils.MemoryPool.Data}
                     */
                    RollingBufferMemoryPool.prototype.allocate = function (size) {
                        if (this.mDataPool.length - this.mUsedSpace < size) {
                            throw new com.montezumba.lib.types.exceptions.MemoryPoolException("Out of free space: requested size=" + size);
                        }
                        var chunks = ([]);
                        var ref = new utils.MemoryPool.DataRef();
                        if (this.mDataEnd > this.mDataStart) {
                            if (this.mDataEnd + 1 <= this.mDataPool.length - 1) {
                                ref.start = this.mDataEnd + 1;
                                if (ref.start + size > this.mDataPool.length) {
                                    ref.end = this.mDataPool.length - 1;
                                    /* add */ (chunks.push(ref) > 0);
                                    var leftSpace = size - (ref.end - ref.start + 1);
                                    ref = new utils.MemoryPool.DataRef();
                                    ref.start = 0;
                                    ref.end = leftSpace - 1;
                                    /* add */ (chunks.push(ref) > 0);
                                }
                                else {
                                    ref.end = ref.start + size - 1;
                                    /* add */ (chunks.push(ref) > 0);
                                }
                            }
                            else {
                                ref.start = 0;
                                ref.end = size - 1;
                                /* add */ (chunks.push(ref) > 0);
                            }
                        }
                        else {
                            ref.start = this.mDataEnd + 1;
                            ref.end = ref.start + size - 1;
                            /* add */ (chunks.push(ref) > 0);
                        }
                        if (this.mDataStart === -1) {
                            this.mDataStart = 0;
                        }
                        this.mDataEnd = ref.end;
                        if (this.mDataEnd > this.mDataPool.length - 1) {
                            throw new com.montezumba.lib.types.exceptions.MemoryPoolException("Illegal state: end=" + this.mDataEnd + ", data pool end=" + (this.mDataPool.length - 1));
                        }
                        this.mUsedSpace += size;
                        return new utils.MemoryPool.Data(this, this.mDataPool, chunks, size);
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.utils.MemoryPool.Data} data
                     */
                    RollingBufferMemoryPool.prototype.release = function (data) {
                        var dataRefs = data.getDataRefs();
                        this.mUsedSpace -= data.getSize();
                        if (this.mUsedSpace < 0) {
                            throw new com.montezumba.lib.types.exceptions.MemoryPoolException("Illegal State: usedSpace=" + this.mUsedSpace);
                        }
                        else if (this.mUsedSpace === 0) {
                            this.mDataStart = -1;
                            this.mDataEnd = -1;
                        }
                        else {
                            var start = dataRefs[0].start;
                            var end = dataRefs[dataRefs.length - 1].end;
                            if (start !== this.mDataStart) {
                                throw new com.montezumba.lib.types.exceptions.MemoryPoolException("The release of data must happen in a FIFO manner: start=" + start + ", realStart=" + this.mDataStart);
                            }
                            this.mDataStart = end + 1;
                            if (this.mDataStart > this.mDataPool.length - 1) {
                                this.mDataStart = 0;
                            }
                        }
                        /* clear */ (dataRefs.length = 0);
                    };
                    /**
                     *
                     * @return {number}
                     */
                    RollingBufferMemoryPool.prototype.getUsedSize = function () {
                        return this.mUsedSpace;
                    };
                    return RollingBufferMemoryPool;
                }());
                utils.RollingBufferMemoryPool = RollingBufferMemoryPool;
                RollingBufferMemoryPool["__class"] = "com.montezumba.lib.utils.RollingBufferMemoryPool";
                RollingBufferMemoryPool["__interfaces"] = ["com.montezumba.lib.utils.MemoryPool"];
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var SecurityUtils = (function () {
                    function SecurityUtils() {
                    }
                    SecurityUtils.instance = function () {
                        return SecurityUtils.__instance;
                    };
                    SecurityUtils.create = function (type) {
                        try {
                            SecurityUtils.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                        }
                        ;
                    };
                    /**
                     * Encrypt the given data, considering the required encryption mode
                     * @param {com.montezumba.lib.utils.SecurityUtils.EncryptType} type - type of encrpytion (symteric/public/private key encryption)
                     * @param {Array} key - user key (password) for encrpytion (the key will be treated according to encrutpion type)
                     * @param {Array} data - raw data for encryption
                     * @param {number} offset - offset in 'data' (from where to start reading the data)
                     * @param {number} count - number of bytes to read from 'offset'
                     * @return {Array} encrypted data
                     */
                    SecurityUtils.encrypt = function (type, key, data, offset, count) {
                        switch ((type)) {
                            case com.montezumba.lib.utils.SecurityUtils.EncryptType.SYMETRIC_KEY:
                                return SecurityUtils.instance()._symetricEncrypt(key, data);
                            case com.montezumba.lib.utils.SecurityUtils.EncryptType.ASYMETRIC_KEY:
                                return SecurityUtils.instance()._asymetricEncrypt(key, data);
                            default:
                                throw new org.apache.commons.lang3.NotImplementedException("Unimplemented encryption method");
                        }
                    };
                    /**
                     * Decrypt the given data, considering the required encryption mode
                     * @param {com.montezumba.lib.utils.SecurityUtils.EncryptType} type - type of decrpytion (symteric/public/private key encryption)
                     * @param {Array} key - user key (password) for decryption (the key will be treated according to encrutpion type)
                     * @param {Array} cypher - previously encrypted data (with corresponding encryption key)
                     * @return {Array} encrypted data
                     */
                    SecurityUtils.decrypt = function (type, key, cypher) {
                        switch ((type)) {
                            case com.montezumba.lib.utils.SecurityUtils.EncryptType.SYMETRIC_KEY:
                                return SecurityUtils.instance()._symetricDecrypt(key, cypher);
                            case com.montezumba.lib.utils.SecurityUtils.EncryptType.ASYMETRIC_KEY:
                                return SecurityUtils.instance()._asymetricDecrypt(key, cypher);
                            default:
                                throw new org.apache.commons.lang3.NotImplementedException("Unimplemented encryption method");
                        }
                    };
                    /**
                     * Encode the given byte array into alpha-numeric String representation (Base64)
                     * @param {Array} bytes The given byte array
                     * @return {string} The encoded string representation
                     */
                    SecurityUtils.encode = function (bytes) {
                        return SecurityUtils.instance()._encode(bytes);
                    };
                    /**
                     * Decode the given string (that was previously encoded with 'encode'
                     * @param {string} encoded The encoded string
                     * @return {Array} decoded byte array
                     */
                    SecurityUtils.decode = function (encoded) {
                        return SecurityUtils.instance()._decode(encoded);
                    };
                    return SecurityUtils;
                }());
                SecurityUtils.__instance = null;
                /**
                 * Block size (in bytes) for encryption (all the data will be divided to blocks of this size + remainer)
                 */
                SecurityUtils.ENCRYPTED_BUFFER_SIZE = 160;
                SecurityUtils.MINIMAL_KEY_SIZE = 64;
                utils.SecurityUtils = SecurityUtils;
                SecurityUtils["__class"] = "com.montezumba.lib.utils.SecurityUtils";
                (function (SecurityUtils) {
                    var EncryptType;
                    (function (EncryptType) {
                        EncryptType[EncryptType["SYMETRIC_KEY"] = 0] = "SYMETRIC_KEY";
                        EncryptType[EncryptType["ASYMETRIC_KEY"] = 1] = "ASYMETRIC_KEY";
                    })(EncryptType = SecurityUtils.EncryptType || (SecurityUtils.EncryptType = {}));
                })(SecurityUtils = utils.SecurityUtils || (utils.SecurityUtils = {}));
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                /**
                 *
                 * Simplified background task implementation of worker callback.
                 * This class provides default implementation for error handling, preperation and post-processing
                 * @class
                 */
                var SimpleBackgroundTask = (function () {
                    function SimpleBackgroundTask() {
                    }
                    /**
                     *
                     * @param {*} result
                     */
                    SimpleBackgroundTask.prototype.onSuccess = function (result) {
                    };
                    /**
                     *
                     * @param {Error} error
                     */
                    SimpleBackgroundTask.prototype.onError = function (error) {
                        console.error(error.message, error);
                    };
                    /**
                     *
                     */
                    SimpleBackgroundTask.prototype.onComplete = function () {
                    };
                    /**
                     *
                     * @return {*}
                     */
                    SimpleBackgroundTask.prototype.executeInBackground = function () {
                        this.doInBackground();
                        return null;
                    };
                    return SimpleBackgroundTask;
                }());
                utils.SimpleBackgroundTask = SimpleBackgroundTask;
                SimpleBackgroundTask["__class"] = "com.montezumba.lib.utils.SimpleBackgroundTask";
                SimpleBackgroundTask["__interfaces"] = ["com.montezumba.lib.utils.WorkerFactory.WorkerTask"];
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var StaticMemoryPool = (function () {
                    function StaticMemoryPool(size) {
                        /*private*/ this.mNextFreeIndex = 0;
                        /*private*/ this.mUsedSize = 0;
                        /*private*/ this.mDataChunks = ([]);
                        /*private*/ this.mSizeComparator = new StaticMemoryPool.DataRefSizeComparator(this);
                        /*private*/ this.mOrderComparator = new StaticMemoryPool.DataRefOrderComparator(this);
                        /*private*/ this.mFreeSpace = (new java.util.PriorityQueue(100, (this.mSizeComparator)));
                        if (this.mDataPool === undefined)
                            this.mDataPool = null;
                        if (this.mTotalSize === undefined)
                            this.mTotalSize = 0;
                        if (size <= 0 || size > 2147483647) {
                            throw Object.defineProperty(new Error("Cannot create a memory pool with this size. Size=" + size), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                        }
                        this.mDataPool = (function (s) { var a = []; while (s-- > 0)
                            a.push(0); return a; })(size);
                        this.mTotalSize = size;
                        var entireSpace = new utils.MemoryPool.DataRef();
                        entireSpace.start = 0;
                        entireSpace.end = this.mTotalSize - 1;
                        this.mFreeSpace.add(entireSpace);
                    }
                    /**
                     *
                     * @param {number} size
                     * @return {com.montezumba.lib.utils.MemoryPool.Data}
                     */
                    StaticMemoryPool.prototype.allocate = function (size) {
                        if (size <= 0 || size > this.mTotalSize - this.mUsedSize) {
                            throw new com.montezumba.lib.types.exceptions.MemoryPoolException("Not enough space. free size=" + (this.mTotalSize - this.mUsedSize) + " requested size=" + size);
                        }
                        var refs = this.allocateSpace(size);
                        this.mUsedSize += size;
                        if ((refs.length == 0)) {
                            throw new com.montezumba.lib.types.exceptions.MemoryPoolException("Cannot allocate more data. Out of free space. current size=" + this.mUsedSize + ", total size=" + this.mTotalSize + ", requested size=" + size);
                        }
                        var newData = new utils.MemoryPool.Data(this, this.mDataPool, refs, size);
                        /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                            s.push(e);
                            return true;
                        }
                        else {
                            return false;
                        } })(this.mDataChunks, newData);
                        return newData;
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.utils.MemoryPool.Data} data
                     */
                    StaticMemoryPool.prototype.release = function (data) {
                        if (!(this.mDataChunks.indexOf((data)) >= 0)) {
                            throw new com.montezumba.lib.types.exceptions.MemoryPoolException("The requested data chunk does not exist");
                        }
                        var allocatedMemory = data.getDataRefs();
                        for (var index130 = 0; index130 < allocatedMemory.length; index130++) {
                            var ref = allocatedMemory[index130];
                            {
                                this.mFreeSpace.add(ref);
                            }
                        }
                        this.mUsedSize -= data.getSize();
                        /* remove */ (function (a) { var index = a.indexOf(data); if (index >= 0) {
                            a.splice(index, 1);
                            return true;
                        }
                        else {
                            return false;
                        } })(this.mDataChunks);
                        if (this.mFreeSpace.size() > StaticMemoryPool.MAX_FREE_CHUNKS) {
                            this.defragment();
                        }
                    };
                    /**
                     *
                     * @return {number}
                     */
                    StaticMemoryPool.prototype.getUsedSize = function () {
                        return this.mUsedSize;
                    };
                    StaticMemoryPool.prototype.allocateSpace = function (size) {
                        var result = ([]);
                        var allocatedSize = 0;
                        while ((allocatedSize < size)) {
                            {
                                var largest = this.mFreeSpace.poll();
                                var availableSize = largest.end - largest.start + 1;
                                if (availableSize > size - allocatedSize) {
                                    var leftover = new utils.MemoryPool.DataRef();
                                    leftover.start = largest.start + (size - allocatedSize);
                                    leftover.end = largest.end;
                                    this.mFreeSpace.add(leftover);
                                    largest.end = largest.start + size - allocatedSize - 1;
                                    allocatedSize = size;
                                }
                                /* add */ (result.push(largest) > 0);
                                allocatedSize += availableSize;
                            }
                        }
                        ;
                        return result;
                    };
                    StaticMemoryPool.prototype.defragment = function () {
                        com.montezumba.lib.types.MediaLog.instance().debug("defragmenting...");
                        var sortedByOrder = (new java.util.PriorityQueue(100, (this.mOrderComparator)));
                        sortedByOrder.addAll(this.mFreeSpace);
                        this.mFreeSpace.clear();
                        var prev = sortedByOrder.poll();
                        for (var index131 = 0; index131 < sortedByOrder.length; index131++) {
                            var curr = sortedByOrder[index131];
                            {
                                if (prev.end === curr.start) {
                                    prev.end = curr.end;
                                }
                                else {
                                    this.mFreeSpace.add(prev);
                                    prev = curr;
                                }
                            }
                        }
                        this.mFreeSpace.add(prev);
                    };
                    return StaticMemoryPool;
                }());
                StaticMemoryPool.MAX_FREE_CHUNKS = 1000000;
                utils.StaticMemoryPool = StaticMemoryPool;
                StaticMemoryPool["__class"] = "com.montezumba.lib.utils.StaticMemoryPool";
                StaticMemoryPool["__interfaces"] = ["com.montezumba.lib.utils.MemoryPool"];
                (function (StaticMemoryPool) {
                    var DataRefSizeComparator = (function () {
                        function DataRefSizeComparator(__parent) {
                            this.__parent = __parent;
                        }
                        /**
                         *
                         * @param {com.montezumba.lib.utils.MemoryPool.DataRef} lhs
                         * @param {com.montezumba.lib.utils.MemoryPool.DataRef} rhs
                         * @return {number}
                         */
                        DataRefSizeComparator.prototype.compare = function (lhs, rhs) {
                            if (lhs === rhs) {
                                return 0;
                            }
                            var lhsSize = lhs.end - lhs.start;
                            var rhsSize = rhs.end - rhs.start;
                            return rhsSize - lhsSize;
                        };
                        /**
                         *
                         * @param {*} object
                         * @return {boolean}
                         */
                        DataRefSizeComparator.prototype.equals = function (object) {
                            return (function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(this, object);
                        };
                        return DataRefSizeComparator;
                    }());
                    StaticMemoryPool.DataRefSizeComparator = DataRefSizeComparator;
                    DataRefSizeComparator["__class"] = "com.montezumba.lib.utils.StaticMemoryPool.DataRefSizeComparator";
                    DataRefSizeComparator["__interfaces"] = ["java.util.Comparator"];
                    var DataRefOrderComparator = (function () {
                        function DataRefOrderComparator(__parent) {
                            this.__parent = __parent;
                        }
                        /**
                         *
                         * @param {com.montezumba.lib.utils.MemoryPool.DataRef} lhs
                         * @param {com.montezumba.lib.utils.MemoryPool.DataRef} rhs
                         * @return {number}
                         */
                        DataRefOrderComparator.prototype.compare = function (lhs, rhs) {
                            if (lhs === rhs) {
                                return 0;
                            }
                            return lhs.end - rhs.end;
                        };
                        return DataRefOrderComparator;
                    }());
                    StaticMemoryPool.DataRefOrderComparator = DataRefOrderComparator;
                    DataRefOrderComparator["__class"] = "com.montezumba.lib.utils.StaticMemoryPool.DataRefOrderComparator";
                    DataRefOrderComparator["__interfaces"] = ["java.util.Comparator"];
                })(StaticMemoryPool = utils.StaticMemoryPool || (utils.StaticMemoryPool = {}));
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var StringUtils = (function () {
                    function StringUtils() {
                    }
                    StringUtils.instance = function () {
                        return StringUtils.__instance;
                    };
                    StringUtils.create = function (type) {
                        try {
                            StringUtils.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                        }
                        ;
                    };
                    StringUtils.sStringBuilder_$LI$ = function () { if (StringUtils.sStringBuilder == null)
                        StringUtils.sStringBuilder = { str: "", toString: function () { return this.str; } }; return StringUtils.sStringBuilder; };
                    ;
                    StringUtils.sBuilderLock_$LI$ = function () { if (StringUtils.sBuilderLock == null)
                        StringUtils.sBuilderLock = new Object(); return StringUtils.sBuilderLock; };
                    ;
                    /**
                     * Escape the given string parameter to match sql query (avoid injection)
                     * @param {string} s - the input string
                     * @return {string} - the string with all special characters escaped and ready for insert/update
                     */
                    StringUtils.sqlEscapeString = function (s) {
                        return StringUtils.__instance._sqlEscapeString(s);
                    };
                    /**
                     * Escape the given input file from all illegal XML characters
                     * @param {string} inputFile URI of the input XML file
                     * @param {string} outputFile URI of the output XML file
                     * @return {boolean} 'true' if the operation succeeded
                     */
                    StringUtils.xmlEscapeString = function (inputFile, outputFile) {
                        return StringUtils.__instance._xmlEscapeString(inputFile, outputFile);
                    };
                    /**
                     * Decode all encoded HTML characters (such as '&amp')
                     * @param {string} html the encoded HTML as a string
                     * @return {string} decoded html
                     */
                    StringUtils.decodeHtml = function (html) {
                        return StringUtils.__instance._decodeHtml(html);
                    };
                    /**
                     * Encode all illegal HTML characters (such as '&')
                     * @param {string} html the HTML as a string
                     * @return {string} encoded html
                     */
                    StringUtils.encodeHtml = function (html) {
                        return StringUtils.__instance._encodeHtml(html);
                    };
                    /**
                     * Encode the given URL string
                     * @param {string} url The URL that needs to be encoded
                     * @return {string} encoded URL
                     */
                    StringUtils.urlEncodeString = function (url) {
                        return StringUtils.__instance._urlEncodeString(url);
                    };
                    /**
                     * Decode the given URL string
                     * @param {string} url The encoded URL that needs to be decoded
                     * @return {string} decoded (regular) URL
                     */
                    StringUtils.urlDecodeString = function (url) {
                        return StringUtils.__instance._urlDecodeString(url);
                    };
                    /**
                     * Find Regular Expression inside a file and return all possible matches
                     * @param {string} filePath - the path to the source text file
                     * @param {string} regex - the REGEX to be used in the search
                     * @param {*} callback - callback with all matches
                     * @throws Exception
                     */
                    StringUtils.findRegexInFile = function (filePath, regex, callback) {
                        var reader = com.montezumba.lib.io.StorageHandler.instance().openFile$java_lang_String(filePath);
                        var line = null;
                        var linesCounter = 0;
                        var p = StringUtils.Pattern.compile$java_lang_String$int(regex, StringUtils.Pattern.DOTALL | StringUtils.Pattern.MULTILINE);
                        var batch = new StringUtils.Batch(this);
                        com.montezumba.lib.types.MediaLog.instance().debug("before while");
                        while (((line = reader.readNextLine()) != null)) {
                            {
                                batch.addLine(line);
                                batch.addLine("\n");
                                linesCounter++;
                                if (linesCounter === 20000) {
                                    batch.run(reader.getCurrentPosition(), reader.getFileSize());
                                    linesCounter = 0;
                                }
                            }
                        }
                        ;
                        com.montezumba.lib.types.MediaLog.instance().debug("after while");
                        if (linesCounter !== 0) {
                            batch.run(reader.getCurrentPosition(), reader.getFileSize());
                        }
                        com.montezumba.lib.types.MediaLog.instance().debug("special batch");
                        reader.close();
                    };
                    /**
                     * Generates a random string of the given length
                     * @param {number} length size of the string
                     * @return {string} random string
                     */
                    StringUtils.generateRandomString = function (length) {
                        return StringUtils.__instance._generateRandomString(length);
                    };
                    /**
                     * Calculates a string similarity distance measure
                     * @param {string} s - first string
                     * @param {string} t - second string
                     * @return {number} returns a number from 0 to 1, where 1 means complete similarity
                     */
                    StringUtils.stringDistance = function (s, t) {
                        var longer = s;
                        var shorter = t;
                        if (s.length < t.length) {
                            longer = t;
                            shorter = s;
                        }
                        var longerLength = longer.length;
                        if (longerLength === 0) {
                            return 1.0;
                        }
                        return (longerLength - StringUtils.editDistance(longer, shorter)) / longerLength;
                    };
                    /**
                     * Escape a given string parameter to match url structure (avoid injection)
                     * @param {string} s - the input string
                     * @return {string} - the string with all special characters escaped and ready for insert/update
                     */
                    StringUtils.urlEscapeString = function (s) {
                        try {
                            return java.net.URLEncoder.encode(s, "UTF-8");
                        }
                        catch (e) {
                            com.montezumba.lib.types.MediaLog.instance().error$java_lang_String$java_lang_Throwable("utf", e);
                            return s;
                        }
                        ;
                    };
                    /**
                     * Return the substring that is specified by given (start,end) offsets of the original string.
                     * This method is much more efficient than the original String.substring(...)
                     * @param {string} string The original string
                     * @param {number} start Start index in the string (starting from zero)
                     * @param {number} end End index in hte string (limited by length-1)
                     * @return {string} The sub-string object
                     */
                    StringUtils.subString = function (string, start, end) {
                        {
                            /* setLength */ (function (sb, length) { return sb.str = sb.str.substring(0, length); })(StringUtils.sStringBuilder_$LI$(), 0);
                            /* append */ (function (sb) { sb.str = sb.str.concat(string.substr(start, end)); return sb; })(StringUtils.sStringBuilder_$LI$());
                            return StringUtils.sStringBuilder_$LI$().str;
                        }
                        ;
                    };
                    StringUtils.editDistance = function (s, t) {
                        s = s.toLowerCase();
                        t = t.toLowerCase();
                        var distance = (function (s) { var a = []; while (s-- > 0)
                            a.push(0); return a; })(t.length + 1);
                        for (var i = 0; i <= s.length; i++) {
                            {
                                var prev = i;
                                for (var j = 0; j <= t.length; j++) {
                                    {
                                        if (i === 0)
                                            distance[j] = j;
                                        else {
                                            if (j > 0) {
                                                var curr = distance[j - 1];
                                                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s.charAt(i - 1)) != (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(t.charAt(j - 1)))
                                                    curr = Math.min(Math.min(curr, prev), distance[j]) + 1;
                                                distance[j - 1] = prev;
                                                prev = curr;
                                            }
                                        }
                                    }
                                    ;
                                }
                                if (i > 0)
                                    distance[t.length] = prev;
                            }
                            ;
                        }
                        return distance[t.length];
                    };
                    return StringUtils;
                }());
                StringUtils.__instance = null;
                StringUtils.MAX_STRING_BUFFER_SIZE = 200;
                utils.StringUtils = StringUtils;
                StringUtils["__class"] = "com.montezumba.lib.utils.StringUtils";
                (function (StringUtils) {
                    var Matcher = (function () {
                        function Matcher(__parent) {
                            this.__parent = __parent;
                        }
                        Matcher.prototype.group$int = function (count) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
                        Matcher.prototype.group = function (count) {
                            if (((typeof count === 'number') || count === null)) {
                                return this.group$int(count);
                            }
                            else if (count === undefined) {
                                return this.group$();
                            }
                            else
                                throw new Error('invalid overload');
                        };
                        Matcher.prototype.group$ = function () { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
                        return Matcher;
                    }());
                    StringUtils.Matcher = Matcher;
                    Matcher["__class"] = "com.montezumba.lib.utils.StringUtils.Matcher";
                    var Pattern = (function () {
                        function Pattern() {
                        }
                        Pattern.compile$java_lang_String = function (pattern) {
                            return StringUtils.instance()._createRegexPattern(pattern, 0);
                        };
                        Pattern.compile$java_lang_String$int = function (pattern, flags) {
                            return StringUtils.instance()._createRegexPattern(pattern, flags);
                        };
                        Pattern.compile = function (pattern, flags) {
                            if (((typeof pattern === 'string') || pattern === null) && ((typeof flags === 'number') || flags === null)) {
                                return com.montezumba.lib.utils.StringUtils.Pattern.compile$java_lang_String$int(pattern, flags);
                            }
                            else if (((typeof pattern === 'string') || pattern === null) && flags === undefined) {
                                return com.montezumba.lib.utils.StringUtils.Pattern.compile$java_lang_String(pattern);
                            }
                            else
                                throw new Error('invalid overload');
                        };
                        return Pattern;
                    }());
                    Pattern.DOTALL = 1;
                    Pattern.MULTILINE = 2;
                    StringUtils.Pattern = Pattern;
                    Pattern["__class"] = "com.montezumba.lib.utils.StringUtils.Pattern";
                    var Batch = (function () {
                        function Batch(__parent) {
                            this.__parent = __parent;
                            this.cachedData = { str: "", toString: function () { return this.str; } };
                            this.totalBytes = 0;
                        }
                        Batch.prototype.run = function (currentPos, lastPos) {
                            var m = p.matcher(this.cachedData);
                            var groupCount = m.groupCount() + 1;
                            var remainerIndex = -1;
                            while ((m.find())) {
                                {
                                    var currGroups = (function (s) { var a = []; while (s-- > 0)
                                        a.push(null); return a; })(groupCount);
                                    for (var i = 0; i < groupCount; ++i) {
                                        {
                                            currGroups[i] = m.group$int(i);
                                        }
                                        ;
                                    }
                                    try {
                                        callback.onMatch(currGroups, (Math.round(100.0 * this.totalBytes / lastPos) | 0));
                                    }
                                    catch (e) {
                                        com.montezumba.lib.types.MediaLog.instance().error$java_lang_String$java_lang_Throwable("Error in user callback for the given match", e);
                                    }
                                    ;
                                    remainerIndex = m.end();
                                }
                            }
                            ;
                            var maxLength = 10000 * 250;
                            var remainerSize = this.cachedData.str.length - remainerIndex - 1;
                            if (remainerIndex > 0) {
                                com.montezumba.lib.types.MediaLog.instance().debug("length of the remainer=" + remainerSize);
                                if (remainerSize > maxLength) {
                                    remainerSize = maxLength;
                                    remainerIndex = this.cachedData.str.length - remainerSize - 1;
                                }
                                var data = this.cachedData.str.substring(remainerIndex, /* length */ this.cachedData.str.length);
                                com.montezumba.lib.types.MediaLog.instance().debug("data length is = " + data.length);
                                this.cachedData = { str: data, toString: function () { return this.str; } };
                                com.montezumba.lib.types.MediaLog.instance().debug("cache data was reset");
                            }
                            else {
                                this.cachedData = { str: "", toString: function () { return this.str; } };
                            }
                        };
                        Batch.prototype.addLine = function (line) {
                            /* append */ (function (sb) { sb.str = sb.str.concat(line); return sb; })(this.cachedData);
                        };
                        return Batch;
                    }());
                    StringUtils.Batch = Batch;
                    Batch["__class"] = "Batch";
                })(StringUtils = utils.StringUtils || (utils.StringUtils = {}));
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                /**
                 * Allows to catch different threads and invoke system handlers for each
                 * @class
                 */
                var SystemTrap = (function () {
                    function SystemTrap() {
                        /*private*/ this.mCallback = null;
                    }
                    SystemTrap.instance = function () {
                        return SystemTrap.__instance;
                    };
                    SystemTrap.create = function (type) {
                        try {
                            SystemTrap.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                            }
                        }
                        ;
                    };
                    /**
                     * Arms the trap (enables it) with the given callback
                     * @param {*} callback
                     */
                    SystemTrap.prototype.arm = function (callback) {
                        this.mCallback = callback;
                    };
                    /**
                     * Disarms the trap (disables it)
                     */
                    SystemTrap.prototype.disarm = function () {
                        this.mCallback = null;
                    };
                    /**
                     * Triggers the trap.
                     * If it's armed - the appropriate callback will be triggered
                     */
                    SystemTrap.prototype.trigger = function () {
                        if (this.mCallback != null) {
                            this.mCallback.onTrapped(java.lang.Thread.currentThread());
                        }
                    };
                    return SystemTrap;
                }());
                SystemTrap.__instance = null;
                utils.SystemTrap = SystemTrap;
                SystemTrap["__class"] = "com.montezumba.lib.utils.SystemTrap";
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var WeakObject = (function () {
                    function WeakObject(object) {
                        if (this.mReference === undefined)
                            this.mReference = null;
                        this.mReference = (object);
                    }
                    WeakObject.prototype.get = function () {
                        return this.mReference;
                    };
                    /**
                     *
                     * @param {*} other
                     * @return {boolean}
                     */
                    WeakObject.prototype.equals = function (other) {
                        if (other === this) {
                            return true;
                        }
                        if (other == null) {
                            return false;
                        }
                        if (!(other != null && other instanceof com.montezumba.lib.utils.WeakObject)) {
                            return false;
                        }
                        if (this.get() == null || other.get() == null) {
                            return false;
                        }
                        return (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(other.get(), this.get());
                    };
                    /**
                     *
                     * @return {number}
                     */
                    WeakObject.prototype.hashCode = function () {
                        if (this.get() == null) {
                            return 0;
                        }
                        return (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.get());
                    };
                    return WeakObject;
                }());
                utils.WeakObject = WeakObject;
                WeakObject["__class"] = "com.montezumba.lib.utils.WeakObject";
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var XMLReader;
                (function (XMLReader) {
                    var XMLTag = (function () {
                        function XMLTag(tagName, tagText, attributes) {
                            this.name = null;
                            this.text = null;
                            this.mAttributes = null;
                            this.name = tagName;
                            this.text = tagText;
                            this.mAttributes = attributes;
                        }
                        XMLTag.prototype.getAttributeValue = function (tagName) {
                            return (function (m, k) { return m[k] === undefined ? null : m[k]; })(this.mAttributes, tagName);
                        };
                        return XMLTag;
                    }());
                    XMLReader.XMLTag = XMLTag;
                    XMLTag["__class"] = "com.montezumba.lib.utils.XMLReader.XMLTag";
                })(XMLReader = utils.XMLReader || (utils.XMLReader = {}));
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var io;
            (function (io) {
                var DataBaseHandler = (function (_super) {
                    __extends(DataBaseHandler, _super);
                    function DataBaseHandler() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.mDatabaseName = null;
                        _this.mDatabaseVersion = null;
                        _this.mOnInit = null;
                        _this.mOnUpgrade = null;
                        _this.mOnDowngrade = null;
                        _this.mId = -1;
                        return _this;
                    }
                    DataBaseHandler.__instances_$LI$ = function () { if (DataBaseHandler.__instances == null)
                        DataBaseHandler.__instances = ([]); return DataBaseHandler.__instances; };
                    ;
                    DataBaseHandler.instance = function (dbId) {
                        com.montezumba.lib.utils.SystemTrap.instance().trigger();
                        return DataBaseHandler.__instances_$LI$()[dbId];
                    };
                    DataBaseHandler.instances = function () {
                        return DataBaseHandler.__instances_$LI$();
                    };
                    DataBaseHandler.create = function (dbId, type) {
                        try {
                            /* add */ DataBaseHandler.__instances_$LI$().splice(dbId, 0, /* newInstance */ new (type)());
                            /* get */ DataBaseHandler.__instances_$LI$()[dbId].setId(dbId);
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                        }
                        ;
                    };
                    DataBaseHandler.prototype.runSqlQuery$java_lang_String = function (sqlString) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
                    /**
                     * Executes a single SQL Query without result (typically a 'INSERT/UPDATE/DELETE' type)
                     * @param {string} sqlString - sql query
                     * @throws DataBaseException
                     */
                    DataBaseHandler.prototype.runSqlQuery = function (sqlString) {
                        if (((typeof sqlString === 'string') || sqlString === null)) {
                            return this.runSqlQuery$java_lang_String(sqlString);
                        }
                        else if (((sqlString != null && (sqlString["__interfaces"] != null && sqlString["__interfaces"].indexOf("com.montezumba.lib.io.DataBaseHandler.CompiledQuery") >= 0 || sqlString.constructor != null && sqlString.constructor["__interfaces"] != null && sqlString.constructor["__interfaces"].indexOf("com.montezumba.lib.io.DataBaseHandler.CompiledQuery") >= 0)) || sqlString === null)) {
                            return this.runSqlQuery$com_montezumba_lib_io_DataBaseHandler_CompiledQuery(sqlString);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    DataBaseHandler.prototype.runSqlQuery$com_montezumba_lib_io_DataBaseHandler_CompiledQuery = function (compiledQuery) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
                    /**
                     * Set on-upgrade logic
                     * @param {*} onUpgrade - method that will be called when the database version is increased
                     */
                    DataBaseHandler.prototype.setOnUpgrade = function (onUpgrade) {
                        this.mOnUpgrade = onUpgrade;
                    };
                    /**
                     * Set on-downgrade logic
                     * @param onUpgrade - method that will be called when the database version is decreased
                     * @param {*} onDowngrade
                     */
                    DataBaseHandler.prototype.setOnDowngrade = function (onDowngrade) {
                        this.mOnDowngrade = onDowngrade;
                    };
                    DataBaseHandler.prototype.setOnInit = function (onInit) {
                        this.mOnInit = onInit;
                    };
                    /**
                     * Select active database (currently only one DB can be selected at a time)
                     * @param {string} database - database name to be selected
                     * @param {number} version - the version of this database
                     */
                    DataBaseHandler.prototype.selectDatabase = function (database, version) {
                        this.mDatabaseName = database;
                        this.mDatabaseVersion = version;
                    };
                    DataBaseHandler.prototype.hasTable = function (tableName) {
                        var query = "select DISTINCT tbl_name from sqlite_master where tbl_name = \'" + tableName + "\'";
                        try {
                            var result = this.runSqlQueryWithResult(query, new DataBaseHandler.DataBaseHandler$0(this));
                            return result.length === 1;
                        }
                        catch (e) {
                            com.montezumba.lib.types.MediaLog.instance().error$java_lang_String$java_lang_Throwable("unable to check hasTable (" + query + ")", e);
                            return false;
                        }
                        ;
                    };
                    DataBaseHandler.prototype.setId = function (dbId) {
                        this.mId = dbId;
                    };
                    /**
                     *
                     */
                    DataBaseHandler.prototype.destroy = function () {
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    DataBaseHandler.prototype.init = function (mode) {
                    };
                    return DataBaseHandler;
                }(com.montezumba.lib.types.Component));
                io.DataBaseHandler = DataBaseHandler;
                DataBaseHandler["__class"] = "com.montezumba.lib.io.DataBaseHandler";
                (function (DataBaseHandler) {
                    var TimeStampDBType;
                    (function (TimeStampDBType) {
                        TimeStampDBType[TimeStampDBType["TIMESTAMP_TYPE_UNIXEPOCH"] = 0] = "TIMESTAMP_TYPE_UNIXEPOCH";
                        TimeStampDBType[TimeStampDBType["TIMESTAMP_TYPE_UTCTIME"] = 1] = "TIMESTAMP_TYPE_UTCTIME";
                    })(TimeStampDBType = DataBaseHandler.TimeStampDBType || (DataBaseHandler.TimeStampDBType = {}));
                    var DataBaseHandler$0 = (function () {
                        function DataBaseHandler$0(__parent) {
                            this.__parent = __parent;
                        }
                        /**
                         *
                         * @param {*} result
                         * @return {*}
                         */
                        DataBaseHandler$0.prototype.resolveResult = function (result) {
                            return new Object();
                        };
                        return DataBaseHandler$0;
                    }());
                    DataBaseHandler.DataBaseHandler$0 = DataBaseHandler$0;
                    DataBaseHandler$0["__interfaces"] = ["com.montezumba.lib.io.DataBaseHandler.QueryResultsSetter"];
                })(DataBaseHandler = io.DataBaseHandler || (io.DataBaseHandler = {}));
            })(io = lib.io || (lib.io = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var io;
            (function (io) {
                var RegistryHandler = (function (_super) {
                    __extends(RegistryHandler, _super);
                    function RegistryHandler() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        /*private*/ _this.mId = -1;
                        return _this;
                    }
                    RegistryHandler.instances_$LI$ = function () { if (RegistryHandler.instances == null)
                        RegistryHandler.instances = ([]); return RegistryHandler.instances; };
                    ;
                    RegistryHandler.instance = function (regId) {
                        com.montezumba.lib.utils.SystemTrap.instance().trigger();
                        return RegistryHandler.instances_$LI$()[regId];
                    };
                    RegistryHandler.create = function (regId, type) {
                        try {
                            /* add */ RegistryHandler.instances_$LI$().splice(regId, 0, /* newInstance */ new (type)());
                            /* get */ RegistryHandler.instances_$LI$()[regId].setId(regId);
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                        }
                        ;
                    };
                    /**
                     *
                     */
                    RegistryHandler.prototype.destroy = function () {
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    RegistryHandler.prototype.init = function (mode) {
                    };
                    /*private*/ RegistryHandler.prototype.setId = function (dbId) {
                        this.mId = dbId;
                    };
                    return RegistryHandler;
                }(com.montezumba.lib.types.Component));
                io.RegistryHandler = RegistryHandler;
                RegistryHandler["__class"] = "com.montezumba.lib.io.RegistryHandler";
            })(io = lib.io || (lib.io = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var io;
            (function (io) {
                var StorageHandler = (function (_super) {
                    __extends(StorageHandler, _super);
                    function StorageHandler() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    StorageHandler.instance = function () {
                        return StorageHandler.__instance;
                    };
                    StorageHandler.create = function (type) {
                        try {
                            StorageHandler.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                        }
                        ;
                    };
                    StorageHandler.prototype.openFile$java_lang_String$java_lang_String = function (filePath, encoding) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
                    /**
                     * Opens an existing file for reading
                     * @param {string} filePath A path to a file (local/remote). A full path should be provided
                     * @param {string} encoding The text-encoding of the file
                     * @return {*} A FileReader for this file
                     * @throws IOException If failed to read the file or the file does not exist in the specified location
                     */
                    StorageHandler.prototype.openFile = function (filePath, encoding) {
                        if (((typeof filePath === 'string') || filePath === null) && ((typeof encoding === 'string') || encoding === null)) {
                            return this.openFile$java_lang_String$java_lang_String(filePath, encoding);
                        }
                        else if (((typeof filePath === 'string') || filePath === null) && encoding === undefined) {
                            return this.openFile$java_lang_String(filePath);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    StorageHandler.prototype.openFile$java_lang_String = function (filePath) {
                        return this.openFile$java_lang_String$java_lang_String(filePath, "UTF-8");
                    };
                    StorageHandler.prototype.openDirectory = function (dirPath) {
                        return this.openDir(dirPath);
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    StorageHandler.prototype.init = function (mode) {
                    };
                    /**
                     *
                     */
                    StorageHandler.prototype.destroy = function () {
                    };
                    return StorageHandler;
                }(com.montezumba.lib.types.Component));
                StorageHandler.__instance = null;
                io.StorageHandler = StorageHandler;
                StorageHandler["__class"] = "com.montezumba.lib.io.StorageHandler";
                (function (StorageHandler) {
                    var StorageType;
                    (function (StorageType) {
                        StorageType[StorageType["INTERNAL_STORAGE"] = 0] = "INTERNAL_STORAGE";
                        StorageType[StorageType["REMOVABLE_STORAGE"] = 1] = "REMOVABLE_STORAGE";
                        StorageType[StorageType["CLOUD_STORAGE"] = 2] = "CLOUD_STORAGE";
                    })(StorageType = StorageHandler.StorageType || (StorageHandler.StorageType = {}));
                    /**
                     * Represents a mounted storage device
                     * @class
                     */
                    var StorageDevice = (function () {
                        function StorageDevice() {
                            if (this.id === undefined)
                                this.id = null;
                            if (this.storageName === undefined)
                                this.storageName = null;
                            if (this.totalSizeBytes === undefined)
                                this.totalSizeBytes = 0;
                            if (this.freeSizeBytes === undefined)
                                this.freeSizeBytes = 0;
                            if (this.appPath === undefined)
                                this.appPath = null;
                            if (this.type === undefined)
                                this.type = null;
                        }
                        /**
                         *
                         * @param {*} o
                         * @return {boolean}
                         */
                        StorageDevice.prototype.equals = function (o) {
                            if (o === this)
                                return true;
                            if (!(o != null && o instanceof com.montezumba.lib.io.StorageHandler.StorageDevice))
                                return false;
                            var sd = o;
                            return (function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(this.id, sd.id);
                        };
                        return StorageDevice;
                    }());
                    StorageHandler.StorageDevice = StorageDevice;
                    StorageDevice["__class"] = "com.montezumba.lib.io.StorageHandler.StorageDevice";
                })(StorageHandler = io.StorageHandler || (io.StorageHandler = {}));
            })(io = lib.io || (lib.io = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var os;
            (function (os) {
                /**
                 * Provides the ability to perform some activities in the background of the main application
                 * This class is an abstraction for backgroundService
                 * @class
                 * @extends com.montezumba.lib.types.Component
                 */
                var Monitor = (function (_super) {
                    __extends(Monitor, _super);
                    function Monitor() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        /*private*/ _this.mCallbacks = ([]);
                        /*private*/ _this.mIsRunning = false;
                        return _this;
                    }
                    Monitor.instance = function () {
                        return Monitor.__instance;
                    };
                    Monitor.create = function (type) {
                        try {
                            Monitor.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                        }
                        ;
                    };
                    Monitor.prototype.registerMonitorCallback$long$java_lang_Runnable$boolean$boolean = function (monitorRate, onMonitor, wakeOnSleep, allowDuplicates) {
                        com.montezumba.lib.types.MediaLog.instance().debug("register monitor callback");
                        if (allowDuplicates || !(this.mCallbacks.indexOf((onMonitor)) >= 0)) {
                            if (this.mCallbacks.length >= Monitor.MAX_CALLBACKS) {
                                com.montezumba.lib.types.MediaLog.instance().error$java_lang_String("Cannot add more callbacks...");
                                return;
                            }
                            else {
                                /* add */ (this.mCallbacks.push(onMonitor) > 0);
                            }
                        }
                        var position = this.mCallbacks.indexOf(onMonitor);
                        this.registerMonitor$long$int$boolean(monitorRate, position, wakeOnSleep);
                    };
                    Monitor.prototype.registerMonitorCallback$com_montezumba_lib_types_TimeStamp$java_lang_Runnable$boolean$boolean = function (scheduledTime, onMonitor, wakeOnSleep, allowDuplicates) {
                        var currentTime = com.montezumba.lib.utils.TimerFactory.instance().getCurrentTime();
                        if (scheduledTime.after(currentTime)) {
                            if (allowDuplicates || !(this.mCallbacks.indexOf((onMonitor)) >= 0)) {
                                if (this.mCallbacks.length >= Monitor.MAX_CALLBACKS) {
                                    com.montezumba.lib.types.MediaLog.instance().error$java_lang_String("Cannot add more callbacks...");
                                    return;
                                }
                                else {
                                    /* add */ (this.mCallbacks.push(onMonitor) > 0);
                                }
                            }
                            var position = this.mCallbacks.indexOf(onMonitor);
                            this.registerMonitor$com_montezumba_lib_types_TimeStamp$int$boolean(scheduledTime, position, wakeOnSleep);
                        }
                    };
                    /**
                     * Register a new scheduled monitor to be triggered at a specific time
                     * @param {com.montezumba.lib.types.TimeStamp} scheduledTime Time when this callback should be triggered
                     * @param {() => void} onMonitor The callback to invoke
                     * @param {boolean} wakeOnSleep If 'true' than the callback will be triggered even if the device is in sleep mode
                     * @param {boolean} allowDuplicates If 'true' the callback will be registered even if it already scheduled. If it's important to have only one callback at a time - set it to 'false'
                     */
                    Monitor.prototype.registerMonitorCallback = function (scheduledTime, onMonitor, wakeOnSleep, allowDuplicates) {
                        if (((scheduledTime != null && scheduledTime instanceof com.montezumba.lib.types.TimeStamp) || scheduledTime === null) && ((typeof onMonitor === 'function' && onMonitor.length == 0) || onMonitor === null) && ((typeof wakeOnSleep === 'boolean') || wakeOnSleep === null) && ((typeof allowDuplicates === 'boolean') || allowDuplicates === null)) {
                            return this.registerMonitorCallback$com_montezumba_lib_types_TimeStamp$java_lang_Runnable$boolean$boolean(scheduledTime, onMonitor, wakeOnSleep, allowDuplicates);
                        }
                        else if (((typeof scheduledTime === 'number') || scheduledTime === null) && ((typeof onMonitor === 'function' && onMonitor.length == 0) || onMonitor === null) && ((typeof wakeOnSleep === 'boolean') || wakeOnSleep === null) && ((typeof allowDuplicates === 'boolean') || allowDuplicates === null)) {
                            return this.registerMonitorCallback$long$java_lang_Runnable$boolean$boolean(scheduledTime, onMonitor, wakeOnSleep, allowDuplicates);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    Monitor.prototype.getCallback = function (id) {
                        if (id >= this.mCallbacks.length || id < 0) {
                            return (null);
                        }
                        return (this.mCallbacks[id]);
                    };
                    Monitor.prototype.isRunning = function () {
                        return this.mIsRunning;
                    };
                    Monitor.prototype.setRunning = function (isRunning) {
                        this.mIsRunning = isRunning;
                    };
                    /**
                     *
                     */
                    Monitor.prototype.destroy = function () {
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    Monitor.prototype.init = function (mode) {
                    };
                    Monitor.prototype.registerMonitor$long$int$boolean = function (monitorRate, monitorId, wakeOnSleep) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
                    Monitor.prototype.registerMonitor$com_montezumba_lib_types_TimeStamp$int$boolean = function (scheduledTime, monitorId, wakeOnSleep) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
                    Monitor.prototype.registerMonitor = function (scheduledTime, monitorId, wakeOnSleep) {
                        if (((scheduledTime != null && scheduledTime instanceof com.montezumba.lib.types.TimeStamp) || scheduledTime === null) && ((typeof monitorId === 'number') || monitorId === null) && ((typeof wakeOnSleep === 'boolean') || wakeOnSleep === null)) {
                            return this.registerMonitor$com_montezumba_lib_types_TimeStamp$int$boolean(scheduledTime, monitorId, wakeOnSleep);
                        }
                        else if (((typeof scheduledTime === 'number') || scheduledTime === null) && ((typeof monitorId === 'number') || monitorId === null) && ((typeof wakeOnSleep === 'boolean') || wakeOnSleep === null)) {
                            return this.registerMonitor$long$int$boolean(scheduledTime, monitorId, wakeOnSleep);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    return Monitor;
                }(com.montezumba.lib.types.Component));
                Monitor.MAX_CALLBACKS = 1000;
                Monitor.__instance = null;
                os.Monitor = Monitor;
                Monitor["__class"] = "com.montezumba.lib.os.Monitor";
            })(os = lib.os || (lib.os = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var os;
            (function (os) {
                var OSHandler = (function (_super) {
                    __extends(OSHandler, _super);
                    function OSHandler() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    OSHandler.instance = function () {
                        return OSHandler.__instance;
                    };
                    OSHandler.create = function (type) {
                        try {
                            OSHandler.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                        }
                        ;
                    };
                    /**
                     *
                     */
                    OSHandler.prototype.destroy = function () {
                        com.montezumba.lib.types.events.OSEvents.clearAll();
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    OSHandler.prototype.init = function (mode) {
                        this.initSpecific();
                    };
                    return OSHandler;
                }(com.montezumba.lib.types.Component));
                OSHandler.__instance = null;
                os.OSHandler = OSHandler;
                OSHandler["__class"] = "com.montezumba.lib.os.OSHandler";
                (function (OSHandler) {
                    var Permission;
                    (function (Permission) {
                        Permission[Permission["MASS_STORAGE_READ_PERMISSION"] = 0] = "MASS_STORAGE_READ_PERMISSION";
                        Permission[Permission["MASS_STORAGE_WRITE_PERMISSION"] = 1] = "MASS_STORAGE_WRITE_PERMISSION";
                    })(Permission = OSHandler.Permission || (OSHandler.Permission = {}));
                })(OSHandler = os.OSHandler || (os.OSHandler = {}));
            })(os = lib.os || (lib.os = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var MediaLog = (function (_super) {
                    __extends(MediaLog, _super);
                    function MediaLog() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.mTag = null;
                        /*private*/ _this.mAllEnabled = true;
                        /*private*/ _this.mEnabledClasses = ([]);
                        /*private*/ _this.mDisabledClasses = ([]);
                        /*private*/ _this.mEnabledForReport = ([]);
                        return _this;
                    }
                    MediaLog.instance = function () {
                        return MediaLog.__instance;
                    };
                    MediaLog.create = function (type, tag) {
                        try {
                            MediaLog.__instance = new (type)();
                            MediaLog.__instance.mTag = tag;
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                        }
                        ;
                    };
                    MediaLog.prototype.error$java_lang_String = function (msg) {
                        this.error$java_lang_String$java_lang_String("_error_", msg);
                    };
                    MediaLog.prototype.error$java_lang_String$java_lang_String = function (type, msg) {
                        this.formatMessage(MediaLog.LogType.LOG_TYPE_ERROR, "<" + type + "> " + msg, false, 0);
                        if ((this.mEnabledForReport.indexOf((MediaLog.LogType.LOG_TYPE_ERROR)) >= 0)) {
                            com.montezumba.lib.utils.ReportHandler.instance().report$com_montezumba_lib_utils_ReportHandler_ReportLevel$java_lang_String$java_lang_String$long(com.montezumba.lib.utils.ReportHandler.ReportLevel.REPORT_LEVEL_ERROR, type, msg, 0);
                        }
                    };
                    MediaLog.prototype.error = function (type, msg) {
                        if (((typeof type === 'string') || type === null) && ((typeof msg === 'string') || msg === null)) {
                            return this.error$java_lang_String$java_lang_String(type, msg);
                        }
                        else if (((typeof type === 'string') || type === null) && ((msg != null && (msg["__classes"] && msg["__classes"].indexOf("java.lang.Throwable") >= 0) || msg != null && msg instanceof Error) || msg === null)) {
                            return this.error$java_lang_String$java_lang_Throwable(type, msg);
                        }
                        else if (((typeof type === 'string') || type === null) && msg === undefined) {
                            return this.error$java_lang_String(type);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    MediaLog.prototype.warn$java_lang_String = function (msg) {
                        this.formatMessage(MediaLog.LogType.LOG_TYPE_WARNING, msg, false, 0);
                        if ((this.mEnabledForReport.indexOf((MediaLog.LogType.LOG_TYPE_WARNING)) >= 0)) {
                            com.montezumba.lib.utils.ReportHandler.instance().report$com_montezumba_lib_utils_ReportHandler_ReportLevel$java_lang_String$java_lang_String$long(com.montezumba.lib.utils.ReportHandler.ReportLevel.REPORT_LEVEL_ERROR, "__warning__", msg, 0);
                        }
                    };
                    MediaLog.prototype.error$java_lang_String$java_lang_Throwable = function (msg, e) {
                        this.formatMessage(MediaLog.LogType.LOG_TYPE_ERROR, msg, false, 0);
                        console.error(e.message, e);
                        if ((this.mEnabledForReport.indexOf((MediaLog.LogType.LOG_TYPE_ERROR)) >= 0)) {
                            com.montezumba.lib.utils.ReportHandler.instance().report$java_lang_String$java_lang_Throwable(msg, e);
                        }
                    };
                    MediaLog.prototype.warn$java_lang_String$java_lang_Throwable = function (msg, e) {
                        this.formatMessage(MediaLog.LogType.LOG_TYPE_WARNING, msg, false, 0);
                        console.error(e.message, e);
                        if ((this.mEnabledForReport.indexOf((MediaLog.LogType.LOG_TYPE_WARNING)) >= 0)) {
                            com.montezumba.lib.utils.ReportHandler.instance().report$java_lang_String$java_lang_Throwable(msg, e);
                        }
                    };
                    MediaLog.prototype.warn = function (msg, e) {
                        if (((typeof msg === 'string') || msg === null) && ((e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.Throwable") >= 0) || e != null && e instanceof Error) || e === null)) {
                            return this.warn$java_lang_String$java_lang_Throwable(msg, e);
                        }
                        else if (((typeof msg === 'string') || msg === null) && e === undefined) {
                            return this.warn$java_lang_String(msg);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    MediaLog.prototype.info$java_lang_String$java_lang_String = function (type, msg) {
                        this.info$java_lang_String$java_lang_String$long(type, msg, 0);
                    };
                    MediaLog.prototype.info$java_lang_String$java_lang_String$long = function (type, msg, value) {
                        this.formatMessage(MediaLog.LogType.LOG_TYPE_INFO, "<" + type + "> " + msg, true, 1);
                        if ((this.mEnabledForReport.indexOf((MediaLog.LogType.LOG_TYPE_INFO)) >= 0)) {
                            com.montezumba.lib.utils.ReportHandler.instance().report$com_montezumba_lib_utils_ReportHandler_ReportLevel$java_lang_String$java_lang_String$long(com.montezumba.lib.utils.ReportHandler.ReportLevel.REPORT_LEVEL_EVENT, type, msg, value);
                        }
                    };
                    MediaLog.prototype.info = function (type, msg, value) {
                        if (((typeof type === 'string') || type === null) && ((typeof msg === 'string') || msg === null) && ((typeof value === 'number') || value === null)) {
                            return this.info$java_lang_String$java_lang_String$long(type, msg, value);
                        }
                        else if (((typeof type === 'string') || type === null) && ((typeof msg === 'string') || msg === null) && value === undefined) {
                            return this.info$java_lang_String$java_lang_String(type, msg);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    MediaLog.prototype.debug = function (string) {
                        this.formatMessage(MediaLog.LogType.LOG_TYPE_DEBUG, string, true, 0);
                        if ((this.mEnabledForReport.indexOf((MediaLog.LogType.LOG_TYPE_DEBUG)) >= 0)) {
                            com.montezumba.lib.utils.ReportHandler.instance().report$com_montezumba_lib_utils_ReportHandler_ReportLevel$java_lang_String$java_lang_String$long(com.montezumba.lib.utils.ReportHandler.ReportLevel.REPORT_LEVEL_EVENT, "__debug__", string, 0);
                        }
                    };
                    MediaLog.prototype.stamp = function (string) {
                        this.formatMessage(MediaLog.LogType.LOG_TYPE_STAMP, string, true, 0);
                        if ((this.mEnabledForReport.indexOf((MediaLog.LogType.LOG_TYPE_STAMP)) >= 0)) {
                            com.montezumba.lib.utils.ReportHandler.instance().report$com_montezumba_lib_utils_ReportHandler_ReportLevel$java_lang_String$java_lang_String$long(com.montezumba.lib.utils.ReportHandler.ReportLevel.REPORT_LEVEL_EVENT, "__stamp__", string, 0);
                        }
                    };
                    MediaLog.prototype.enableAll = function () {
                        this.mAllEnabled = true;
                        /* clear */ (this.mDisabledClasses.length = 0);
                        /* clear */ (this.mEnabledClasses.length = 0);
                    };
                    MediaLog.prototype.disableAll = function () {
                        this.mAllEnabled = false;
                        /* clear */ (this.mDisabledClasses.length = 0);
                        /* clear */ (this.mEnabledClasses.length = 0);
                    };
                    MediaLog.prototype.enableClass = function (cls) {
                        var parts = (function (c) { return c["__class"] ? c["__class"] : c["name"]; })(cls).split("[.]");
                        var name = parts[parts.length - 1].replace(new RegExp("\\$.*", 'g'), "");
                        this.debug("bla: " + name);
                        /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                            s.push(e);
                            return true;
                        }
                        else {
                            return false;
                        } })(this.mEnabledClasses, name);
                    };
                    MediaLog.prototype.disableClass = function (cls) {
                        var parts = (function (c) { return c["__class"] ? c["__class"] : c["name"]; })(cls).split("[.]");
                        var name = parts[parts.length - 1].replace(new RegExp("\\$.*", 'g'), "");
                        /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                            s.push(e);
                            return true;
                        }
                        else {
                            return false;
                        } })(this.mDisabledClasses, name);
                    };
                    MediaLog.prototype.formatMessage = function (logType, string, conditionalLog, deltaStackDepth) {
                        if (!this.mAllEnabled && (this.mEnabledClasses.length == 0))
                            return;
                        var stackData = this.getStackData(deltaStackDepth);
                        var callingClass = stackData.className;
                        var callingMethod = stackData.methodName;
                        var threadId = this.getThreadId();
                        var threadName = this.getThreadName();
                        if (conditionalLog) {
                            var pureClassName = callingClass.replace(new RegExp("\\$.*", 'g'), "");
                            if (this.mAllEnabled && this.isClassDisabled(pureClassName)) {
                                return;
                            }
                            if (!this.mAllEnabled && !this.isClassEnabled(pureClassName)) {
                                return;
                            }
                        }
                        this.printMessage(logType, "[T" + threadId + ": " + threadName + "][" + callingClass + "::" + callingMethod + "] " + string);
                    };
                    MediaLog.prototype.isClassDisabled = function (pureClassName) {
                        return (this.mDisabledClasses.indexOf((pureClassName)) >= 0);
                    };
                    MediaLog.prototype.isClassEnabled = function (pureClassName) {
                        return (this.mEnabledClasses.indexOf((pureClassName)) >= 0);
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    MediaLog.prototype.init = function (mode) {
                        /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                            s.push(e);
                            return true;
                        }
                        else {
                            return false;
                        } })(this.mEnabledForReport, MediaLog.LogType.LOG_TYPE_ERROR);
                        /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                            s.push(e);
                            return true;
                        }
                        else {
                            return false;
                        } })(this.mEnabledForReport, MediaLog.LogType.LOG_TYPE_INFO);
                    };
                    /**
                     *
                     */
                    MediaLog.prototype.destroy = function () {
                        /* clear */ (this.mEnabledForReport.length = 0);
                    };
                    MediaLog.d = function (message) {
                        MediaLog.instance().debug(message);
                    };
                    return MediaLog;
                }(com.montezumba.lib.types.Component));
                MediaLog.__instance = null;
                types.MediaLog = MediaLog;
                MediaLog["__class"] = "com.montezumba.lib.types.MediaLog";
                (function (MediaLog) {
                    var LogType;
                    (function (LogType) {
                        LogType[LogType["LOG_TYPE_ERROR"] = 0] = "LOG_TYPE_ERROR";
                        LogType[LogType["LOG_TYPE_DEBUG"] = 1] = "LOG_TYPE_DEBUG";
                        LogType[LogType["LOG_TYPE_INFO"] = 2] = "LOG_TYPE_INFO";
                        LogType[LogType["LOG_TYPE_STAMP"] = 3] = "LOG_TYPE_STAMP";
                        LogType[LogType["LOG_TYPE_WARNING"] = 4] = "LOG_TYPE_WARNING";
                    })(LogType = MediaLog.LogType || (MediaLog.LogType = {}));
                    var StackData = (function () {
                        function StackData(__parent) {
                            this.__parent = __parent;
                            this.className = null;
                            this.methodName = null;
                            this.fileName = null;
                            this.lineInFile = -1;
                        }
                        return StackData;
                    }());
                    MediaLog.StackData = StackData;
                    StackData["__class"] = "com.montezumba.lib.types.MediaLog.StackData";
                })(MediaLog = types.MediaLog || (types.MediaLog = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var ui;
            (function (ui) {
                var ControlHandler = (function (_super) {
                    __extends(ControlHandler, _super);
                    function ControlHandler() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.mControls = ([]);
                        return _this;
                    }
                    ControlHandler.instance = function () {
                        return ControlHandler.__instance;
                    };
                    ControlHandler.create = function (type) {
                        try {
                            ControlHandler.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                        }
                        ;
                    };
                    /**
                     * Register the given controls in the system
                     * @param {*[]} controls - list of control to be registered
                     */
                    ControlHandler.prototype.registerControls = function (controls) {
                        /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(this.mControls, controls);
                    };
                    /**
                     * Remove the given list of controls from the system
                     * @param {*[]} controls - list of controls to be removed
                     */
                    ControlHandler.prototype.unregisterControls = function (controls) {
                        /* removeAll */ (function (a, r) { var b = false; for (var i = 0; i < r.length; i++) {
                            var ndx = a.indexOf(r[i]);
                            if (ndx >= 0) {
                                a.splice(ndx, 1);
                                b = true;
                            }
                        } return b; })(this.mControls, controls);
                    };
                    /**
                     * Un-register all controls from the system
                     */
                    ControlHandler.prototype.unregisterAll = function () {
                        /* clear */ (this.mControls.length = 0);
                    };
                    /**
                     * Register a single control to the system
                     * @param {*} control
                     */
                    ControlHandler.prototype.registerControl = function (control) {
                        if (!(this.mControls.indexOf((control)) >= 0)) {
                            /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                                s.push(e);
                                return true;
                            }
                            else {
                                return false;
                            } })(this.mControls, control);
                        }
                    };
                    /**
                     * Un-register the given control from the system
                     * @param {*} control
                     */
                    ControlHandler.prototype.unregisterControl = function (control) {
                        /* remove */ (function (a) { var index = a.indexOf(control); if (index >= 0) {
                            a.splice(index, 1);
                            return true;
                        }
                        else {
                            return false;
                        } })(this.mControls);
                    };
                    /**
                     * Assigns a callback to be executed for the given type (role) of displayable controls
                     * @param {com.montezumba.lib.ui.ControlHandler.Role} role - the role of displayable controls
                     * @param {*} listener - callback to be executed for setting/reading data from this control
                     */
                    ControlHandler.prototype.handleDisplayableControls = function (role, listener) {
                        for (var index132 = 0; index132 < this.mControls.length; index132++) {
                            var control = this.mControls[index132];
                            {
                                if ((control != null && (control["__interfaces"] != null && control["__interfaces"].indexOf("com.montezumba.lib.ui.ControlHandler.InformationControl") >= 0 || control.constructor != null && control.constructor["__interfaces"] != null && control.constructor["__interfaces"].indexOf("com.montezumba.lib.ui.ControlHandler.InformationControl") >= 0)) && control.isInRole(role)) {
                                    var displayable = control;
                                    displayable.registerOnDisplay(listener);
                                }
                            }
                        }
                    };
                    /**
                     * Assigns a callback to be executed for the given type (role) of touchable controls
                     * @param {com.montezumba.lib.ui.ControlHandler.Role} role - the role of touchable controls
                     * @param {*} listener - callback to be executed when the user touches/clicks this control
                     */
                    ControlHandler.prototype.handleTouchableControls = function (role, listener) {
                        for (var index133 = 0; index133 < this.mControls.length; index133++) {
                            var control = this.mControls[index133];
                            {
                                if ((control != null && (control["__interfaces"] != null && control["__interfaces"].indexOf("com.montezumba.lib.ui.ControlHandler.TouchableControl") >= 0 || control.constructor != null && control.constructor["__interfaces"] != null && control.constructor["__interfaces"].indexOf("com.montezumba.lib.ui.ControlHandler.TouchableControl") >= 0)) && control.isInRole(role)) {
                                    var touchable = control;
                                    touchable.registerOnTouch(role, listener);
                                }
                            }
                        }
                    };
                    /**
                     * Assigns a callback to be executed for the given type (role) of input controls
                     * @param listener - callback to be executed for setting/reading data from this control
                     * @param {com.montezumba.lib.ui.ControlHandler.Role} role - the role of input controls
                     * @param mOnSliderUpdating
                     * @param {*} inputListener
                     * @param {*} statusListener
                     * @param {*} progressListener
                     */
                    ControlHandler.prototype.handleInputControls = function (role, inputListener, statusListener, progressListener) {
                        for (var index134 = 0; index134 < this.mControls.length; index134++) {
                            var control = this.mControls[index134];
                            {
                                if ((control != null && (control["__interfaces"] != null && control["__interfaces"].indexOf("com.montezumba.lib.ui.ControlHandler.InputControl") >= 0 || control.constructor != null && control.constructor["__interfaces"] != null && control.constructor["__interfaces"].indexOf("com.montezumba.lib.ui.ControlHandler.InputControl") >= 0)) && control.isInRole(role)) {
                                    var input = control;
                                    input.registerOnInput(inputListener);
                                    input.registerOnStatus(statusListener);
                                    input.registerOnProgress(progressListener);
                                }
                            }
                        }
                    };
                    ControlHandler.prototype.clearInputControlListeners = function (role, inputListener, statusListener, progressListener) {
                        for (var index135 = 0; index135 < this.mControls.length; index135++) {
                            var control = this.mControls[index135];
                            {
                                if ((control != null && (control["__interfaces"] != null && control["__interfaces"].indexOf("com.montezumba.lib.ui.ControlHandler.InputControl") >= 0 || control.constructor != null && control.constructor["__interfaces"] != null && control.constructor["__interfaces"].indexOf("com.montezumba.lib.ui.ControlHandler.InputControl") >= 0)) && control.isInRole(role)) {
                                    var input = control;
                                    input.unRegisterOnInput(inputListener);
                                    input.unRegisterOnStatus(statusListener);
                                    input.unRegisterOnProgress(progressListener);
                                }
                            }
                        }
                    };
                    /**
                     * Retrieves all registered controls in the system
                     * @return {*[]} all controls
                     */
                    ControlHandler.prototype.getRegisteredControls = function () {
                        return this.mControls;
                    };
                    /**
                     *
                     */
                    ControlHandler.prototype.destroy = function () {
                        this.unregisterAll();
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    ControlHandler.prototype.init = function (mode) {
                    };
                    return ControlHandler;
                }(com.montezumba.lib.types.Component));
                ControlHandler.__instance = null;
                ui.ControlHandler = ControlHandler;
                ControlHandler["__class"] = "com.montezumba.lib.ui.ControlHandler";
                (function (ControlHandler) {
                    var Role;
                    (function (Role) {
                        Role[Role["ROLE_PLAY"] = 0] = "ROLE_PLAY";
                        Role[Role["ROLE_PAUSE"] = 1] = "ROLE_PAUSE";
                        Role[Role["ROLE_INFO"] = 2] = "ROLE_INFO";
                        Role[Role["ROLE_RECORD"] = 3] = "ROLE_RECORD";
                        Role[Role["ROLE_SUBTITLES"] = 4] = "ROLE_SUBTITLES";
                        Role[Role["ROLE_AUDIO"] = 5] = "ROLE_AUDIO";
                        Role[Role["ROLE_GUIDE_BACK"] = 6] = "ROLE_GUIDE_BACK";
                        Role[Role["ROLE_GUIDE_NEXT"] = 7] = "ROLE_GUIDE_NEXT";
                        Role[Role["ROLE_CHANNEL_NAME"] = 8] = "ROLE_CHANNEL_NAME";
                        Role[Role["ROLE_CHANNEL_NUMBER"] = 9] = "ROLE_CHANNEL_NUMBER";
                        Role[Role["ROLE_PROGRAM_NAME"] = 10] = "ROLE_PROGRAM_NAME";
                        Role[Role["ROLE_PROGRAM_TIME"] = 11] = "ROLE_PROGRAM_TIME";
                        Role[Role["ROLE_PROGRAM_DESC"] = 12] = "ROLE_PROGRAM_DESC";
                        Role[Role["ROLE_DEBUG"] = 13] = "ROLE_DEBUG";
                        Role[Role["ROLE_TIME_SEEK"] = 14] = "ROLE_TIME_SEEK";
                        Role[Role["ROLE_GENERAL_STATUS"] = 15] = "ROLE_GENERAL_STATUS";
                        Role[Role["ROLE_CHANNEL_LOGO"] = 16] = "ROLE_CHANNEL_LOGO";
                        Role[Role["ROLE_CURRENT_TIME"] = 17] = "ROLE_CURRENT_TIME";
                        Role[Role["ROLE_VOLUME_UP"] = 18] = "ROLE_VOLUME_UP";
                        Role[Role["ROLE_VOLUME_DOWN"] = 19] = "ROLE_VOLUME_DOWN";
                        Role[Role["ROLE_CHANNEL_NEXT"] = 20] = "ROLE_CHANNEL_NEXT";
                        Role[Role["ROLE_CHANNEL_PREV"] = 21] = "ROLE_CHANNEL_PREV";
                        Role[Role["ROLE_HD_720"] = 22] = "ROLE_HD_720";
                        Role[Role["ROLE_HD_1080"] = 23] = "ROLE_HD_1080";
                        Role[Role["ROLE_HD_4K"] = 24] = "ROLE_HD_4K";
                        Role[Role["ROLE_3D"] = 25] = "ROLE_3D";
                        Role[Role["NUM_OF_ROLES"] = 26] = "NUM_OF_ROLES";
                    })(Role = ControlHandler.Role || (ControlHandler.Role = {}));
                })(ControlHandler = ui.ControlHandler || (ui.ControlHandler = {}));
            })(ui = lib.ui || (lib.ui = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var ui;
            (function (ui) {
                var ErrorHandler = (function (_super) {
                    __extends(ErrorHandler, _super);
                    function ErrorHandler() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    ErrorHandler.instance = function () {
                        return ErrorHandler.__instance;
                    };
                    ErrorHandler.create = function (type) {
                        try {
                            ErrorHandler.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                                console.error(e.message, e);
                            }
                        }
                        ;
                    };
                    /**
                     *
                     */
                    ErrorHandler.prototype.destroy = function () {
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    ErrorHandler.prototype.init = function (mode) {
                    };
                    return ErrorHandler;
                }(com.montezumba.lib.types.Component));
                ErrorHandler.__instance = null;
                ui.ErrorHandler = ErrorHandler;
                ErrorHandler["__class"] = "com.montezumba.lib.ui.ErrorHandler";
            })(ui = lib.ui || (lib.ui = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var ui;
            (function (ui) {
                var LocalizeHandler = (function (_super) {
                    __extends(LocalizeHandler, _super);
                    function LocalizeHandler() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    LocalizeHandler.instance = function () {
                        return LocalizeHandler.__instance;
                    };
                    LocalizeHandler.create = function (type) {
                        try {
                            LocalizeHandler.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                            }
                        }
                        ;
                    };
                    /**
                     *
                     */
                    LocalizeHandler.prototype.destroy = function () {
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    LocalizeHandler.prototype.init = function (mode) {
                    };
                    return LocalizeHandler;
                }(com.montezumba.lib.types.Component));
                LocalizeHandler.__instance = null;
                ui.LocalizeHandler = LocalizeHandler;
                LocalizeHandler["__class"] = "com.montezumba.lib.ui.LocalizeHandler";
            })(ui = lib.ui || (lib.ui = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var TimerFactory = (function (_super) {
                    __extends(TimerFactory, _super);
                    function TimerFactory() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        /*private*/ _this.mTimers = ([]);
                        /*private*/ _this.mLock = new Object();
                        return _this;
                    }
                    TimerFactory.create = function (type) {
                        try {
                            TimerFactory.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                            }
                        }
                        ;
                    };
                    TimerFactory.instance = function () {
                        return TimerFactory.__instance;
                    };
                    TimerFactory.prototype.createTimer = function () {
                        var result = this.createTimerSpecific();
                        return result;
                    };
                    TimerFactory.prototype.createTimeStamp$long = function (milliseconds) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
                    TimerFactory.prototype.createTimeStamp$long$int = function (milliseconds, offset) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
                    TimerFactory.prototype.createTimeStamp$int$int$int$int$int$int$int = function (year, month, day, hour, minute, second, timezoneOffset) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
                    TimerFactory.prototype.createTimeStamp = function (year, month, day, hour, minute, second, timezoneOffset) {
                        if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof day === 'number') || day === null) && ((typeof hour === 'number') || hour === null) && ((typeof minute === 'number') || minute === null) && ((typeof second === 'number') || second === null) && ((typeof timezoneOffset === 'number') || timezoneOffset === null)) {
                            return this.createTimeStamp$int$int$int$int$int$int$int(year, month, day, hour, minute, second, timezoneOffset);
                        }
                        else if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && day === undefined && hour === undefined && minute === undefined && second === undefined && timezoneOffset === undefined) {
                            return this.createTimeStamp$long$int(year, month);
                        }
                        else if (((typeof year === 'number') || year === null) && month === undefined && day === undefined && hour === undefined && minute === undefined && second === undefined && timezoneOffset === undefined) {
                            return this.createTimeStamp$long(year);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    TimerFactory.prototype.init = function (mode) {
                    };
                    /**
                     *
                     */
                    TimerFactory.prototype.destroy = function () {
                        var timers = (this.mTimers.slice(0));
                        for (var index136 = 0; index136 < timers.length; index136++) {
                            var timer = timers[index136];
                            {
                                timer.clear();
                            }
                        }
                        {
                            /* clear */ (this.mTimers.length = 0);
                        }
                        ;
                    };
                    TimerFactory.prototype.setActiveTimer = function (timer) {
                        {
                            /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                                s.push(e);
                                return true;
                            }
                            else {
                                return false;
                            } })(this.mTimers, timer);
                        }
                        ;
                    };
                    TimerFactory.prototype.removeActiveTimer = function (timer) {
                        {
                            /* remove */ (function (a) { var index = a.indexOf(timer); if (index >= 0) {
                                a.splice(index, 1);
                                return true;
                            }
                            else {
                                return false;
                            } })(this.mTimers);
                        }
                        ;
                    };
                    return TimerFactory;
                }(com.montezumba.lib.types.Component));
                TimerFactory.__instance = null;
                utils.TimerFactory = TimerFactory;
                TimerFactory["__class"] = "com.montezumba.lib.utils.TimerFactory";
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var WorkerFactory = (function (_super) {
                    __extends(WorkerFactory, _super);
                    function WorkerFactory() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        /*private*/ _this.mWorkers = (new java.util.concurrent.ConcurrentHashMap());
                        /*private*/ _this.mLock = new Object();
                        return _this;
                    }
                    WorkerFactory.instance = function () {
                        return WorkerFactory.__instance;
                    };
                    WorkerFactory.create = function (type) {
                        try {
                            WorkerFactory.__instance = new (type)();
                        }
                        catch (__e) {
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
                                var e = __e;
                            }
                            if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                                var e = __e;
                            }
                        }
                        ;
                    };
                    WorkerFactory.prototype.createWorker$java_lang_String$java_lang_String$com_montezumba_lib_utils_WorkerFactory_WorkerType = function (name, group, strategy) {
                        var result;
                        if ((function (m, k) { return m[k] === undefined ? null : m[k]; })(this.mWorkers, group) != null) {
                            result = (function (m, k) { return m[k] === undefined ? null : m[k]; })(this.mWorkers, group);
                        }
                        else {
                            switch ((strategy)) {
                                case com.montezumba.lib.utils.WorkerFactory.WorkerType.ONE_TIME_WORKER:
                                    result = this.createOneTimeWorkerSpecific(group);
                                    break;
                                case com.montezumba.lib.utils.WorkerFactory.WorkerType.PERSISTENT_WORKER:
                                    result = this.createLooperWorkerSpecific(group);
                                    break;
                                default:
                                    ;
                                    return null;
                            }
                            /* put */ (this.mWorkers[group] = result);
                        }
                        return new WorkerFactory.VirtualWorker(this, name, result);
                    };
                    /**
                     * Create a regular worker
                     * @param {string} name - the name of the worker
                     * @param {string} group - the name of the group for this worker
                     * (workers of the same group can run on the same thread)
                     * @param {com.montezumba.lib.utils.WorkerFactory.WorkerType} strategy - worker creation strategy (defined the type of worker to be created)
                     * @return {*} A new worker that is bound to the specified worker-group
                     */
                    WorkerFactory.prototype.createWorker = function (name, group, strategy) {
                        if (((typeof name === 'string') || name === null) && ((typeof group === 'string') || group === null) && ((typeof strategy === 'number') || strategy === null)) {
                            return this.createWorker$java_lang_String$java_lang_String$com_montezumba_lib_utils_WorkerFactory_WorkerType(name, group, strategy);
                        }
                        else if (((typeof name === 'string') || name === null) && ((typeof group === 'number') || group === null) && strategy === undefined) {
                            return this.createWorker$java_lang_String$com_montezumba_lib_utils_WorkerFactory_WorkerType(name, group);
                        }
                        else if (((typeof name === 'string') || name === null) && ((typeof group === 'string') || group === null) && strategy === undefined) {
                            return this.createWorker$java_lang_String$java_lang_String(name, group);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    WorkerFactory.prototype.createWorker$java_lang_String$com_montezumba_lib_utils_WorkerFactory_WorkerType = function (name, strategy) {
                        return this.createWorker$java_lang_String$java_lang_String$com_montezumba_lib_utils_WorkerFactory_WorkerType(name, name, strategy);
                    };
                    WorkerFactory.prototype.createWorker$java_lang_String$java_lang_String = function (name, group) {
                        return this.createWorker$java_lang_String$java_lang_String$com_montezumba_lib_utils_WorkerFactory_WorkerType(name, group, WorkerFactory.WorkerType.PERSISTENT_WORKER);
                    };
                    /**
                     * Create a Lopper Worker.
                     * @param {string} name The name of the worker (which will be assigned to its own group)
                     * @return {*} A new Looper Worker (Looper Workers are always of a "Persistent Worker" type
                     */
                    WorkerFactory.prototype.createLooperWorker = function (name) {
                        return this.createLooperWorkerSpecific(name);
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    WorkerFactory.prototype.init = function (mode) {
                    };
                    /**
                     *
                     */
                    WorkerFactory.prototype.destroy = function () {
                        {
                            var array138 = (function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); })(this.mWorkers);
                            for (var index137 = 0; index137 < array138.length; index137++) {
                                var worker = array138[index137];
                                {
                                    worker.cancel();
                                }
                            }
                        }
                        /* clear */ (function (obj) { for (var member in obj)
                            delete obj[member]; })(this.mWorkers);
                    };
                    return WorkerFactory;
                }(com.montezumba.lib.types.Component));
                WorkerFactory.__instance = null;
                utils.WorkerFactory = WorkerFactory;
                WorkerFactory["__class"] = "com.montezumba.lib.utils.WorkerFactory";
                (function (WorkerFactory) {
                    /**
                     * Determines the type of the worker
                     * @enum
                     * @property {com.montezumba.lib.utils.WorkerFactory.WorkerType} ONE_TIME_WORKER
                     * Creates a single-use worker. The worker will be destroyed and recreated after each "run" invocation
                     * Use this option for relatively rare tasks.
                     * @property {com.montezumba.lib.utils.WorkerFactory.WorkerType} PERSISTENT_WORKER
                     * Creates a persistent worker. Perseistent workers keep running (in "Sleep" mode) until a new task is scheduled for them
                     * Use this option for frequent tasks.
                     * @class
                     */
                    var WorkerType;
                    (function (WorkerType) {
                        /**
                         * Creates a single-use worker. The worker will be destroyed and recreated after each "run" invocation
                         * Use this option for relatively rare tasks.
                         */
                        WorkerType[WorkerType["ONE_TIME_WORKER"] = 0] = "ONE_TIME_WORKER";
                        /**
                         * Creates a persistent worker. Perseistent workers keep running (in "Sleep" mode) until a new task is scheduled for them
                         * Use this option for frequent tasks.
                         */
                        WorkerType[WorkerType["PERSISTENT_WORKER"] = 1] = "PERSISTENT_WORKER";
                    })(WorkerType = WorkerFactory.WorkerType || (WorkerFactory.WorkerType = {}));
                    /**
                     * Worker wrapper to support different "Worker" objects that refer to the same execution frame (thread)
                     * Each such virtual worker will have a unique name (usefull for debugging)
                     * @param {string} name
                     * @param {*} worker
                     * @class
                     */
                    var VirtualWorker = (function () {
                        function VirtualWorker(__parent, name, worker) {
                            this.__parent = __parent;
                            if (this.mName === undefined)
                                this.mName = null;
                            if (this.mWorker === undefined)
                                this.mWorker = null;
                            this.mName = name;
                            this.mWorker = worker;
                        }
                        /**
                         *
                         * @param {*} task
                         */
                        VirtualWorker.prototype.run = function (task) {
                            this.mWorker.setName(this.mName);
                            this.mWorker.run(task);
                            var postRun = (this.mWorker.getPostRun());
                            if (postRun != null) {
                                (function (target) { return (typeof target === 'function') ? target() : target.run(); })(postRun);
                            }
                        };
                        /**
                         *
                         */
                        VirtualWorker.prototype.cancel = function () {
                            this.mWorker.cancel();
                        };
                        /**
                         *
                         * @return {boolean}
                         */
                        VirtualWorker.prototype.isRunning = function () {
                            return this.mWorker.isRunning();
                        };
                        /**
                         *
                         * @return {boolean}
                         */
                        VirtualWorker.prototype.isExecuting = function () {
                            return this.mWorker.isExecuting();
                        };
                        /**
                         *
                         */
                        VirtualWorker.prototype.setLowestPriority = function () {
                            this.mWorker.setLowestPriority();
                        };
                        /**
                         *
                         * @param {() => void} runnable
                         */
                        VirtualWorker.prototype.setPreRun = function (runnable) {
                            this.mWorker.setPreRun((runnable));
                        };
                        /**
                         *
                         * @param {() => void} runnable
                         */
                        VirtualWorker.prototype.setPostRun = function (runnable) {
                            this.mWorker.setPreRun((runnable));
                        };
                        /**
                         *
                         * @return {() => void}
                         */
                        VirtualWorker.prototype.getPreRun = function () {
                            return (this.mWorker.getPostRun());
                        };
                        /**
                         *
                         * @return {() => void}
                         */
                        VirtualWorker.prototype.getPostRun = function () {
                            return (this.mWorker.getPostRun());
                        };
                        /**
                         *
                         * @param {string} name
                         */
                        VirtualWorker.prototype.setName = function (name) {
                            this.mWorker.setName(name);
                        };
                        return VirtualWorker;
                    }());
                    WorkerFactory.VirtualWorker = VirtualWorker;
                    VirtualWorker["__class"] = "com.montezumba.lib.utils.WorkerFactory.VirtualWorker";
                    VirtualWorker["__interfaces"] = ["com.montezumba.lib.utils.WorkerFactory.Worker"];
                })(WorkerFactory = utils.WorkerFactory || (utils.WorkerFactory = {}));
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var config;
            (function (config) {
                var IOConfig = (function () {
                    function IOConfig() {
                    }
                    IOConfig.MAX_IO_ARRAY_SIZE_$LI$ = function () { if (IOConfig.MAX_IO_ARRAY_SIZE == null)
                        IOConfig.MAX_IO_ARRAY_SIZE = 5 * com.montezumba.lib.types.Constants.MB_$LI$(); return IOConfig.MAX_IO_ARRAY_SIZE; };
                    ;
                    return IOConfig;
                }());
                config.IOConfig = IOConfig;
                IOConfig["__class"] = "com.montezumba.lib.config.IOConfig";
            })(config = lib.config || (lib.config = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var jsweet;
                (function (jsweet) {
                    var TimeStampJSweet = (function (_super) {
                        __extends(TimeStampJSweet, _super);
                        function TimeStampJSweet(year, month, day, hour, minute, second, timezoneInMinutes) {
                            var _this = this;
                            if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof day === 'number') || day === null) && ((typeof hour === 'number') || hour === null) && ((typeof minute === 'number') || minute === null) && ((typeof second === 'number') || second === null) && ((typeof timezoneInMinutes === 'number') || timezoneInMinutes === null)) {
                                var __args = arguments;
                                _this = _super.call(this, year, month, day, hour, minute, second, timezoneInMinutes) || this;
                            }
                            else if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && day === undefined && hour === undefined && minute === undefined && second === undefined && timezoneInMinutes === undefined) {
                                var __args = arguments;
                                var milliseconds = __args[0];
                                var timezoneInMinutes_1 = __args[1];
                                _this = _super.call(this, milliseconds, timezoneInMinutes_1) || this;
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        TimeStampJSweet.mCalendarLock_$LI$ = function () { if (TimeStampJSweet.mCalendarLock == null)
                            TimeStampJSweet.mCalendarLock = new Object(); return TimeStampJSweet.mCalendarLock; };
                        ;
                        /**
                         *
                         * @param {number} utcMillis
                         * @return {com.montezumba.lib.types.TimeStamp.DateTime}
                         */
                        TimeStampJSweet.prototype.unpackTimeStamp = function (utcMillis) {
                            if (TimeStampJSweet.mCalendarLock_$LI$() == null) {
                                TimeStampJSweet.mCalendarLock = new Object();
                            }
                            {

                                var date = new Date(utcMillis);
                                var result = new types.TimeStamp.DateTime(this.__parent);
                                result.year = (date.getUTCFullYear() | 0);
                                result.month = (date.getUTCMonth() | 0) + 1;
                                result.day = (date.getUTCDate() | 0);
                                //console.debug("Unpacking with: "+result.day+"/"+result.month+"/"+result.year+"... input ms:"+utcMillis);
                                result.hour = (date.getUTCHours() | 0);
                                result.minute = (date.getUTCMinutes() | 0);
                                result.second = date.getUTCSeconds() + 0.001 * date.getUTCMilliseconds();
                                result.weekDay = function () { var result = []; for (var val in com.montezumba.lib.types.TimeStamp.WeekDay) {
                                    if (!isNaN(val)) {
                                        result.push(parseInt(val, 10));
                                    }
                                } return result; }()[(date.getUTCDay() | 0)];
                                result.weekDay = (result.weekDay + 0) % 7; // TODO: Patch for wrong week of day calculation
                                return result;
                            }
                            ;
                        };
                        /**
                         *
                         * @param {com.montezumba.lib.types.TimeStamp.DateTime} dateTime
                         * @param {number} zoneOffset
                         * @return {number}
                         */
                        TimeStampJSweet.prototype.packTimeStamp = function (dateTime, zoneOffset) {
                            var millis = 0;
                            if (TimeStampJSweet.mCalendarLock_$LI$() == null) {
                                TimeStampJSweet.mCalendarLock = new Object();
                            }
                            {
                                //console.debug("packTime: input:"+dateTime.day+"/"+dateTime.month+"/"+dateTime.year+"  "+dateTime.hour+":"+dateTime.minute+":"+dateTime.second);
                                var date = new Date(Date.UTC(dateTime.year, (dateTime.month - 1), dateTime.day, dateTime.hour, dateTime.minute, (dateTime.second | 0)));
                                //console.debug("packTime: output:"+date.getTime());
                                millis = (function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(((dateTime.second - ((dateTime.second | 0))) * com.montezumba.lib.types.Constants.SECONDS_$LI$()));
                                millis = (function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(date.getTime()) + millis - zoneOffset * com.montezumba.lib.types.Constants.MINUTES_$LI$();
                            }
                            ;
                            return millis;
                        };
                        /**
                         *
                         * @param {number} millis
                         * @param {number} zoneOffset
                         * @return {com.montezumba.lib.types.TimeStamp.WeekDay}
                         */
                        TimeStampJSweet.prototype._getWeekDay = function (millis, zoneOffset) {
                            var date = new Date((millis + (zoneOffset) * com.montezumba.lib.types.Constants.MINUTES_$LI$()));
                            var dayOfWeek = (date.getUTCDay() | 0);
                            return function () { var result = []; for (var val in com.montezumba.lib.types.TimeStamp.WeekDay) {
                                if (!isNaN(val)) {
                                    result.push(parseInt(val, 10));
                                }
                            } return result; }()[dayOfWeek];
                        };
                        return TimeStampJSweet;
                    }(com.montezumba.lib.types.TimeStamp));
                    jsweet.TimeStampJSweet = TimeStampJSweet;
                    TimeStampJSweet["__class"] = "com.montezumba.lib.types.jsweet.TimeStampJSweet";
                })(jsweet = types.jsweet || (types.jsweet = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var Addon = (function (_super) {
                    __extends(Addon, _super);
                    function Addon(name) {
                        var _this = _super.call(this, name) || this;
                        _this.serviceName = "";
                        _this.supportedFeatures = 0;
                        _this.versionId = 0;
                        _this.isEnabled = false;
                        _this.isUpToDate = true;
                        _this.versionName = "";
                        _this.executablePath = "";
                        _this.author = "";
                        _this.description = "";
                        _this.approved = false;
                        return _this;
                    }
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    Addon.prototype.equals = function (o) {
                        if (!(o != null && o instanceof com.montezumba.lib.types.Addon))
                            return false;
                        if (o === this)
                            return true;
                        var rhs = o;
                        var builder = new org.apache.commons.lang3.builder.EqualsBuilder();
                        builder.append(this.serviceName, rhs.serviceName).append(this.displayString, rhs.displayString);
                        return builder.build();
                    };
                    /**
                     *
                     * @return {number}
                     */
                    Addon.prototype.hashCode = function () {
                        var builder = new org.apache.commons.lang3.builder.HashCodeBuilder();
                        builder.append(this.serviceName).append(this.displayString);
                        return builder.build();
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    Addon.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.serviceName = title.mActionStrings[0];
                        this.supportedFeatures = parseInt(title.mActionStrings[1]);
                        this.versionId = parseInt(title.mActionStrings[2]);
                        this.isEnabled = ((title.mActionStrings[3].length === 0)) ? false : javaemul.internal.BooleanHelper.parseBoolean(title.mActionStrings[3]);
                        this.isUpToDate = ((title.mActionStrings[4].length === 0)) ? false : javaemul.internal.BooleanHelper.parseBoolean(title.mActionStrings[4]);
                        this.versionName = title.mActionStrings[5];
                        this.executablePath = title.mActionStrings[6];
                        this.author = title.mActionStrings[7];
                        this.description = title.mActionStrings[8];
                        this.approved = ((title.mActionStrings[9].length === 0)) ? false : javaemul.internal.BooleanHelper.parseBoolean(title.mActionStrings[9]);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    Addon.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_PLAYLIST;
                        result.mActionStrings[0] = this.serviceName;
                        result.mActionStrings[1] = this.supportedFeatures.toString();
                        result.mActionStrings[2] = this.versionId.toString();
                        result.mActionStrings[3] = this.isEnabled.toString();
                        result.mActionStrings[4] = this.isUpToDate.toString();
                        result.mActionStrings[5] = this.versionName;
                        result.mActionStrings[6] = this.executablePath;
                        result.mActionStrings[7] = this.author;
                        result.mActionStrings[8] = this.description;
                        result.mActionStrings[9] = this.approved.toString();
                        return result;
                    };
                    return Addon;
                }(com.montezumba.lib.types.Title));
                types.Addon = Addon;
                Addon["__class"] = "com.montezumba.lib.types.Addon";
                Addon["__interfaces"] = ["com.montezumba.lib.types.Title.Transportable"];
                (function (Addon) {
                    var AddonErrorType;
                    (function (AddonErrorType) {
                        AddonErrorType[AddonErrorType["ADDON_ERROR_NO_TITLES"] = 0] = "ADDON_ERROR_NO_TITLES";
                        AddonErrorType[AddonErrorType["ADDON_ERROR_BAD_PLAYABLE"] = 1] = "ADDON_ERROR_BAD_PLAYABLE";
                        AddonErrorType[AddonErrorType["ADDON_ERROR_REQUEST_FAILED"] = 2] = "ADDON_ERROR_REQUEST_FAILED";
                        AddonErrorType[AddonErrorType["ADDON_ERROR_NOT_INSTALLED"] = 3] = "ADDON_ERROR_NOT_INSTALLED";
                    })(AddonErrorType = Addon.AddonErrorType || (Addon.AddonErrorType = {}));
                })(Addon = types.Addon || (types.Addon = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var AddonVideoTitle = (function (_super) {
                    __extends(AddonVideoTitle, _super);
                    function AddonVideoTitle(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.addonName = null;
                            _this.addonProc = null;
                            _this.addonQuery = null;
                            _this.refreshRate = 0;
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.addonName = null;
                            _this.addonProc = null;
                            _this.addonQuery = null;
                            _this.refreshRate = 0;
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    AddonVideoTitle.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.mActionStrings[1] == null) || (title.mActionStrings[2] == null) || (title.mActionStrings[3] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.addonName = title.mActionStrings[0];
                        this.addonProc = title.mActionStrings[1];
                        this.addonQuery = title.mActionStrings[2];
                        var refresh = title.mActionStrings[3];
                        if (refresh == null || (refresh.length === 0) || (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(refresh, "")) {
                            refresh = "0";
                        }
                        this.refreshRate = parseInt(refresh);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    AddonVideoTitle.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_ADDON;
                        result.mActionStrings[0] = this.addonName;
                        result.mActionStrings[1] = this.addonProc;
                        result.mActionStrings[2] = this.addonQuery;
                        result.mActionStrings[3] = new String(this.refreshRate).toString();
                        return result;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    AddonVideoTitle.prototype.getNameString = function () {
                        return this.displayString;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    AddonVideoTitle.prototype.getPlayString = function () {
                        return "addon://" + this.addonName + AddonVideoTitle.DEFAULT_SEP_PATTERN + this.addonProc + AddonVideoTitle.DEFAULT_SEP_PATTERN + this.addonQuery;
                    };
                    AddonVideoTitle.prototype.getIdString = function () {
                        return this.id;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    AddonVideoTitle.prototype.getLogoString = function () {
                        return this.logo;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    AddonVideoTitle.prototype.equals = function (o) {
                        if (!(o != null && o instanceof com.montezumba.lib.types.AddonVideoTitle))
                            return false;
                        return (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.displayString, this.displayString) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.addonName, this.addonName) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.addonProc, this.addonProc) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.addonQuery, this.addonQuery);
                    };
                    /**
                     *
                     * @return {number}
                     */
                    AddonVideoTitle.prototype.hashCode = function () {
                        return (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.displayString) + (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.addonName) + (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.addonProc) + (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.addonQuery);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.Title.DataSource}
                     */
                    AddonVideoTitle.prototype.getDataSource = function () {
                        return types.Title.DataSource.DATA_SOURCE_ADDON;
                    };
                    /**
                     *
                     * @return {number}
                     */
                    AddonVideoTitle.prototype.getRefreshRate = function () {
                        return this.refreshRate;
                    };
                    return AddonVideoTitle;
                }(com.montezumba.lib.types.Title));
                AddonVideoTitle.DEFAULT_SEP_PATTERN = "`&`";
                types.AddonVideoTitle = AddonVideoTitle;
                AddonVideoTitle["__class"] = "com.montezumba.lib.types.AddonVideoTitle";
                AddonVideoTitle["__interfaces"] = ["com.montezumba.lib.types.Title.Playable", "com.montezumba.lib.types.Title.Transportable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var ErrorTitle = (function (_super) {
                    __extends(ErrorTitle, _super);
                    function ErrorTitle(msg) {
                        var _this = _super.call(this, "Error") || this;
                        _this.errorMsg = null;
                        _this.errorMsg = msg;
                        return _this;
                    }
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    ErrorTitle.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.errorMsg = title.mActionStrings[0];
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    ErrorTitle.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_HTTP;
                        result.mActionStrings[0] = this.errorMsg;
                        return result;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    ErrorTitle.prototype.equals = function (o) {
                        if (!(o != null && o instanceof com.montezumba.lib.types.ErrorTitle))
                            return false;
                        if (o === this)
                            return true;
                        return (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.errorMsg, this.errorMsg);
                    };
                    /**
                     *
                     * @return {number}
                     */
                    ErrorTitle.prototype.hashCode = function () {
                        return (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.errorMsg);
                    };
                    return ErrorTitle;
                }(com.montezumba.lib.types.Title));
                types.ErrorTitle = ErrorTitle;
                ErrorTitle["__class"] = "com.montezumba.lib.types.ErrorTitle";
                ErrorTitle["__interfaces"] = ["com.montezumba.lib.types.Title.Transportable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var FolderTitle = (function (_super) {
                    __extends(FolderTitle, _super);
                    function FolderTitle(name) {
                        var _this = _super.call(this, name) || this;
                        _this.path = null;
                        return _this;
                    }
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    FolderTitle.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.path = title.mActionStrings[0];
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    FolderTitle.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_FOLDER;
                        result.mActionStrings[0] = this.path;
                        return result;
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.ui.TitleList} parent
                     * @return {com.montezumba.lib.ui.TitleList}
                     */
                    FolderTitle.prototype.browse = function (parent) {
                        return null;
                    };
                    return FolderTitle;
                }(com.montezumba.lib.types.Title));
                types.FolderTitle = FolderTitle;
                FolderTitle["__class"] = "com.montezumba.lib.types.FolderTitle";
                FolderTitle["__interfaces"] = ["com.montezumba.lib.types.Title.Transportable", "com.montezumba.lib.types.Title.Browsable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var GroupTitle = (function (_super) {
                    __extends(GroupTitle, _super);
                    function GroupTitle(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.children = ([]);
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.children = ([]);
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    GroupTitle.prototype.equals = function (o) {
                        if (!(o != null && o instanceof com.montezumba.lib.types.GroupTitle))
                            return false;
                        if (o === this) {
                            return true;
                        }
                        return (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(this.displayString, o.displayString);
                    };
                    /**
                     *
                     * @return {number}
                     */
                    GroupTitle.prototype.hashCode = function () {
                        return (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.displayString);
                    };
                    return GroupTitle;
                }(com.montezumba.lib.types.Title));
                types.GroupTitle = GroupTitle;
                GroupTitle["__class"] = "com.montezumba.lib.types.GroupTitle";
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var HTMLVideoTitle = (function (_super) {
                    __extends(HTMLVideoTitle, _super);
                    function HTMLVideoTitle(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.url = null;
                            _this.refreshRate = 0;
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.url = null;
                            _this.refreshRate = 0;
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    HTMLVideoTitle.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.displayString == null)) {
                            throw new com.montezumba.lib.types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.url = title.mActionStrings[0];
                        var refresh = title.mActionStrings[1];
                        if (refresh == null || (refresh.length === 0) || (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(refresh, "")) {
                            refresh = "0";
                        }
                        this.refreshRate = parseInt(refresh);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    HTMLVideoTitle.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_HTML;
                        result.mActionStrings[0] = this.url;
                        result.mActionStrings[1] = new String(this.refreshRate).toString();
                        return result;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    HTMLVideoTitle.prototype.getNameString = function () {
                        return this.displayString;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    HTMLVideoTitle.prototype.getPlayString = function () {
                        return this.url;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    HTMLVideoTitle.prototype.getIdString = function () {
                        return this.id;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    HTMLVideoTitle.prototype.getLogoString = function () {
                        return this.logo;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    HTMLVideoTitle.prototype.equals = function (o) {
                        if (!(o != null && o instanceof com.montezumba.lib.types.HTMLVideoTitle))
                            return false;
                        return (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.displayString, this.displayString) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.url, this.url);
                    };
                    /**
                     *
                     * @return {number}
                     */
                    HTMLVideoTitle.prototype.hashCode = function () {
                        return (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.displayString) + (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.url);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.Title.DataSource}
                     */
                    HTMLVideoTitle.prototype.getDataSource = function () {
                        return com.montezumba.lib.types.Title.DataSource.DATA_SOURCE_HTML;
                    };
                    /**
                     *
                     * @return {number}
                     */
                    HTMLVideoTitle.prototype.getRefreshRate = function () {
                        return this.refreshRate;
                    };
                    return HTMLVideoTitle;
                }(com.montezumba.lib.types.Title));
                types.HTMLVideoTitle = HTMLVideoTitle;
                HTMLVideoTitle["__class"] = "com.montezumba.lib.types.HTMLVideoTitle";
                HTMLVideoTitle["__interfaces"] = ["com.montezumba.lib.types.Title.Playable", "com.montezumba.lib.types.Title.Transportable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var HTTPVideoTitle = (function (_super) {
                    __extends(HTTPVideoTitle, _super);
                    function HTTPVideoTitle(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.url = null;
                            _this.refreshRate = 0;
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.url = null;
                            _this.refreshRate = 0;
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    HTTPVideoTitle.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.url = title.mActionStrings[0];
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    HTTPVideoTitle.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_HTTP;
                        result.mActionStrings[0] = this.url;
                        return result;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    HTTPVideoTitle.prototype.getNameString = function () {
                        return this.displayString;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    HTTPVideoTitle.prototype.getPlayString = function () {
                        return this.url;
                    };
                    HTTPVideoTitle.prototype.getIdString = function () {
                        return this.id;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    HTTPVideoTitle.prototype.getLogoString = function () {
                        return this.logo;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    HTTPVideoTitle.prototype.equals = function (o) {
                        if (!(o != null && o instanceof com.montezumba.lib.types.HTTPVideoTitle))
                            return false;
                        return (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.displayString, this.displayString) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.url, this.url);
                    };
                    /**
                     *
                     * @return {number}
                     */
                    HTTPVideoTitle.prototype.hashCode = function () {
                        return (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.displayString) + (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.url);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.Title.DataSource}
                     */
                    HTTPVideoTitle.prototype.getDataSource = function () {
                        return types.Title.DataSource.DATA_SOURCE_URI;
                    };
                    /**
                     *
                     * @return {number}
                     */
                    HTTPVideoTitle.prototype.getRefreshRate = function () {
                        return this.refreshRate;
                    };
                    return HTTPVideoTitle;
                }(com.montezumba.lib.types.Title));
                types.HTTPVideoTitle = HTTPVideoTitle;
                HTTPVideoTitle["__class"] = "com.montezumba.lib.types.HTTPVideoTitle";
                HTTPVideoTitle["__interfaces"] = ["com.montezumba.lib.types.Title.Playable", "com.montezumba.lib.types.Title.Transportable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var LocalVideoTitle = (function (_super) {
                    __extends(LocalVideoTitle, _super);
                    function LocalVideoTitle(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.pathToFile = null;
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.pathToFile = null;
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    LocalVideoTitle.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.pathToFile = title.mActionStrings[0];
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    LocalVideoTitle.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_LOCAL;
                        result.mActionStrings[0] = this.pathToFile;
                        return result;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    LocalVideoTitle.prototype.getNameString = function () {
                        return this.displayString;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    LocalVideoTitle.prototype.getPlayString = function () {
                        return this.pathToFile;
                    };
                    LocalVideoTitle.prototype.getIdString = function () {
                        return this.id;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    LocalVideoTitle.prototype.getLogoString = function () {
                        return this.logo;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    LocalVideoTitle.prototype.equals = function (o) {
                        if (!(o != null && o instanceof com.montezumba.lib.types.LocalVideoTitle))
                            return false;
                        return (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.displayString, this.displayString) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.pathToFile, this.pathToFile);
                    };
                    /**
                     *
                     * @return {number}
                     */
                    LocalVideoTitle.prototype.hashCode = function () {
                        return (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.displayString) + (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.pathToFile);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.Title.DataSource}
                     */
                    LocalVideoTitle.prototype.getDataSource = function () {
                        return types.Title.DataSource.DATA_SOURCE_URI;
                    };
                    /**
                     *
                     * @return {number}
                     */
                    LocalVideoTitle.prototype.getRefreshRate = function () {
                        return 0;
                    };
                    return LocalVideoTitle;
                }(com.montezumba.lib.types.Title));
                types.LocalVideoTitle = LocalVideoTitle;
                LocalVideoTitle["__class"] = "com.montezumba.lib.types.LocalVideoTitle";
                LocalVideoTitle["__interfaces"] = ["com.montezumba.lib.types.Title.Playable", "com.montezumba.lib.types.Title.Transportable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var MMSVideoTitle = (function (_super) {
                    __extends(MMSVideoTitle, _super);
                    function MMSVideoTitle(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.url = null;
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.url = null;
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    MMSVideoTitle.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.url = title.mActionStrings[0];
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    MMSVideoTitle.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_MMS;
                        result.mActionStrings[0] = this.url;
                        return result;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    MMSVideoTitle.prototype.getNameString = function () {
                        return this.displayString;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    MMSVideoTitle.prototype.getPlayString = function () {
                        return this.url;
                    };
                    MMSVideoTitle.prototype.getIdString = function () {
                        return this.id;
                    };
                    MMSVideoTitle.prototype.getLogoString = function () {
                        return this.logo;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    MMSVideoTitle.prototype.equals = function (o) {
                        if (!(o != null && o instanceof com.montezumba.lib.types.MMSVideoTitle))
                            return false;
                        return (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.displayString, this.displayString) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.url, this.url);
                    };
                    /**
                     *
                     * @return {number}
                     */
                    MMSVideoTitle.prototype.hashCode = function () {
                        return (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.displayString) + (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.url);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.Title.DataSource}
                     */
                    MMSVideoTitle.prototype.getDataSource = function () {
                        return types.Title.DataSource.DATA_SOURCE_URI;
                    };
                    /**
                     *
                     * @return {number}
                     */
                    MMSVideoTitle.prototype.getRefreshRate = function () {
                        return 0;
                    };
                    return MMSVideoTitle;
                }(com.montezumba.lib.types.Title));
                types.MMSVideoTitle = MMSVideoTitle;
                MMSVideoTitle["__class"] = "com.montezumba.lib.types.MMSVideoTitle";
                MMSVideoTitle["__interfaces"] = ["com.montezumba.lib.types.Title.Playable", "com.montezumba.lib.types.Title.Transportable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var Playlist = (function (_super) {
                    __extends(Playlist, _super);
                    function Playlist(name) {
                        var _this = _super.call(this, name) || this;
                        _this.pathToPlaylist = "";
                        _this.isEnabled = true;
                        _this.cacheEnabled = true;
                        _this.isLive = true;
                        _this.isUser = true;
                        _this.sourceAddon = null;
                        return _this;
                    }
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    Playlist.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.pathToPlaylist = title.mActionStrings[0];
                        this.cacheEnabled = title.mActionStrings[1] == null ? true : javaemul.internal.BooleanHelper.parseBoolean(title.mActionStrings[1]);
                        this.isLive = title.mActionStrings[2] == null ? true : javaemul.internal.BooleanHelper.parseBoolean(title.mActionStrings[2]);
                        this.isEnabled = title.mActionStrings[3] == null ? true : javaemul.internal.BooleanHelper.parseBoolean(title.mActionStrings[3]);
                        this.isUser = title.mActionStrings[4] == null ? true : javaemul.internal.BooleanHelper.parseBoolean(title.mActionStrings[4]);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    Playlist.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_PLAYLIST;
                        result.mActionStrings[0] = this.pathToPlaylist;
                        result.mActionStrings[1] = this.cacheEnabled ? "True" : "False";
                        result.mActionStrings[2] = this.isLive ? "True" : "False";
                        result.mActionStrings[3] = this.isEnabled ? "True" : "False";
                        result.mActionStrings[4] = this.isUser ? "True" : "False";
                        return result;
                    };
                    return Playlist;
                }(com.montezumba.lib.types.Title));
                types.Playlist = Playlist;
                Playlist["__class"] = "com.montezumba.lib.types.Playlist";
                Playlist["__interfaces"] = ["com.montezumba.lib.types.Title.Transportable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var RecordedVideoTitle = (function (_super) {
                    __extends(RecordedVideoTitle, _super);
                    function RecordedVideoTitle(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.program = null;
                            _this.path = null;
                            _this.mStartTime = null;
                            _this.mEndTime = null;
                            _this.duration = -1;
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.program = null;
                            _this.path = null;
                            _this.mStartTime = null;
                            _this.mEndTime = null;
                            _this.duration = -1;
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @return {string}
                     */
                    RecordedVideoTitle.prototype.getNameString = function () {
                        return this.displayString;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    RecordedVideoTitle.prototype.getPlayString = function () {
                        return this.path;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    RecordedVideoTitle.prototype.getIdString = function () {
                        return this.id;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    RecordedVideoTitle.prototype.getLogoString = function () {
                        return this.logo;
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.Title.DataSource}
                     */
                    RecordedVideoTitle.prototype.getDataSource = function () {
                        return types.Title.DataSource.DATA_SOURCE_URI;
                    };
                    /**
                     *
                     * @return {number}
                     */
                    RecordedVideoTitle.prototype.getRefreshRate = function () {
                        return 0;
                    };
                    return RecordedVideoTitle;
                }(com.montezumba.lib.types.Title));
                types.RecordedVideoTitle = RecordedVideoTitle;
                RecordedVideoTitle["__class"] = "com.montezumba.lib.types.RecordedVideoTitle";
                RecordedVideoTitle["__interfaces"] = ["com.montezumba.lib.types.Title.Playable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var RecordingTask = (function (_super) {
                    __extends(RecordingTask, _super);
                    function RecordingTask(title, program) {
                        var _this = this;
                        if (((title != null && (title["__interfaces"] != null && title["__interfaces"].indexOf("com.montezumba.lib.types.Title.Playable") >= 0 || title.constructor != null && title.constructor["__interfaces"] != null && title.constructor["__interfaces"].indexOf("com.montezumba.lib.types.Title.Playable") >= 0)) || title === null) && ((program != null && program instanceof com.montezumba.lib.types.TvProgram) || program === null)) {
                            var __args = arguments;
                            _this = _super.call(this, program.displayString) || this;
                            if (_this.title === undefined)
                                _this.title = null;
                            if (_this.program === undefined)
                                _this.program = null;
                            if (_this.title === undefined)
                                _this.title = null;
                            if (_this.program === undefined)
                                _this.program = null;
                            (function () {
                                _this.title = title;
                                _this.program = program;
                            })();
                        }
                        else if (((typeof title === 'string') || title === null) && program === undefined) {
                            var __args = arguments;
                            var display = __args[0];
                            _this = _super.call(this, display) || this;
                            if (_this.title === undefined)
                                _this.title = null;
                            if (_this.program === undefined)
                                _this.program = null;
                            if (_this.title === undefined)
                                _this.title = null;
                            if (_this.program === undefined)
                                _this.program = null;
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    RecordingTask.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        var actionNum = title.getActionsNum();
                        if (actionNum !== 2 * com.montezumba.lib.types.Title.DEFAULT_ACTIONS_NUM || title.mActionStrings[com.montezumba.lib.types.Title.DEFAULT_ACTIONS_NUM] == null || title.mActionStrings[com.montezumba.lib.types.Title.DEFAULT_ACTIONS_NUM + 1] == null || title.mActionStrings[com.montezumba.lib.types.Title.DEFAULT_ACTIONS_NUM + 2] == null) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.program = new com.montezumba.lib.types.TvProgram("");
                        this.program.fromTrasportableTitle(title);
                        this.title = new RecordingTask.RecordingTask$0(this, title);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    RecordingTask.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle(2 * com.montezumba.lib.types.Title.DEFAULT_ACTIONS_NUM);
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        var programPart = this.program.toTrasportableTitle();
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_RECORD_TASK;
                        for (var i = 0; i < programPart.getActionsNum(); ++i) {
                            {
                                result.mActionStrings[i] = programPart.mActionStrings[i];
                            }
                            ;
                        }
                        var id = programPart.getActionsNum();
                        result.mActionStrings[id] = this.title.getNameString();
                        result.mActionStrings[id + 1] = this.title.getIdString();
                        result.mActionStrings[id + 2] = this.title.getPlayString();
                        result.mActionStrings[id + 3] = new String(/* Enum.ordinal */ com.montezumba.lib.types.Title.DataSource[com.montezumba.lib.types.Title.DataSource[this.title.getDataSource()]]).toString();
                        result.mActionStrings[id + 4] = new String(this.title.getRefreshRate()).toString();
                        return result;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    RecordingTask.prototype.equals = function (o) {
                        if (this === o)
                            return true;
                        if (!(o != null && o instanceof com.montezumba.lib.types.RecordingTask))
                            return false;
                        var other = o;
                        return this.program.equals(other.program);
                    };
                    /**
                     *
                     * @return {number}
                     */
                    RecordingTask.prototype.hashCode = function () {
                        var hash = new org.apache.commons.lang3.builder.HashCodeBuilder();
                        hash.append(/* hashCode */ (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.program));
                        return hash.build();
                    };
                    return RecordingTask;
                }(com.montezumba.lib.types.Title));
                types.RecordingTask = RecordingTask;
                RecordingTask["__class"] = "com.montezumba.lib.types.RecordingTask";
                RecordingTask["__interfaces"] = ["com.montezumba.lib.types.Title.Transportable"];
                (function (RecordingTask) {
                    var RecordingTask$0 = (function () {
                        function RecordingTask$0(__parent, title) {
                            this.title = title;
                            this.__parent = __parent;
                        }
                        /**
                         *
                         * @return {string}
                         */
                        RecordingTask$0.prototype.getPlayString = function () {
                            return this.title.mActionStrings[com.montezumba.lib.types.Title.DEFAULT_ACTIONS_NUM + 2];
                        };
                        /**
                         *
                         * @return {string}
                         */
                        RecordingTask$0.prototype.getNameString = function () {
                            return this.title.mActionStrings[com.montezumba.lib.types.Title.DEFAULT_ACTIONS_NUM];
                        };
                        /**
                         *
                         * @return {string}
                         */
                        RecordingTask$0.prototype.getIdString = function () {
                            return this.title.mActionStrings[com.montezumba.lib.types.Title.DEFAULT_ACTIONS_NUM + 1];
                        };
                        /**
                         *
                         * @return {string}
                         */
                        RecordingTask$0.prototype.getLogoString = function () {
                            return this.title.logo;
                        };
                        /**
                         *
                         * @return {com.montezumba.lib.types.Title.DataSource}
                         */
                        RecordingTask$0.prototype.getDataSource = function () {
                            var dataSourceStr = this.title.mActionStrings[com.montezumba.lib.types.Title.DEFAULT_ACTIONS_NUM + 3];
                            var dataSourceId = parseInt(dataSourceStr);
                            return function () { var result = []; for (var val in com.montezumba.lib.types.Title.DataSource) {
                                if (!isNaN(val)) {
                                    result.push(parseInt(val, 10));
                                }
                            } return result; }()[dataSourceId];
                        };
                        /**
                         *
                         * @return {number}
                         */
                        RecordingTask$0.prototype.getRefreshRate = function () {
                            return parseInt(this.title.mActionStrings[com.montezumba.lib.types.Title.DEFAULT_ACTIONS_NUM + 4]);
                        };
                        /**
                         *
                         * @param {*} o
                         * @return {boolean}
                         */
                        RecordingTask$0.prototype.equals = function (o) {
                            if (o === this)
                                return true;
                            if (!(o != null && (o["__interfaces"] != null && o["__interfaces"].indexOf("com.montezumba.lib.types.Title.Playable") >= 0 || o.constructor != null && o.constructor["__interfaces"] != null && o.constructor["__interfaces"].indexOf("com.montezumba.lib.types.Title.Playable") >= 0)))
                                return false;
                            var other = o;
                            return (function (o1, o2) { if (o1 && o1.equals) {
                                return o1.equals(o2);
                            }
                            else {
                                return o1 === o2;
                            } })(this.getPlayString(), other.getPlayString());
                        };
                        /**
                         *
                         * @return {number}
                         */
                        RecordingTask$0.prototype.hashCode = function () {
                            return (function (o) { if (o.hashCode) {
                                return o.hashCode();
                            }
                            else {
                                return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                            } })(this.getPlayString());
                        };
                        return RecordingTask$0;
                    }());
                    RecordingTask.RecordingTask$0 = RecordingTask$0;
                    RecordingTask$0["__interfaces"] = ["com.montezumba.lib.types.Title.Playable"];
                })(RecordingTask = types.RecordingTask || (types.RecordingTask = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var Repository = (function (_super) {
                    __extends(Repository, _super);
                    function Repository(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.repositoryIndex = "";
                            _this.repoSource = null;
                            _this.userName = "";
                            _this.password = "";
                            _this.validated = false;
                            _this.failCount = 0;
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.repositoryIndex = "";
                            _this.repoSource = null;
                            _this.userName = "";
                            _this.password = "";
                            _this.validated = false;
                            _this.failCount = 0;
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    Repository.prototype.equals = function (o) {
                        if (o === this)
                            return true;
                        if (!(o != null && o instanceof com.montezumba.lib.types.Repository))
                            return false;
                        var equalsBuilder = new org.apache.commons.lang3.builder.EqualsBuilder();
                        equalsBuilder.append(this.repositoryIndex, o.repositoryIndex).append(this.userName, o.userName).append(this.password, o.password);
                        return equalsBuilder.build();
                    };
                    /**
                     *
                     * @return {number}
                     */
                    Repository.prototype.hashCode = function () {
                        var hashCode = new org.apache.commons.lang3.builder.HashCodeBuilder();
                        hashCode.append(this.repositoryIndex).append(this.userName).append(this.password);
                        return hashCode.toHashCode();
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    Repository.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.repositoryIndex = title.mActionStrings[0];
                        this.userName = title.mActionStrings[1] == null ? "" : title.mActionStrings[1];
                        this.password = title.mActionStrings[2] == null ? "" : title.mActionStrings[2];
                        this.failCount = (title.mActionStrings[3] == null || (title.mActionStrings[3].length === 0)) ? 0 : parseInt(title.mActionStrings[3]);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    Repository.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_REPOSITORY;
                        result.mActionStrings[0] = this.repositoryIndex;
                        result.mActionStrings[1] = this.userName;
                        result.mActionStrings[2] = this.password;
                        result.mActionStrings[3] = new String(this.failCount).toString();
                        return result;
                    };
                    return Repository;
                }(com.montezumba.lib.types.Title));
                types.Repository = Repository;
                Repository["__class"] = "com.montezumba.lib.types.Repository";
                Repository["__interfaces"] = ["com.montezumba.lib.types.Title.Transportable"];
                (function (Repository) {
                    var RepoSource;
                    (function (RepoSource) {
                        RepoSource[RepoSource["FROM_MASTER_REPO"] = 0] = "FROM_MASTER_REPO";
                        RepoSource[RepoSource["FROM_ADDON"] = 1] = "FROM_ADDON";
                        RepoSource[RepoSource["FROM_DATABASE"] = 2] = "FROM_DATABASE";
                        RepoSource[RepoSource["FROM_USER"] = 3] = "FROM_USER";
                    })(RepoSource = Repository.RepoSource || (Repository.RepoSource = {}));
                    var RepoType;
                    (function (RepoType) {
                        RepoType[RepoType["REPO_TYPE_STANDARD"] = 0] = "REPO_TYPE_STANDARD";
                        RepoType[RepoType["REPO_TYPE_XTREAM"] = 1] = "REPO_TYPE_XTREAM";
                    })(RepoType = Repository.RepoType || (Repository.RepoType = {}));
                })(Repository = types.Repository || (types.Repository = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var RTMPVideoTitle = (function (_super) {
                    __extends(RTMPVideoTitle, _super);
                    function RTMPVideoTitle(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.playPath = "";
                            _this.serverPath = "";
                            _this.swfUrl = "";
                            _this.pageUrl = "";
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.playPath = "";
                            _this.serverPath = "";
                            _this.swfUrl = "";
                            _this.pageUrl = "";
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    RTMPVideoTitle.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_RTMP;
                        result.mActionStrings[0] = this.serverPath;
                        result.mActionStrings[3] = this.playPath;
                        result.mActionStrings[1] = this.swfUrl;
                        result.mActionStrings[2] = this.pageUrl;
                        return result;
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    RTMPVideoTitle.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.mActionStrings[1] == null) || (title.mActionStrings[2] == null) || (title.mActionStrings[3] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.serverPath = title.mActionStrings[0];
                        this.playPath = title.mActionStrings[3];
                        this.swfUrl = title.mActionStrings[1];
                        this.pageUrl = title.mActionStrings[2];
                    };
                    /**
                     *
                     * @return {string}
                     */
                    RTMPVideoTitle.prototype.getNameString = function () {
                        return this.displayString;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    RTMPVideoTitle.prototype.getPlayString = function () {
                        return this.serverPath + " " + this.playPath + " " + this.swfUrl + " " + this.pageUrl;
                    };
                    RTMPVideoTitle.prototype.getIdString = function () {
                        return this.id;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    RTMPVideoTitle.prototype.getLogoString = function () {
                        return this.logo;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    RTMPVideoTitle.prototype.equals = function (o) {
                        if (!(o != null && o instanceof com.montezumba.lib.types.RTMPVideoTitle))
                            return false;
                        if (o === this)
                            return true;
                        return (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.displayString, this.displayString) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.pageUrl, this.pageUrl) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.playPath, this.playPath) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.serverPath, this.serverPath) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.swfUrl, this.swfUrl);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.Title.DataSource}
                     */
                    RTMPVideoTitle.prototype.getDataSource = function () {
                        return types.Title.DataSource.DATA_SOURCE_URI;
                    };
                    /**
                     *
                     * @return {number}
                     */
                    RTMPVideoTitle.prototype.getRefreshRate = function () {
                        return 0;
                    };
                    return RTMPVideoTitle;
                }(com.montezumba.lib.types.Title));
                types.RTMPVideoTitle = RTMPVideoTitle;
                RTMPVideoTitle["__class"] = "com.montezumba.lib.types.RTMPVideoTitle";
                RTMPVideoTitle["__interfaces"] = ["com.montezumba.lib.types.Title.Playable", "com.montezumba.lib.types.Title.Transportable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var RTSPVideoTitle = (function (_super) {
                    __extends(RTSPVideoTitle, _super);
                    function RTSPVideoTitle(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.url = null;
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.url = null;
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    RTSPVideoTitle.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.url = title.mActionStrings[0];
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    RTSPVideoTitle.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_RTSP;
                        result.mActionStrings[0] = this.url;
                        return result;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    RTSPVideoTitle.prototype.getNameString = function () {
                        return this.displayString;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    RTSPVideoTitle.prototype.getPlayString = function () {
                        return this.url;
                    };
                    RTSPVideoTitle.prototype.getIdString = function () {
                        return this.id;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    RTSPVideoTitle.prototype.getLogoString = function () {
                        return this.logo;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    RTSPVideoTitle.prototype.equals = function (o) {
                        if (!(o != null && o instanceof com.montezumba.lib.types.RTSPVideoTitle))
                            return false;
                        return (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.displayString, this.displayString) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.url, this.url);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.Title.DataSource}
                     */
                    RTSPVideoTitle.prototype.getDataSource = function () {
                        return types.Title.DataSource.DATA_SOURCE_URI;
                    };
                    /**
                     *
                     * @return {number}
                     */
                    RTSPVideoTitle.prototype.getRefreshRate = function () {
                        return 0;
                    };
                    return RTSPVideoTitle;
                }(com.montezumba.lib.types.Title));
                types.RTSPVideoTitle = RTSPVideoTitle;
                RTSPVideoTitle["__class"] = "com.montezumba.lib.types.RTSPVideoTitle";
                RTSPVideoTitle["__interfaces"] = ["com.montezumba.lib.types.Title.Playable", "com.montezumba.lib.types.Title.Transportable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var TransportableTitle = (function (_super) {
                    __extends(TransportableTitle, _super);
                    function TransportableTitle(display, id, group, logo, actionsNum) {
                        var _this = this;
                        if (((typeof display === 'string') || display === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null) && ((typeof actionsNum === 'number') || actionsNum === null)) {
                            var __args = arguments;
                            _this = _super.call(this, display, id, group, logo) || this;
                            if (_this.mActionsNum === undefined)
                                _this.mActionsNum = 0;
                            if (_this.mActionStrings === undefined)
                                _this.mActionStrings = null;
                            _this.titleType = null;
                            if (_this.mActionsNum === undefined)
                                _this.mActionsNum = 0;
                            if (_this.mActionStrings === undefined)
                                _this.mActionStrings = null;
                            (function () {
                                _this.mActionsNum = actionsNum;
                                _this.mActionStrings = (function (s) { var a = []; while (s-- > 0)
                                    a.push(null); return a; })(_this.mActionsNum);
                            })();
                        }
                        else if (((typeof display === 'number') || display === null) && id === undefined && group === undefined && logo === undefined && actionsNum === undefined) {
                            var __args = arguments;
                            var actionsNum_1 = __args[0];
                            _this = _super.call(this, null) || this;
                            if (_this.mActionsNum === undefined)
                                _this.mActionsNum = 0;
                            if (_this.mActionStrings === undefined)
                                _this.mActionStrings = null;
                            _this.titleType = null;
                            if (_this.mActionsNum === undefined)
                                _this.mActionsNum = 0;
                            if (_this.mActionStrings === undefined)
                                _this.mActionStrings = null;
                            (function () {
                                _this.mActionsNum = actionsNum_1;
                                _this.mActionStrings = (function (s) { var a = []; while (s-- > 0)
                                    a.push(null); return a; })(_this.mActionsNum);
                            })();
                        }
                        else if (display === undefined && id === undefined && group === undefined && logo === undefined && actionsNum === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, null) || this;
                            if (_this.mActionsNum === undefined)
                                _this.mActionsNum = 0;
                            if (_this.mActionStrings === undefined)
                                _this.mActionStrings = null;
                            _this.titleType = null;
                            if (_this.mActionsNum === undefined)
                                _this.mActionsNum = 0;
                            if (_this.mActionStrings === undefined)
                                _this.mActionStrings = null;
                            (function () {
                                _this.mActionsNum = com.montezumba.lib.types.Title.DEFAULT_ACTIONS_NUM;
                                _this.mActionStrings = (function (s) { var a = []; while (s-- > 0)
                                    a.push(null); return a; })(_this.mActionsNum);
                            })();
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    TransportableTitle.prototype.getActionsNum = function () {
                        return this.mActionsNum;
                    };
                    TransportableTitle.prototype.pack = function (key) {
                        var _this = this;
                        var fullString = { str: "", toString: function () { return this.str; } };
                        /* append */ (function (sb) { sb.str = sb.str.concat(_this.mActionsNum); return sb; })(fullString);
                        /* append */ (function (sb) { sb.str = sb.str.concat(_this.displayString); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(TransportableTitle.ACTION_STRING_SEP); return sb; })(fullString));
                        /* append */ (function (sb) { sb.str = sb.str.concat(_this.group); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(TransportableTitle.ACTION_STRING_SEP); return sb; })(fullString));
                        /* append */ (function (sb) { sb.str = sb.str.concat(_this.id); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(TransportableTitle.ACTION_STRING_SEP); return sb; })(fullString));
                        /* append */ (function (sb) { sb.str = sb.str.concat(_this.logo); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(TransportableTitle.ACTION_STRING_SEP); return sb; })(fullString));
                        /* append */ (function (sb) { sb.str = sb.str.concat(com.montezumba.lib.types.TransportableTitle.TitleType[com.montezumba.lib.types.TransportableTitle.TitleType[_this.titleType]]); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(TransportableTitle.ACTION_STRING_SEP); return sb; })(fullString));
                        var _loop_2 = function (index139) {
                            var s = this_2.mActionStrings[index139];
                            {
                                /* append */ (function (sb) { sb.str = sb.str.concat(s); return sb; })(/* append */ (function (sb) { sb.str = sb.str.concat(TransportableTitle.ACTION_STRING_SEP); return sb; })(fullString));
                            }
                        };
                        var this_2 = this;
                        for (var index139 = 0; index139 < this.mActionStrings.length; index139++) {
                            _loop_2(index139);
                        }
                        try {
                            var data = (fullString.str).split('').map(function (s) { return s.charCodeAt(0); });
                            var encrypted = com.montezumba.lib.utils.SecurityUtils.encrypt(com.montezumba.lib.utils.SecurityUtils.EncryptType.SYMETRIC_KEY, /* getBytes */ (key).split('').map(function (s) { return s.charCodeAt(0); }), data, 0, data.length);
                            return com.montezumba.lib.utils.SecurityUtils.encode(encrypted);
                        }
                        catch (e) {
                            throw new types.Title.TransportableException(e);
                        }
                        ;
                    };
                    TransportableTitle.unpack = function (packed, key) {
                        try {
                            var encrypted = com.montezumba.lib.utils.SecurityUtils.decode(packed);
                            var decrypted_1 = com.montezumba.lib.utils.SecurityUtils.decrypt(com.montezumba.lib.utils.SecurityUtils.EncryptType.SYMETRIC_KEY, /* getBytes */ (key).split('').map(function (s) { return s.charCodeAt(0); }), encrypted);
                            var originalString = (function (sb) { sb.str = sb.str.concat(String.fromCharCode.apply(null, decrypted_1)); return sb; })({ str: "", toString: function () { return this.str; } });
                            var parts = originalString.str.split(java.util.regex.Pattern.quote(TransportableTitle.ACTION_STRING_SEP));
                            var actionNum = parseInt(parts[0]);
                            var result = new TransportableTitle(actionNum);
                            result.displayString = parts[1];
                            result.group = parts[2];
                            result.id = parts[3];
                            result.logo = parts[4];
                            result.titleType = function () { var result = []; for (var val in com.montezumba.lib.types.TransportableTitle.TitleType) {
                                if (!isNaN(val)) {
                                    result.push(parseInt(val, 10));
                                }
                            } return result; }()[parseInt(parts[5])];
                            for (var i = 0; i < result.mActionsNum; ++i) {
                                {
                                    result.mActionStrings[i] = parts[6 + i];
                                }
                                ;
                            }
                            return result;
                        }
                        catch (e) {
                            throw new types.Title.TransportableException(e);
                        }
                        ;
                    };
                    return TransportableTitle;
                }(com.montezumba.lib.types.Title));
                TransportableTitle.ACTION_STRING_SEP = "|@!@|";
                types.TransportableTitle = TransportableTitle;
                TransportableTitle["__class"] = "com.montezumba.lib.types.TransportableTitle";
                (function (TransportableTitle) {
                    var MediaSource;
                    (function (MediaSource) {
                        MediaSource[MediaSource["MEDIA_SOURCE_FILE_SYSTEM"] = 0] = "MEDIA_SOURCE_FILE_SYSTEM";
                        MediaSource[MediaSource["MEDIA_SOURCE_NET"] = 1] = "MEDIA_SOURCE_NET";
                        MediaSource[MediaSource["MEDIA_SOURCE_ADDON"] = 2] = "MEDIA_SOURCE_ADDON";
                    })(MediaSource = TransportableTitle.MediaSource || (TransportableTitle.MediaSource = {}));
                    var TitleType;
                    (function (TitleType) {
                        TitleType[TitleType["TITLE_TYPE_HTTP"] = 0] = "TITLE_TYPE_HTTP";
                        TitleType[TitleType["TITLE_TYPE_HTTPS"] = 1] = "TITLE_TYPE_HTTPS";
                        TitleType[TitleType["TITLE_TYPE_RTMP"] = 2] = "TITLE_TYPE_RTMP";
                        TitleType[TitleType["TITLE_TYPE_MMS"] = 3] = "TITLE_TYPE_MMS";
                        TitleType[TitleType["TITLE_TYPE_MMSH"] = 4] = "TITLE_TYPE_MMSH";
                        TitleType[TitleType["TITLE_TYPE_RTSP"] = 5] = "TITLE_TYPE_RTSP";
                        TitleType[TitleType["TITLE_TYPE_ADDON"] = 6] = "TITLE_TYPE_ADDON";
                        TitleType[TitleType["TITLE_TYPE_LOCAL"] = 7] = "TITLE_TYPE_LOCAL";
                        TitleType[TitleType["TITLE_TYPE_FOLDER"] = 8] = "TITLE_TYPE_FOLDER";
                        TitleType[TitleType["TITLE_TYPE_TVGUIDE"] = 9] = "TITLE_TYPE_TVGUIDE";
                        TitleType[TitleType["TITLE_TYPE_REPOSITORY"] = 10] = "TITLE_TYPE_REPOSITORY";
                        TitleType[TitleType["TITLE_TYPE_PLAYLIST"] = 11] = "TITLE_TYPE_PLAYLIST";
                        TitleType[TitleType["TITLE_TYPE_RECORD_TASK"] = 12] = "TITLE_TYPE_RECORD_TASK";
                        TitleType[TitleType["TITLE_TYPE_TVPROGRAM"] = 13] = "TITLE_TYPE_TVPROGRAM";
                        TitleType[TitleType["TITLE_TYPE_YOUTUBE"] = 14] = "TITLE_TYPE_YOUTUBE";
                        TitleType[TitleType["TITLE_TYPE_HTML"] = 15] = "TITLE_TYPE_HTML";
                    })(TitleType = TransportableTitle.TitleType || (TransportableTitle.TitleType = {}));
                })(TransportableTitle = types.TransportableTitle || (types.TransportableTitle = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var TvChannel = (function (_super) {
                    __extends(TvChannel, _super);
                    function TvChannel(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.isExtracted = false;
                            _this.language = "";
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.isExtracted = false;
                            _this.language = "";
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    TvChannel.prototype.equals = function (o) {
                        if (o === this)
                            return true;
                        if (!(o != null && o instanceof com.montezumba.lib.types.TvChannel))
                            return false;
                        var other = o;
                        return (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(this.displayString, other.displayString) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(this.id, other.id) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(this.language, other.language);
                    };
                    /**
                     *
                     * @return {number}
                     */
                    TvChannel.prototype.hashCode = function () {
                        var hashCode = new org.apache.commons.lang3.builder.HashCodeBuilder();
                        hashCode.append(this.displayString).append(this.id).append(this.language);
                        return hashCode.toHashCode();
                    };
                    return TvChannel;
                }(com.montezumba.lib.types.Title));
                types.TvChannel = TvChannel;
                TvChannel["__class"] = "com.montezumba.lib.types.TvChannel";
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var TvGuide = (function (_super) {
                    __extends(TvGuide, _super);
                    function TvGuide(name) {
                        var _this = _super.call(this, name) || this;
                        _this.pathToGuide = "";
                        _this.startDate = null;
                        _this.endDate = null;
                        _this.tvgSource = TvGuide.TvGuideSource.TV_GUIDE_SOURCE_ADDON;
                        _this.isEnabled = true;
                        return _this;
                    }
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    TvGuide.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.mActionStrings[1] == null) || (title.mActionStrings[2] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.pathToGuide = title.mActionStrings[0];
                        try {
                            var startDateInMilis = parseInt(title.mActionStrings[1]);
                            var endDateInMilis = parseInt(title.mActionStrings[2]);
                            this.startDate = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$long(startDateInMilis);
                            this.endDate = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$long(endDateInMilis);
                            this.tvgSource = (title.mActionStrings[3] != null) ? function () { var result = []; for (var val in com.montezumba.lib.types.TvGuide.TvGuideSource) {
                                if (!isNaN(val)) {
                                    result.push(parseInt(val, 10));
                                }
                            } return result; }()[parseInt(title.mActionStrings[3])] : TvGuide.TvGuideSource.TV_GUIDE_SOURCE_ADDON;
                            this.isEnabled = (title.mActionStrings[4] != null) ? javaemul.internal.BooleanHelper.parseBoolean(title.mActionStrings[4]) : true;
                        }
                        catch (e) {
                            throw new types.Title.TransportableException(e);
                        }
                        ;
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    TvGuide.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_TVGUIDE;
                        result.mActionStrings[0] = this.pathToGuide;
                        result.mActionStrings[1] = new String(this.startDate.getEpoch()).toString();
                        result.mActionStrings[2] = new String(this.endDate.getEpoch()).toString();
                        result.mActionStrings[3] = new String(/* Enum.ordinal */ com.montezumba.lib.types.TvGuide.TvGuideSource[com.montezumba.lib.types.TvGuide.TvGuideSource[this.tvgSource]]).toString();
                        result.mActionStrings[4] = new String(this.isEnabled).toString();
                        return result;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    TvGuide.prototype.equals = function (o) {
                        if (!(o != null && o instanceof com.montezumba.lib.types.TvGuide))
                            return false;
                        if (o === this)
                            return true;
                        var rhs = o;
                        var builder = new org.apache.commons.lang3.builder.EqualsBuilder();
                        builder.append(this.pathToGuide, rhs.pathToGuide);
                        return builder.build();
                    };
                    /**
                     *
                     * @return {number}
                     */
                    TvGuide.prototype.hashCode = function () {
                        var builder = new org.apache.commons.lang3.builder.HashCodeBuilder();
                        builder.append(this.pathToGuide);
                        return builder.build();
                    };
                    return TvGuide;
                }(com.montezumba.lib.types.Title));
                types.TvGuide = TvGuide;
                TvGuide["__class"] = "com.montezumba.lib.types.TvGuide";
                TvGuide["__interfaces"] = ["com.montezumba.lib.types.Title.Transportable"];
                (function (TvGuide) {
                    var TvGuideSource;
                    (function (TvGuideSource) {
                        TvGuideSource[TvGuideSource["TV_GUIDE_SOURCE_ADDON"] = 0] = "TV_GUIDE_SOURCE_ADDON";
                        TvGuideSource[TvGuideSource["TV_GUIDE_SOURCE_USER"] = 1] = "TV_GUIDE_SOURCE_USER";
                    })(TvGuideSource = TvGuide.TvGuideSource || (TvGuide.TvGuideSource = {}));
                })(TvGuide = types.TvGuide || (types.TvGuide = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var TvProgram = (function (_super) {
                    __extends(TvProgram, _super);
                    function TvProgram(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.mDesc = "";
                            _this.mStartTime = null;
                            _this.mEndTime = null;
                            _this.mChannel = "";
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.mDesc = "";
                            _this.mStartTime = null;
                            _this.mEndTime = null;
                            _this.mChannel = "";
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     * Formats the program time
                     * @param {string} format - general display format of the start/end times (any string that contains "%start%" and/or "%end%")
                     * @param {string} startTimeFormat - the TimeStamp output format of the start time
                     * @param {string} endTimeFormat - the TimeStamp output format of the end time
                     * @param {string} dateTimeFormat - optional date format. If the "format" string contains one of the following attributes - this format will be used. (valid formats: "%dateNoToday%")
                     * @return {string} the formatted string
                     */
                    TvProgram.prototype.formatTime = function (format, startTimeFormat, endTimeFormat, dateTimeFormat) {
                        var start = this.mStartTime.toLocalTime();
                        var end = this.mEndTime.toLocalTime();
                        var now = com.montezumba.lib.utils.TimerFactory.instance().getCurrentTime().toLocalTime();
                        var startString = start.format(startTimeFormat, false);
                        var endString = end.format(endTimeFormat, false);
                        var date = end.format(dateTimeFormat, false);
                        var dateNoToday = (start.getDay(false) === now.getDay(false) && start.getMonth(false) === now.getMonth(false)) ? "" : date;
                        format = format.split("%start%").join(startString);
                        format = format.split("%end%").join(endString);
                        format = format.split("%dateNotToday%").join(dateNoToday);
                        return format;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    TvProgram.prototype.equals = function (o) {
                        if (this === o)
                            return true;
                        if (!(o != null && o instanceof com.montezumba.lib.types.TvProgram))
                            return false;
                        var other = o;
                        return this.mStartTime.equals(other.mStartTime) && this.mEndTime.equals(other.mEndTime) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(this.mChannel, other.mChannel);
                    };
                    /**
                     *
                     * @return {number}
                     */
                    TvProgram.prototype.hashCode = function () {
                        var hashCode = new org.apache.commons.lang3.builder.HashCodeBuilder();
                        hashCode.append(this.mStartTime).append(this.mEndTime).append(this.mChannel);
                        return hashCode.toHashCode();
                    };
                    /**
                     *
                     * @return {string}
                     */
                    TvProgram.prototype.toString = function () {
                        return "name:" + this.displayString + " start=" + this.mStartTime.toString() + " end=" + this.mEndTime.toString();
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    TvProgram.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.mActionStrings[1] == null) || (title.mActionStrings[2] == null) || (title.mActionStrings[3] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.mChannel = title.mActionStrings[0];
                        this.mDesc = title.mActionStrings[1];
                        var startMilis = parseInt(title.mActionStrings[2]);
                        this.mStartTime = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$long(startMilis);
                        var endMilis = parseInt(title.mActionStrings[3]);
                        this.mEndTime = com.montezumba.lib.utils.TimerFactory.instance().createTimeStamp$long(endMilis);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    TvProgram.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_TVPROGRAM;
                        result.mActionStrings[0] = this.mChannel;
                        result.mActionStrings[1] = this.mDesc;
                        if (this.mStartTime != null) {
                            result.mActionStrings[2] = new String(this.mStartTime.getEpoch()).toString();
                        }
                        else {
                            result.mActionStrings[2] = "0";
                        }
                        if (this.mEndTime != null) {
                            result.mActionStrings[3] = new String(this.mEndTime.getEpoch()).toString();
                        }
                        else {
                            result.mActionStrings[3] = "0";
                        }
                        return result;
                    };
                    return TvProgram;
                }(com.montezumba.lib.types.Title));
                types.TvProgram = TvProgram;
                TvProgram["__class"] = "com.montezumba.lib.types.TvProgram";
                TvProgram["__interfaces"] = ["com.montezumba.lib.types.Title.Transportable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var UpPointerTitle = (function (_super) {
                    __extends(UpPointerTitle, _super);
                    function UpPointerTitle(name) {
                        return _super.call(this, name) || this;
                    }
                    return UpPointerTitle;
                }(com.montezumba.lib.types.Title));
                types.UpPointerTitle = UpPointerTitle;
                UpPointerTitle["__class"] = "com.montezumba.lib.types.UpPointerTitle";
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var YouTubeVideoTitle = (function (_super) {
                    __extends(YouTubeVideoTitle, _super);
                    function YouTubeVideoTitle(name, id, group, logo) {
                        var _this = this;
                        if (((typeof name === 'string') || name === null) && ((typeof id === 'string') || id === null) && ((typeof group === 'string') || group === null) && ((typeof logo === 'string') || logo === null)) {
                            var __args = arguments;
                            _this = _super.call(this, name, id, group, logo) || this;
                            _this.youtubeId = null;
                        }
                        else if (((typeof name === 'string') || name === null) && id === undefined && group === undefined && logo === undefined) {
                            var __args = arguments;
                            _this = _super.call(this, name) || this;
                            _this.youtubeId = null;
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     *
                     * @param {com.montezumba.lib.types.TransportableTitle} title
                     */
                    YouTubeVideoTitle.prototype.fromTrasportableTitle = function (title) {
                        if ((title == null) || (title.mActionStrings[0] == null) || (title.displayString == null)) {
                            throw new types.Title.TransportableException("Cannot unpack");
                        }
                        this.displayString = title.displayString;
                        this.id = title.id;
                        this.group = title.group;
                        this.logo = title.logo;
                        this.youtubeId = title.mActionStrings[0];
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.TransportableTitle}
                     */
                    YouTubeVideoTitle.prototype.toTrasportableTitle = function () {
                        var result = new com.montezumba.lib.types.TransportableTitle();
                        result.displayString = this.displayString;
                        result.id = this.id;
                        result.group = this.group;
                        result.logo = this.logo;
                        result.titleType = com.montezumba.lib.types.TransportableTitle.TitleType.TITLE_TYPE_YOUTUBE;
                        result.mActionStrings[0] = this.youtubeId;
                        return result;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    YouTubeVideoTitle.prototype.getNameString = function () {
                        return this.displayString;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    YouTubeVideoTitle.prototype.getPlayString = function () {
                        return this.youtubeId;
                    };
                    YouTubeVideoTitle.prototype.getIdString = function () {
                        return this.id;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    YouTubeVideoTitle.prototype.getLogoString = function () {
                        return this.logo;
                    };
                    /**
                     *
                     * @param {*} o
                     * @return {boolean}
                     */
                    YouTubeVideoTitle.prototype.equals = function (o) {
                        if (!(o != null && o instanceof com.montezumba.lib.types.YouTubeVideoTitle))
                            return false;
                        return (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.displayString, this.displayString) && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(o.youtubeId, this.youtubeId);
                    };
                    /**
                     *
                     * @return {number}
                     */
                    YouTubeVideoTitle.prototype.hashCode = function () {
                        return (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.displayString) + (function (o) { if (o.hashCode) {
                            return o.hashCode();
                        }
                        else {
                            return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
                        } })(this.youtubeId);
                    };
                    /**
                     *
                     * @return {com.montezumba.lib.types.Title.DataSource}
                     */
                    YouTubeVideoTitle.prototype.getDataSource = function () {
                        return types.Title.DataSource.DATA_SOURCE_URI;
                    };
                    /**
                     *
                     * @return {number}
                     */
                    YouTubeVideoTitle.prototype.getRefreshRate = function () {
                        return 0;
                    };
                    return YouTubeVideoTitle;
                }(com.montezumba.lib.types.Title));
                types.YouTubeVideoTitle = YouTubeVideoTitle;
                YouTubeVideoTitle["__class"] = "com.montezumba.lib.types.YouTubeVideoTitle";
                YouTubeVideoTitle["__interfaces"] = ["com.montezumba.lib.types.Title.Playable", "com.montezumba.lib.types.Title.Transportable"];
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var ui;
            (function (ui) {
                var InputDialog = (function (_super) {
                    __extends(InputDialog, _super);
                    function InputDialog(header, message, defaultText) {
                        var _this = _super.call(this) || this;
                        _this.message = null;
                        _this.header = null;
                        _this.text = null;
                        if (header != null)
                            _this.header = header;
                        else
                            _this.header = "Text Input";
                        if (message != null)
                            _this.message = message;
                        else
                            _this.message = "Please enter a text:";
                        if (defaultText != null)
                            _this.text = defaultText;
                        else
                            _this.text = "";
                        return _this;
                    }
                    return InputDialog;
                }(com.montezumba.lib.types.UiComponent));
                ui.InputDialog = InputDialog;
                InputDialog["__class"] = "com.montezumba.lib.ui.InputDialog";
            })(ui = lib.ui || (lib.ui = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var events;
                (function (events) {
                    var OSEvents = (function () {
                        function OSEvents() {
                        }
                        OSEvents.externalStorageAddedEvent_$LI$ = function () { if (OSEvents.externalStorageAddedEvent == null)
                            OSEvents.externalStorageAddedEvent = (new com.montezumba.lib.utils.Event("externalStorageAddedEvent", true)); return OSEvents.externalStorageAddedEvent; };
                        ;
                        OSEvents.externalStorageRemovedEvent_$LI$ = function () { if (OSEvents.externalStorageRemovedEvent == null)
                            OSEvents.externalStorageRemovedEvent = (new com.montezumba.lib.utils.Event("externalStorageRemovedEvent", true)); return OSEvents.externalStorageRemovedEvent; };
                        ;
                        OSEvents.permissionGrantedEvent_$LI$ = function () { if (OSEvents.permissionGrantedEvent == null)
                            OSEvents.permissionGrantedEvent = (new com.montezumba.lib.utils.Event("permissionGrantedEvent", true)); return OSEvents.permissionGrantedEvent; };
                        ;
                        OSEvents.permissionDeniedEvent_$LI$ = function () { if (OSEvents.permissionDeniedEvent == null)
                            OSEvents.permissionDeniedEvent = (new com.montezumba.lib.utils.Event("permissionDeniedEvent", true)); return OSEvents.permissionDeniedEvent; };
                        ;
                        OSEvents.clearAll = function () {
                            OSEvents.externalStorageAddedEvent_$LI$().clearAll();
                            OSEvents.externalStorageRemovedEvent_$LI$().clearAll();
                            OSEvents.permissionGrantedEvent_$LI$().clearAll();
                        };
                        return OSEvents;
                    }());
                    events.OSEvents = OSEvents;
                    OSEvents["__class"] = "com.montezumba.lib.types.events.OSEvents";
                })(events = types.events || (types.events = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var ui;
            (function (ui) {
                /**
                 * Represents a menu of media titles.
                 * Each item in the menu is selectable and contains media information (MediaTitle)
                 * @class
                 */
                var TitleList = (function () {
                    function TitleList(previous) {
                        var _this = this;
                        /**
                         * Data of this menu (a flat list of media titles)
                         */
                        /*private*/ this.mMediaTitles = ([]);
                        /*private*/ this.mRealGroups = ([]);
                        /*private*/ this.mTitleGroups = this.mRealGroups;
                        /*private*/ this.mDummyGroups = ([]);
                        /*private*/ this.mEmptyGroup = null;
                        /*private*/ this.mFlatDummyGroup = null;
                        /*private*/ this.mWorker = com.montezumba.lib.utils.WorkerFactory.instance().createWorker("TitleList", com.montezumba.lib.utils.WorkerFactory.WorkerType.ONE_TIME_WORKER);
                        /*private*/ this.mListLock = new Object();
                        this.mPreviousMenu = this;
                        this.mCanceled = false;
                        if (((previous != null && previous instanceof com.montezumba.lib.ui.TitleList) || previous === null)) {
                            var __args = arguments;
                            this.mMediaTitles = ([]);
                            this.mRealGroups = ([]);
                            this.mTitleGroups = this.mRealGroups;
                            this.mDummyGroups = ([]);
                            this.mEmptyGroup = null;
                            this.mFlatDummyGroup = null;
                            this.mWorker = com.montezumba.lib.utils.WorkerFactory.instance().createWorker$java_lang_String$com_montezumba_lib_utils_WorkerFactory_WorkerType("TitleList", com.montezumba.lib.utils.WorkerFactory.WorkerType.ONE_TIME_WORKER);
                            this.mListLock = new Object();
                            this.mPreviousMenu = this;
                            this.mCanceled = false;
                            (function () {
                                if (previous != null) {
                                    _this.mPreviousMenu = previous;
                                    if (_this.mPreviousMenu !== _this) {
                                        com.montezumba.lib.types.MediaLog.instance().debug("Generating dummy title (..)");
                                        var backPointer = new com.montezumba.lib.types.UpPointerTitle("..");
                                        /* add */ (_this.mMediaTitles.push(backPointer) > 0);
                                    }
                                }
                            })();
                        }
                        else if (((typeof previous === 'boolean') || previous === null)) {
                            var __args = arguments;
                            var isGroup_1 = __args[0];
                            this.mMediaTitles = ([]);
                            this.mRealGroups = ([]);
                            this.mTitleGroups = this.mRealGroups;
                            this.mDummyGroups = ([]);
                            this.mEmptyGroup = null;
                            this.mFlatDummyGroup = null;
                            this.mWorker = com.montezumba.lib.utils.WorkerFactory.instance().createWorker$java_lang_String$com_montezumba_lib_utils_WorkerFactory_WorkerType("TitleList", com.montezumba.lib.utils.WorkerFactory.WorkerType.ONE_TIME_WORKER);
                            this.mListLock = new Object();
                            this.mPreviousMenu = this;
                            this.mCanceled = false;
                            (function () {
                                if (isGroup_1) {
                                    _this.mTitleGroups = _this.mRealGroups;
                                }
                                else {
                                    _this.mTitleGroups = _this.mDummyGroups;
                                }
                            })();
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    TitleList.prototype.getTitle$int = function (id) {
                        return this.mMediaTitles[id];
                    };
                    /**
                     * Retrieves the title list for the current list
                     * @param {*} callback : callback function to be executed after the list is retrieved/interrupted
                     * @param {com.montezumba.lib.types.Title[]} currTitles
                     * @param {boolean} toGroup
                     */
                    TitleList.prototype.retrieveTitlesAsync = function (currTitles, toGroup, callback) {
                        this.mWorker.run(new TitleList.TitleList$0(this, currTitles, toGroup, callback));
                    };
                    /**
                     * Retrieves the title list for the current list (this method does not create a seperate thread)
                     * @param {*} callback : callback function to be executed after the list is retrieved/interrupted
                     * @param {com.montezumba.lib.types.Title[]} currTitles
                     * @param {boolean} toGroup
                     */
                    TitleList.prototype.retrieveTitlesSync = function (currTitles, toGroup, callback) {
                        this.retrieveFlatTitles(currTitles, new TitleList.TitleList$1(this, callback, toGroup));
                    };
                    /*private*/ TitleList.prototype.addTitlesToList = function (titles) {
                        var _this = this;
                        this.createSpecialGroups();
                        if (!(this.mRealGroups.indexOf((this.mEmptyGroup)) >= 0)) {
                            /* add */ (this.mRealGroups.push(this.mEmptyGroup) > 0);
                        }
                        for (var index140 = 0; index140 < titles.length; index140++) {
                            var title = titles[index140];
                            {
                                this.addTitleToList(title, null);
                            }
                        }
                        if ((this.mEmptyGroup.children.length == 0)) {
                            /* remove */ (function (a) { var index = a.indexOf(_this.mEmptyGroup); if (index >= 0) {
                                a.splice(index, 1);
                                return true;
                            }
                            else {
                                return false;
                            } })(this.mRealGroups);
                        }
                        this.rebuildFlatList();
                    };
                    /*private*/ TitleList.prototype.addTitleToList = function (title, position) {
                        if (title.group != null && !(title.group.length === 0) && !(function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(title.group, this.mEmptyGroup.displayString)) {
                            var group = new com.montezumba.lib.types.GroupTitle(/* toLowerCase */ title.group.toLowerCase());
                            if (!(this.mRealGroups.indexOf((group)) >= 0)) {
                                /* add */ (this.mRealGroups.push(group) > 0);
                            }
                            group = (this.mRealGroups[this.mRealGroups.indexOf(group)]);
                            if (position != null) {
                                /* add */ group.children.splice(position, 0, title);
                            }
                            else {
                                /* add */ (group.children.push(title) > 0);
                            }
                        }
                        else {
                            title.group = this.mEmptyGroup.displayString;
                            if (position != null) {
                                /* add */ this.mEmptyGroup.children.splice(position, 0, title);
                            }
                            else {
                                /* add */ (this.mEmptyGroup.children.push(title) > 0);
                            }
                        }
                    };
                    /*private*/ TitleList.prototype.rebuildFlatList = function () {
                        com.montezumba.lib.types.MediaLog.instance().debug("starting rebuild flat list...");
                        /* clear */ (this.mMediaTitles.length = 0);
                        /* clear */ (this.mFlatDummyGroup.children.length = 0);
                        for (var index141 = 0; index141 < this.mRealGroups.length; index141++) {
                            var groupTitle = this.mRealGroups[index141];
                            {
                                var group = groupTitle;
                                /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(this.mMediaTitles, group.children);
                            }
                        }
                        /* addAll */ (function (l1, l2) { return l1.push.apply(l1, l2); })(this.mFlatDummyGroup.children, this.mMediaTitles);
                        com.montezumba.lib.types.MediaLog.instance().debug("starting rebuild flat list...end");
                    };
                    /**
                     * Cancel the retrieval process for this list
                     * (no callback will be executed for the interrupted retrieveTitles method)
                     */
                    TitleList.prototype.cancelUpdate = function () {
                        this.mCanceled = true;
                    };
                    /**
                     * get the position of the title in the list
                     * @param {com.montezumba.lib.types.Title} title - title object in the list
                     * @return {number} position index or (-1) if not found
                     */
                    TitleList.prototype.getPosition = function (title) {
                        return this.mMediaTitles.indexOf(title);
                    };
                    TitleList.prototype.getTitle$int$int = function (groupId, childId) {
                        {
                            return this.mTitleGroups[groupId].children[childId];
                        }
                        ;
                    };
                    /**
                     * Get the title in the given group/child position
                     * @param {number} groupId - the group position
                     * @param {number} childId - the child position in that group
                     * @return {com.montezumba.lib.types.Title} position index or (-1) if not found
                     */
                    TitleList.prototype.getTitle = function (groupId, childId) {
                        if (((typeof groupId === 'number') || groupId === null) && ((typeof childId === 'number') || childId === null)) {
                            return this.getTitle$int$int(groupId, childId);
                        }
                        else if (((typeof groupId === 'number') || groupId === null) && childId === undefined) {
                            return this.getTitle$int(groupId);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    /**
                     * Get list size
                     * @return {number} list size
                     */
                    TitleList.prototype.getListSize = function () {
                        return this.mMediaTitles.length;
                    };
                    TitleList.prototype.addTitle$com_montezumba_lib_types_Title = function (title) {
                        {
                            var wrapper = ([]);
                            /* add */ (wrapper.push(title) > 0);
                            this.addTitlesToList(wrapper);
                        }
                        ;
                    };
                    TitleList.prototype.addTitle$int$com_montezumba_lib_types_Title = function (position, title) {
                        var _this = this;
                        this.createSpecialGroups();
                        if (!(this.mRealGroups.indexOf((this.mEmptyGroup)) >= 0)) {
                            /* add */ (this.mRealGroups.push(this.mEmptyGroup) > 0);
                        }
                        this.addTitleToList(title, position);
                        if ((this.mEmptyGroup.children.length == 0)) {
                            /* remove */ (function (a) { var index = a.indexOf(_this.mEmptyGroup); if (index >= 0) {
                                a.splice(index, 1);
                                return true;
                            }
                            else {
                                return false;
                            } })(this.mRealGroups);
                        }
                        this.rebuildFlatList();
                    };
                    /**
                     * Add a specific title to this list, at a specific position
                     * @param {number} position
                     * @param {com.montezumba.lib.types.Title} title
                     */
                    TitleList.prototype.addTitle = function (position, title) {
                        if (((typeof position === 'number') || position === null) && ((title != null && title instanceof com.montezumba.lib.types.Title) || title === null)) {
                            return this.addTitle$int$com_montezumba_lib_types_Title(position, title);
                        }
                        else if (((position != null && position instanceof com.montezumba.lib.types.Title) || position === null) && title === undefined) {
                            return this.addTitle$com_montezumba_lib_types_Title(position);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    /**
                     * Checks if the given title is in this list
                     * @param {com.montezumba.lib.types.Title} title - title to be checked
                     * @return {boolean} true if the title is in this list
                     */
                    TitleList.prototype.contains = function (title) {
                        return (this.mMediaTitles.indexOf((title)) >= 0);
                    };
                    /**
                     * Remove the given title from the list
                     * @param {com.montezumba.lib.types.Title} title - the title to be removed
                     */
                    TitleList.prototype.removeTitle = function (title) {
                        {
                            if ((this.mMediaTitles.indexOf((title)) >= 0)) {
                                /* remove */ (function (a) { var index = a.indexOf(title); if (index >= 0) {
                                    a.splice(index, 1);
                                    return true;
                                }
                                else {
                                    return false;
                                } })(this.mMediaTitles);
                                var _loop_3 = function (index142) {
                                    var group = this_3.mRealGroups[index142];
                                    {
                                        var groupTitle = group;
                                        if ((groupTitle.children.indexOf((title)) >= 0)) {
                                            /* remove */ (function (a) { var index = a.indexOf(title); if (index >= 0) {
                                                a.splice(index, 1);
                                                return true;
                                            }
                                            else {
                                                return false;
                                            } })(groupTitle.children);
                                            if ((groupTitle.children.length == 0)) {
                                                /* remove */ (function (a) { var index = a.indexOf(group); if (index >= 0) {
                                                    a.splice(index, 1);
                                                    return true;
                                                }
                                                else {
                                                    return false;
                                                } })(this_3.mRealGroups);
                                            }
                                            return "break";
                                        }
                                    }
                                };
                                var this_3 = this;
                                for (var index142 = 0; index142 < this.mRealGroups.length; index142++) {
                                    var state_1 = _loop_3(index142);
                                    if (state_1 === "break")
                                        break;
                                }
                                var _loop_4 = function (index143) {
                                    var group = this_4.mDummyGroups[index143];
                                    {
                                        var groupTitle = group;
                                        if ((groupTitle.children.indexOf((title)) >= 0)) {
                                            /* remove */ (function (a) { var index = a.indexOf(title); if (index >= 0) {
                                                a.splice(index, 1);
                                                return true;
                                            }
                                            else {
                                                return false;
                                            } })(groupTitle.children);
                                            if ((groupTitle.children.length == 0)) {
                                                /* remove */ (function (a) { var index = a.indexOf(group); if (index >= 0) {
                                                    a.splice(index, 1);
                                                    return true;
                                                }
                                                else {
                                                    return false;
                                                } })(this_4.mDummyGroups);
                                            }
                                            return "break";
                                        }
                                    }
                                };
                                var this_4 = this;
                                for (var index143 = 0; index143 < this.mDummyGroups.length; index143++) {
                                    var state_2 = _loop_4(index143);
                                    if (state_2 === "break")
                                        break;
                                }
                            }
                        }
                        ;
                    };
                    /**
                     * Clear this list
                     */
                    TitleList.prototype.clear = function () {
                        {
                            com.montezumba.lib.types.MediaLog.instance().debug("clear list");
                            /* clear */ (this.mMediaTitles.length = 0);
                            /* clear */ (this.mRealGroups.length = 0);
                            /* clear */ (this.mDummyGroups.length = 0);
                            this.createSpecialGroups();
                            /* clear */ (this.mEmptyGroup.children.length = 0);
                            /* clear */ (this.mFlatDummyGroup.children.length = 0);
                        }
                        ;
                    };
                    /*private*/ TitleList.prototype.createSpecialGroups = function () {
                        if (this.mEmptyGroup == null) {
                            this.mEmptyGroup = new com.montezumba.lib.types.GroupTitle(com.montezumba.lib.ui.LocalizeHandler.instance().localString("browser:ungrouped"));
                        }
                        if (this.mFlatDummyGroup == null) {
                            this.mFlatDummyGroup = new com.montezumba.lib.types.GroupTitle("----");
                        }
                        if (!(this.mDummyGroups.indexOf((this.mFlatDummyGroup)) >= 0)) {
                            /* add */ (this.mDummyGroups.push(this.mFlatDummyGroup) > 0);
                        }
                    };
                    /**
                     * Add titles to this list
                     * @param {com.montezumba.lib.types.Title[]} titles - titles to be added
                     */
                    TitleList.prototype.addTitles = function (titles) {
                        this.addTitlesToList(titles);
                    };
                    /**
                     * Links this list to another list. The two lists will point to the same data-structures.
                     * @param {com.montezumba.lib.ui.TitleList} list
                     */
                    TitleList.prototype.linkTo = function (list) {
                        com.montezumba.lib.types.MediaLog.instance().debug("link to");
                        this.clear();
                        list.createSpecialGroups();
                        this.mCanceled = false;
                        this.mDummyGroups = list.mDummyGroups;
                        this.mEmptyGroup = list.mEmptyGroup;
                        this.mFlatDummyGroup = list.mFlatDummyGroup;
                        this.mMediaTitles = list.mMediaTitles;
                        this.mPreviousMenu = list.mPreviousMenu;
                        this.mRealGroups = list.mRealGroups;
                        this.mTitleGroups = list.mTitleGroups;
                    };
                    /**
                     * Return a flat list of titles (ungrouped)
                     * @return {com.montezumba.lib.types.Title[]} a list of Titles extraceted from all groups
                     */
                    TitleList.prototype.getFlatList = function () {
                        return this.mMediaTitles;
                    };
                    /**
                     * Checks if the list is empty
                     * @return {boolean} true is the list is empty
                     */
                    TitleList.prototype.isEmpty = function () {
                        return this.getListSize() === 0;
                    };
                    return TitleList;
                }());
                ui.TitleList = TitleList;
                TitleList["__class"] = "com.montezumba.lib.ui.TitleList";
                (function (TitleList) {
                    var TitleList$0 = (function (_super) {
                        __extends(TitleList$0, _super);
                        function TitleList$0(__parent, currTitles, toGroup, callback) {
                            var _this = _super.call(this) || this;
                            _this.currTitles = currTitles;
                            _this.toGroup = toGroup;
                            _this.callback = callback;
                            _this.__parent = __parent;
                            return _this;
                        }
                        /**
                         *
                         */
                        TitleList$0.prototype.doInBackground = function () {
                            this.__parent.retrieveTitlesSync(this.currTitles, this.toGroup, this.callback);
                        };
                        return TitleList$0;
                    }(com.montezumba.lib.utils.SimpleBackgroundTask));
                    TitleList.TitleList$0 = TitleList$0;
                    TitleList$0["__interfaces"] = ["com.montezumba.lib.utils.WorkerFactory.WorkerTask"];
                    var TitleList$1 = (function () {
                        function TitleList$1(__parent, callback, toGroup) {
                            this.callback = callback;
                            this.toGroup = toGroup;
                            this.__parent = __parent;
                        }
                        /**
                         *
                         * @param {com.montezumba.lib.types.Title[]} titles
                         */
                        TitleList$1.prototype.run = function (titles) {
                            if (titles == null) {
                                com.montezumba.lib.types.MediaLog.instance().debug("titles is null");
                                if (this.callback != null) {
                                    this.callback.run(this.__parent.mTitleGroups);
                                }
                                return;
                            }
                            {
                                this.__parent.clear();
                                this.__parent.addTitlesToList(titles);
                                if (this.callback != null) {
                                    if (this.toGroup) {
                                        this.__parent.mTitleGroups = this.__parent.mRealGroups;
                                    }
                                    else {
                                        this.__parent.mTitleGroups = this.__parent.mDummyGroups;
                                    }
                                    com.montezumba.lib.types.MediaLog.instance().debug("Running callback groups=" + this.__parent.mTitleGroups.length + " total=" + this.__parent.mMediaTitles.length);
                                    com.montezumba.lib.types.MediaLog.instance().debug("this object=" + this.__parent);
                                    this.callback.run(this.__parent.mTitleGroups);
                                }
                            }
                            ;
                        };
                        /**
                         *
                         * @param {string} msg
                         */
                        TitleList$1.prototype.error = function (msg) {
                            if (this.callback != null) {
                                this.callback.error(msg);
                            }
                        };
                        return TitleList$1;
                    }());
                    TitleList.TitleList$1 = TitleList$1;
                    TitleList$1["__interfaces"] = ["com.montezumba.lib.types.MediaCallback"];
                })(TitleList = ui.TitleList || (ui.TitleList = {}));
            })(ui = lib.ui || (lib.ui = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var ReportHandler = (function (_super) {
                    __extends(ReportHandler, _super);
                    function ReportHandler(reporters) {
                        var _this = _super.call(this) || this;
                        /*private*/ _this.mReporters = ([]);
                        /*private*/ _this.mActive = false;
                        if (reporters != null) {
                            _this.mReporters = reporters;
                        }
                        else {
                            _this.mReporters = ([]);
                        }
                        return _this;
                    }
                    ReportHandler.instance = function () {
                        return ReportHandler.__instance;
                    };
                    ReportHandler.create = function (reporters) {
                        ReportHandler.__instance = new ReportHandler(reporters);
                    };
                    ReportHandler.prototype.report$com_montezumba_lib_utils_ReportHandler_ReportLevel$java_lang_String$java_lang_String$long = function (level, type, message, value) {
                        if (this.mActive) {
                            for (var index144 = 0; index144 < this.mReporters.length; index144++) {
                                var reporter = this.mReporters[index144];
                                {
                                    reporter['report$com_montezumba_lib_utils_ReportHandler_ReportLevel$java_lang_String$java_lang_String$long'](level, type, message, value);
                                }
                            }
                        }
                    };
                    /**
                     * Report this message to the report servers
                     * @param {com.montezumba.lib.utils.ReportHandler.ReportLevel} level - level of the report. This affects how the message should be logged on the server side
                     * @param {string} type - report message type
                     * @param {string} message - the message to be logged
                     * @param {number} value - the value for this event
                     */
                    ReportHandler.prototype.report = function (level, type, message, value) {
                        if (((typeof level === 'number') || level === null) && ((typeof type === 'string') || type === null) && ((typeof message === 'string') || message === null) && ((typeof value === 'number') || value === null)) {
                            return this.report$com_montezumba_lib_utils_ReportHandler_ReportLevel$java_lang_String$java_lang_String$long(level, type, message, value);
                        }
                        else if (((typeof level === 'string') || level === null) && ((type != null && (type["__classes"] && type["__classes"].indexOf("java.lang.Throwable") >= 0) || type != null && type instanceof Error) || type === null) && message === undefined && value === undefined) {
                            return this.report$java_lang_String$java_lang_Throwable(level, type);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    ReportHandler.prototype.report$java_lang_String$java_lang_Throwable = function (message, e) {
                        for (var index145 = 0; index145 < this.mReporters.length; index145++) {
                            var reporter = this.mReporters[index145];
                            {
                                reporter['report$java_lang_String$java_lang_Throwable'](message, e);
                            }
                        }
                    };
                    /**
                     *
                     * @param {com.montezumba.lib.types.Component.InitMode} mode
                     */
                    ReportHandler.prototype.init = function (mode) {
                        var initializer = com.montezumba.lib.utils.WorkerFactory.instance().createWorker$java_lang_String$com_montezumba_lib_utils_WorkerFactory_WorkerType("reporter init", com.montezumba.lib.utils.WorkerFactory.WorkerType.ONE_TIME_WORKER);
                        initializer.run(new ReportHandler.ReportHandler$0(this, mode));
                    };
                    /**
                     *
                     */
                    ReportHandler.prototype.destroy = function () {
                        for (var index146 = 0; index146 < this.mReporters.length; index146++) {
                            var reporter = this.mReporters[index146];
                            {
                                reporter.destroy();
                            }
                        }
                        this.mActive = false;
                    };
                    return ReportHandler;
                }(com.montezumba.lib.types.Component));
                ReportHandler.__instance = null;
                utils.ReportHandler = ReportHandler;
                ReportHandler["__class"] = "com.montezumba.lib.utils.ReportHandler";
                (function (ReportHandler) {
                    var ReportLevel;
                    (function (ReportLevel) {
                        ReportLevel[ReportLevel["REPORT_LEVEL_ERROR"] = 0] = "REPORT_LEVEL_ERROR";
                        ReportLevel[ReportLevel["REPORT_LEVEL_EVENT"] = 1] = "REPORT_LEVEL_EVENT";
                    })(ReportLevel = ReportHandler.ReportLevel || (ReportHandler.ReportLevel = {}));
                    /** @ignore */
                    var ReportLevel_$WRAPPER = (function () {
                        function ReportLevel_$WRAPPER(_$ordinal, _$name, str) {
                            this._$ordinal = _$ordinal;
                            this._$name = _$name;
                            if (this.levelStr === undefined)
                                this.levelStr = null;
                            this.levelStr = str;
                        }
                        ReportLevel_$WRAPPER.prototype.name = function () { return this._$name; };
                        ReportLevel_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
                        return ReportLevel_$WRAPPER;
                    }());
                    ReportHandler.ReportLevel_$WRAPPER = ReportLevel_$WRAPPER;
                    ReportLevel["__class"] = "com.montezumba.lib.utils.ReportHandler.ReportLevel";
                    ReportLevel["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
                    ReportLevel["_$wrappers"] = [new ReportLevel_$WRAPPER(0, "REPORT_LEVEL_ERROR", "E"), new ReportLevel_$WRAPPER(1, "REPORT_LEVEL_EVENT", "I")];
                    var ReportHandler$0 = (function (_super) {
                        __extends(ReportHandler$0, _super);
                        function ReportHandler$0(__parent, mode) {
                            var _this = _super.call(this) || this;
                            _this.mode = mode;
                            _this.__parent = __parent;
                            return _this;
                        }
                        /**
                         *
                         */
                        ReportHandler$0.prototype.doInBackground = function () {
                            for (var index147 = 0; index147 < this.__parent.mReporters.length; index147++) {
                                var reporter = this.__parent.mReporters[index147];
                                {
                                    reporter.init(this.mode);
                                }
                            }
                            this.__parent.mActive = true;
                        };
                        return ReportHandler$0;
                    }(com.montezumba.lib.utils.SimpleBackgroundTask));
                    ReportHandler.ReportHandler$0 = ReportHandler$0;
                    ReportHandler$0["__interfaces"] = ["com.montezumba.lib.utils.WorkerFactory.WorkerTask"];
                })(ReportHandler = utils.ReportHandler || (utils.ReportHandler = {}));
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var types;
            (function (types) {
                var jsweet;
                (function (jsweet) {
                    var MediaLogJSweet = (function (_super) {
                        __extends(MediaLogJSweet, _super);
                        function MediaLogJSweet() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        /**
                         *
                         */
                        MediaLogJSweet.prototype.printCurrentTime = function () {
                            console.info("Current System Time: " + java.text.DateFormat.getDateTimeInstance(java.text.DateFormat.FULL, java.text.DateFormat.FULL).format(new Date()));
                        };
                        /**
                         *
                         * @param {com.montezumba.lib.types.MediaLog.LogType} logType
                         * @param {string} msg
                         */
                        MediaLogJSweet.prototype.printMessage = function (logType, msg) {
                            switch ((logType)) {
                                case com.montezumba.lib.types.MediaLog.LogType.LOG_TYPE_DEBUG:
                                    console.debug(msg);
                                    break;
                                case com.montezumba.lib.types.MediaLog.LogType.LOG_TYPE_INFO:
                                    console.info(msg);
                                    break;
                                case com.montezumba.lib.types.MediaLog.LogType.LOG_TYPE_WARNING:
                                    console.warn(msg);
                                case com.montezumba.lib.types.MediaLog.LogType.LOG_TYPE_ERROR:
                                    console.error(msg);
                                    break;
                                case com.montezumba.lib.types.MediaLog.LogType.LOG_TYPE_STAMP:
                                    console.debug(msg + " (Time Stamp: " + ((Date.now() * 1000000) / 1.0E9) + " sec.)");
                                    break;
                            }
                        };
                        /**
                         *
                         * @param {number} deltaStackDepth
                         * @return {com.montezumba.lib.types.MediaLog.StackData}
                         */
                        MediaLogJSweet.prototype.getStackData = function (deltaStackDepth) {
                            var result = new types.MediaLog.StackData(this.__parent);
                            result.className = "NA";
                            result.methodName = "NA";
                            result.fileName = "NA";
                            result.lineInFile = 0;
                            return result;
                        };
                        /**
                         *
                         * @return {number}
                         */
                        MediaLogJSweet.prototype.getThreadId = function () {
                            return 0;
                        };
                        /**
                         *
                         * @return {string}
                         */
                        MediaLogJSweet.prototype.getThreadName = function () {
                            return "Main Thread";
                        };
                        return MediaLogJSweet;
                    }(com.montezumba.lib.types.MediaLog));
                    jsweet.MediaLogJSweet = MediaLogJSweet;
                    MediaLogJSweet["__class"] = "com.montezumba.lib.types.jsweet.MediaLogJSweet";
                })(jsweet = types.jsweet || (types.jsweet = {}));
            })(types = lib.types || (lib.types = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
(function (com) {
    var montezumba;
    (function (montezumba) {
        var lib;
        (function (lib) {
            var utils;
            (function (utils) {
                var jsweet;
                (function (jsweet) {
                    var TimerFactoryJSweet = (function (_super) {
                        __extends(TimerFactoryJSweet, _super);
                        function TimerFactoryJSweet() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        /**
                         *
                         * @return {*}
                         */
                        TimerFactoryJSweet.prototype.createTimerSpecific = function () {
                            throw Object.defineProperty(new Error("unimplemented"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                        };
                        /**
                         *
                         * @return {com.montezumba.lib.types.TimeStamp}
                         */
                        TimerFactoryJSweet.prototype.getCurrentTime = function () {
                            var currDate = new Date();
                            var millis = (function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(currDate.getTime());
                            var offset = (currDate.getTimezoneOffset() | 0);
                            return new com.montezumba.lib.types.jsweet.TimeStampJSweet(millis, offset);
                        };
                        TimerFactoryJSweet.prototype.createTimeStamp$long = function (milliseconds) {
                            return new com.montezumba.lib.types.jsweet.TimeStampJSweet(milliseconds, 0);
                        };
                        TimerFactoryJSweet.prototype.createTimeStamp$long$int = function (milliseconds, offset) {
                            return new com.montezumba.lib.types.jsweet.TimeStampJSweet(milliseconds, offset);
                        };
                        TimerFactoryJSweet.prototype.createTimeStamp$int$int$int$int$int$int$int = function (year, month, day, hour, minute, second, timezoneOffset) {
                            return new com.montezumba.lib.types.jsweet.TimeStampJSweet(year, month, day, hour, minute, second, timezoneOffset);
                        };
                        /**
                         *
                         * @param {number} year
                         * @param {number} month
                         * @param {number} day
                         * @param {number} hour
                         * @param {number} minute
                         * @param {number} second
                         * @param {number} timezoneOffset
                         * @return {com.montezumba.lib.types.TimeStamp}
                         */
                        TimerFactoryJSweet.prototype.createTimeStamp = function (year, month, day, hour, minute, second, timezoneOffset) {
                            if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof day === 'number') || day === null) && ((typeof hour === 'number') || hour === null) && ((typeof minute === 'number') || minute === null) && ((typeof second === 'number') || second === null) && ((typeof timezoneOffset === 'number') || timezoneOffset === null)) {
                                return this.createTimeStamp$int$int$int$int$int$int$int(year, month, day, hour, minute, second, timezoneOffset);
                            }
                            else if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && day === undefined && hour === undefined && minute === undefined && second === undefined && timezoneOffset === undefined) {
                                return this.createTimeStamp$long$int(year, month);
                            }
                            else if (((typeof year === 'number') || year === null) && month === undefined && day === undefined && hour === undefined && minute === undefined && second === undefined && timezoneOffset === undefined) {
                                return this.createTimeStamp$long(year);
                            }
                            else
                                throw new Error('invalid overload');
                        };
                        /**
                         *
                         * @return {number}
                         */
                        TimerFactoryJSweet.prototype.getCurrentTimeZoneOffset = function () {
                            var currDate = new Date();
                            return (currDate.getTimezoneOffset() | 0);
                        };
                        /**
                         *
                         * @param {string} countryCode
                         * @return {number}
                         */
                        TimerFactoryJSweet.prototype.getTimeZoneOffset = function (countryCode) {
                            var localOptions = Object.defineProperty({
                                timeZone: countryCode,
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric",
                                year: "numeric",
                                month: "numeric",
                                day: "numeric"
                            }, '__interfaces', { configurable: true, value: ["def.dom.intl.DateTimeFormatOptions"] });
                            var gmtOptions = Object.defineProperty({
                                timeZone: "Etc/GMT",
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric",
                                year: "numeric",
                                month: "numeric",
                                day: "numeric"
                            }, '__interfaces', { configurable: true, value: ["def.dom.intl.DateTimeFormatOptions"] });
                            var localFormatter = new Intl.DateTimeFormat([], localOptions);
                            var utcFormatter = new Intl.DateTimeFormat([], gmtOptions);
                            var localDate = new Date(localFormatter.format());
                            var utcDate = new Date(utcFormatter.format());
                            return (((localDate.getTime() - utcDate.getTime()) / com.montezumba.lib.types.Constants.MINUTES_$LI$()) | 0);
                        };
                        return TimerFactoryJSweet;
                    }(com.montezumba.lib.utils.TimerFactory));
                    jsweet.TimerFactoryJSweet = TimerFactoryJSweet;
                    TimerFactoryJSweet["__class"] = "com.montezumba.lib.utils.jsweet.TimerFactoryJSweet";
                })(jsweet = utils.jsweet || (utils.jsweet = {}));
            })(utils = lib.utils || (lib.utils = {}));
        })(lib = montezumba.lib || (montezumba.lib = {}));
    })(montezumba = com.montezumba || (com.montezumba = {}));
})(com || (com = {}));
com.montezumba.lib.types.events.OSEvents.permissionDeniedEvent_$LI$();
com.montezumba.lib.types.events.OSEvents.permissionGrantedEvent_$LI$();
com.montezumba.lib.types.events.OSEvents.externalStorageRemovedEvent_$LI$();
com.montezumba.lib.types.events.OSEvents.externalStorageAddedEvent_$LI$();
com.montezumba.lib.types.jsweet.TimeStampJSweet.mCalendarLock_$LI$();
com.montezumba.lib.config.IOConfig.MAX_IO_ARRAY_SIZE_$LI$();
com.montezumba.lib.io.RegistryHandler.instances_$LI$();
com.montezumba.lib.io.DataBaseHandler.__instances_$LI$();
com.montezumba.lib.utils.StringUtils.sBuilderLock_$LI$();
com.montezumba.lib.utils.StringUtils.sStringBuilder_$LI$();
com.montezumba.lib.types.TimeStamp.sBuilderLock_$LI$();
com.montezumba.lib.types.TimeStamp.sStringBuilder_$LI$();
com.montezumba.lib.types.Constants.GB_$LI$();
com.montezumba.lib.types.Constants.MB_$LI$();
com.montezumba.lib.types.Constants.KB_$LI$();
com.montezumba.lib.types.Constants.WEEKS_$LI$();
com.montezumba.lib.types.Constants.DAYS_$LI$();
com.montezumba.lib.types.Constants.HOURS_$LI$();
com.montezumba.lib.types.Constants.MINUTES_$LI$();
com.montezumba.lib.types.Constants.SECONDS_$LI$();
//# sourceMappingURL=bundle.js.map