/*!
* Qoopido.js library v3.4.7, 2014-7-17
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e){var t=["../base","../function/unique/uuid","./event"];window.CustomEvent||t.push("../polyfill/window/customevent"),window.addEventListener||t.push("../polyfill/window/addeventlistener"),window.removeEventListener||t.push("../polyfill/window/removeeventlistener"),window.dispatchEvent||t.push("../polyfill/window/dispatchevent"),window.getComputedStyle||t.push("../polyfill/window/getcomputedstyle"),Element.prototype.matches||t.push("../polyfill/element/matches"),document.querySelector||t.push("../polyfill/document/queryselector"),document.querySelectorAll||t.push("../polyfill/document/queryselectorall"),window.qoopido.register("dom/element",e,t)}(function(e,t,n,r,i,l,s){"use strict";function o(e){var t;if("string"==typeof e)try{v.test(e)===!0?(t=e.replace(v,"$1").toLowerCase(),e=l.createElement(t)):e=l.querySelector(e)}catch(n){e=null}if(!e)throw new Error("Element could not be resolved");return e}function u(e,t,n){var r=this;e=new i.CustomEvent(e,{bubbles:"load"===e?!1:!0,cancelable:!0,detail:t}),n&&(e._quid=n,e.isDelegate=!0),r.element.dispatchEvent(e)}function a(e,t,n,r){var i=b[n];switch(e){case"get":return i&&i.getValue&&i.getValue(t)||c(t,null).getPropertyValue(n);case"set":i&&i.setValue&&i.setValue(t,r)||(t.style[n]=r)}}var f=function(){if(l.documentMode)return l.documentMode;for(var e=7;e>0;e--){var t=l.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return e}return s}(),m="object",p="string",c=i.getComputedStyle||e["polyfill/window/getcomputedstyle"],d=e["function/unique/uuid"],h="textContent"in l.createElement("a")?"textContent":"innerText",v=new RegExp("^<(\\w+)\\s*/>$"),g=e["pool/module"]&&e["pool/module"].create(e["dom/event"])||null,y={elements:{},events:{}},b={opacity:8>=f?{regex:new RegExp("alpha\\(opacity=(.*)\\)","i"),getValue:function(e){var t=c(e,null).getPropertyValue("filter").toString().match(this.regex);return t=t?t[1]/100:1},setValue:function(e,t){var n=e.style;n.zoom=1,n.opacity=t,n.filter="alpha(opacity="+(100*t+.5>>0)+")"}}:null};return e.base.extend({type:null,element:null,_listener:null,_constructor:function(e,t,n){var r,i=this;return i._listener={},e=o(e),r=e._quid||null,r&&y.elements[r]?y.elements[r]:(i.type=e.tagName,i.element=e,r=d(),e._quid=r,y.elements[r]=i,"object"==typeof t&&null!==t&&i.setAttributes(t),void("object"==typeof n&&null!==n&&i.setStyles(n)))},getContent:function(e){var t=this.element;return e&&e!==!1?t.innerHTML:t[h]},setContent:function(e,t){var n=this,r=n.element;return t&&t!==!1?r.innerHTML=e:r[h]=e,n},getAttribute:function(e){var t=this;return e&&typeof e===p?(e=e.split(" "),1===e.length?t.element.getAttribute(e[0]):t.getAttributes(e)):void 0},getAttributes:function(e){var t=this,n={};if(e&&(e=typeof e===p?e.split(" "):e,typeof e===m&&e.length))for(var r,i=0;(r=e[i])!==s;i++)n[r]=t.element.getAttributes(r);return n},setAttribute:function(e,t){var n=this;return e&&typeof e===p&&n.element.setAttribute(e,t),n},setAttributes:function(e){var t,n=this;if(e&&typeof e===m&&!e.length)for(t in e)n.element.setAttribute(t,e[t]);return n},removeAttribute:function(e){var t=this;return e&&typeof e===p&&(e=e.split(" "),1===e.length?t.element.removeAttribute(e[0]):t.removeAttributes(e)),t},removeAttributes:function(e){var t,n=this,r=0;if(e&&(e=typeof e===p?e.split(" "):e,typeof e===m&&e.length))for(;(t=e[r])!==s;r++)n.element.removeAttribute(t);return n},getStyle:function(e){var t=this;return e&&typeof e===p?(e=e.split(" "),1===e.length?a("get",t.element,e[0]):t.getStyles(e)):void 0},getStyles:function(e){var t,n=this,r={},i=0;if(e&&(e=typeof e===p?e.split(" "):e,typeof e===m&&e.length))for(;(t=e[i])!==s;i++)r[t]=a("get",n.element,t);return r},setStyle:function(e,t){var n=this;return e&&typeof e===p&&a("set",n.element,e,t),n},setStyles:function(e){var t,n=this;if(e&&typeof e===m&&!e.length)for(t in e)a("set",n.element,t,e[t]);return n},siblings:function(e){for(var t=this.element,n=t.parentNode.firstChild,r=[];n;n=n.nextSibling)1===n.nodeType&&n!==t&&(!e||n.matches(e))&&r.push(n);return r},siblingsBefore:function(e){for(var t=this.element.previousSibling,n=[];t;t=t.previousSibling)1===t.nodeType&&(!e||t.matches(e))&&n.push(t);return n},siblingsAfter:function(e){for(var t=this.element.nextSibling,n=[];t;t=t.nextSibling)1===t.nodeType&&(!e||t.matches(e))&&n.push(t);return n},previous:function(e){var t;if(!e)return this.element.previousSibling;for(t=this.element.previousSibling;t;t=t.previousSibling)if(1===t.nodeType&&t.matches(e))return t},next:function(e){var t;if(!e)return this.element.nextSibling;for(t=this.element.nextSibling;t;t=t.nextSibling)if(1===t.nodeType&&t.matches(e))return t},find:function(e){return this.element.querySelectorAll(e)},parent:function(e){var t;if(!e)return this.element.parentNode;for(t=this.element;t;t=t.parentNode)if(t.matches(e))return t},parents:function(e){for(var t=this.element.parentNode,n=[];t;t=t.parentNode){if(9===t.nodeType)return n;1===t.nodeType&&(!e||t.matches(e))&&n.push(t)}},isVisible:function(){var e=this.element;return!(e.offsetWidth<=0&&e.offsetHeight<=0)},hasClass:function(e){return new RegExp("(?:^|\\s)"+e+"(?:\\s|$)").test(this.element.className)},addClass:function(e){var t,n=this;return n.hasClass(e)||(t=n.element.className.split(" "),t.push(e),n.element.className=t.join(" ")),n},removeClass:function(e){var t=this;return t.hasClass(e)&&(t.element.className=t.element.className.replace(new RegExp("(?:^|\\s)"+e+"(?!\\S)"))),t},toggleClass:function(e){var t=this;return t.hasClass(e)?t.removeClass(e):t.addClass(e),t},prepend:function(e){var t=this,n=t.element;return e=e.element||o(e),n.firstChild?n.insertBefore(e,n.firstChild):t.append(e),t},append:function(e){var t=this;return t.element.appendChild(e.element||o(e)),t},replaceWith:function(e){var t=this,n=t.element;return e=e.element||o(e),n.parentNode.replaceChild(e,n),t},prependTo:function(e){var t=this,n=t.element;return(e=e.element||o(e)).firstChild?e.insertBefore(n,e.firstChild):t.appendTo(e),t},appendTo:function(e){var t=this;return(e.element||o(e)).appendChild(t.element),t},insertBefore:function(e){var t=this,n=t.element;return(e=e.element||o(e)).parentNode.insertBefore(n,e),t},insertAfter:function(e){var t=this,n=t.element;return(e=e.element||o(e)).nextSibling?e.parentNode.insertBefore(n,e.nextSibling):t.appendTo(e.parentNode),t},replace:function(e){var t=this,n=t.element;return(e=e.element||o(e)).parentNode.replaceChild(n,e),t},remove:function(){var e=this,t=e.element;return t.parentNode.removeChild(t),e},on:function(t){var n,r=this,l=r.element,o=arguments.length>2?arguments[1]:null,a=arguments.length>2?arguments[2]:arguments[1],f=a._quid||(a._quid=d()),m=0;for(t=t.split(" ");(n=t[m])!==s;m++){var p=n+"-"+f,c=function(t){var n,l=t._quid||(t._quid=d());y.events[l]||(y.events[l]=g&&g.obtain(t)||e["dom/event"].create(t)),t=y.events[l],n=t.delegate,i.clearTimeout(t._timeout),(!o||t.target.matches(o))&&a.call(t.target,t,t.originalEvent.detail),n&&(delete t.delegate,u.call(r,n,null,t._quid)),t._timeout=i.setTimeout(function(){delete y.events[l],delete t._timeout,t.dispose&&t.dispose()},5e3)};c.type=n,r._listener[p]=c,l.addEventListener(n,c)}return r},one:function(e){var t=this,n=arguments.length>3||"string"==typeof arguments[1]?arguments[1]:null,r=arguments.length>3||"function"==typeof arguments[2]?arguments[2]:arguments[1],i=(arguments.length>3?arguments[3]:arguments[2])!==!1,l=function(n){t.off(i===!0?n.type:e,l),r.call(t,n,n.originalEvent.detail)};return r._quid=l._quid=d(),n?t.on(e,n,l):t.on(e,l),t},off:function(e,t){var n,r,i,l=this,o=l.element,u=0;for(e=e.split(" ");(n=e[u])!==s;u++)r=t._quid&&n+"-"+t._quid||null,i=r&&l._listener[r]||null,i?(o.removeEventListener(n,i),delete l._listener[r]):o.removeEventListener(n,t);return l},emit:function(e,t){var n=this;return u.call(n,e,t),n}})});