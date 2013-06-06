/*
 * Qoopido worker class
 *
 * Copyright (c) 2013 Dirk Lüth
 *
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * @author Dirk Lüth <info@qoopido.com>
 * @require ./base
 * @require ./support
 * @require q
 */
;(function(definition, window, document, undefined) {
	'use strict';

	var namespace  = 'qoopido/worker',
		initialize = function initialize() {
			var id      = (namespace = namespace.split('/')).splice(namespace.length - 1, 1),
				pointer = window;

			for(var i = 0; namespace[i] !== undefined; i++) {
				pointer[namespace[i]] = pointer[namespace[i]] || {};

				pointer = pointer[namespace[i]];
			}

			[].push.apply(arguments, [ window, document, undefined ]);

			return (pointer[id] = definition.apply(null, arguments));
		};

	if(typeof define === 'function' && define.amd) {
		define([ './base', './support', 'q' ], initialize);
	} else {
		initialize(window.qoopido.base, window.qoopido.support, window.Q);
	}
}(function(mPrototype, mSupport, mQ, window, document, undefined) {
	'use strict';

	var supportsWorker = mSupport.supportsMethod('Worker');

	return mPrototype.extend({
		execute: function execute(pWorker, pFunction, pArguments) {
			var deferred  = mQ.defer();

			pArguments = pArguments || [];

			if(supportsWorker === true) {
				var worker = new Worker(pWorker);

				worker.addEventListener('message', function(event) {
					switch(event.data.type) {
						case 'progress':
							deferred.notify(event.data.progress);
							break;
						case 'result':
							deferred.resolve(event.data.result);
							break;
					}
				}, false);

				worker.addEventListener('error', function(event) {
					deferred.reject(event);
				}, false);

				worker.postMessage({ func: pFunction.toString(), args: pArguments });
			} else {
				setTimeout(function(){
					try {
						deferred.resolve(pFunction.apply(null, pArguments));
					} catch(exception) {
						deferred.reject();
					}
				}, 0);
			}

			return deferred.promise;
		}
	});
}, window, document));