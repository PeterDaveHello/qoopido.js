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
    window.qoopido.register("support/css/transform/3d", definition, [ "../../../support", "../transform" ]);
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    var support = modules["support"];
    return support.addTest("/css/transform/3d", function(deferred) {
        modules["support/css/transform"]().then(function() {
            var sample = support.pool ? support.pool.obtain("div") : document.createElement("div"), property = modules["support"].getCssProperty("transform");
            try {
                sample.style[property] = "translate3d(0,0,0)";
            } catch (exception) {}
            /translate3d/.test(sample.style[property]) ? deferred.resolve() : deferred.reject();
            sample.dispose && sample.dispose();
        }, function() {
            deferred.reject();
        });
    });
});