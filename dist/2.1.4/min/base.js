(function(e,t,r,o,n){"use strict";t();var c="qoopido/base",i=function i(){return r.qoopido.shared.prepareModule(c,e,arguments)};r.qoopido=r.qoopido||{},r.qoopido.modules=r.qoopido.modules||{},r.qoopido.shared=r.qoopido.shared||{},r.qoopido.shared.prepareModule=function(e,t,i,p){for(var u=(c=e.split("/")).splice(c.length-1,1)[0],a=r,f=r.qoopido.modules,s=0;c[s]!==n;s++)a[c[s]]=a[c[s]]||{},a=a[c[s]];return[].push.apply(i,[r,o,n]),a[u]=f[e]=p===!0?t.apply(null,i).create():t.apply(null,i)},"function"==typeof define&&define.amd?define(i):i()})(function(e,t,r){"use strict";return{create:function(){var e=Object.create(this,Object.getOwnPropertyDescriptors(this));return e._constructor&&e._constructor.apply(e,arguments),e.create=e.extend=r,e},extend:function(e){return e=e||{},e._parent=Object.create(this,Object.getOwnPropertyDescriptors(this)),Object.create(this,Object.getOwnPropertyDescriptors(e))}}},function(e){"use strict";function t(){}function r(e){try{return Object[y](e,"sentinel",{}),"sentinel"in e}catch(t){}}function o(e){try{return e.sentinel=0,0===Object[O](e,"sentinel").value}catch(t){}}var n,c,i,p=null,u="function",a="object",f="undefined",s="hasOwnProperty",l="__proto__",d="prototype",y="defineProperty",b="defineProperties",O="getOwnPropertyDescriptor",j="getOwnPropertyDescriptors",_="getOwnPropertyNames",h=Object[d],w=h[l]===p,m=h[s]("__defineGetter__");if(!Object.keys){var v,g=!0,P=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];for(v in{toString:p})g=!1;Object.keys=function(t){var r,o=[];if(typeof t!==a&&typeof t!==u||t===p)throw new TypeError("Object.keys called on a non-object");for(r in t)t[s](r)&&o.push(r);if(g===!0){var n;for(n=0;(r=P[n])!==e;n++)t[s](r)&&o.push(r)}return o}}if(Object[y]&&((!r({})||typeof document!==f&&!r(document.createElement("div")))&&(n=Object[y],c=Object[b]),(!o({})||typeof document!==f&&!o(document.createElement("div")))&&(i=Object[O])),Object[y]&&n===p||(Object[y]=function(e,t,r){if(typeof e!==a&&typeof e!==u||e===p)throw new TypeError("Object[stringDefineProperty] called on non-object: "+e);if(typeof r!==a&&typeof r!==u||r===p)throw new TypeError("Property description must be an object: "+r);if(n!==p)try{return n.call(Object,e,t,r)}catch(o){}if(r[s]("value"))if(m&&(e.__lookupGetter__(t)||e.__lookupSetter__(t))){var c=e[l];e[l]=h,delete e[t],e[t]=r.value,e[l]=c}else e[t]=r.value;else{if(m===!1)throw new TypeError("getters & setters can not be defined on this javascript engine");r[s]("get")&&e.__defineGetter__(t,r.get),r[s]("set")&&e.__defineSetter__(t,r.set)}return e}),Object[b]&&c===p||(Object[b]=function(e,t){var r;if(c)try{return c.call(Object,e,t)}catch(o){}for(r in t)t[s](r)&&"__proto__"!==r&&Object[y](e,r,t[r]);return e}),Object[O]&&i===p||(Object[O]=function(e,t){var r={enumerable:!0,configurable:!0};if(typeof e!==a&&typeof e!==u||e===p)throw new TypeError("Object[stringGetOwnPropertyDescriptor] called on non-object: "+e);if(i!==p)try{return i.call(Object,e,t)}catch(o){}if(e[s](t)){if(m===!0){var n,c,f=e[l];if(e[l]=h,n=e.__lookupGetter__(t),c=e.__lookupSetter__(t),e[l]=f,n||c)return n&&(r.get=n),c&&(r.set=c),r}return r.value=e[t],r.writable=!0,r}}),Object[j]||(Object[j]=function(t){var r,o,n={},c=Object[_](t);for(r=0;(o=c[r])!==e;r++)n[o]=Object[O](t,o);return n}),Object[_]||(Object[_]=function(e){return Object.keys(e)}),!Object.create){var E;E=w||typeof document===f?function(){return{__proto__:p}}:function(){var e,r=document.createElement("iframe"),o=document.body||document.documentElement;return r.style.display="none",o.appendChild(r),r.src="javascript:",e=r.contentWindow.pointerObjectPrototype,delete e.constructor,delete e.hasOwnProperty,delete e.propertyIsEnumerable,delete e.isPrototypeOf,delete e.toLocaleString,delete e.toString,delete e.valueOf,e[l]=p,o.removeChild(r),r=p,t[d]=e,E=function(){return new t},new t},Object.create=function(e,t){function r(){}var o;if(e===p)o=E();else{if(typeof e!==a&&typeof e!==u)throw new TypeError("Object prototype may only be an Object or null");r[d]=e,o=new r,o[l]=e}return t!==void 0&&Object[b](o,t),o}}},window,document);