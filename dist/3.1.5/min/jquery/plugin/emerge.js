(function(t){window.qoopido.register("jquery/plugins/emerge",t,["../../dom/element/emerge","jquery"])})(function(t,e,n,r,i){"use strict";var o,a=t.jquery||i.jQuery,s=n.pop(),l="emerged",u="demerged",c="".concat(l,".",s),f="".concat(u,".",s);return a.fn[s]=function(t){return this.each(function(){o.create(this,t)})},o=t["element/emerge"].extend({_constructor:function(t,e){var n=this,r=a(t);o._parent._constructor.call(n,t,e),n.on(l,function(t){r.trigger(c,{priority:t.data})}),n.on(u,function(){r.trigger(f)})}})});