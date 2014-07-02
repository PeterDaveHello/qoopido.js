/*!
* Qoopido.js library v3.3.8, 2014-6-2
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(t){window.qoopido.registerSingleton("transport/jsonp",t,["../transport","../function/merge","../function/unique/uuid","../url","../dom/element","q"])}(function(t,e,i,n,o,c){"use strict";function r(t,e){var i=this,n=i.dfd,c=i.script,r=i.settings;e="object"==typeof e?i.serialize(e):e,t="".concat(t,t.indexOf("?")>-1?"&":"?","".concat(r.callback,"=",i.id)),t=r.cache===!1?"".concat(t,t.indexOf("?")>-1?"&":"?","".concat("_=",(new Date).getTime().toString())):t,t=e?"".concat(t,t.indexOf("?")>-1?"&":"?",e):t,o[i.id]=function(t){try{delete o[i.id]}catch(e){o[i.id]=null}u.call(i),n.resolve(t)},c.on("load readystatechange",function(t){a.call(i,t)}).one("error",function(){s.call(i)}).setAttribute("src",t),p.appendChild(c.element),i.timeout=setTimeout(function(){l.call(i)},r.timeout)}function a(t){var e=this,i=e.dfd;t.readyState&&"loaded"!==t.readyState&&"complete"!==t.readyState||e.script.off()&&e.script.element.dispose&&e.script.element.dispose(),e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout(function(){l.call(e)},e.settings.timeout),i.notify(t)}function s(){var t=this;u.call(t),t.dfd.reject()}function l(){var t=this;u.call(t),t.dfd.reject(!1)}function u(){var t=this;t.timeout&&clearTimeout(t.timeout),t.script.off()&&t.script.element.dispose&&t.script.element.dispose()}var d,f=t.q||o.Q,m=e.pool&&e.pool.dom,p=c.getElementsByTagName("head")[0];return d=t.transport.extend({_settings:{callback:"callback",cache:!1,timeout:5e3},load:function(e,i,n){var o={};return e=t.url.resolve(e),o.id="".concat("jsonp-",t["function/unique/string"]()),o.dfd=f.defer(),o.script=t["dom/element"].create(m?m.obtain("script"):c.createElement("script")),o.settings=t["function/merge"]({},this._settings,n),o.timeout=null,o.script.setAttribute("async",!0),r.call(o,e,i),o.dfd.promise}})},window,document);