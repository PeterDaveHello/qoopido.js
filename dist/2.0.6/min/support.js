(function(t,e,r,n){"use strict";var o="qoopido/support",i=function i(){for(var i=(o=o.split("/")).splice(o.length-1,1),s=e,a=0;o[a]!==n;a++)s[o[a]]=s[o[a]]||{},s=s[o[a]];return[].push.apply(arguments,[e,r,n]),s[i]=t.apply(null,arguments)};"function"==typeof define&&define.amd?define(["./base","q"],i):i(e.qoopido.base,e.Q)})(function(t,e,r,n,o){"use strict";function i(){return arguments.length>1?arguments[1].toUpperCase():arguments[0].charAt(0).toUpperCase()+arguments[0].slice(1)}var s=/-([a-z])/gi,a={prefix:null,property:{},method:{},element:{},promises:{prefix:null,property:{},method:{},test:{}}};return t.extend({test:{},testMultiple:function(){var t,r=[],n=0;for(n;(t=arguments[n])!==o;n++)switch(typeof t){case"string":r.push(this.test[t]());break;case"boolean":var i=e.defer();t?i.resolve():i.reject(),r.push(i.promise);break;default:r.push(t)}return e.all(r)},getElement:function(t,e){var r=a.element[t]=a.element[t]||"image"!==t?n.createElement(t):new Image;return e=!!e,e?r.cloneNode(!1):r},getPrefix:function(){var t,e=a.prefix||null;if(null===e){var r=this.getElement("div").style,n=/^(Moz|WebKit|Khtml|ms|O|Icab)(?=[A-Z])/;e=!1;for(t in r)n.test(t)&&(e=t.match(n)[0]);e===!1&&"WebkitOpacity"in r&&(e="WebKit"),e===!1&&"KhtmlOpacity"in r&&(e="Khtml"),e=a.prefix=e===!1?!1:{method:e,properties:[e.toLowerCase(),i(e.toLowerCase())]}}return e},getProperty:function(t){t=t.replace(s,i);var e=a.property[t]||null;if(null===e){e=!1;var r,n=0,u=this.getElement("div"),p=i(t),l=(this.getPrefix()||{properties:[]}).properties,c=(t+" "+l.join(p+" ")+p).split(" ");for(n;(r=c[n])!==o;n++)if(u.style[r]!==o){e=r;break}a.property[t]=e}return e},getMethod:function(t,e){e=e||r;var n=e.tagName,s=a.method[n]=a.method[n]||{},u=s[t]=a.method[n][t]||null;if(null===u){u=!1;var p,l,c=0,f=i(t),h=this.getPrefix();for(p=h!==!1?(t+" "+h.method+f+" "+h.properties.join(f+" ")+f).split(" "):[t],c;(l=p[c])!==o;c++)if(e[l]!==o&&("function"==typeof e[l]||"object"==typeof e[l])){u=l;break}a.method[n][t]=u}return u},supportsPrefix:function(){return!!this.getPrefix()},supportsProperty:function(t){return!!this.getProperty(t)},supportsMethod:function(t,e){return!!this.getMethod(t,e)},testPrefix:function(){var t=a.promises.prefix;if(null===t){var r=e.defer(),n=this.getPrefix();n?r.resolve(n):r.reject(),t=a.promises.prefix=r.promise}return t},testProperty:function(t){var r=a.promises.property[t]||null;if(null===r){var n=e.defer(),o=this.getProperty(t);o?n.resolve(o):n.reject(),r=a.promises.property[t]=n.promise}return r},testMethod:function(t,n){n=n||r;var o=n.tagName,i=a.promises.method[o]=a.promises.method[o]||{},s=i[t]=a.promises.method[o][t]||null;if(null===s){var u=e.defer(),p=this.getMethod(t,n);p?u.resolve(p):u.reject(),s=a.promises.method[o][t]=u.promise}return s},addTest:function(t,r){return this.test[t]=function(){var n=a.promises.test[t]||null;if(null===n){var o=e.defer(),i=Array.prototype.slice.call(arguments);i.splice(0,0,o),r.apply(null,i),n=a.promises.test[t]=o.promise}return n}}})},window,document);