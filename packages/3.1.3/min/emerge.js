/*!
* Qoopido.js library package
*
* version: 3.1.3
* date:    2013-11-12
* author:  Dirk Lueth <info@qoopido.com>
* website: https://github.com/dlueth/qoopido.js
*
* Copyright (c) 2013 Dirk Lueth
*
* Dual licensed under the MIT and GPL licenses.
*  - http://www.opensource.org/licenses/mit-license.php
*  - http://www.gnu.org/copyleft/gpl.html
*/
(function(t){window.qoopido.register("polyfill/object/defineproperty",t)})(function(){"use strict";if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}()){var t=Object.defineProperty,e=Object.prototype.__defineGetter__,n=Object.prototype.__defineSetter__;Object.defineProperty=function(r,i,o){if(t)try{return t(r,i,o)}catch(s){}if(r!==Object(r))throw new TypeError("Object.defineProperty called on non-object");return e&&"get"in o&&e.call(r,i,o.get),n&&"set"in o&&n.call(r,i,o.set),"value"in o&&(r[i]=o.value),r}}return!0});
(function(t){var e=[];Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}()||e.push("./defineproperty"),window.qoopido.register("polyfill/object/defineproperties",t,e)})(function(){"use strict";return Object.defineProperties||(Object.defineProperties=function(t,e){if(t!==Object(t))throw new TypeError("Object.defineProperties called on non-object");var n;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&Object.defineProperty(t,n,e[n]);return t}),!0});
(function(t){var e=[];Object.defineProperties||e.push("./defineproperties"),window.qoopido.register("polyfill/object/create",t,e)})(function(){"use strict";return Object.create||(Object.create=function(t,e){function n(){}if("object"!=typeof t)throw new TypeError;n.prototype=t;var r=new n;if(t&&(r.constructor=n),arguments.length>1){if(e!==Object(e))throw new TypeError;Object.defineProperties(r,e)}return r}),!0});
(function(t){window.qoopido.register("polyfill/object/getownpropertydescriptor",t)})(function(){"use strict";if(!Object.getOwnPropertyDescriptor||!function(){try{return Object.getOwnPropertyDescriptor({x:0},"x"),!0}catch(t){return!1}}()){var t=Object.getOwnPropertyDescriptor;Object.getOwnPropertyDescriptor=function(e,n){if(e!==Object(e))throw new TypeError;try{return t.call(Object,e,n)}catch(r){}return Object.prototype.hasOwnProperty.call(e,n)?{value:e[n],enumerable:!0,writable:!0,configurable:!0}:undefined}}return!0});
(function(e,t,r,n,o){"use strict";function c(e,c,i,u){var p,d=e.split("/");return f[e]?f[e]:(p=function(){if(i){var p,g,y=d.slice(0,-1).join("/");for(p=0;(g=i[p])!==o;p++)l.test(g)&&(g=s(y+"/"+g)),!f[g]&&arguments[p]&&(f[g]=arguments[p]),f[g]||"undefined"==typeof console||console.error("".concat("[Qoopido.js] ",e,": Could not load dependency ",g))}return f[e]=c(f,a,d,t,r,n,o),u&&u(f[e]),f[e]},"function"==typeof define&&define.amd?i?define(i,p):define(p):p(),o)}function i(e,t,r){c(e,t,r,function(t){f[e]=t.create()})}function s(e){for(var t;(t=e.replace(g,""))!==e;)e=t;return e.replace(y,"")}var u="qoopido",p=r[u]=r[u]||{register:c,registerSingleton:i},a=p.shared=p.shared||{},f=p.modules=p.modules||{},d=[],l=RegExp("^\\.+\\/"),g=RegExp("(?:\\/|)[^\\/]*\\/\\.\\."),y=RegExp("(^\\/)|\\.\\/","g");Object.create||d.push("./polyfill/object/create"),Object.getOwnPropertyNames||d.push("./polyfill/object/getownpropertynames"),Object.getOwnPropertyDescriptor&&function(){try{return Object.getOwnPropertyDescriptor({x:0},"x"),!0}catch(e){return!1}}()||d.push("./polyfill/object/getownpropertydescriptor"),c("base",e,d)})(function(e,t,r,n,o,c,i){"use strict";function s(e){var t,r,n={},o=Object.getOwnPropertyNames(e);for(t=0;(r=o[t])!==i;t++)n[r]=Object.getOwnPropertyDescriptor(e,r);return n}return{create:function(){var e,t=Object.create(this,s(this));return t._constructor&&(e=t._constructor.apply(t,arguments)),t.create=t.extend=i,e||t},extend:function(e){return e=e||{},e._parent=this,Object.create(this,s(e))}}},navigator,window,document);
(function(t){window.qoopido.register("proxy",t,["./function/unique/uuid"])})(function(t){"use strict";return t.base.extend({_constructor:function(e,n){var r=Array.prototype.splice.call(arguments,2),o=function(){return n.apply(e,Array.prototype.slice.call(arguments,0).concat(r))};return o._quid=t["function/unique/uuid"](),o}})});
(function(t){var e=["../proxy"];window.getComputedStyle||e.push("../polyfill/window/getcomputedstyle"),window.qoopido.register("dom/element",t,e)})(function(t,e,n,r,i,o,a){"use strict";function s(t){return t.target||(t.target=t.srcElement||o),3===t.target.nodeType&&(t.target=t.target.parentNode),!t.relatedTarget&&t.fromElement&&(t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement),t}var l,u,c,f="object",p="string";return l=i.addEventListener?function(t,e){var n=this,r=n.element,i="".concat("listener[",t,"][",e._quid||e,"]");r[i]=function(t){e.call(this,s(t))},r.addEventListener(t,r[i],!1)}:function(t,e){var n=this,r=n.element,o="".concat("listener[",t,"][",e._quid||e,"]");r[o]=function(){e.call(this,s(i.event))},r["on"+t]!==a?r.attachEvent("on"+t,r[o]):(t="".concat("fake[",t,"]"),r[t]=null,r.attachEvent("onpropertychange",function(n){n.propertyName===t&&e.call(this,s(r[t]))}))},u=i.removeEventListener?function(t,e){var n=this,r=n.element,i="".concat("listener[",t,"][",e._quid||e,"]");r.removeEventListener(t,r[i],!1),delete r[i]}:function(t,e){var n=this,r=n.element,i="".concat("listener[",t,"][",e._quid||e,"]");r.detachEvent("on"+t,r[i]),delete r[i]},c=o.createEvent?function(t,e){var n=this,r=n.element,i=o.createEvent("HTMLEvents");i.initEvent(t,!0,!0),i.data=e,r.dispatchEvent(i)}:function(t,e){var n=this,r=n.element,i=o.createEventObject();i.type=i.eventType=t,i.data=e;try{r.fireEvent("on"+i.eventType,i)}catch(s){var l="".concat("fake[",t,"]");r[l]!==a&&(r[l]=i)}},t.base.extend({type:null,element:null,listener:null,_constructor:function(t){var e=this;if(!t)throw Error("Missing element argument");e.type=t.tagName,e.element=t,e.listener={}},getAttribute:function(t){if(t&&typeof t===p){var e=this;return t=t.split(" "),1===t.length?e.element.getAttribute(t[0]):e.getAttributes(t)}},getAttributes:function(t){var e=this,n={};if(t&&(t=typeof t===p?t.split(" "):t,typeof t===f&&t.length)){var r,i;for(r=0;(i=t[r])!==a;r++)n[i]=e.element.getAttributes(i)}return n},setAttribute:function(t,e){var n=this;return t&&typeof t===p&&n.element.setAttribute(t,e),n},setAttributes:function(t){var e=this;if(t&&typeof t===f&&!t.length){var n;for(n in t)e.element.setAttribute(n,t[n])}return e},removeAttribute:function(t){var e=this;return t&&typeof t===p&&(t=t.split(" "),1===t.length?e.element.removeAttribute(t[0]):e.removeAttributes(t)),e},removeAttributes:function(t){var e=this;if(t&&(t=typeof t===p?t.split(" "):t,typeof t===f&&t.length)){var n,r;for(n=0;(r=t[n])!==a;n++)e.element.removeAttribute(r)}return e},getStyle:function(t){if(t&&typeof t===p){var e=this;return t=t.split(" "),1===t.length?i.getComputedStyle(e.element,null).getPropertyValue(t[0]):e.getStyles(t)}},getStyles:function(t){var e=this,n={};if(t&&(t=typeof t===p?t.split(" "):t,typeof t===f&&t.length)){var r,o;for(r=0;(o=t[r])!==a;r++)n[o]=i.getComputedStyle(e.element,null).getPropertyValue(o)}return n},setStyle:function(t,e){var n=this;return t&&typeof t===p&&(n.element.style[t]=e),n},setStyles:function(t){var e=this;if(t&&typeof t===f&&!t.length){var n;for(n in t)e.element.style[n]=t[n]}return e},isVisible:function(){var t=this.element;return!(0>=t.offsetWidth&&0>=t.offsetHeight)},on:function(t,e){var n,r,i=this;for(t=t.split(" "),n=0;(r=t[n])!==a;n++)(i.listener[r]=i.listener[r]||[]).push(e),l.call(i,r,e);return i},one:function(e,n,r){r=r!==!1;var i=this,o=t.proxy.create(i,function(t){i.off(r===!0?t.type:e,o),n.call(i,t)});return i.on(e,o),i},off:function(t,e){var n,r,i,o,s=this;if(t)for(t=t.split(" "),n=0;(r=t[n])!==a;n++)if(s.listener[r]=s.listener[r]||[],e)for(i=0;(o=s.listener[r][i])!==a;i++)o===e&&(s.listener[r].splice(i,1),u.call(s,r,o),i--);else for(;s.listener[r].length>0;)u.call(s,r,s.listener[r].pop());else for(r in s.listener)for(;s.listener[r].length>0;)u.call(s,r,s.listener[r].pop());return s},emit:function(t,e){var n=this;return c.call(n,t,e),n}})});
(function(t){window.qoopido.register("function/merge",t)})(function(t,e,n,r,i,o,a){"use strict";return function l(){var t,e,n,r,i,o=arguments[0];for(t=1;(e=arguments[t])!==a;t++)for(n in e)r=o[n],i=e[n],i!==a&&(null!==i&&"object"==typeof i?(r=i.length!==a?r&&"object"==typeof r&&r.length!==a?r:[]:r&&"object"==typeof r&&r.length===a?r:{},o[n]=l(r,i)):o[n]=i);return o}});
(function(t){window.qoopido.register("function/unique/uuid",t)})(function(){"use strict";function t(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(n,function(t){var e=0|16*Math.random(),n="x"===t?e:8|3&e;return n.toString(16)})}var e={},n=RegExp("[xy]","g");return function(){var n;do n=t();while(e[n]!==undefined);return e[n]=!0,n}});
(function(t){window.qoopido.register("dom/element/emerge",t,["../element","../../function/merge","../../function/unique/uuid"])})(function(t,e,n,r,i,o,l){"use strict";function s(t){var e,n=v[t];for(e in n)"length"!==e&&c.call(n[e]);0===n.length&&(i.element.clearInterval(m[t]),delete m[t])}function a(){d.left=0,d.top=0,d.right=h.clientWidth,d.bottom=h.clientHeight}function u(){var t=this,e=t._settings.threshold||h.clientWidth*t._settings.auto,n=t._settings.threshold||h.clientHeight*t._settings.auto;t._viewport.left=d.left-e,t._viewport.top=d.top-n,t._viewport.right=d.right+e,t._viewport.bottom=d.bottom+n}function c(){var t,e=this,n=!1,r=2;!e.isVisible()||"hidden"===e.getStyle("visibility")&&e._settings.visibility!==!1||(t=e.element.getBoundingClientRect(),(t.left>=e._viewport.left&&t.top>=e._viewport.top&&t.left<=e._viewport.right&&t.top<=e._viewport.bottom||t.right>=e._viewport.left&&t.bottom>=e._viewport.top&&t.right<=e._viewport.right&&t.bottom<=e._viewport.bottom)&&((t.left>=d.left&&t.top>=d.top&&t.left<=d.right&&t.top<=d.bottom||t.right>=d.left&&t.bottom>=d.top&&t.right<=d.right&&t.bottom<=d.bottom)&&(r=1),n=!0)),(n!==e._state||n===!0&&r!==e._priority)&&f.call(e,n,r)}function f(t,e){var n=this;n._state=t,n._priority=e,n._settings.recur!==!0&&n.remove(),t===!0?n.emit(_,e):n.emit(y)}var p,g={interval:50,threshold:"auto",recur:!0,auto:.5,visibility:!0},h=i.document.documentElement,d={},m={},v={},_="emerged",y="demerged",b="resize orientationchange";if(i=t["dom/element"].create(i),"CSS1Compat"!==o.compatMode)throw"This script requires your browser to work in standards mode";return p=t["dom/element"].extend({_quid:null,_viewport:null,_element:null,_settings:null,_state:null,_priority:null,_constructor:function(e,n){var r=this;p._parent._constructor.call(r,e),n=t["function/merge"]({},g,n||{}),"auto"===n.threshold&&delete n.threshold,m[n.interval]===l&&(v[n.interval]=v[n.interval]||{length:0},m[n.interval]=i.element.setInterval(function(){s(n.interval)},n.interval)),r._quid=t["function/unique/uuid"](),r._viewport={},r._settings=n,r._state=!1,r._priority=2,v[n.interval][r._quid]=r,v[n.interval].length++,i.on(b,function(){u.call(r)}),u.call(r)},remove:function(){var t=this;delete v[t._settings.interval][t._quid],v[t._settings.interval].length--}}),i.on(b,a),a(),p});