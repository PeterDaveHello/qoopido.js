/*!
* Qoopido.js library v3.3.4, 2014-5-25
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(t){window.qoopido.register("dom/element/emerge",t,["../element","../../function/merge","../../function/unique/uuid"])}(function(t,e,i,o,n,r,l){"use strict";function s(t){var e,i=p[t];for(e in i)"length"!==e&&_.call(i[e]);0===i.length&&(n.element.clearInterval(d[t]),delete d[t])}function u(){m.left=0,m.top=0,m.right=g.clientWidth,m.bottom=g.clientHeight}function a(){var t=this,e=t._settings.threshold||g.clientWidth*t._settings.auto,i=t._settings.threshold||g.clientHeight*t._settings.auto;t._viewport.left=m.left-e,t._viewport.top=m.top-i,t._viewport.right=m.right+e,t._viewport.bottom=m.bottom+i}function _(){var t,e=this,i=!1,o=2;!e.isVisible()||"hidden"===e.getStyle("visibility")&&e._settings.visibility!==!1||(t=e.element.getBoundingClientRect(),(t.left>=e._viewport.left&&t.top>=e._viewport.top&&t.left<=e._viewport.right&&t.top<=e._viewport.bottom||t.right>=e._viewport.left&&t.bottom>=e._viewport.top&&t.right<=e._viewport.right&&t.bottom<=e._viewport.bottom)&&((t.left>=m.left&&t.top>=m.top&&t.left<=m.right&&t.top<=m.bottom||t.right>=m.left&&t.bottom>=m.top&&t.right<=m.right&&t.bottom<=m.bottom)&&(o=1),i=!0)),(i!==e._state||i===!0&&o!==e._priority)&&c.call(e,i,o)}function c(t,e){var i=this;i._state=t,i._priority=e,i._settings.recur!==!0&&i.remove(),t===!0?i.emit(f,e):i.emit(w)}var h,v={interval:50,threshold:"auto",recur:!0,auto:.5,visibility:!0},g=n.document.documentElement,m={},d={},p={},f="emerged",w="demerged",b="resize orientationchange";if(n=t["dom/element"].create(n),"CSS1Compat"!==r.compatMode)throw"This script requires your browser to work in standards mode";return h=t["dom/element"].extend({_quid:null,_viewport:null,_element:null,_settings:null,_state:null,_priority:null,_constructor:function(e,i){var o=this;h._parent._constructor.call(o,e),i=t["function/merge"]({},v,i||{}),"auto"===i.threshold&&delete i.threshold,d[i.interval]===l&&(p[i.interval]=p[i.interval]||{length:0},d[i.interval]=n.element.setInterval(function(){s(i.interval)},i.interval)),o._quid=t["function/unique/uuid"](),o._viewport={},o._settings=i,o._state=!1,o._priority=2,p[i.interval][o._quid]=o,p[i.interval].length++,n.on(b,function(){a.call(o)}),a.call(o)},remove:function(){var t=this;delete p[t._settings.interval][t._quid],p[t._settings.interval].length--}}),n.on(b,u),u(),h});