/*!
* Qoopido.js library v3.3.0, 2014-5-24
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e){window.qoopido.register("emitter",e,["./base"])}(function(e,t,n,r,i,s,o){"use strict";function l(e,t){var n=t.charAt(0).toUpperCase()+t.slice(1);return e._mapped[t]=e[t],function(){var r,i=Array.prototype.slice.call(arguments);return e.emit.apply(e,["pre"+n,i]),r=e._mapped[t].apply(e,i),e.emit.apply(e,["post"+n,i,r]),r}}var p=/^(_|extend$|create$|on$|one$|off$|emit$|get.+)/;return e.base.extend({_mapped:null,_listener:{},_constructor:function(){var e,t=this;t._mapped={};for(e in t)"function"==typeof t[e]&&p.test(e)===!1&&(t[e]=l(t,e))},on:function(e,t){var n,r,i=this;for(e=e.split(" "),n=0;(r=e[n])!==o;n++)(i._listener[r]=i._listener[r]||[]).push(t);return i},one:function(e,t,n){n=n!==!1;var r=this;return r.on(e,function i(s){r.off(n===!0?s:e,i),t.apply(this,arguments)}),r},off:function(e,t){var n,r,i,s,l=this;if(e)for(e=e.split(" "),n=0;(r=e[n])!==o;n++)if(l._listener[r]=l._listener[r]||[],t)for(i=0;(s=l._listener[r][i])!==o;i++)s===t&&(l._listener[r].splice(i,1),i--);else l._listener[r].length=0;else for(r in l._listener)l._listener[r].length=0;return l},emit:function(e){var t,n,r=this;if(e!==o)for(r._listener[e]=r._listener[e]||[],t=0;(n=r._listener[e][t])!==o;t++)n.apply(r,arguments);return r}})});