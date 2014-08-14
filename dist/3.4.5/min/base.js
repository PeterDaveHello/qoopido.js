/*!
* Qoopido.js library v3.4.5, 2014-7-14
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e,t,r,o,n,c){"use strict";function i(e){for(var t;(t=e.replace(g,""))!==e;)e=t;return e.replace(y,"")}var s,u,p=t.qoopido||(t.qoopido={}),a=p.shared||(p.shared={}),d=p.modules||(p.modules={}),f=[],l=new RegExp("^\\.+\\/"),g=new RegExp("(?:\\/|)[^\\/]*\\/\\.\\."),y=new RegExp("(^\\/)|\\.\\/","g");s=p.register=function(e,t,s,u){var p,f=e.split("/");return d[e]?d[e]:(p=function(){if(s)for(var p,g,y=f.slice(0,-1).join("/"),j=0;(p=s[j])!==c;j++)g=l.test(p),g&&(p=i(y+"/"+p)),!d[p]&&arguments[j]&&(d[p]=arguments[j]),g&&!d[p]&&"undefined"!=typeof console&&console.error("".concat("[Qoopido.js] ",e,": Could not load dependency ",p));return d[e]=t(d,a,f,r,o,n,c),u&&u(d[e]),d[e]},void("undefined"!=typeof module&&module.exports?module.exports=define(p):"function"==typeof define&&define.amd?s?define(s,p):define(p):p()))},u=p.registerSingleton=function(e,t,r){s(e,t,r,function(t){d[e]=t.create()})},Object.create||f.push("./polyfill/object/create"),Object.getOwnPropertyNames||f.push("./polyfill/object/getownpropertynames"),Object.getOwnPropertyDescriptor&&function(){try{return Object.getOwnPropertyDescriptor({x:0},"x"),!0}catch(e){return!1}}()||f.push("./polyfill/object/getownpropertydescriptor"),s("base",e,f)}(function(e,t,r,o,n,c,i){"use strict";function s(e){for(var t,r={},o=Object.getOwnPropertyNames(e),n=0;(t=o[n])!==i;n++)r[t]=Object.getOwnPropertyDescriptor(e,t);return r}function u(){"undefined"!=typeof console&&console.error("[Qoopido.js] Operation prohibited on an actual instance")}return{create:function(){var e,t=Object.create(this,s(this));return t._constructor&&(e=t._constructor.apply(t,arguments)),t.create=t.extend=u,e||t},extend:function(e){return e=e||{},e._parent=this,Object.create(this,s(e))}}},this,navigator,window,document);