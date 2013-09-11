/*
 * Qoopido polyfill/object/create
 *
 * Borrowed from:
 * https://github.com/inexorabletash/polyfill
 *
 * Copyright (c) 2013 Dirk Lüth
 *
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * @author Dirk Lüth <info@qoopido.com>
 */
;(function(definition) {
	'use strict';

	if(typeof define === 'function' && define.amd) {
		var dependencies = [];

		if(!Object.defineProperties) {
			dependencies.push('./defineproperties');
		}

		define(dependencies, definition);
	} else {
		definition();
	}
}(function() {
	'use strict';

	if(!Object.create) {
		Object.create = function(prototype, properties) {
			if(typeof prototype !== 'object') {
				throw new TypeError();
			}

			function Constructor() {}
			Constructor.prototype = prototype;

			var obj = new Constructor();

			if(prototype) {
				obj.constructor = Constructor;
			}

			if(arguments.length > 1) {
				if(properties !== Object(properties)) {
					throw new TypeError();
				}

				Object.defineProperties(obj, properties);
			}

			return obj;
		};
	}
}));