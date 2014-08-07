/*!
* Qoopido.js library v3.4.5, 2014-7-7
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e){window.qoopido.register("emitter",e,["./base"])}(function(e,t,n,r,i,s,l){"use strict";function o(e,t){var n=t.charAt(0).toUpperCase()+t.slice(1);return e._mapped[t]=e[t],function(){var r,i=Array.prototype.slice.call(arguments);return e.emit.apply(e,["pre"+n,i]),r=e._mapped[t].apply(e,i),e.emit.apply(e,["post"+n,i,r]),r}}var p=/^(_|extend$|create$|on$|one$|off$|emit$|get.+)/;return e.base.extend({_mapped:null,_listener:null,_temp:null,_constructor:function(){var e,t=this;t._mapped={},t._listener={};for(e in t)"function"==typeof t[e]&&p.test(e)===!1&&(t[e]=o(t,e))},on:function(e,t){var n,r=this,i=0;for(e=e.split(" ");(n=e[i])!==l;i++)(r._listener[n]=r._listener[n]||[]).push(t);return r},one:function(e,t,n){n=n!==!1;var r=this;return r.on(e,function i(s){r.off(n===!0?s:e,i),t.apply(this,arguments)}),r},off:function(e,t){var n,r,i,s=this,o=0;if(e)for(e=e.split(" ");(n=e[o])!==l;o++)if(s._listener[n]=s._listener[n]||[],t)for(r=0;(i=s._listener[n][r])!==l;r++)i===t&&(s._listener[n].splice(r,1),r--);else s._listener[n].length=0;else for(n in s._listener)s._listener[n].length=0;return s},emit:function(e){var t,n=this,r=0;if(e!==l){for(n._listener[e]=n._listener[e]||[],n._temp=n._listener[e].slice();(t=n._temp[r])!==l;r++)t.apply(n,arguments);n._temp.length=0}return n}})});