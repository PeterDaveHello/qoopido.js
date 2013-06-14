(function(e,t){"use strict";var r="qoopido/xhr",o=function o(){return t.qoopido.shared.prepareModule(r,e,arguments,!0)};"function"==typeof define&&define.amd?define(["qoopido/base","qoopido/unique","q"],o):o(t.qoopido.base,t.qoopido.unique,t.Q)})(function(e,t,r,o){"use strict";function n(e){if("object"==typeof e){var t;for(t in e)f[t]!==undefined&&(f[t]=e[t])}}function i(e){var t,r=this;e="object"==typeof e?e:{};for(t in f)r.settings[t]=e[t]||f[t]}function s(e,t,r){var o,n=this,i=n.xhr,s=n.settings;r="object"==typeof r?d(r):r,t=s.cache===!1?"".concat(t,t.indexOf("?")>-1?"&":"?","_="+(new Date).getTime()):t,t=r&&"GET"===e?"".concat(t,t.indexOf("?")>-1?"&":"?",r):t;for(o in s.xhrOptions)i[o]=s.xhrOptions[o];i.open(e,t,s.async,s.username,s.password),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("Accepts",s.accept),r&&"GET"!==e&&i.setRequestHeader("Content-type",s.contentType);for(o in s.header)i.setRequestHeader(o,s.header[o]);i.timeout=s.timeout,i.onprogress=function(){a.apply(n)},i.onreadystatechange=function(){p.apply(n)},i.send(r||null),n.timeout=setTimeout(u,s.timeout)}function u(e){e.abort()}function a(){this.dfd.notify()}function p(){var e=this,t=e.xhr,r=e.dfd;4===t.readyState&&(clearTimeout(e.timeout),200===t.status?r.resolve(t.responseText,t):r.reject(t.status,t))}function d(e,t){var r,o,n,i="",s=[];for(r in e)o=t?"".concat(t,"[",r,"]"):r,n=e[r],s.push("object"==typeof v?d(n,o):"".concat(encodeURIComponent(o),"=",encodeURIComponent(n)));return i.concat.apply(i,s)}var c,f={accept:"*/*",timeout:5e3,async:!0,cache:!1,header:{},username:null,password:null,contentType:"application/x-www-form-urlencoded; charset=UTF-8 ",xhrOptions:{}},l=o.XMLHttpRequest!==undefined?function(){return new o.XMLHttpRequest}:function(){try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(e){return null}};return c=e.extend({setup:function(e){return n(e),this},load:function(e,o,n,u){var a={};return a.id=t.string(),a.dfd=r.defer(),a.xhr=l(),a.timeout=null,a.settings={},i.apply(a,[u]),s.apply(a,[e.toUpperCase(),o,n]),a.dfd.promise},get:function(e,t,r){return this.load("GET",e,t,r)},post:function(e,t,r){return this.load("POST",e,t,r)},put:function(e,t,r){return this.load("PUT",e,t,r)},"delete":function(e,t,r){return this.load("DELETE",e,t,r)},head:function(e,t,r){return this.load("HEAD",e,t,r)}})},window,document);