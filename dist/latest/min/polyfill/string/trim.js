/*!
* Qoopido.js library v3.3.2, 2014-5-24
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(t){window.qoopido.register("polyfill/string/trim",t)}(function(){"use strict";if(!String.prototype.trim){var t=new RegExp("^\\s+|\\s+$","g");String.prototype.trim=function(){return this.replace(t,"")}}return!0});