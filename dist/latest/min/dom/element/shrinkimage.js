/*!
* Qoopido.js library v3.4.5, 2014-7-14
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(t){var e=["../element","../../proxy","../../function/merge","../../url","../../support","../../support/capability/datauri","../../support/element/canvas/todataurl/png","../../transport/xhr"];window.qoopido.register("dom/element/shrinkimage",t,e)}(function(t,e,n,i,a,r){"use strict";function o(e,n){e=t.url.resolve(y.exec(e)[1]),n=n?!0:!1;var i=this,a=t["function/merge"]({},i._settings,t.url.getParameter(e)),r=a.target||(e=e.split("?")[0]).replace(v,"".concat(".q",a.quality,".shrunk"));n||i.removeAttribute(i._settings.attribute).hide(),x.then(function(){if(a.debug===!0)throw new Error("debug enabled");switch(typeof b[r]){case"object":b[r].one(I,function(t){l.call(i,t.data,n)}),i.emit(_);break;case"string":l.call(i,b[r],n);break;default:b[r]=p.create(r,n?null:i._element).one(q,function(t,a){t.type===I?(b[r]=a,i.emit(k),l.call(i,a,n)):(b[r]=e,l.call(i,e,n))},!1)}})["catch"](function(){b[r]=e,l.call(i,e,n)})}function l(t,e){var n=this;e?(n.setStyle("backgroundImage","url("+t+")"),n.emit(I)):n.one(A,function(){n.show(),n.emit(I)}).setAttribute("src",t)}function c(t){var e=this;t.get(e._url).then(function(t){try{var n=h.parse(t.data);n.width=parseInt(n.width,10),n.height=parseInt(n.height,10),u.call(e,n)}catch(i){e.emit(E)}},function(){e.emit(E)})}function u(t){var e,n,i=this,a=function(a){return e=f&&f.obtain("canvas")||r.createElement("canvas"),e.style.display="none",e.width=t.width,e.height=t.height,n=e.getContext("2d"),n.clearRect(0,0,t.width,t.height),n.drawImage(i.element,0,0,t.width,t.height),i.one(A,o).setAttribute("src",t.alpha),s(a)},o=function(a){var r;return n.globalCompositeOperation="xor",n.drawImage(i.element,0,0,t.width,t.height),r=e.toDataURL("image/png"),l(),i.emit(I,r),s(a)},l=function(){e&&e.dispose&&e.dispose(),i.element.dispose&&i.element.dispose()};i.one(S,function(t){t.type===A?a.call(this,t):(l(),i.emit(E))},!1).setAttribute("src",t.main)}function s(t){return t.preventDefault(),t.stopPropagation(),!1}var d,p,h=a.JSON,g=n.pop(),m={attribute:"data-"+g,quality:80,debug:!1},f=e.pool&&e.pool.dom||null,b={},w=new RegExp('^url\\x28"{0,1}data:image/shrink,(.+?)"{0,1}\\x29$',"i"),y=new RegExp('^(?:url\\x28"{0,1}|)(?:data:image/shrink,|)(.+?)(?:"{0,1}\\x29|)$',"i"),v=new RegExp("\\.png$","i"),x=t.support.testMultiple("/capability/datauri","/element/canvas/todataurl/png"),_="queued",k="cached",I="loaded",E="failed",q="".concat(I," ",E),A="load",R="error",S="".concat(A," ",R);return d=t["dom/element"].extend({_constructor:function(e,n){var i,a,r=this;d._parent._constructor.call(r,e),r._settings=n=t["function/merge"]({},m,n),i=r.getAttribute(n.attribute),a=r.getStyle("backgroundImage"),"IMG"===r.type&&o.call(r,i),"none"!==a&&w.test(a)&&o.call(r,a,!0)},hide:function(){this.setStyles({visibility:"hidden",opacity:0})},show:function(){this.setStyles({visibility:"",opacity:""})}}),p=t["dom/element"].extend({_url:null,_constructor:function(e,n){var i=this;n||(n=f&&f.obtain("img")||r.createElement("img")),p._parent._constructor.call(i,n),i._url=e,c.call(i,t["transport/xhr"])}}),d},window);