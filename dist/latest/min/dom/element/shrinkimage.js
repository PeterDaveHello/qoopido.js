/*!
* Qoopido.js library v3.3.4, 2014-5-25
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(t){var e=["../element","../../proxy","../../function/merge","../../url","../../support","../../support/capability/datauri","../../support/element/canvas/todataurl/png","../../transport/xhr"];window.JSON&&window.JSON.parse||e.push("json"),window.qoopido.register("dom/element/shrinkimage",t,e)}(function(t,e,n,i,a,o){"use strict";function r(e,n){e=t.url.resolve(y.exec(e)[1]),n=n?!0:!1;var i=this,a=t["function/merge"]({},i._settings,t.url.getParameter(e)),o=a.target||(e=e.split("?")[0]).replace(v,"".concat(".q",a.quality,".shrunk"));n||i.removeAttribute(i._settings.attribute).hide(),t.support.testMultiple("/capability/datauri","/element/canvas/todataurl/png").then(a.debug).then(function(){switch(typeof w[o]){case"object":w[o].one(k,function(t){l.call(i,t.data,n)}),i.emit(x);break;case"string":l.call(i,w[o],n);break;default:w[o]=p.create(o,n?null:i._element).one(S,function(t){t.type===k?(w[o]=t.data,i.emit(_),l.call(i,t.data,n)):(w[o]=e,l.call(i,e,n))},!1)}}).fail(function(){w[o]=e,l.call(i,e,n)}).done()}function l(t,e){var n=this;e?(n.setStyle("backgroundImage","url("+t+")"),n.emit(k),n.off()):n.one(q,function(){n.show(),n.emit(k),n.off()}).setAttribute("src",t)}function c(t){var e=this;t.get(e._url).then(function(t){try{var n=h.parse(t.data);n.width=parseInt(n.width,10),n.height=parseInt(n.height,10),s.call(e,n)}catch(i){e.emit(I)}},function(){e.emit(I)}).done()}function s(t){var n,i,a=this,r=function(r){return n=f?e.pool.dom.obtain("canvas"):o.createElement("canvas"),n.style.display="none",n.width=t.width,n.height=t.height,i=n.getContext("2d"),i.clearRect(0,0,t.width,t.height),i.drawImage(a.element,0,0,t.width,t.height),a.one(q,l).setAttribute("src",t.alpha),u(r)},l=function(e){var o;return i.globalCompositeOperation="xor",i.drawImage(a.element,0,0,t.width,t.height),o=n.toDataURL("image/png"),c(),a.emit(k,o),u(e)},c=function(){n&&n.dispose&&n.dispose(),a.element.dispose&&a.element.dispose()};a.one(E,function(t){t.type===q?r.call(this,t):(c(),a.emit(I))},!1).setAttribute("src",t.main)}function u(t){return t.preventDefault(),t.stopPropagation(),!1}var d,p,h=t.json||a.JSON,g=n.pop(),m={attribute:"data-"+g,quality:80,debug:!1},f=e.pool&&e.pool.dom,w={},b=new RegExp('^url\\x28"{0,1}data:image/shrink,(.+?)"{0,1}\\x29$',"i"),y=new RegExp('^(?:url\\x28"{0,1}|)(?:data:image/shrink,|)(.+?)(?:"{0,1}\\x29|)$',"i"),v=new RegExp("\\.png$","i"),x="queued",_="cached",k="loaded",I="failed",S="".concat(k," ",I),q="load",A="error",E="".concat(q," ",A);return d=t["dom/element"].extend({_constructor:function(e,n){var i,a,o=this;d._parent._constructor.call(o,e),o._settings=n=t["function/merge"]({},m,n),i=o.getAttribute(n.attribute),a=o.getStyle("backgroundImage"),"IMG"===o.type&&r.call(o,i),"none"!==a&&b.test(a)&&r.call(o,a,!0)},hide:function(){this.setStyles({visibility:"hidden",opacity:0})},show:function(){this.setStyles({visibility:"",opacity:""})}}),p=t["dom/element"].extend({_url:null,_constructor:function(n,i){var a=this;i||(i=f?e.pool.dom.obtain("img"):o.createElement("img")),p._parent._constructor.call(a,i),a._url=n,c.call(a,t["transport/xhr"])}}),d},window);