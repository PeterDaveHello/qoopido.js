(function(e,t){"use strict";var n="qoopido/xhr",r=function r(){return t.qoopido.shared.prepareModule(n,e,arguments,!0)};"function"==typeof define&&define.amd?define(["base","unique","q"],r):r(t.qoopido.base,t.qoopido.unique,t.Q)})(function(e,t,n,r,o){"use strict";function i(e){if("object"==typeof e){var t;for(t in e)v[t]!==undefined&&(v[t]=e[t])}}function s(e){var t,n=this;e="object"==typeof e?e:{};for(t in v)n.settings[t]=e[t]||v[t]}function u(e){if(""===e)try{return location.href}catch(t){}return g.href=e,g.href}function a(e,t,n){var r,o=this,i=o.xhr,s=o.settings;n="object"==typeof n?l(n):n,t=s.cache===!1?"".concat(t,t.indexOf("?")>-1?"&":"?","_="+(new Date).getTime()):t,t=n&&"GET"===e?"".concat(t,t.indexOf("?")>-1?"&":"?",n):t;for(r in s.xhrOptions)i[r]=s.xhrOptions[r];i.open(e,t,s.async,s.username,s.password),i.setRequestHeader("Accept",s.accept),n&&"GET"!==e&&i.setRequestHeader("Content-Type",s.contentType);for(r in s.header)i.setRequestHeader(r,s.header[r]);i.timeout=s.timeout,i.onprogress=function(){p.apply(o)},i.onreadystatechange=function(){d.apply(o)},i.onerror=function(){f.apply(o)},i.send(n||null),o.timeout=setTimeout(function(){c(i)},s.timeout)}function c(e){e.abort()}function p(){this.dfd.notify()}function d(){var e=this,t=e.xhr,n=e.dfd;4===t.readyState&&(clearTimeout(e.timeout),200===t.status?n.resolve(t.responseText,t):n.reject(t.status,t))}function f(){var e=this;clearTimeout(e.timeout),e.dfd.reject()}function l(e,t){var n,r,o,i=[];for(n in e)r=t?"".concat(t,"[",n,"]"):n,o=e[n],i.push("object"==typeof o?l(o,r):"".concat(encodeURIComponent(r),"=",encodeURIComponent(o)));return i.join("&")}var m,h,y,g=o.createElement("a"),v={accept:"*/*",timeout:5e3,async:!0,cache:!1,header:{},username:null,password:null,contentType:"application/x-www-form-urlencoded; charset=UTF-8 ",xhrOptions:{}},w=r.XMLHttpRequest!==undefined?function(e){return y.test(e)?new r.XMLHttpRequest:r.XDomainRequest?new r.XDomainRequest:new r.XMLHttpRequest}:function(){try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(e){return null}};try{h=location}catch(b){g.href="",h=g}return y=RegExp("".concat("^",h.protocol,"//",h.hostname),"i"),m=e.extend({setup:function(e){return i(e),this},load:function(e,r,o,i){var c={};return r=u(r),c.id=t.string(),c.dfd=n.defer(),c.xhr=w(r),c.timeout=null,c.settings={},s.apply(c,[i]),a.apply(c,[e.toUpperCase(),r,o]),c.dfd.promise},get:function(e,t,n){return this.load("GET",e,t,n)},post:function(e,t,n){return this.load("POST",e,t,n)},put:function(e,t,n){return this.load("PUT",e,t,n)},"delete":function(e,t,n){return this.load("DELETE",e,t,n)},head:function(e,t,n){return this.load("HEAD",e,t,n)}})},window,document);