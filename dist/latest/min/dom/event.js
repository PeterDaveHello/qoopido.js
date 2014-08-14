/*!
* Qoopido.js library v3.4.5, 2014-7-14
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e){window.qoopido.register("dom/event",e,["../base"])}(function(e,t,r,o,i,n,a){"use strict";var p={general:{properties:"type altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" ")},mouse:{regex:new RegExp("^(?:mouse|pointer|contextmenu)|click"),properties:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement relatedTarget which".split(" "),filter:function(){var e,t=this,r=t.originalEvent,o=r.fromElement,i=r.button;null==t.pageX&&null!=r.clientX&&(e=event.target.ownerDocument||n,e=e.documentElement||e.body,t.pageX=r.clientX+(e.scrollLeft||0)-(e.clientLeft||0),t.pageY=r.clientY+(e.scrollTop||0)-(e.clientTop||0)),!t.relatedTarget&&o&&(t.relatedTarget=o===t.target?r.toElement:o),t.which||i===a||(t.which=1&i?1:2&i?3:4&i?2:0)}},key:{regex:new RegExp("^key"),properties:"char charCode key keyCode which".split(" "),filter:function(){var e=this,t=e.originalEvent;null===e.which&&(e.which=null!==t.charCode?t.charCode:t.keyCode)}}};return e.base.extend({originalEvent:null,isDelegate:!1,isDefaultPrevented:!1,isPropagationStopped:!1,isImmediatePropagationStopped:!1,_properties:null,_constructor:function(e){var t=this;t._properties=[],t._obtain(e)},_obtain:function(e){var t,r,o,i,l,s=this,g=e.type,c=[],u=0;for(t in p)r=p[t],o=r.delegate,(!r.regex||r.regex&&r.regex.test(g))&&(r.properties&&(s._properties=s._properties.concat(r.properties)),r.filter&&c.push(r.filter)),o&&(s.delegate=o);for(;(i=s._properties[u])!==a;u++)s[i]=e[i];for(s.target||(s.target=e.srcElement||n),3===s.target.nodeType&&(s.target=s.target.parentNode),s.originalEvent=e,s.metaKey=e.metaKey&&e.metaKey!==!1?!0:!1,u=0;(l=c[u])!==a;u++)l.call(s)},_dispose:function(){for(var e,t=this,r=0;(e=t._properties[r])!==a;r++)delete t[e];delete t.delegate,t.originalEvent=null,t.isDelegate=!1,t.isDefaultPrevented=!1,t.isPropagationStopped=!1,t.isImmediatePropagationStopped=!1,t._properties.length=0},preventDefault:function(){var e=this,t=e.originalEvent;t.cancelable!==!1&&(e.isDefaultPrevented=!0,t.preventDefault?t.preventDefault():t.returnValue=!1)},stopPropagation:function(){var e=this,t=e.originalEvent;e.isPropagationStopped=!0,t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0},stopImmediatePropagation:function(){var e=this,t=e.originalEvent;e.isImmediatePropagationStopped=!0,t.stopImmediatePropagation&&t.stopImmediatePropagation(),e.stopPropagation()}})});