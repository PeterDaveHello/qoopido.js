(function(t,e){"use strict";function n(){var n=e.qoopido.initialize("pool/object",t,arguments);return e.qoopido.shared.pool=e.qoopido.shared.pool||{},e.qoopido.shared.pool.object=n.create(),n}"function"==typeof define&&define.amd?define(["../pool"],n):n()})(function(t,e,n,i,r){"use strict";var o,u=null===Object.prototype.__proto__,s=u?"__proto__":"prototype",a=u?null:function(){var t=r.createElement("iframe"),e=r.body||r.documentElement;t.style.display="none",e.appendChild(t),t.src="javascript:";var n=t.contentWindow.Object.prototype;return e.removeChild(t),t=null,delete n.constructor,delete n.hasOwnProperty,delete n.propertyIsEnumerable,delete n.isPrototypeOf,delete n.toLocaleString,delete n.toString,delete n.valueOf,n.__proto__=null,n}();return o=t.pool.extend({getModel:function(){return a},_dispose:function(t){var e;t[s]=a;for(e in t)delete t[e];return t},_obtain:function(){return{}}})},window);