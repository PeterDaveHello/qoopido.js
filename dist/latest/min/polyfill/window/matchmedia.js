/*!
* Qoopido.js library v3.6.3, 2015-4-24
* https://github.com/dlueth/qoopido.js
* (c) 2015 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e){var t=[];window.getComputedStyle||t.push("polyfill/window/getcomputedstyle"),Array.prototype.indexOf||t.push("../array/indexof"),window.qoopido.register("polyfill/window/matchmedia",e,t)}(function(e,t,i,n,r,o,a){"use strict";function l(){var e=r.innerWidth||f.clientWidth,t=r.innerHeight||f.clientHeight,i=r.screen.width,n=r.screen.height,o=r.screen.colorDepth,a=r.devicePixelRatio;y.width=e,y.height=t,y["aspect-ratio"]=(e/t).toFixed(2),y.color=o,y["color-index"]=Math.pow(2,o),y["device-aspect-ratio"]=(i/n).toFixed(2),y["device-height"]=n,y["device-width"]=i,y["device-pixel-ratio"]=a||1,y.resolution=a&&96*a||r.screen.deviceXDPI||96,y.orientation=t>=e?"portrait":"landscape"}function s(e){var t,i,n={matches:!1,media:e,addListener:function(e){e&&i.push(e)},removeListener:function(e){for(var t,n=0;(t=i[n])!==a;n++)t===e&&i.splice(n,1)}};return n.matches=""===e?!0:d(e),x.push({mql:n,listeners:[]}),t=x.length-1,v[e]=t,i=x[t].listeners,n}function d(e){var t=-1!==e.indexOf(",")&&e.split(",")||[e],i=t.length-1,n=i,r=null,o=null,a="",l=0,s=!1,d="",c="",m=null,p=0,h=0,u=null,f="",x="",v="",w="",b="",q=!1;if(""===e)return!0;do if(r=t[n-i],s=!1,o=r.match(g.type),o&&(a=o[0],l=o.index),!o||-1===r.substring(0,l).indexOf("(")&&(l||!o[3]&&a!==o.input))q=!1;else{if(c=r,s="not"===o[1],l||(d=o[2],c=r.substring(a.length)),q=d===y.type||"all"===d||""===d,m=-1!==c.indexOf(" and ")&&c.split(" and ")||[c],p=m.length-1,h=p,q&&p>=0&&""!==c)do{if(u=m[p].match(g.media),!u||!y[u[3]]){q=!1;break}if(f=u[2],x=u[5],w=x,v=u[7],b=y[u[3]],v&&(w="px"===v?Number(x):"em"===v||"rem"===v?16*x:u[8]?(x/u[8]).toFixed(2):"dppx"===v?96*x:"dpcm"===v?.3937*x:Number(x)),q="min-"===f&&w?b>=w:"max-"===f&&w?w>=b:w?b===w:!!b,!q)break}while(p--);if(q)break}while(i--);return s?!q:q}function c(){var e,t,i=!1,n=0,o=0;if(x.length>0)for(l();(e=x[n])!==a;n++)if(i=d(e.mql.media),(i&&!e.mql.matches||!i&&e.mql.matches)&&(e.mql.matches=i,e.listeners))for(;(t=e.listeners[o])!==a;o++)t.call(r,e.mql)}function m(){r.clearTimeout(h),h=r.setTimeout(c,10)}function p(){var t,i=r.document.getElementsByTagName("script")[0],n=o.createElement("style"),l=["screen","print","speech","projection","handheld","tv","braille","embossed","tty"],s="#"+u+" { position: relative; z-index: 0; }",d="",c=r.addEventListener||(d="on")&&r.attachEvent,p=0;for(n.type="text/css",n.id=u,i.parentNode.insertBefore(n,i);(t=l[p])!==a;p++)s+="@media "+t+" { #"+u+" { position: relative; z-index: "+p+" } }";n.styleSheet?n.styleSheet.cssText=s:n.textContent=s,y.type=l[1*(r.getComputedStyle||e["polyfill/window/getcomputedstyle"])(n).zIndex||0],n.parentNode.removeChild(n),c(d+"resize",m),c(d+"orientationchange",m)}var h,u="qoopidoPolyfillWindowMatchmedia",f=o.documentElement,x=[],v={},y={},g={type:/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,media:/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/};return r.matchMedia||(p(),l(),r.matchMedia=function(e){var t=v[e]||!1;return t===!1?s(e):x[t].mql}),r.matchMedia});