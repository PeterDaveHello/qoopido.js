/*!
* Qoopido.js library
*
* version: 3.6.7
* date:    2015-07-08
* author:  Dirk Lueth <info@qoopido.com>
* website: https://github.com/dlueth/qoopido.js
*
* Copyright (c) 2015 Dirk Lueth
*/
(function(definition, qoopido) {
    if (qoopido.register) {
        qoopido.register("polyfill/object/defineproperty", definition);
    } else {
        (qoopido.modules = qoopido.modules || {})["polyfill/object/defineproperty"] = definition();
    }
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    if (!Object.defineProperty || !function() {
        try {
            Object.defineProperty({}, "x", {});
            return true;
        } catch (exception) {
            return false;
        }
    }()) {
        var defineProperty = Object.defineProperty, defineGetter = Object.prototype.__defineGetter__, defineSetter = Object.prototype.__defineSetter__;
        Object.defineProperty = function(obj, prop, desc) {
            if (defineProperty) {
                try {
                    return defineProperty(obj, prop, desc);
                } catch (exception) {}
            }
            if (obj !== Object(obj)) {
                throw new TypeError("Object.defineProperty called on non-object");
            }
            if (defineGetter && "get" in desc) {
                defineGetter.call(obj, prop, desc.get);
            }
            if (defineSetter && "set" in desc) {
                defineSetter.call(obj, prop, desc.set);
            }
            if ("value" in desc) {
                obj[prop] = desc.value;
            }
            return obj;
        };
    }
    return Object.defineProperty;
}, window.qoopido = window.qoopido || {});
(function(definition, qoopido) {
    if (qoopido.register) {
        var dependencies = [];
        if (!Object.defineProperty || !function() {
            try {
                Object.defineProperty({}, "x", {});
                return true;
            } catch (exception) {
                return false;
            }
        }()) {
            dependencies.push("./defineproperty");
        }
        qoopido.register("polyfill/object/defineproperties", definition, dependencies);
    } else {
        (qoopido.modules = qoopido.modules || {})["polyfill/object/defineproperties"] = definition();
    }
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    if (!Object.defineProperties) {
        Object.defineProperties = function(obj, properties) {
            if (obj !== Object(obj)) {
                throw new TypeError("Object.defineProperties called on non-object");
            }
            var name;
            for (name in properties) {
                if (Object.prototype.hasOwnProperty.call(properties, name)) {
                    Object.defineProperty(obj, name, properties[name]);
                }
            }
            return obj;
        };
    }
    return Object.defineProperties;
}, window.qoopido = window.qoopido || {});
(function(definition, qoopido) {
    if (qoopido.register) {
        var dependencies = [];
        if (!Object.defineProperties) {
            dependencies.push("./defineproperties");
        }
        qoopido.register("polyfill/object/create", definition, dependencies);
    } else {
        (qoopido.modules = qoopido.modules || {})["polyfill/object/create"] = definition();
    }
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    if (!Object.create) {
        Object.create = function(prototype, properties) {
            if (typeof prototype !== "object") {
                throw new TypeError();
            }
            function Constructor() {}
            Constructor.prototype = prototype;
            var obj = new Constructor();
            if (prototype) {
                obj.constructor = Constructor;
            }
            if (arguments.length > 1) {
                if (properties !== Object(properties)) {
                    throw new TypeError();
                }
                Object.defineProperties(obj, properties);
            }
            return obj;
        };
    }
    return Object.create;
}, window.qoopido = window.qoopido || {});
(function(definition, qoopido) {
    if (qoopido.register) {
        qoopido.register("polyfill/object/getownpropertynames", definition);
    } else {
        (qoopido.modules = qoopido.modules || {})["polyfill/object/getownpropertynames"] = definition();
    }
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    if (!Object.getOwnPropertyNames) {
        Object.getOwnPropertyNames = function(obj) {
            if (obj !== Object(obj)) {
                throw new TypeError("Object.getOwnPropertyNames called on non-object");
            }
            var props = [], p;
            for (p in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, p)) {
                    props.push(p);
                }
            }
            return props;
        };
    }
    return Object.getOwnPropertyNames;
}, window.qoopido = window.qoopido || {});
(function(definition, qoopido) {
    if (qoopido.register) {
        qoopido.register("polyfill/object/getownpropertydescriptor", definition);
    } else {
        (qoopido.modules = qoopido.modules || {})["polyfill/object/getownpropertydescriptor"] = definition();
    }
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    if (!Object.getOwnPropertyDescriptor || !function() {
        try {
            Object.getOwnPropertyDescriptor({
                x: 0
            }, "x");
            return true;
        } catch (exception) {
            return false;
        }
    }()) {
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        Object.getOwnPropertyDescriptor = function(obj, property) {
            if (obj !== Object(obj)) {
                throw new TypeError();
            }
            try {
                return getOwnPropertyDescriptor.call(Object, obj, property);
            } catch (exception) {}
            if (Object.prototype.hasOwnProperty.call(obj, property)) {
                return {
                    value: obj[property],
                    enumerable: true,
                    writable: true,
                    configurable: true
                };
            }
        };
    }
    return Object.getOwnPropertyDescriptor;
}, window.qoopido = window.qoopido || {});
(function(definition, global, navigator, window, document, undefined) {
    "use strict";
    function register(id, definition, dependencies, callback) {
        var namespace = id.split("/"), initialize;
        if (modules[id]) {
            return modules[id];
        }
        initialize = function() {
            if (dependencies) {
                var path = namespace.slice(0, -1).join("/"), i = 0, dependency, internal;
                for (;(dependency = dependencies[i]) !== undefined; i++) {
                    internal = isInternal.test(dependency);
                    if (internal) {
                        dependency = canonicalize(path + "/" + dependency);
                    }
                    if (!modules[dependency] && arguments[i]) {
                        modules[dependency] = arguments[i];
                    }
                    if (internal && !modules[dependency] && typeof console !== "undefined") {
                        console.error("".concat("[Qoopido.js] ", id, ": Could not load dependency ", dependency));
                    }
                }
            }
            modules[id] = definition(modules, shared, namespace, navigator, window, document, undefined);
            if (callback) {
                callback(modules[id]);
            }
            return modules[id];
        };
        if (typeof module !== "undefined" && module.exports) {
            module.exports = define(initialize);
        } else if (typeof define === "function" && define.amd) {
            dependencies ? define(dependencies, initialize) : define(initialize);
        } else {
            initialize();
        }
    }
    function registerSingleton(id, definition, dependencies) {
        register(id, definition, dependencies, function(module) {
            modules[id] = module.create();
        });
    }
    var qoopido = global.qoopido || (global.qoopido = {
        register: register,
        registerSingleton: registerSingleton
    }), shared = qoopido.shared || (qoopido.shared = {}), modules = qoopido.modules || (qoopido.modules = {}), dependencies = [], isInternal = new RegExp("^\\.+\\/"), regexCanonicalize = new RegExp("(?:\\/|)[^\\/]*\\/\\.\\."), removeNeutral = new RegExp("(^\\/)|\\.\\/", "g");
    function canonicalize(path) {
        var collapsed;
        while ((collapsed = path.replace(regexCanonicalize, "")) !== path) {
            path = collapsed;
        }
        return path.replace(removeNeutral, "");
    }
    if (!Object.create) {
        dependencies.push("./polyfill/object/create");
    }
    if (!Object.getOwnPropertyNames) {
        dependencies.push("./polyfill/object/getownpropertynames");
    }
    if (!Object.getOwnPropertyDescriptor || !function() {
        try {
            Object.getOwnPropertyDescriptor({
                x: 0
            }, "x");
            return true;
        } catch (exception) {
            return false;
        }
    }()) {
        dependencies.push("./polyfill/object/getownpropertydescriptor");
    }
    register("base", definition, dependencies);
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    function getOwnPropertyDescriptors(object) {
        var descriptors = {}, properties = Object.getOwnPropertyNames(object), i = 0, property;
        for (;(property = properties[i]) !== undefined; i++) {
            descriptors[property] = Object.getOwnPropertyDescriptor(object, property);
        }
        return descriptors;
    }
    function prohibitCall() {
        throw new Error("[Qoopido.js] Operation prohibited");
    }
    return {
        create: function() {
            var instance = Object.create(this, getOwnPropertyDescriptors(this)), result;
            if (instance._constructor) {
                result = instance._constructor.apply(instance, arguments);
            }
            instance.create = instance.extend = prohibitCall;
            return result || instance;
        },
        extend: function(properties, final) {
            var instance;
            properties = properties || {};
            final = final === true;
            properties._parent = this;
            instance = Object.create(this, getOwnPropertyDescriptors(properties));
            if (final === true) {
                instance.extend = prohibitCall;
            }
            return instance;
        }
    };
}, this, navigator, window, document);
(function(definition) {
    window.qoopido.register("polyfill/window/getcomputedstyle", definition);
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    if (!window.getComputedStyle) {
        var getComputedStyleRegex = new RegExp("(\\-([a-z]){1})", "g"), getComputedStyleCallback = function() {
            return arguments[2].toUpperCase();
        };
        return function(element, pseudo) {
            var self = this;
            self.getPropertyValue = function(property) {
                if (property === "float") {
                    property = "styleFloat";
                }
                if (getComputedStyleRegex.test(property)) {
                    property = property.replace(getComputedStyleRegex, getComputedStyleCallback);
                }
                return element.currentStyle[property] || null;
            };
            return self;
        };
    } else {
        return window.getComputedStyle;
    }
});
(function(definition) {
    var dependencies = [];
    if (!window.getComputedStyle) {
        dependencies.push("polyfill/window/getcomputedstyle");
    }
    if (!Array.prototype.indexOf) {
        dependencies.push("../array/indexof");
    }
    window.qoopido.register("polyfill/window/matchmedia", definition, dependencies);
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    var identifier = "qoopidoPolyfillWindowMatchmedia", viewport = document.documentElement, queries = [], lookup = {}, features = {}, regex = {
        type: /\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,
        media: /^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/
    }, timeout;
    function detectFeatures() {
        var ww = window.innerWidth || viewport.clientWidth, wh = window.innerHeight || viewport.clientHeight, dw = window.screen.width, dh = window.screen.height, cd = window.screen.colorDepth, pr = window.devicePixelRatio;
        features["width"] = ww;
        features["height"] = wh;
        features["aspect-ratio"] = (ww / wh).toFixed(2);
        features["color"] = cd;
        features["color-index"] = Math.pow(2, cd);
        features["device-aspect-ratio"] = (dw / dh).toFixed(2);
        features["device-height"] = dh;
        features["device-width"] = dw;
        features["device-pixel-ratio"] = pr || 1;
        features["resolution"] = pr && pr * 96 || window.screen.deviceXDPI || 96;
        features["orientation"] = wh >= ww ? "portrait" : "landscape";
    }
    function createQuery(query) {
        var mql = {
            matches: false,
            media: query,
            addListener: function addListener(listener) {
                listener && listeners.push(listener);
            },
            removeListener: function removeListener(listener) {
                var i = 0, pointer;
                for (;(pointer = listeners[i]) !== undefined; i++) {
                    if (pointer === listener) {
                        listeners.splice(i, 1);
                    }
                }
            }
        }, index, listeners;
        if (query === "") {
            mql.matches = true;
        } else {
            mql.matches = checkQueryMatch(query);
        }
        queries.push({
            mql: mql,
            listeners: []
        });
        index = queries.length - 1;
        lookup[query] = index;
        listeners = queries[index].listeners;
        return mql;
    }
    function checkQueryMatch(query) {
        var mql = query.indexOf(",") !== -1 && query.split(",") || [ query ], mqIndex = mql.length - 1, mqLength = mqIndex, mq = null, negateType = null, negateTypeFound = "", negateTypeIndex = 0, negate = false, type = "", exprListStr = "", exprList = null, exprIndex = 0, exprLength = 0, expr = null, prefix = "", length = "", unit = "", value = "", feature = "", match = false;
        if (query === "") {
            return true;
        }
        do {
            mq = mql[mqLength - mqIndex];
            negate = false;
            negateType = mq.match(regex.type);
            if (negateType) {
                negateTypeFound = negateType[0];
                negateTypeIndex = negateType.index;
            }
            if (!negateType || mq.substring(0, negateTypeIndex).indexOf("(") === -1 && (negateTypeIndex || !negateType[3] && negateTypeFound !== negateType.input)) {
                match = false;
                continue;
            }
            exprListStr = mq;
            negate = negateType[1] === "not";
            if (!negateTypeIndex) {
                type = negateType[2];
                exprListStr = mq.substring(negateTypeFound.length);
            }
            match = type === features.type || type === "all" || type === "";
            exprList = exprListStr.indexOf(" and ") !== -1 && exprListStr.split(" and ") || [ exprListStr ];
            exprIndex = exprList.length - 1;
            exprLength = exprIndex;
            if (match && exprIndex >= 0 && exprListStr !== "") {
                do {
                    expr = exprList[exprIndex].match(regex.media);
                    if (!expr || !features[expr[3]]) {
                        match = false;
                        break;
                    }
                    prefix = expr[2];
                    length = expr[5];
                    value = length;
                    unit = expr[7];
                    feature = features[expr[3]];
                    if (unit) {
                        if (unit === "px") {
                            value = Number(length);
                        } else if (unit === "em" || unit === "rem") {
                            value = 16 * length;
                        } else if (expr[8]) {
                            value = (length / expr[8]).toFixed(2);
                        } else if (unit === "dppx") {
                            value = length * 96;
                        } else if (unit === "dpcm") {
                            value = length * .3937;
                        } else {
                            value = Number(length);
                        }
                    }
                    if (prefix === "min-" && value) {
                        match = feature >= value;
                    } else if (prefix === "max-" && value) {
                        match = feature <= value;
                    } else if (value) {
                        match = feature === value;
                    } else {
                        match = !!feature;
                    }
                    if (!match) {
                        break;
                    }
                } while (exprIndex--);
            }
            if (match) {
                break;
            }
        } while (mqIndex--);
        return negate ? !match : match;
    }
    function delayedOnResize() {
        var match = false, i = 0, j = 0, query, listener;
        if (queries.length > 0) {
            detectFeatures();
            for (;(query = queries[i]) !== undefined; i++) {
                match = checkQueryMatch(query.mql.media);
                if (match && !query.mql.matches || !match && query.mql.matches) {
                    query.mql.matches = match;
                    if (query.listeners) {
                        for (;(listener = query.listeners[j]) !== undefined; j++) {
                            listener.call(window, query.mql);
                        }
                    }
                }
            }
        }
    }
    function delayOnResize() {
        window.clearTimeout(timeout);
        timeout = window.setTimeout(delayedOnResize, 10);
    }
    function initialize() {
        var target = window.document.getElementsByTagName("script")[0], style = document.createElement("style"), types = [ "screen", "print", "speech", "projection", "handheld", "tv", "braille", "embossed", "tty" ], cssText = "#" + identifier + " { position: relative; z-index: 0; }", prefix = "", addListener = window.addEventListener || (prefix = "on") && window.attachEvent, i = 0, pointer;
        style.type = "text/css";
        style.id = identifier;
        target.parentNode.insertBefore(style, target);
        for (;(pointer = types[i]) !== undefined; i++) {
            cssText += "@media " + pointer + " { #" + identifier + " { position: relative; z-index: " + i + " } }";
        }
        if (style.styleSheet) {
            style.styleSheet.cssText = cssText;
        } else {
            style.textContent = cssText;
        }
        features.type = types[(window.getComputedStyle || modules["polyfill/window/getcomputedstyle"])(style).zIndex * 1 || 0];
        style.parentNode.removeChild(style);
        addListener(prefix + "resize", delayOnResize);
        addListener(prefix + "orientationchange", delayOnResize);
    }
    if (!window.matchMedia) {
        initialize();
        detectFeatures();
        window.matchMedia = function(query) {
            var index = lookup[query] || false;
            if (index === false) {
                return createQuery(query);
            } else {
                return queries[index].mql;
            }
        };
    }
    return window.matchMedia;
});
(function(definition) {
    window.qoopido.register("emitter", definition, [ "./base" ]);
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    var excludeMethods = /^(_|extend$|create$|on$|one$|off$|emit$|get.+)/;
    function map(context, method) {
        var event = method.charAt(0).toUpperCase() + method.slice(1);
        context._mapped[method] = context[method];
        return function() {
            var args = Array.prototype.slice.call(arguments), returnValue;
            context.emit.apply(context, [ "pre" + event, args ]);
            returnValue = context._mapped[method].apply(context, args);
            context.emit.apply(context, [ "post" + event, args, returnValue ]);
            return returnValue;
        };
    }
    return modules["base"].extend({
        _mapped: null,
        _listener: null,
        _temp: null,
        _constructor: function() {
            var self = this, method;
            self._mapped = {};
            self._listener = {};
            for (method in self) {
                if (typeof self[method] === "function" && excludeMethods.test(method) === false) {
                    self[method] = map(self, method);
                }
            }
        },
        on: function(events, fn) {
            var self = this, i = 0, event;
            events = events.split(" ");
            for (;(event = events[i]) !== undefined; i++) {
                (self._listener[event] = self._listener[event] || []).push(fn);
            }
            return self;
        },
        one: function(events, fn, each) {
            each = each !== false;
            var self = this;
            self.on(events, function listener(event) {
                self.off(each === true ? event : events, listener);
                fn.apply(this, arguments);
            });
            return self;
        },
        off: function(events, fn) {
            var self = this, i = 0, event, j, listener;
            if (events) {
                events = events.split(" ");
                for (;(event = events[i]) !== undefined; i++) {
                    self._listener[event] = self._listener[event] || [];
                    if (fn) {
                        for (j = 0; (listener = self._listener[event][j]) !== undefined; j++) {
                            if (listener === fn) {
                                self._listener[event].splice(j, 1);
                                j--;
                            }
                        }
                    } else {
                        self._listener[event].length = 0;
                    }
                }
            } else {
                for (event in self._listener) {
                    self._listener[event].length = 0;
                }
            }
            return self;
        },
        emit: function(event) {
            var self = this, i = 0, listener;
            if (event !== undefined) {
                self._listener[event] = self._listener[event] || [];
                self._temp = self._listener[event].slice();
                for (;(listener = self._temp[i]) !== undefined; i++) {
                    listener.apply(self, arguments);
                }
                self._temp.length = 0;
            }
            return self;
        }
    });
});
(function(definition) {
    var dependencies = [ "../emitter" ];
    if (!window.matchMedia) {
        dependencies.push("../polyfill/window/matchmedia");
    }
    window.qoopido.register("component/sense", definition, dependencies);
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    var prototype, queries = {};
    function onQueryStateChange() {
        var self = this, mql = self.mql;
        if (mql.matches === true) {
            self.emit("matched");
        } else {
            self.emit("dematched");
        }
    }
    prototype = modules["emitter"].extend({
        mql: null,
        _constructor: function(query) {
            var self = this, mql = self.mql = queries[query] || (queries[query] = window.matchMedia(query)), listener = function() {
                onQueryStateChange.call(self);
            };
            prototype._parent._constructor.call(self);
            mql.addListener(listener);
            window.setTimeout(listener, 0);
        },
        matches: function() {
            return this.mql.matches;
        }
    });
    return prototype;
});