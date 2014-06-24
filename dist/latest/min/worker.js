/*!
* Qoopido.js library v3.3.0, 2014-5-24
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e){window.qoopido.register("worker",e,["./base","./support","q"])}(function(e,t,s,n,r){"use strict";var o=e.q||r.Q,p=new RegExp("Blob$","i"),u=e.support.supportsMethod("Worker"),a=e.support.supportsMethod("URL")?r[e.support.getMethod("URL")]:null,i=e.support.getMethod("Blob")||e.support.getMethod("BlobBuilder"),c="var self = this, regex = new RegExp(',\\s+', 'g'); self.addEventListener('message', function(pEvent) { self.postMessage({ type: 'result', result: self.process(pEvent.data.func).apply(null, pEvent.data.args)}); }, false); self.postProgress = function(pProgress) { self.postMessage({ type: 'progress', progress: pProgress}); }; self.process = function(pFunction) { var functionArguments = pFunction.substring(pFunction.indexOf('(') + 1, pFunction.indexOf(')')).replace(regex, ',').split(','); functionArguments.push(pFunction.substring(pFunction.indexOf('{') + 1, pFunction.lastIndexOf('}'))); return Function.apply(null, functionArguments); };",l=null;return u&&a&&i&&(l=p.test(i)===!0?a.createObjectURL(new r[i]([c],{type:"text/javascript"})):a.createObjectURL((new r[i]).append(c).getBlob("text/javascript"))),e.base.extend({execute:function(e,t){var s=o.defer();if(t=t||[],l){var n=new Worker(l);n.addEventListener("message",function(e){switch(e.data.type){case"progress":s.notify(e.data.progress);break;case"result":s.resolve(e.data.result)}},!1),n.addEventListener("error",function(e){s.reject(e)},!1),n.postMessage({func:e.toString(),args:t})}else setTimeout(function(){try{s.resolve(e.apply(null,t))}catch(n){s.reject()}},0);return s.promise}})});