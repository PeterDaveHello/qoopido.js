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
    var dependencies = [];
    if (!window.Promise) {
        dependencies.push("../polyfill/window/promise");
    }
    window.qoopido.register("promise/defer", definition, dependencies);
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    return function defer() {
        var self = this;
        self.promise = new window.Promise(function(resolve, reject) {
            self.resolve = resolve;
            self.reject = reject;
        });
    };
});