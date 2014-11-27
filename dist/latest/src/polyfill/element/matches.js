/*!
* Qoopido.js library
*
* version: 3.5.9
* date:    2014-10-27
* author:  Dirk Lueth <info@qoopido.com>
* website: https://github.com/dlueth/qoopido.js
*
* Copyright (c) 2014 Dirk Lueth
*
* Dual licensed under the MIT and GPL licenses.
* - http://www.opensource.org/licenses/mit-license.php
* - http://www.gnu.org/copyleft/gpl.html
*/
(function(definition) {
    var dependencies = [];
    if (!document.querySelectorAll) {
        dependencies.push("../document/queryselectorall");
    }
    window.qoopido.register("polyfill/elements/matches", definition, dependencies);
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    if (!Element.prototype.matches) {
        var prototype = Element.prototype;
        prototype.matches = prototype.matchesSelector = prototype.matchesSelector || prototype.webkitMatchesSelector || prototype.mozMatchesSelector || prototype.msMatchesSelector || prototype.oMatchesSelector || function(selector) {
            var elements = this.parentElement.querySelectorAll(selector), element, i = 0;
            while (element = elements[i++]) {
                if (element === this) {
                    return true;
                }
            }
            return false;
        };
    }
    return Element.prototype.matches;
});