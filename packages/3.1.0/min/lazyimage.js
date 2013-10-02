/*!
* Qoopido.js library package
*
* version: 3.1.0
* date:    2013-10-02
* author:  Dirk Lueth <info@qoopido.com>
* website: https://github.com/dlueth/qoopido.js
*
* Copyright (c) 2013 Dirk Lueth
*
* Dual licensed under the MIT and GPL licenses.
*  - http://www.opensource.org/licenses/mit-license.php
*  - http://www.gnu.org/copyleft/gpl.html
*/
(function(t){"use strict";"function"==typeof define&&define.amd?define(t):t()})(function(){"use strict";if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}()){var t=Object.defineProperty,e=Object.prototype.__defineGetter__,n=Object.prototype.__defineSetter__;Object.defineProperty=function(i,r,o){if(t)try{return t(i,r,o)}catch(a){}if(i!==Object(i))throw new TypeError("Object.defineProperty called on non-object");return e&&"get"in o&&e.call(i,r,o.get),n&&"set"in o&&n.call(i,r,o.set),"value"in o&&(i[r]=o.value),i}}});
(function(t){"use strict";if("function"==typeof define&&define.amd){var e=[];Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}()||e.push("./defineproperty"),define(e,t)}else t()})(function(){"use strict";Object.defineProperties||(Object.defineProperties=function(t,e){if(t!==Object(t))throw new TypeError("Object.defineProperties called on non-object");var n;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&Object.defineProperty(t,n,e[n]);return t})});
(function(t){"use strict";if("function"==typeof define&&define.amd){var e=[];Object.defineProperties||e.push("./defineproperties"),define(e,t)}else t()})(function(){"use strict";Object.create||(Object.create=function(t,e){function n(){}if("object"!=typeof t)throw new TypeError;n.prototype=t;var i=new n;if(t&&(i.constructor=n),arguments.length>1){if(e!==Object(e))throw new TypeError;Object.defineProperties(i,e)}return i})});
(function(t){"use strict";"function"==typeof define&&define.amd?define(t):t()})(function(){"use strict";if(!Object.getOwnPropertyDescriptor||!function(){try{return Object.getOwnPropertyDescriptor({x:0},"x"),!0}catch(t){return!1}}()){var t=Object.getOwnPropertyDescriptor;Object.getOwnPropertyDescriptor=function(e,n){if(e!==Object(e))throw new TypeError;try{return t.call(Object,e,n)}catch(i){}return Object.prototype.hasOwnProperty.call(e,n)?{value:e[n],enumerable:!0,writable:!0,configurable:!0}:void 0}}});
(function(e,t,r,n){"use strict";function c(e,c,o,i){var u=e.split("/");return s[e]?s[e]:(o=o?[].slice.call(o,0):[],s[e]=function(){return i===!0?c.call(null,s,o,u,t,r,n).create():c.call(null,s,o,u,t,r,n)}())}function o(){return c("base",e)}var i="qoopido",u=t[i]=t[i]||{initialize:c},s=(u.shared=u.shared||{},u.modules=u.modules||{});if("function"==typeof define&&define.amd){var a=[];Object.create||a.push("./polyfill/object/create"),Object.getOwnPropertyNames||a.push("./polyfill/object/getownpropertynames"),Object.getOwnPropertyDescriptor&&function(){try{return Object.getOwnPropertyDescriptor({x:0},"x"),!0}catch(e){return!1}}()||a.push("./polyfill/object/getownpropertydescriptor"),define(a,o)}else o()})(function(e,t,r,n,c,o){"use strict";function i(e){var t,r,n={},c=Object.getOwnPropertyNames(e);for(t=0;(r=c[t])!==o;t++)n[r]=Object.getOwnPropertyDescriptor(e,r);return n}return{create:function(){var e,t=Object.create(this,i(this));return t._constructor&&(e=t._constructor.apply(t,arguments)),t.create=t.extend=o,e||t},extend:function(e){return e=e||{},e._parent=this,Object.create(this,i(e))}}},window,document);
(function(t,e){"use strict";function n(){return e.qoopido.initialize("proxy",t)}"function"==typeof define&&define.amd?define(["./base","./function/unique/uuid"],n):n()})(function(t){"use strict";return t.base.extend({_constructor:function(e,n){var i=Array.prototype.splice.call(arguments,2),r=function(){return n.apply(e,Array.prototype.slice.call(arguments,0).concat(i))};return r._quid=t["function/unique/uuid"](),r}})},window);
(function(t,e){"use strict";function n(){return e.qoopido.initialize("dom/element",t,arguments)}if("function"==typeof define&&define.amd){var r=["../base","../proxy"];e.getComputedStyle||r.push("../polyfill/window/getcomputedstyle"),define(r,n)}else n()})(function(t,e,n,r,i,o){"use strict";function a(t){return t.target||(t.target=t.srcElement||i),3===t.target.nodeType&&(t.target=t.target.parentNode),!t.relatedTarget&&t.fromElement&&(t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement),t}var s,l,u,c="object",f="string";return s=r.addEventListener?function(t,e){var n=this,r=n.element,i="".concat("listener[",t,"][",e._quid||e,"]");r[i]=function(t){e.call(this,a(t))},r.addEventListener(t,r[i],!1)}:function(t,e){var n=this,i=n.element,s="".concat("listener[",t,"][",e._quid||e,"]");i[s]=function(){e.call(this,a(r.event))},i["on"+t]!==o?i.attachEvent("on"+t,i[s]):(t="".concat("fake[",t,"]"),i[t]=null,i.attachEvent("onpropertychange",function(n){n.propertyName===t&&e.call(this,a(i[t]))}))},l=r.removeEventListener?function(t,e){var n=this,r=n.element,i="".concat("listener[",t,"][",e._quid||e,"]");r.removeEventListener(t,r[i],!1),delete r[i]}:function(t,e){var n=this,r=n.element,i="".concat("listener[",t,"][",e._quid||e,"]");r.detachEvent("on"+t,r[i]),delete r[i]},u=i.createEvent?function(t,e){var n=this,r=n.element,o=i.createEvent("HTMLEvents");o.initEvent(t,!0,!0),o.data=e,r.dispatchEvent(o)}:function(t,e){var n=this,r=n.element,a=i.createEventObject();a.type=a.eventType=t,a.data=e;try{r.fireEvent("on"+a.eventType,a)}catch(s){var l="".concat("fake[",t,"]");r[l]!==o&&(r[l]=a)}},t.base.extend({type:null,element:null,listener:null,_constructor:function(t){var e=this;if(!t)throw Error("Missing element argument");e.type=t.tagName,e.element=t,e.listener={}},getAttribute:function(t){if(t&&typeof t===f){var e=this;return t=t.split(" "),1===t.length?e.element.getAttribute(t[0]):e.getAttributes(t)}},getAttributes:function(t){var e=this,n={};if(t&&(t=typeof t===f?t.split(" "):t,typeof t===c&&t.length)){var r,i;for(r=0;(i=t[r])!==o;r++)n[i]=e.element.getAttributes(i)}return n},setAttribute:function(t,e){var n=this;return t&&typeof t===f&&n.element.setAttribute(t,e),n},setAttributes:function(t){var e=this;if(t&&typeof t===c&&!t.length){var n;for(n in t)e.element.setAttribute(n,t[n])}return e},removeAttribute:function(t){var e=this;return t&&typeof t===f&&(t=t.split(" "),1===t.length?e.element.removeAttribute(t[0]):e.removeAttributes(t)),e},removeAttributes:function(t){var e=this;if(t&&(t=typeof t===f?t.split(" "):t,typeof t===c&&t.length)){var n,r;for(n=0;(r=t[n])!==o;n++)e.element.removeAttribute(r)}return e},getStyle:function(t){if(t&&typeof t===f){var e=this;return t=t.split(" "),1===t.length?r.getComputedStyle(e.element,null).getPropertyValue(t[0]):e.getStyles(t)}},getStyles:function(t){var e=this,n={};if(t&&(t=typeof t===f?t.split(" "):t,typeof t===c&&t.length)){var i,a;for(i=0;(a=t[i])!==o;i++)n[a]=r.getComputedStyle(e.element,null).getPropertyValue(a)}return n},setStyle:function(t,e){var n=this;return t&&typeof t===f&&(n.element.style[t]=e),n},setStyles:function(t){var e=this;if(t&&typeof t===c&&!t.length){var n;for(n in t)e.element.style[n]=t[n]}return e},isVisible:function(){var t=this.element;return!(0>=t.offsetWidth&&0>=t.offsetHeight)},on:function(t,e){var n,r,i=this;for(t=t.split(" "),n=0;(r=t[n])!==o;n++)(i.listener[r]=i.listener[r]||[]).push(e),s.call(i,r,e);return i},one:function(e,n,r){r=r!==!1;var i=this,o=t.proxy.create(i,function(t){i.off(r===!0?t.type:e,o),n.call(i,t)});return i.on(e,o),i},off:function(t,e){var n,r,i,a,s=this;if(t)for(t=t.split(" "),n=0;(r=t[n])!==o;n++)if(s.listener[r]=s.listener[r]||[],e)for(i=0;(a=s.listener[r][i])!==o;i++)a===e&&(s.listener[r].splice(i,1),l.call(s,r,a),i--);else for(;s.listener[r].length>0;)l.call(s,r,s.listener[r].pop());else for(r in s.listener)for(;s.listener[r].length>0;)l.call(s,r,s.listener[r].pop());return s},emit:function(t,e){var n=this;return u.call(n,t,e),n}})},window);
(function(t,e){"use strict";function n(){return e.qoopido.initialize("function/merge",t,arguments)}"function"==typeof define&&define.amd?define(["../base"],n):n()})(function(t,e,n,i,r,o){"use strict";return function a(){var t,e,n,i,r,l=arguments[0];for(t=1;(e=arguments[t])!==o;t++)for(n in e)i=l[n],r=e[n],r!==o&&(null!==r&&"object"==typeof r?(i=r.length!==o?i&&"object"==typeof i&&i.length!==o?i:[]:i&&"object"==typeof i&&i.length===o?i:{},l[n]=a(i,r)):l[n]=r);return l}},window);
(function(t,e){"use strict";function n(){return e.qoopido.initialize("function/unique/uuid",t)}"function"==typeof define&&define.amd?define(["./../../base"],n):n()})(function(){"use strict";function t(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(n,function(t){var e=0|16*Math.random(),n="x"===t?e:8|3&e;return n.toString(16)})}var e={},n=RegExp("[xy]","g");return function(){var n;do n=t();while(e[n]!==void 0);return e[n]=!0,n}},window);
(function(t,e){"use strict";function n(){return e.qoopido.initialize("dom/element/emerge",t,arguments)}"function"==typeof define&&define.amd?define(["../element","../../function/merge","../../function/unique/uuid"],n):n()})(function(t,e,n,i,r,o){"use strict";function l(t){var e,n=g[t];for(e in n)"length"!==e&&u.call(n[e]);0===n.length&&(i.element.clearInterval(m[t]),delete m[t])}function a(){h.left=0,h.top=0,h.right=d.clientWidth,h.bottom=d.clientHeight}function s(){var t=this,e=t._settings.threshold||d.clientWidth*t._settings.auto,n=t._settings.threshold||d.clientHeight*t._settings.auto;t._viewport.left=h.left-e,t._viewport.top=h.top-n,t._viewport.right=h.right+e,t._viewport.bottom=h.bottom+n}function u(){var t,e=this,n=!1,i=2;!e.isVisible()||"hidden"===e.getStyle("visibility")&&e._settings.visibility!==!1||(t=e.element.getBoundingClientRect(),(t.left>=e._viewport.left&&t.top>=e._viewport.top&&t.left<=e._viewport.right&&t.top<=e._viewport.bottom||t.right>=e._viewport.left&&t.bottom>=e._viewport.top&&t.right<=e._viewport.right&&t.bottom<=e._viewport.bottom)&&((t.left>=h.left&&t.top>=h.top&&t.left<=h.right&&t.top<=h.bottom||t.right>=h.left&&t.bottom>=h.top&&t.right<=h.right&&t.bottom<=h.bottom)&&(i=1),n=!0)),(n!==e._state||n===!0&&i!==e._priority)&&c.call(e,n,i)}function c(t,e){var n=this;n._state=t,n._priority=e,n._settings.recur!==!0&&n.remove(),t===!0?n.emit(v,e):n.emit(y)}var f,p={interval:50,threshold:"auto",recur:!0,auto:.5,visibility:!0},d=i.document.documentElement,h={},m={},g={},v="emerged",y="demerged",_="resize orientationchange";if(i=t["dom/element"].create(i),"CSS1Compat"!==r.compatMode)throw"This script requires your browser to work in standards mode";return f=t["dom/element"].extend({_quid:null,_viewport:null,_element:null,_settings:null,_state:null,_priority:null,_constructor:function(e,n){var r=this;f._parent._constructor.call(r,e),n=t["function/merge"]({},p,n||{}),"auto"===n.threshold&&delete n.threshold,m[n.interval]===o&&(g[n.interval]=g[n.interval]||{length:0},m[n.interval]=i.element.setInterval(function(){l(n.interval)},n.interval)),r._quid=t["function/unique/uuid"](),r._viewport={},r._settings=n,r._state=!1,r._priority=2,g[n.interval][r._quid]=r,g[n.interval].length++,i.on(_,function(){s.call(r)}),s.call(r)},remove:function(){var t=this;delete g[t._settings.interval][t._quid],g[t._settings.interval].length--}}),i.on(_,a),a(),f},window);
(function(t,e){"use strict";function n(){return e.qoopido.initialize("dom/element/lazyimage",t,arguments)}"function"==typeof define&&define.amd?define(["./emerge","../../function/merge"],n):n()})(function(t){"use strict";function e(){var t=this,e=t._settings.attribute;r+=1,t.emit(o).one(f,function(e){e.type===u?t.emit(l):t.emit(a),r-=1},!1).setAttribute("src",t.getAttribute(e)).removeAttribute(e)}var n,i={interval:50,threshold:"auto",attribute:"data-lazyimage"},r=0,o="requested",l="loaded",a="failed",s="emerged",u="load",c="error",f="".concat(u," ",c);return n=t["dom/element/emerge"].extend({_constructor:function(o,l){var a=this;n._parent._constructor.call(a,o,t["function/merge"]({},i,l||{})),a.on(s,function u(t){(0===r||1===t.data)&&(a.remove(),a.off(s,u),e.call(a))})}})},window);