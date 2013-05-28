;(function(definition, window, document, undefined) {
	'use strict';

	var namespace = 'qoopido',
		name      = 'support/css/transform/3d';

	function initialize() {
		[].push.apply(arguments, [ window, document, undefined ]);

		window[namespace] = window[namespace] || { };

		return (window[namespace][name] = definition.apply(null, arguments));
	}

	if(typeof define === 'function' && define.amd) {
		define([ '../../../support', '../transform' ], initialize);
	} else {
		initialize(window[namespace].support, window[namespace]['support/css/transform']);
	}
}(function(mSupport, mSupportCssTransform, window, document, undefined) {
	'use strict';

	return mSupport.addTest('/css/transform/3d', function(deferred) {
		mSupportCssTransform()
			.then(function() {
				var element = mSupport.getElement('div', true);

				element.style.property = 'translate3d(0,0,0)';

				((/translate3d/).test(element.style.property)) ? deferred.resolve() : deferred.reject();
			})
			.fail(function() {
				deferred.reject();
			});
	});
}, window, document));