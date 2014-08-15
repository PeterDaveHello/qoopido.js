/*!
* Qoopido.js library v3.4.5, 2014-7-15
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e){var t=["./base","./promise/all","./promise/defer"];String.prototype.ucfirst||t.push("./polyfill/string/ucfirst"),window.qoopido.registerSingleton("support",e,t)}(function(e,t,r,s,o,i,p){"use strict";var n=e["promise/all"],l=e["promise/defer"],u=new RegExp("^(Moz|WebKit|Khtml|ms|O|Icab)(?=[A-Z])"),a=new RegExp("-([a-z])","gi"),f=new RegExp("([A-Z])","g"),c=function(){return arguments[1].ucfirst()},m={prefix:null,method:{},property:{},css:{},element:{},promises:{prefix:null,method:{},property:{},css:{},test:{}}};return e.base.extend({test:{},pool:t.pool&&t.pool.dom,testMultiple:function(){for(var e,t=[],r=0;(e=arguments[r])!==p;r++)switch(typeof e){case"string":t.push(this.test[e]());break;case"boolean":var s=new l;e?s.resolve():s.reject(),t.push(s.promise);break;default:t.push(e)}return new n(t)},getPrefix:function(){var e,t=this,r=m.prefix||null;if(null===r){var s=t.pool?t.pool.obtain("div"):i.createElement("div"),o=s.style;r=!1;for(e in o)u.test(e)&&(r=e.match(u)[0]);r===!1&&"WebkitOpacity"in o&&(r="WebKit"),r===!1&&"KhtmlOpacity"in o&&(r="Khtml"),r=m.prefix=r===!1?!1:[r.toLowerCase(),r.toLowerCase().ucfirst(),r],s.dispose&&s.dispose()}return r},getMethod:function(e,t){t=t||o;var r=t.tagName,s=m.method[r]=m.method[r]||{},i=s[e]=m.method[r][e]||null;if(null===i){i=!1;var n,l,u=0,a=e.ucfirst(),f=this.getPrefix();for(n=f!==!1?(e+" "+f.join(a+" ")+a).split(" "):[e];(l=n[u])!==p;u++)if(t[l]!==p&&("function"==typeof t[l]||"object"==typeof t[l])){i=l;break}m.method[r][e]=i}return i},getProperty:function(e,t){t=t||o;var r=t.tagName,s=m.property[r]=m.property[r]||{},i=s[e]=m.property[r][e]||null;if(null===i){i=!1;var n,l,u=0,a=e.ucfirst(),f=this.getPrefix();for(n=f!==!1?(e+" "+f.join(a+" ")+a).split(" "):[e],u;(l=n[u])!==p;u++)if(t[l]!==p){i=l;break}m.property[r][e]=i}return i},getCssProperty:function(e){e=e.replace(a,c);var t=this,r=m.css[e]||null;if(null===r){r=!1;var s,o=0,n=t.pool?t.pool.obtain("div"):i.createElement("div"),l=e.ucfirst(),u=this.getPrefix()||[],h=(e+" "+u.join(l+" ")+l).split(" "),d="";for(o;(s=h[o])!==p;o++)if(n.style[s]!==p){r=s,o>0&&(d="-");break}m.css[e]=r!==!1?[d+r.replace(f,"-$1").toLowerCase(),r]:!1,n.dispose&&n.dispose()}return r},supportsPrefix:function(){return!!this.getPrefix()},supportsMethod:function(e,t){return!!this.getMethod(e,t)},supportsProperty:function(e,t){return!!this.getProperty(e,t)},supportsCssProperty:function(e){return!!this.getCssProperty(e)},testPrefix:function(){var e=m.promises.prefix;if(null===e){var t=new l,r=this.getPrefix();r?t.resolve(r):t.reject(),e=m.promises.prefix=t.promise}return e},testMethod:function(e,t){t=t||o;var r=t.tagName,s=m.promises.method[r]=m.promises.method[r]||{},i=s[e]=m.promises.method[r][e]||null;if(null===i){var p=new l,n=this.getMethod(e,t);n?p.resolve(n):p.reject(),i=m.promises.method[r][e]=p.promise}return i},testProperty:function(e,t){t=t||o;var r=t.tagName,s=m.promises.property[r]=m.promises.property[r]||{},i=s[e]=m.promises.property[r][e]||null;if(null===i){var p=new l,n=this.getProperty(e,t);n?p.resolve(n):p.reject(),i=m.promises.property[r][e]=p.promise}return i},testCssProperty:function(e){var t=m.promises.css[e]||null;if(null===t){var r=new l,s=this.getCssProperty(e);s?r.resolve(s):r.reject(),t=m.promises.css[e]=r.promise}return t},addTest:function(e,t){return this.test[e]=function(){var r=m.promises.test[e]||null;if(null===r){var s=new l,o=Array.prototype.slice.call(arguments);o.splice(0,0,s),t.apply(null,o),r=m.promises.test[e]=s.promise}return r}}})});