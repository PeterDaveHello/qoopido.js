(function(t,e){"use strict";function n(){return e.qoopido.initialize("proxy",t)}"function"==typeof define&&define.amd?define(["./base","./function/unique/uuid"],n):n()})(function(t){"use strict";return t.base.extend({_constructor:function(e,n){var i=Array.prototype.splice.call(arguments,2),r=function(){return n.apply(e,Array.prototype.slice.call(arguments,0).concat(i))};return r._quid=t["function/unique/uuid"](),r}})},window);