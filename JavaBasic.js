var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * Indicates that an objet was in an invalid state during an attempted
         * operation.
         * @param {string} message
         * @param {java.lang.Throwable} cause
         * @class
         * @extends java.lang.RuntimeException
         */
        var InstantiationException = (function (_super) {
            __extends(InstantiationException, _super);
            function InstantiationException(message, cause) {
                var _this = this;
                if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null)) {
                    var __args = arguments;
                    _this = _super.call(this, message, cause) || this;
                    Object.setPrototypeOf(_this, InstantiationException.prototype);
                }
                else if (((typeof message === 'string') || message === null) && cause === undefined) {
                    var __args = arguments;
                    var s = __args[0];
                    _this = _super.call(this, s) || this;
                    Object.setPrototypeOf(_this, InstantiationException.prototype);
                }
                else if (((message != null && message instanceof Error) || message === null) && cause === undefined) {
                    var __args = arguments;
                    var cause_1 = __args[0];
                    _this = _super.call(this, cause_1) || this;
                    Object.setPrototypeOf(_this, InstantiationException.prototype);
                }
                else if (message === undefined && cause === undefined) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                    Object.setPrototypeOf(_this, InstantiationException.prototype);
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            return InstantiationException;
        }(java.lang.RuntimeException));
        lang.InstantiationException = InstantiationException;
        InstantiationException["__class"] = "java.lang.InstantiationException";
        InstantiationException["__interfaces"] = ["java.io.Serializable"];
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
(function (java) {
    var lang;
    (function (lang) {
        /**
         * Creates a {@code SecurityException} with the specified
         * detail message and cause.
         *
         * @param {string} message the detail message (which is saved for later retrieval
         * by the {@link #getMessage()} method).
         * @param {java.lang.Throwable} cause the cause (which is saved for later retrieval by the
         * {@link #getCause()} method).  (A {@code null} value is permitted,
         * and indicates that the cause is nonexistent or unknown.)
         * @since 1.5
         * @class
         * @extends java.lang.RuntimeException
         * @author  unascribed
         */
        var SecurityException = (function (_super) {
            __extends(SecurityException, _super);
            function SecurityException(message, cause) {
                var _this = this;
                if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null)) {
                    var __args = arguments;
                    _this = _super.call(this, message, cause) || this;
                    Object.setPrototypeOf(_this, SecurityException.prototype);
                }
                else if (((typeof message === 'string') || message === null) && cause === undefined) {
                    var __args = arguments;
                    var s = __args[0];
                    _this = _super.call(this, s) || this;
                    Object.setPrototypeOf(_this, SecurityException.prototype);
                }
                else if (((message != null && message instanceof Error) || message === null) && cause === undefined) {
                    var __args = arguments;
                    var cause_2 = __args[0];
                    _this = _super.call(this, cause_2) || this;
                    Object.setPrototypeOf(_this, SecurityException.prototype);
                }
                else if (message === undefined && cause === undefined) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                    Object.setPrototypeOf(_this, SecurityException.prototype);
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            return SecurityException;
        }(java.lang.RuntimeException));
        SecurityException.serialVersionUID = 6878364983674394167;
        lang.SecurityException = SecurityException;
        SecurityException["__class"] = "java.lang.SecurityException";
        SecurityException["__interfaces"] = ["java.io.Serializable"];
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
(function (java) {
    var security;
    (function (security) {
        /**
         * Indicates that an objet was in an invalid state during an attempted
         * operation.
         * @param {string} message
         * @param {java.lang.Throwable} cause
         * @class
         * @extends java.lang.IllegalArgumentException
         */
        var InvalidParameterException = (function (_super) {
            __extends(InvalidParameterException, _super);
            function InvalidParameterException(message, cause) {
                var _this = this;
                if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null)) {
                    var __args = arguments;
                    _this = _super.call(this, message, cause) || this;
                    Object.setPrototypeOf(_this, InvalidParameterException.prototype);
                }
                else if (((typeof message === 'string') || message === null) && cause === undefined) {
                    var __args = arguments;
                    var s = __args[0];
                    _this = _super.call(this, s) || this;
                    Object.setPrototypeOf(_this, InvalidParameterException.prototype);
                }
                else if (((message != null && message instanceof Error) || message === null) && cause === undefined) {
                    var __args = arguments;
                    var cause_3 = __args[0];
                    _this = _super.call(this, cause_3) || this;
                    Object.setPrototypeOf(_this, InvalidParameterException.prototype);
                }
                else if (message === undefined && cause === undefined) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                    Object.setPrototypeOf(_this, InvalidParameterException.prototype);
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            return InvalidParameterException;
        }(java.lang.IllegalArgumentException));
        security.InvalidParameterException = InvalidParameterException;
        InvalidParameterException["__class"] = "java.security.InvalidParameterException";
        InvalidParameterException["__interfaces"] = ["java.io.Serializable"];
    })(security = java.security || (java.security = {}));
})(java || (java = {}));
(function (java) {
    var util;
    (function (util) {
        var concurrent;
        (function (concurrent) {
            var CopyOnWriteArraySet = (function (_super) {
                __extends(CopyOnWriteArraySet, _super);
                function CopyOnWriteArraySet() {
                    return _super.call(this) || this;
                }
                return CopyOnWriteArraySet;
            }(java.util.HashSet));
            CopyOnWriteArraySet.serialVersionUID = 5457747651344034263;
            concurrent.CopyOnWriteArraySet = CopyOnWriteArraySet;
            CopyOnWriteArraySet["__class"] = "java.util.concurrent.CopyOnWriteArraySet";
            CopyOnWriteArraySet["__interfaces"] = ["java.lang.Cloneable", "java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"];
        })(concurrent = util.concurrent || (util.concurrent = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (java) {
    var util;
    (function (util) {
        var regex;
        (function (regex) {
            var Matcher = (function () {
                function Matcher(_pattern, text) {
                    if (this._pattern === undefined)
                        this._pattern = null;
                    if (this.text === undefined)
                        this.text = null;
                    if (this.starts === undefined)
                        this.starts = null;
                    if (this.ends === undefined)
                        this.ends = null;
                    if (this.groups === undefined)
                        this.groups = null;
                    this._pattern = _pattern;
                    this.text = text;
                    this.reset();
                }
                Matcher.prototype.hasGroups = function () {
                    if (this.groups == null)
                        throw new java.lang.IllegalStateException("No match available");
                };
                Matcher.prototype.searchWith = function (regExp) {
                    var startLastIndex = (regExp.lastIndex | 0);
                    var exec = regExp.exec(this.text);
                    this.groups = (exec);
                    if (this.groups == null) {
                        this.reset();
                        return false;
                    }
                    this.starts = [];
                    this.ends = [];
                    var parenthesisStart = [];
                    var parenthesisEnds = [];
                    var nonCapturesToCaptures = new Matcher.NonCapturesToCaptures(parenthesisStart, parenthesisEnds);
                    var regExpStringWithAllCaptures = (regExp.source).replace(new RegExp("((?:\\\\.|\\[\\^?\\]\\]|\\[\\^?(?:[^\\\\\\]]|\\\\.|)+\\])+)|\\(((?:\\?\\:)?)|(\\))", "g"), (((function (nonCapturesToCaptures) {
                        return function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            return nonCapturesToCaptures.apply(args);
                        };
                    })(nonCapturesToCaptures))));
                    var regExpWithAllCaptures = new RegExp(regExpStringWithAllCaptures);
                    var indexGetter = new Matcher.IndexGetter(regExp.source, parenthesisStart, parenthesisEnds, this.starts, this.ends, startLastIndex);
                    (this.text.substring(startLastIndex)).replace(regExpWithAllCaptures, (((function (indexGetter) {
                        return function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            return indexGetter.apply(args);
                        };
                    })(indexGetter))));
                    return true;
                };
                Matcher.prototype.end$ = function () {
                    return this.end$int(0);
                };
                Matcher.prototype.end$int = function (i) {
                    this.hasGroups();
                    return this.ends[i];
                };
                Matcher.prototype.end$java_lang_String = function (string) {
                    return this.end$int(this._pattern.namedGroupsNames.get(string) + this.regionStart());
                };
                Matcher.prototype.end = function (string) {
                    if (((typeof string === 'string') || string === null)) {
                        return this.end$java_lang_String(string);
                    }
                    else if (((typeof string === 'number') || string === null)) {
                        return this.end$int(string);
                    }
                    else if (string === undefined) {
                        return this.end$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                Matcher.prototype.find$ = function () {
                    return this.searchWith(this._pattern.regexp);
                };
                Matcher.prototype.find$int = function (start) {
                    this._pattern.regexp.lastIndex = start;
                    return this.find();
                };
                Matcher.prototype.find = function (start) {
                    if (((typeof start === 'number') || start === null)) {
                        return this.find$int(start);
                    }
                    else if (start === undefined) {
                        return this.find$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                Matcher.prototype.group$ = function () {
                    return this.group$int(0);
                };
                Matcher.prototype.group$int = function (i) {
                    this.hasGroups();
                    return this.groups[i];
                };
                Matcher.prototype.group$java_lang_String = function (string) {
                    return this.group$int(this._pattern.namedGroupsNames.get(string) + this.regionStart());
                };
                Matcher.prototype.group = function (string) {
                    if (((typeof string === 'string') || string === null)) {
                        return this.group$java_lang_String(string);
                    }
                    else if (((typeof string === 'number') || string === null)) {
                        return this.group$int(string);
                    }
                    else if (string === undefined) {
                        return this.group$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                /**
                 *
                 * @return {number}
                 */
                Matcher.prototype.groupCount = function () {
                    return this.groups.length - 1;
                };
                Matcher.prototype.hitEnd = function () {
                    return this.end() === this.text.length;
                };
                Matcher.prototype.lookingAt = function () {
                    this.reset();
                    return this.searchWith(java.util.regex.Pattern.compile$java_lang_String("^(?:" + this._pattern.pattern() + ")").regexp);
                };
                Matcher.prototype.matches = function () {
                    this.reset();
                    return this.searchWith(java.util.regex.Pattern.compile$java_lang_String("^(?:" + this._pattern.pattern() + ")$").regexp);
                };
                Matcher.prototype.pattern = function () {
                    return this._pattern;
                };
                Matcher.prototype.regionEnd = function () {
                    this.hasGroups();
                    return this.groups.length;
                };
                Matcher.prototype.regionStart = function () {
                    this.hasGroups();
                    return 1;
                };
                Matcher.prototype.replaceAll = function (replacement) {
                    this.reset();
                    this.text = (this.text).replace(this._pattern.regexp, replacement);
                    return this.text;
                };
                Matcher.prototype.replaceFirst = function (replacement) {
                    this.reset();
                    var firstReplacer = new Matcher.FirstReplacer(replacement);
                    this.text = (this.text).replace(this._pattern.regexp, ((((function (firstReplacer) {
                        return function (args) { return firstReplacer.apply(args); };
                    })(firstReplacer)))));
                    return this.text;
                };
                Matcher.prototype.reset$ = function () {
                    this._pattern.regexp.lastIndex = 0;
                    this.groups = null;
                    this.starts = null;
                    this.ends = null;
                    return this;
                };
                Matcher.prototype.reset$java_lang_CharSequence = function (input) {
                    this.text = input.toString();
                    return this.reset();
                };
                Matcher.prototype.reset = function (input) {
                    if (((input != null && (input["__interfaces"] != null && input["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || input.constructor != null && input.constructor["__interfaces"] != null && input.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof input === "string")) || input === null)) {
                        return this.reset$java_lang_CharSequence(input);
                    }
                    else if (input === undefined) {
                        return this.reset$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                Matcher.prototype.start$ = function () {
                    return this.start$int(0);
                };
                Matcher.prototype.start$int = function (i) {
                    this.hasGroups();
                    return this.starts[i];
                };
                Matcher.prototype.start$java_lang_String = function (string) {
                    return this.start$int(this._pattern.namedGroupsNames.get(string) + this.regionStart());
                };
                Matcher.prototype.start = function (string) {
                    if (((typeof string === 'string') || string === null)) {
                        return this.start$java_lang_String(string);
                    }
                    else if (((typeof string === 'number') || string === null)) {
                        return this.start$int(string);
                    }
                    else if (string === undefined) {
                        return this.start$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                Matcher.prototype.toMatchResult = function () {
                    return this;
                };
                Matcher.prototype.usePattern = function (newPattern) {
                    this._pattern = newPattern;
                    return this;
                };
                return Matcher;
            }());
            regex.Matcher = Matcher;
            Matcher["__class"] = "java.util.regex.Matcher";
            Matcher["__interfaces"] = ["java.util.regex.MatchResult"];
            (function (Matcher) {
                var IndexGetter = (function () {
                    function IndexGetter(regexString, parenthesisStart, parenthesisEnd, starts, ends, startLastIndex) {
                        if (this.regexString === undefined)
                            this.regexString = null;
                        if (this.parenthesisStart === undefined)
                            this.parenthesisStart = null;
                        if (this.parenthesisEnd === undefined)
                            this.parenthesisEnd = null;
                        if (this.starts === undefined)
                            this.starts = null;
                        if (this.ends === undefined)
                            this.ends = null;
                        if (this.startLastIndex === undefined)
                            this.startLastIndex = 0;
                        this.regexString = regexString;
                        this.parenthesisStart = parenthesisStart;
                        this.parenthesisEnd = parenthesisEnd;
                        this.starts = starts;
                        this.ends = ends;
                        this.startLastIndex = startLastIndex;
                    }
                    /**
                     *
                     * @param {Array} args
                     * @return {string}
                     */
                    IndexGetter.prototype.apply = function (args) {
                        (this.starts).push(((args[args.length - 2])));
                        (this.ends).push((this.starts[0]) + args[0].length);
                        var lastIndices = (new java.util.Stack());
                        lastIndices.push(this.ends[0]);
                        lastIndices.push(this.starts[0]);
                        var countEndsFrom = 0;
                        for (var i = 0; i < args.length - 3; ++i) {
                            {
                                var pl = this.parenthesisStart[i];
                                while ((this.parenthesisEnd[countEndsFrom] < pl)) {
                                    {
                                        countEndsFrom += 1;
                                        lastIndices.pop();
                                    }
                                }
                                ;
                                var start = lastIndices.pop();
                                var len = args[i + 1] != null ? args[i + 1].length : 0;
                                lastIndices.push(start + len);
                                lastIndices.push(start);
                                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(this.regexString.charAt(pl + 1)) == '?'.charCodeAt(0)) {
                                    continue;
                                }
                                if (len === 0) {
                                    (this.starts).push(-1);
                                    (this.ends).push(-1);
                                }
                                else {
                                    start += this.startLastIndex;
                                    (this.starts).push(start);
                                    (this.ends).push(start + len);
                                }
                            }
                            ;
                        }
                        this.starts[0] += this.startLastIndex;
                        this.ends[0] += this.startLastIndex;
                        return args[0];
                    };
                    return IndexGetter;
                }());
                Matcher.IndexGetter = IndexGetter;
                IndexGetter["__class"] = "java.util.regex.Matcher.IndexGetter";
                IndexGetter["__interfaces"] = ["java.util.function.Function"];
                var NonCapturesToCaptures = (function () {
                    function NonCapturesToCaptures(start, ends) {
                        if (this.start === undefined)
                            this.start = null;
                        if (this.ends === undefined)
                            this.ends = null;
                        this.start = start;
                        this.ends = ends;
                    }
                    /**
                     *
                     * @param {Array} args
                     * @return {string}
                     */
                    NonCapturesToCaptures.prototype.apply = function (args) {
                        if (args[1] !== undefined) {
                            return args[1];
                        }
                        if (args[2] !== undefined) {
                            (this.start).push(javaemul.internal.IntegerHelper.parseInt((args[args.length - 2])));
                            return "(";
                        }
                        if (args[3] !== undefined) {
                            (this.ends).push(javaemul.internal.IntegerHelper.parseInt((args[args.length - 2])));
                            return args[3];
                        }
                        throw new Error("NonCapturesToCaptures");
                    };
                    return NonCapturesToCaptures;
                }());
                Matcher.NonCapturesToCaptures = NonCapturesToCaptures;
                NonCapturesToCaptures["__class"] = "java.util.regex.Matcher.NonCapturesToCaptures";
                NonCapturesToCaptures["__interfaces"] = ["java.util.function.Function"];
                var FirstReplacer = (function () {
                    function FirstReplacer(replacement) {
                        this.first = true;
                        if (this.replacement === undefined)
                            this.replacement = null;
                        this.replacement = replacement;
                    }
                    /**
                     *
                     * @param {Array} args
                     * @return {string}
                     */
                    FirstReplacer.prototype.apply = function (args) {
                        if (this.first) {
                            this.first = false;
                            return this.replacement;
                        }
                        return args[0];
                    };
                    return FirstReplacer;
                }());
                Matcher.FirstReplacer = FirstReplacer;
                FirstReplacer["__class"] = "java.util.regex.Matcher.FirstReplacer";
                FirstReplacer["__interfaces"] = ["java.util.function.Function"];
            })(Matcher = regex.Matcher || (regex.Matcher = {}));
        })(regex = util.regex || (util.regex = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (java) {
    var util;
    (function (util) {
        var regex;
        (function (regex_1) {
            var Pattern = (function () {
                function Pattern(regexp, _flags, namedGroupsNames) {
                    if (this.regexp === undefined)
                        this.regexp = null;
                    if (this._flags === undefined)
                        this._flags = 0;
                    if (this.namedGroupsNames === undefined)
                        this.namedGroupsNames = null;
                    this.regexp = regexp;
                    this._flags = _flags;
                    this.namedGroupsNames = namedGroupsNames;
                }
                Pattern.compile$java_lang_String = function (regexp) {
                    return Pattern.compile$java_lang_String$int(regexp, 0);
                };
                Pattern.compile$java_lang_String$int = function (regexpString, flags) {
                    var jsFlags = "g";
                    if ((flags & Pattern.MULTILINE) > 0) {
                        jsFlags += "m";
                    }
                    if ((flags & Pattern.CASE_INSENSITIVE) > 0) {
                        jsFlags += "i";
                    }
                    if ((flags & Pattern.UNICODE_CHARACTER_CLASS) > 0) {
                        jsFlags += "u";
                    }
                    if ((flags & Pattern.UNICODE_CASE) > 0) {
                        jsFlags += "ui";
                    }
                    var namedGroupsNames = (new java.util.HashMap());
                    var groupNameRemover = new Pattern.GroupNameRemover(namedGroupsNames);
                    regexpString = (regexpString).replace(new RegExp("(?:\\\\\\\\)*(\\\\?)\\[\\^?\\]?|(?:\\\\\\\\)*(\\\\?)\\]|(?:\\\\\\\\)*(\\\\?)\\((?:(\\?\\:)|\\?<([^>]+)>)?", "g"), ((((function (groupNameRemover) {
                        return function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            return groupNameRemover.apply(args);
                        };
                    })(groupNameRemover))))).replace(new RegExp("(\\?\\:|(?:[*+?]|\\{[^\\}]+\\})*)((?:[^\\\\()|]|\\\\.|\\[\\^?\\]\\]|\\[\\^?(?:[^\\\\\\]]|\\\\.|)+\\])*)", "g"), (((function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (args[2] === undefined || args[2].length === 0) {
                            return args[1];
                        }
                        var regexp = args[args.length - 1];
                        var startIndexOfMatched = javaemul.internal.IntegerHelper.parseInt((args[args.length - 2]));
                        var endIndexOfMatched = startIndexOfMatched + args[0].length;
                        var hasOpenBracket = (startIndexOfMatched > 0 && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })("(", (regexp.charAt(startIndexOfMatched - 1)))) || (startIndexOfMatched > 2 && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })("(?:", (regexp.substr(startIndexOfMatched - 3, 3))));
                        var hasCloseBracket = regexp.length > endIndexOfMatched && (function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(")", (regexp.charAt(endIndexOfMatched)));
                        if (hasOpenBracket && hasCloseBracket) {
                            return args[1] + args[2];
                        }
                        return args[1] + "(?:" + args[2] + ")";
                    }))));
                    try {
                        return new Pattern(new RegExp(regexpString, jsFlags), flags, namedGroupsNames);
                    }
                    catch (e) {
                        throw new java.util.regex.PatternSyntaxException(e, regexpString);
                    }
                    ;
                };
                Pattern.compile = function (regexpString, flags) {
                    if (((typeof regexpString === 'string') || regexpString === null) && ((typeof flags === 'number') || flags === null)) {
                        return java.util.regex.Pattern.compile$java_lang_String$int(regexpString, flags);
                    }
                    else if (((typeof regexpString === 'string') || regexpString === null) && flags === undefined) {
                        return java.util.regex.Pattern.compile$java_lang_String(regexpString);
                    }
                    else
                        throw new Error('invalid overload');
                };
                Pattern.prototype.flags = function () {
                    return this._flags;
                };
                Pattern.prototype.matcher = function (sequence) {
                    return new java.util.regex.Matcher(this, sequence.toString());
                };
                Pattern.matches = function (regex, input) {
                    return Pattern.compile$java_lang_String(regex).matcher(input).matches();
                };
                Pattern.prototype.pattern = function () {
                    return this.regexp.source;
                };
                Pattern.quote = function (s) {
                    return JSON.stringify(s);
                };
                Pattern.prototype.split = function (input, limit) {
                    if (limit === void 0) { limit = 0; }
                    return ((input.toString()).split(this.regexp, limit).toArray());
                };
                Pattern.prototype.splitAsStream = function (input) {
                    return java.util.Arrays.stream(this.split(input));
                };
                /**
                 *
                 * @return {string}
                 */
                Pattern.prototype.toString = function () {
                    return this.pattern();
                };
                return Pattern;
            }());
            Pattern.CASE_INSENSITIVE = 2;
            Pattern.MULTILINE = 8;
            Pattern.UNICODE_CASE = 64;
            Pattern.UNICODE_CHARACTER_CLASS = 256;
            regex_1.Pattern = Pattern;
            Pattern["__class"] = "java.util.regex.Pattern";
            Pattern["__interfaces"] = ["java.io.Serializable"];
            (function (Pattern) {
                var GroupNameRemover = (function () {
                    function GroupNameRemover(namedGroupsNames) {
                        this.count = 0;
                        this.inBrackets = false;
                        if (this.namedGroupsNames === undefined)
                            this.namedGroupsNames = null;
                        this.namedGroupsNames = namedGroupsNames;
                    }
                    /**
                     *
                     * @param {Array} args
                     * @return {string}
                     */
                    GroupNameRemover.prototype.apply = function (args) {
                        if (this.inBrackets || args[2] !== undefined) {
                            this.inBrackets = args[2] === undefined || args[2].length === 1;
                            return args[0];
                        }
                        if (args[1] !== undefined) {
                            this.inBrackets = args[1].length === 0;
                            return args[0];
                        }
                        if (args[3] !== undefined && args[3].length !== 0) {
                            return args[0];
                        }
                        if (args[4] === undefined) {
                            this.count += 1;
                        }
                        if (args[5] !== undefined) {
                            this.namedGroupsNames.put((args[5]), this.count);
                            args[0] = args[0].replace(new RegExp("\\?<[^>]+>"), "");
                        }
                        return args[0];
                    };
                    return GroupNameRemover;
                }());
                Pattern.GroupNameRemover = GroupNameRemover;
                GroupNameRemover["__class"] = "java.util.regex.Pattern.GroupNameRemover";
                GroupNameRemover["__interfaces"] = ["java.util.function.Function"];
            })(Pattern = regex_1.Pattern || (regex_1.Pattern = {}));
        })(regex = util.regex || (util.regex = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (java) {
    var util;
    (function (util) {
        var regex;
        (function (regex) {
            var PatternSyntaxException = (function (_super) {
                __extends(PatternSyntaxException, _super);
                function PatternSyntaxException(desc, pattern, index) {
                    var _this = this;
                    if (((typeof desc === 'string') || desc === null) && ((typeof pattern === 'string') || pattern === null) && ((typeof index === 'number') || index === null)) {
                        var __args = arguments;
                        {
                            var __args_1 = arguments;
                            var throwable = PatternSyntaxException.createSyntaxError(desc, index);
                            _this = _super.call(this, throwable) || this;
                            if (_this.pattern === undefined)
                                _this.pattern = null;
                            Object.setPrototypeOf(_this, PatternSyntaxException.prototype);
                            if (_this.pattern === undefined)
                                _this.pattern = null;
                            (function () {
                                _this.pattern = pattern;
                            })();
                        }
                    }
                    else if (((desc != null && desc instanceof Error) || desc === null) && ((typeof pattern === 'string') || pattern === null) && index === undefined) {
                        var __args = arguments;
                        var throwable = __args[0];
                        _this = _super.call(this, throwable) || this;
                        if (_this.pattern === undefined)
                            _this.pattern = null;
                        Object.setPrototypeOf(_this, PatternSyntaxException.prototype);
                        if (_this.pattern === undefined)
                            _this.pattern = null;
                        (function () {
                            _this.pattern = pattern;
                        })();
                    }
                    else
                        throw new Error('invalid overload');
                    return _this;
                }
                /*private*/ PatternSyntaxException.createSyntaxError = function (desc, index) {
                    var syntaxError = new SyntaxError(desc);
                    (syntaxError)["columnNumber"] = index;
                    return syntaxError;
                };
                PatternSyntaxException.prototype.getIndex = function () {
                    return ((null)["columnNumber"]);
                };
                PatternSyntaxException.prototype.getDescription = function () {
                    return this.message;
                };
                PatternSyntaxException.prototype.getPattern = function () {
                    return this.pattern;
                };
                /**
                 *
                 * @return {string}
                 */
                PatternSyntaxException.prototype.getMessage = function () {
                    return this.getDescription() + " Pattern: " + this.pattern;
                };
                return PatternSyntaxException;
            }(java.lang.IllegalArgumentException));
            regex.PatternSyntaxException = PatternSyntaxException;
            PatternSyntaxException["__class"] = "java.util.regex.PatternSyntaxException";
            PatternSyntaxException["__interfaces"] = ["java.io.Serializable"];
        })(regex = util.regex || (util.regex = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (java) {
    var util;
    (function (util) {
        var stream;
        (function (stream) {
            var Collector;
            (function (Collector) {
                var Characteristics;
                (function (Characteristics) {
                })(Characteristics = Collector.Characteristics || (Collector.Characteristics = {}));
            })(Collector = stream.Collector || (stream.Collector = {}));
        })(stream = util.stream || (util.stream = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (java) {
    var util;
    (function (util) {
        var stream;
        (function (stream) {
            var Collectors = (function () {
                function Collectors() {
                }
                Collectors.throwingMerger = function () {
                    return function (u, v) {
                        throw new java.lang.IllegalStateException(javaemul.internal.StringHelper.format("Duplicate key %s", u));
                    };
                };
                Collectors.toList = function () {
                    return (new Collectors.CollectorImpl(function () { return new java.util.ArrayList(); }, function (l, i) { return l.add(i); }, function (left, right) {
                        left.addAll(right);
                        return left;
                    }));
                };
                Collectors.toSet = function () {
                    return (new Collectors.CollectorImpl(function () { return new java.util.HashSet(); }, function (s, i) { return s.add(i); }, function (left, right) {
                        left.addAll(right);
                        return left;
                    }));
                };
                Collectors.toMap$java_util_function_Function$java_util_function_Function = function (keyMapper, valueMapper) {
                    return Collectors.toMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator$java_util_function_Supplier((keyMapper), (valueMapper), (Collectors.throwingMerger()), function () { return new java.util.HashMap(); });
                };
                Collectors.toMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator = function (keyMapper, valueMapper, mergeFunction) {
                    return Collectors.toMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator$java_util_function_Supplier((keyMapper), (valueMapper), (mergeFunction), function () { return new java.util.HashMap(); });
                };
                Collectors.toMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator$java_util_function_Supplier = function (keyMapper, valueMapper, mergeFunction, mapSupplier) {
                    var accumulator = function (map, element) { return map.merge((function (target) { return (typeof target === 'function') ? target(element) : target.apply(element); })(keyMapper), (function (target) { return (typeof target === 'function') ? target(element) : target.apply(element); })(valueMapper), (mergeFunction)); };
                    return (new Collectors.CollectorImpl((mapSupplier), (accumulator), (Collectors.mapMerger((mergeFunction)))));
                };
                Collectors.toMap = function (keyMapper, valueMapper, mergeFunction, mapSupplier) {
                    if (((typeof keyMapper === 'function' && keyMapper.length == 1) || keyMapper === null) && ((typeof valueMapper === 'function' && valueMapper.length == 1) || valueMapper === null) && ((typeof mergeFunction === 'function' && mergeFunction.length == 2) || mergeFunction === null) && ((typeof mapSupplier === 'function' && mapSupplier.length == 0) || mapSupplier === null)) {
                        return java.util.stream.Collectors.toMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator$java_util_function_Supplier(keyMapper, valueMapper, mergeFunction, mapSupplier);
                    }
                    else if (((typeof keyMapper === 'function' && keyMapper.length == 1) || keyMapper === null) && ((typeof valueMapper === 'function' && valueMapper.length == 1) || valueMapper === null) && ((typeof mergeFunction === 'function' && mergeFunction.length == 2) || mergeFunction === null) && mapSupplier === undefined) {
                        return java.util.stream.Collectors.toMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator(keyMapper, valueMapper, mergeFunction);
                    }
                    else if (((typeof keyMapper === 'function' && keyMapper.length == 1) || keyMapper === null) && ((typeof valueMapper === 'function' && valueMapper.length == 1) || valueMapper === null) && mergeFunction === undefined && mapSupplier === undefined) {
                        return java.util.stream.Collectors.toMap$java_util_function_Function$java_util_function_Function(keyMapper, valueMapper);
                    }
                    else
                        throw new Error('invalid overload');
                };
                Collectors.mapMerger = function (mergeFunction) {
                    return function (m1, m2) {
                        for (var index338 = m2.entrySet().iterator(); index338.hasNext();) {
                            var e = index338.next();
                            m1.merge(e.getKey(), e.getValue(), (mergeFunction));
                        }
                        return m1;
                    };
                };
                return Collectors;
            }());
            stream.Collectors = Collectors;
            Collectors["__class"] = "java.util.stream.Collectors";
            (function (Collectors) {
                var CollectorImpl = (function () {
                    function CollectorImpl(supplier, accumulator, combiner) {
                        if (this.__supplier === undefined)
                            this.__supplier = null;
                        if (this.__accumulator === undefined)
                            this.__accumulator = null;
                        if (this.__combiner === undefined)
                            this.__combiner = null;
                        this.__supplier = (supplier);
                        this.__accumulator = (accumulator);
                        this.__combiner = (combiner);
                    }
                    /**
                     *
                     * @return {*}
                     */
                    CollectorImpl.prototype.accumulator = function () {
                        return (this.__accumulator);
                    };
                    /**
                     *
                     * @return {*}
                     */
                    CollectorImpl.prototype.supplier = function () {
                        return (this.__supplier);
                    };
                    CollectorImpl.prototype.combiner = function () {
                        throw new java.lang.IllegalStateException();
                    };
                    CollectorImpl.prototype.finisher = function () {
                        throw new java.lang.IllegalStateException();
                    };
                    CollectorImpl.prototype.characteristics = function () {
                        throw new java.lang.IllegalStateException();
                    };
                    return CollectorImpl;
                }());
                Collectors.CollectorImpl = CollectorImpl;
                CollectorImpl["__class"] = "java.util.stream.Collectors.CollectorImpl";
                CollectorImpl["__interfaces"] = ["java.util.stream.Collector"];
            })(Collectors = stream.Collectors || (stream.Collectors = {}));
        })(stream = util.stream || (util.stream = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (java) {
    var util;
    (function (util) {
        var stream;
        (function (stream) {
            var IntStream;
            (function (IntStream) {
                function range(startInclusive, endExclusive) {
                    if (startInclusive >= endExclusive) {
                        return java.util.Collections.emptyList().stream();
                    }
                    else {
                        var result = (new java.util.ArrayList());
                        for (; startInclusive < endExclusive; ++startInclusive) {
                            {
                                result.add(startInclusive);
                            }
                            ;
                        }
                        return result.stream();
                    }
                }
                IntStream.range = range;
            })(IntStream = stream.IntStream || (stream.IntStream = {}));
        })(stream = util.stream || (util.stream = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (java) {
    var util;
    (function (util) {
        var stream;
        (function (stream) {
            var Stream;
            (function (Stream) {
                function of() {
                    var values = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        values[_i] = arguments[_i];
                    }
                    return java.util.Arrays.asList.apply(null, values).stream();
                }
                Stream.of = of;
            })(Stream = stream.Stream || (stream.Stream = {}));
        })(stream = util.stream || (util.stream = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
var org;
(function (org) {
    var apache;
    (function (apache) {
        var commons;
        (function (commons) {
            var lang3;
            (function (lang3) {
                var builder;
                (function (builder) {
                    var EqualsBuilder = (function () {
                        function EqualsBuilder() {
                        }
                        EqualsBuilder.prototype.append$java_lang_String$java_lang_String = function (repositoryIndex, repositoryIndex2) {
                            return this;
                        };
                        EqualsBuilder.prototype.append = function (repositoryIndex, repositoryIndex2) {
                            if (((typeof repositoryIndex === 'string') || repositoryIndex === null) && ((typeof repositoryIndex2 === 'string') || repositoryIndex2 === null)) {
                                return this.append$java_lang_String$java_lang_String(repositoryIndex, repositoryIndex2);
                            }
                            else if (((repositoryIndex != null) || repositoryIndex === null) && ((repositoryIndex2 != null) || repositoryIndex2 === null)) {
                                return this.append$java_lang_Object$java_lang_Object(repositoryIndex, repositoryIndex2);
                            }
                            else
                                throw new Error('invalid overload');
                        };
                        EqualsBuilder.prototype.append$java_lang_Object$java_lang_Object = function (repositoryIndex, repositoryIndex2) {
                            return this;
                        };
                        EqualsBuilder.prototype.build = function () {
                            return false;
                        };
                        EqualsBuilder.prototype.isEquals = function () {
                            return false;
                        };
                        return EqualsBuilder;
                    }());
                    builder.EqualsBuilder = EqualsBuilder;
                    EqualsBuilder["__class"] = "org.apache.commons.lang3.builder.EqualsBuilder";
                })(builder = lang3.builder || (lang3.builder = {}));
            })(lang3 = commons.lang3 || (commons.lang3 = {}));
        })(commons = apache.commons || (apache.commons = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var commons;
        (function (commons) {
            var lang3;
            (function (lang3) {
                var builder;
                (function (builder) {
                    var HashCodeBuilder = (function () {
                        function HashCodeBuilder() {
                        }
                        HashCodeBuilder.prototype.append$java_lang_String = function (repositoryIndex) {
                            return this;
                        };
                        HashCodeBuilder.prototype.append = function (repositoryIndex) {
                            if (((typeof repositoryIndex === 'string') || repositoryIndex === null)) {
                                return this.append$java_lang_String(repositoryIndex);
                            }
                            else if (((typeof repositoryIndex === 'number') || repositoryIndex === null)) {
                                return this.append$long(repositoryIndex);
                            }
                            else if (((repositoryIndex != null) || repositoryIndex === null)) {
                                return this.append$java_lang_Object(repositoryIndex);
                            }
                            else
                                throw new Error('invalid overload');
                        };
                        HashCodeBuilder.prototype.build = function () {
                            return 0;
                        };
                        HashCodeBuilder.prototype.toHashCode = function () {
                            return 0;
                        };
                        HashCodeBuilder.prototype.append$long = function (mUTCMillis) {
                            return this;
                        };
                        HashCodeBuilder.prototype.append$java_lang_Object = function (mUTCMillis) {
                            return this;
                        };
                        return HashCodeBuilder;
                    }());
                    builder.HashCodeBuilder = HashCodeBuilder;
                    HashCodeBuilder["__class"] = "org.apache.commons.lang3.builder.HashCodeBuilder";
                })(builder = lang3.builder || (lang3.builder = {}));
            })(lang3 = commons.lang3 || (commons.lang3 = {}));
        })(commons = apache.commons || (apache.commons = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var commons;
        (function (commons) {
            var lang3;
            (function (lang3) {
                var StringEscapeUtils = (function () {
                    function StringEscapeUtils() {
                    }
                    StringEscapeUtils.unescapeJava = function (group) {
                        return group;
                    };
                    return StringEscapeUtils;
                }());
                lang3.StringEscapeUtils = StringEscapeUtils;
                StringEscapeUtils["__class"] = "org.apache.commons.lang3.StringEscapeUtils";
            })(lang3 = commons.lang3 || (commons.lang3 = {}));
        })(commons = apache.commons || (apache.commons = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var commons;
        (function (commons) {
            var lang3;
            (function (lang3) {
                var NotImplementedException = (function (_super) {
                    __extends(NotImplementedException, _super);
                    function NotImplementedException(string) {
                        var _this = _super.call(this, string) || this;
                        Object.setPrototypeOf(_this, NotImplementedException.prototype);
                        return _this;
                    }
                    return NotImplementedException;
                }(java.lang.SecurityException));
                lang3.NotImplementedException = NotImplementedException;
                NotImplementedException["__class"] = "org.apache.commons.lang3.NotImplementedException";
                NotImplementedException["__interfaces"] = ["java.io.Serializable"];
            })(lang3 = commons.lang3 || (commons.lang3 = {}));
        })(commons = apache.commons || (apache.commons = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
//# sourceMappingURL=bundle.js.map