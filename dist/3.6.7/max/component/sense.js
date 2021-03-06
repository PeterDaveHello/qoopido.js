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