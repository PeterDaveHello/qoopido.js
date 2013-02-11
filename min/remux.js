(function(e,t,n,r){"use strict";var i="qoopido",s="remux",o=function(){return[].push.apply(arguments,[t,n,r]),t[i]=t[i]||{},t[i][s]=e.apply(null,arguments).create()};typeof define=="function"&&define.amd?define(["./emitter","./support"],o):o(t[i].emitter,t[i].support)})(function(e,t,n,r,i){"use strict";function m(){return Math.round(screen.deviceXDPI/screen.logicalXDPI*100)}function g(){if(r.body)return v={},v.body=r.body,v.element=r.createElement("div"),v.container=r.createElement("div"),v.element.innerHTML="1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0",v.element.setAttribute("style","font: 100px/1em sans-serif !important; -webkit-text-size-adjust: none !important; height: auto !important; width: 1em !important; padding: 0 !important; overflow: visible !important;"),v.container.setAttribute("style","width: 0 !important; height: 0 !important; overflow: hidden !important; visibility: hidden !important; position: absolute; !important"),v.container.appendChild(v.element),f=y,f()}function y(){var e;return v!==!1&&(v.body.appendChild(v.container),e=Math.round(1e3/v.element.clientHeight*100)/100,v.body.removeChild(v.container)),e}function b(){v={},v.method=function(){return n[t.getMethod("matchMedia")].apply(n,arguments)};switch(t.getPrefix().properties[0]){case"webkit":v.property="-webkit-min-device-pixel-ratio";break;case"o":v.property="-o-min-device-pixel-ratio";break;default:v.property="min--moz-device-pixel-ratio"}return f=E,f()}function w(e,t,n,r){if(v!==!1){var i=(e+t)/2,s="("+v.property+":"+i+")";return n<=0||t-e<r?i:v.method(s).matches?w(i,t,n-1,r):w(e,i,n-1,r)}}function E(){var e=Math.round(w(0,10,20,1e-4)*100)/100,t=Math.round(d.ratio.device*100)/100;return e===t&&(d.ratio.device=1),e}var s,o,u,a,f,l=r.getElementsByTagName("html")[0],c=r.documentElement,h={},p=[],d={layout:null,width:null,size:{base:null,current:null,zoomed:null},ratio:{device:n.devicePixelRatio||1,zoom:null,size:null,total:null,image:null}},v=!1;return e.extend({_constructor:function(){var r=this,i=function(){s!==null&&n.clearTimeout(s),s=n.setTimeout(function(){r.updateState()},20)};r._parent._constructor.call(r),!isNaN(screen.logicalXDPI)&&!isNaN(screen.systemXDPI)?f=m:t.supportsProperty("webkitTextSizeAdjust")!==!1?f=g:t.supportsMethod("matchMedia")!==!1?f=b:f=function(){return 1},n.addEventListener("resize",i,!1),n.addEventListener("orientationchange",i,!1),r.updateState()},addLayout:function(t,n){var r=this;if(arguments.length===1){var i;for(i in arguments[0])h[i]=arguments[0][i]}else h[arguments[0]]=arguments[1];return r.updateState(),r},getState:function(){return d},updateState:function(){var t=this,r=null,s;d.ratio.device=n.devicePixelRatio||1,d.ratio.zoom=f()||1,d.width=c.offsetWidth*d.ratio.zoom;for(s in h)o=h[s],o.breakpoint&&d.width>=o.breakpoint&&(r=s);if(r===null)return t;r!==d.layout&&(d.layout=r,d.size.base=o.base,l.setAttribute("data-layout",r),p.push("layoutchange")),r=h[r],d.size.current=Math.max(r.min,Math.min(r.max,Math.floor(r.base*(d.width/r.width)))),u=Math.round(d.ratio.zoom*(d.size.current/r.base)*r.base),u!==d.size.zoomed&&(l.style.fontSize=u+"px",d.size.zoomed=u,d.ratio.size=d.size.current/r.base,d.ratio.total=d.ratio.size*d.ratio.device,d.ratio.image=Math.round(Math.ceil(d.ratio.total/.25)*25)/100,p.push("ratiochange"));for(s=0;(a=p[s])!==i;s++)t.emit(a,d);return p.length=0,t}})},window,document);