/*
 * Qoopido polyfill/document/queryselector
 *
 * Borrowed from:
 * https://github.com/inexorabletash/polyfill
 *
 * Copyright (c) 2013 Dirk Lueth
 *
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * @author Dirk Lueth <info@qoopido.com>
 *
 * @polyfill ./queryselectorall
 */
;(function(definition) {
	'use strict';

	if(typeof define === 'function' && define.amd) {
		var dependencies = [];

		if(!Object.defineProperty) {
			dependencies.push('./queryselectorall');
		}

		define(dependencies, definition);
	} else {
		definition();
	}
}(function() {
	'use strict';

	if(!document.getElementsByClassName) {
		var regex = new RegExp('^|\\s+', 'g');

		document.getElementsByClassName = function(classname) {
			classname = String(classname).replace(regex, '.');

			return document.querySelectorAll(classname);
		};
	}
}));