/*
 * Qoopido support/css/transform/3d
 *
 * Copyright (c) 2013 Dirk Lueth
 *
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * @author Dirk Lueth <info@qoopido.com>
 *
 * @require ../../../support
 * @require ../transform
 * @require ../../../pool/dom
 */

;(function(definition) {
	window.qoopido.register('support/css/transform/3d', definition, [ '../../../support', '../transform', '../../../pool/dom' ]);
}(function(modules, shared, namespace, navigator, window, document, undefined) {
	'use strict';

	return modules['support'].addTest('/css/transform/3d', function(deferred) {
		modules['support/css/transform']()
			.then(function() {
				var sample   = shared.pool.dom.obtain('div'),
					property = modules['support'].getCssProperty('transform');

				try {
					sample.style[property] = 'translate3d(0,0,0)';
				} catch(exception) { }

				((/translate3d/).test(sample.style[property])) ? deferred.resolve() : deferred.reject();

				sample.dispose();
			})
			.fail(function() {
				deferred.reject();
			});
	});
}));