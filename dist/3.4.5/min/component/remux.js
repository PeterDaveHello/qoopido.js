/*!
* Qoopido.js library v3.4.5, 2014-7-15
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(t){window.qoopido.registerSingleton("component/remux",t,["../emitter","./sense"])}(function(t,n,e,i,o,a){"use strict";function u(t,n){var e=this;return t&&n&&(l.className=t,l.style.fontSize=n+"px",f.layout=t,f.fontsize=n,(d.fontsize!==f.fontsize||d.layout!==f.layout)&&(f.ratio.device=o.devicePixelRatio||1,f.ratio.fontsize=f.fontsize/c,f.ratio.total=f.ratio.device*f.ratio.fontsize,d.layout!==f.layout&&e.emit("layoutchanged",f),d.fontsize!==f.fontsize&&e.emit("fontsizechanged",f),e.emit("statechanged",f),d.fontsize=f.fontsize,d.layout=f.layout)),e}function r(n,e,i){var a=this;o.setTimeout(function(){t["component/sense"].create(n).on("matched",function(){u.call(a,e,i)})},0)}var s,l=a.getElementsByTagName("html")[0],c=16,f={fontsize:null,layout:null,ratio:{}},d={fontsize:null,layout:null};return s=t.emitter.extend({_constructor:function(){var t=this,n=parseInt(l.getAttribute("data-base"),10);s._parent._constructor.call(t),isNaN(n)===!1&&(c=n)},getState:function(){return f},getLayout:function(){return f.layout},getFontsize:function(){return f.fontsize},setLayout:function(t,n){var e=this;return u.call(e,t,n),e},addLayout:function(t,n){var e,i,o,a,u,s,l,f,d=this;arguments.length>1?(e={},e[t]=n):e=arguments[0];for(i in e)for(o=e[i],a=o.min;a<=o.max;a++)l=Math.round(o.width*(a/c)),f=Math.round(o.width*((a+1)/c))-1,r.call(d,"screen and (min-width: "+l+"px) and (max-width: "+f+"px )",i,a),u=!u||l<u.width?{width:l,fontsize:a,layout:i}:u,s=!s||f>=s.width?{width:f,fontsize:a,layout:i}:s;return r.call(d,"screen and (max-width: "+(u.width-1)+"px)",u.layout,u.fontsize),r.call(d,"screen and (min-width: "+(s.width+1)+"px)",s.layout,s.fontsize),d}})});