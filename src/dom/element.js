/*
 * Qoopido dom/element
 *
 * Provides additional methods for DOM elements
 *
 * Copyright (c) 2014 Dirk Lueth
 *
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * @author Dirk Lueth <info@qoopido.com>
 *
 * @require ../base
 * @require ../function/unique/uuid
 * @require ./event
 * @polyfill ../polyfill/window/customevent
 * @polyfill ../polyfill/window/addeventlistener
 * @polyfill ../polyfill/window/removeeventlistener
 * @polyfill ../polyfill/window/dispatchevent
 * @polyfill ../polyfill/window/getcomputedstyle
 * @polyfill ../polyfill/element/matches
 * @polyfill ../polyfill/document/queryselector
 * @polyfill ../polyfill/document/queryselectorall
 * @optional ../pool/module
 */
/* jshint loopfunc: true */
;(function(definition) {
	var dependencies = [ '../base', '../function/unique/uuid', './event' ];

	if(!window.CustomEvent) {
		dependencies.push('../polyfill/window/customevent');
	}

	if(!window.addEventListener) {
		dependencies.push('../polyfill/window/addeventlistener');
	}

	if(!window.removeEventListener) {
		dependencies.push('../polyfill/window/removeeventlistener');
	}

	if(!window.dispatchEvent) {
		dependencies.push('../polyfill/window/dispatchevent');
	}

	if(!window.getComputedStyle) {
		dependencies.push('../polyfill/window/getcomputedstyle');
	}

	if(!Element.prototype.matches) {
		dependencies.push('../polyfill/element/matches');
	}

	if(!document.querySelector) {
		dependencies.push('../polyfill/document/queryselector');
	}

	if(!document.querySelectorAll) {
		dependencies.push('../polyfill/document/queryselectorall');
	}

	window.qoopido.register('dom/element', definition, dependencies);
}(function(modules, shared, namespace, navigator, window, document, undefined) {
	'use strict';

	var IE = (function() {
			if(document.documentMode) {
				return document.documentMode;
			} else {
				for(var i = 7; i > 0; i--) {
					var div = document.createElement('div');

					div.innerHTML = '<!--[if IE ' + i + ']><span></span><![endif]-->';

					if(div.getElementsByTagName('span').length) {
						return i;
					}
				}
			}

			return undefined;
		})(),
		stringObject     = 'object',
		stringString     = 'string',
		getComputedStyle = window.getComputedStyle || modules['polyfill/window/getcomputedstyle'],
		generateUuid     = modules['function/unique/uuid'],
		contentAttribute = ('textContent' in document.createElement('a')) ? 'textContent' : 'innerText',
		isTag            = new RegExp('^<(\\w+)\\s*/>$'),
		pool             = modules['pool/module'] && modules['pool/module'].create(modules['dom/event']) || null,
		storageEvents    = {}, 
		styleHooks       = {
			opacity: (IE <= 8) ? {
				regex:    new RegExp('alpha\\(opacity=(.*)\\)', 'i'),
				getValue: function(element) {
					var value = getComputedStyle(element, null).getPropertyValue('filter').toString().match(this.regex);

					if(value) {
						value = value[1] / 100;
					} else {
						value = 1;
					}

					return value;
				},
				setValue: function(element, value) {
					var style = element.style;

					style.zoom    = 1;
					style.opacity = value;
					style.filter  = 'alpha(opacity=' + (value * 100 + 0.5 >> 0) + ')';
				}
			} : null
		};

	function resolveElement(element) {
		var tag;

		if(typeof element === 'string') {
			try {
				if(isTag.test(element) === true) {
					tag = element.replace(isTag, '$1').toLowerCase();

					element = document.createElement(tag);
				} else {
					element = document.querySelector(element);
				}
			} catch(exception) {
				element = null;
			}
		}

		if(!element) {
			throw new Error('Element could not be resolved');
		}

		return element;
	}

	function emitEvent(event, detail, uuid) {
		var self = this;

		event = new window.CustomEvent(event, { bubbles: (event === 'load') ? false : true, cancelable: true, detail: detail });

		if(uuid) {
			event._quid      = uuid;
			event.isDelegate = true;
		}

		self.element.dispatchEvent(event);
	}

	function resolveStyleHook(method, element, property, value) {
		var hook = styleHooks[property];

		switch(method) {
			case 'get':
				return hook && hook.getValue && hook.getValue(element) || getComputedStyle(element, null).getPropertyValue(property);
			case 'set':
				hook && hook.setValue && hook.setValue(element, value) || (element.style[property] = value);

				break;
		}
	}

	return modules['base'].extend({
		type:      null,
		element:   null,
		_listener: null,
		_constructor: function(element, attributes, styles) {
			var self = this;

			element = resolveElement(element);

			self.type      = element.tagName;
			self.element   = element;
			self._listener = {};

			if(typeof attributes === 'object' && attributes !== null) {
				self.setAttributes(attributes);
			}

			if(typeof styles === 'object' && styles !== null) {
				self.setStyles(styles);
			}
		},
		getContent: function(html) {
			var element = this.element;

			return (html && html !== false) ? element.innerHTML : element[contentAttribute];
		},
		setContent: function(content, html) {
			var self    = this,
				element = self.element;

			if(html && html !== false) {
				element.innerHTML = content;
			} else {
				element[contentAttribute] = content;
			}

			return self;
		},
		getAttribute: function(attribute) {
			var self = this;

			if(attribute && typeof attribute === stringString) {
				return self.element.getAttribute(attribute[0]);
			}
		},
		getAttributes: function(attributes) {
			var self   = this,
				result = {},
				i = 0, attribute;

			if(attributes) {
				attributes = (typeof attributes === stringString) ? attributes.split(' ') : attributes;

				for(; (attribute = attributes[i]) !== undefined; i++) {
					result[attribute] = self.element.getAttributes(attribute);
				}
			}

			return result;
		},
		setAttribute: function(attribute, value) {
			var self = this;

			if(attribute && typeof attribute === stringString) {
				self.element.setAttribute(attribute, value);
			}

			return self;
		},
		setAttributes: function(attributes) {
			var self = this,
				attribute;

			if(attributes && typeof attributes === stringObject && !attributes.length) {
				for(attribute in attributes) {
					self.element.setAttribute(attribute, attributes[attribute]);
				}
			}

			return self;
		},
		removeAttribute: function(attribute) {
			var self = this;

			if(attribute && typeof attribute === stringString) {
				self.element.removeAttribute(attribute)
			}

			return self;
		},
		removeAttributes: function(attributes) {
			var self = this,
				i = 0, attribute;

			if(attributes) {
				attributes = (typeof attributes === stringString) ? attributes.split(' ') : attributes;

				for(; (attribute = attributes[i]) !== undefined; i++) {
					self.element.removeAttribute(attribute);
				}
			}

			return self;
		},
		getStyle: function(property) {
			var self = this;

			if(property && typeof property === stringString) {
				return resolveStyleHook('get', self.element, property);
			}
		},
		getStyles: function(properties) {
			var self   = this,
				result = {},
				i = 0, property;

			if(properties) {
				properties = (typeof properties === stringString) ? properties.split(' ') : properties;

				for(; (property = properties[i]) !== undefined; i++) {
					result[property] = resolveStyleHook('get', self.element, property);
				}
			}

			return result;
		},
		setStyle: function(property, value) {
			var self = this;

			if(property && typeof property === stringString) {
				resolveStyleHook('set', self.element, property, value);
			}

			return self;
		},
		setStyles: function(properties) {
			var self = this,
				property;

			if(properties && typeof properties === stringObject && !properties.length) {
				for(property in properties) {
					resolveStyleHook('set', self.element, property, properties[property]);
				}
			}

			return self;
		},
		removeStyle: function(property) {
			var self = this;

			if(property && typeof property === stringString) {
				self.setStyle(property, '');
			}

			return self;
		},
		removeStyles: function(properties) {
			var self = this,
				i = 0, property;

			if(properties) {
				properties = (typeof properties === stringString) ? properties.split(' ') : properties;

				for(; (property = properties[i]) !== undefined; i++) {
					self.setStyle(property, '');
				}
			}

			return self;
		},
		siblings: function(selector) {
			var element  = this.element,
				pointer  = element.parentNode.firstChild,
				siblings = [];

			for(; pointer; pointer = pointer.nextSibling) {
				if(pointer.nodeType === 1 && pointer !== element) {
					if(!selector || pointer.matches(selector)) {
						siblings.push(pointer);
					}
				}
			}

			return siblings;
		},
		siblingsBefore: function(selector) {
			var pointer  = this.element.previousSibling,
				siblings = [];

			for(; pointer; pointer = pointer.previousSibling) {
				if(pointer.nodeType === 1) {
					if(!selector || pointer.matches(selector)) {
						siblings.push(pointer);
					}
				}
			}

			return siblings;
		},
		siblingsAfter: function(selector) {
			var pointer  = this.element.nextSibling,
				siblings = [];

			for(; pointer; pointer = pointer.nextSibling) {
				if(pointer.nodeType === 1) {
					if(!selector || pointer.matches(selector)) {
						siblings.push(pointer);
					}
				}
			}

			return siblings;
		},
		previous: function(selector) {
			var pointer;

			if(!selector) {
				return this.element.previousSibling;
			} else {
				pointer = this.element.previousSibling;

				for(; pointer; pointer = pointer.previousSibling) {
					if(pointer.nodeType === 1 && pointer.matches(selector)) {
						return pointer;
					}
				}
			}
		},
		next: function(selector) {
			var pointer;

			if(!selector) {
				return this.element.nextSibling;
			} else {
				pointer = this.element.nextSibling;

				for(; pointer; pointer = pointer.nextSibling) {
					if(pointer.nodeType === 1 && pointer.matches(selector)) {
						return pointer;
					}
				}
			}
		},
		find: function(selector) {
			return this.element.querySelectorAll(selector);
		},
		parent: function(selector) {
			var pointer;

			if(!selector) {
				return this.element.parentNode;
			} else {
				pointer = this.element;

				for(; pointer; pointer = pointer.parentNode) {
					if(pointer.matches(selector)) {
						return pointer;
					}
				}
			}
		},
		parents: function(selector) {
			var pointer = this.element.parentNode,
				parents = [];

			for(; pointer; pointer = pointer.parentNode) {
				if(pointer.nodeType === 9) {
					return parents;
				} else if (pointer.nodeType === 1) {
					if(!selector || pointer.matches(selector)) {
						parents.push(pointer);
					}
				}
			}
		},
		isVisible: function() {
			var element = this.element;

			return !(element.offsetWidth <= 0 && element.offsetHeight <= 0);
		},
		hasClass: function(name) {
			return (new RegExp('(?:^|\\s)' + name + '(?:\\s|$)')).test(this.element.className);
		},
		addClass: function(name) {
			var self = this,
				temp;

			if(!self.hasClass(name)) {
				temp = self.element.className.split(' ');

				temp.push(name);

				self.element.className = temp.join(' ');
			}

			return self;
		},
		removeClass: function(name) {
			var self = this;

			if(self.hasClass(name)) {
				self.element.className = self.element.className.replace(new RegExp('(?:^|\\s)' + name + '(?!\\S)'));
			}

			return self;
		},
		toggleClass: function(name) {
			var self = this;

			self.hasClass(name) ? self.removeClass(name) : self.addClass(name);

			return self;
		},
		prepend: function(element) {
			var self    = this,
				target = self.element;

			element = element.element || resolveElement(element);

			target.firstChild ? target.insertBefore(element, target.firstChild) : self.append(element);

			return self;
		},
		append: function(element) {
			var self = this;

			self.element.appendChild(element.element || resolveElement(element));

			return self;
		},
		prependTo: function(target) {
			var self    = this,
				element = self.element;

			(target  = target.element || resolveElement(target)).firstChild ? target.insertBefore(element, target.firstChild) : self.appendTo(target);

			return self;
		},
		appendTo: function(target) {
			var self = this;

			(target.element || resolveElement(target)).appendChild(self.element);

			return self;
		},
		insertBefore: function(target) {
			var self    = this,
				element = self.element;

			(target  = target.element || resolveElement(target)).parentNode.insertBefore(element, target);

			return self;
		},
		insertAfter: function(target) {
			var self    = this,
				element = self.element;

			(target = target.element || resolveElement(target)).nextSibling ? target.parentNode.insertBefore(element, target.nextSibling) : self.appendTo(target.parentNode);

			return self;
		},
		replace: function(target) {
			var self    = this,
				element = self.element;

			(target  = target.element || resolveElement(target)).parentNode.replaceChild(element, target);

			return self;
		},
		replaceWith: function(element) {
			var self    = this,
				target = self.element;

			element = element.element || resolveElement(element);

			target.parentNode.replaceChild(element, target);

			return self;
		},
		hide: function() {
			return this.setStyle('display', 'none');
		},
		show: function() {
			return this.removeStyle('display');
		},
		remove: function() {
			var self    = this,
				element = self.element;

			element.parentNode.removeChild(element);

			return self;
		},
		on: function(events) {
			var self     = this,
				element  = self.element,
				delegate = (arguments.length > 2) ? arguments[1] : null,
				fn       = (arguments.length > 2) ? arguments[2] : arguments[1],
				uuid     = fn._quid || (fn._quid = generateUuid()),
				i = 0, event;

			events  = events.split(' ');

			for(; (event = events[i]) !== undefined; i++) {
				var id       = event + '-' + uuid,
					listener = function(event) {
						var uuid = event._quid || (event._quid = generateUuid()),
							delegateTo;

						if(!storageEvents[uuid]) {
							storageEvents[uuid] = pool && pool.obtain(event) || modules['dom/event'].create(event);
						}

						event      = storageEvents[uuid];
						delegateTo = event.delegate;

						window.clearTimeout(event._timeout);

						if(!delegate || event.target.matches(delegate)) {
							fn.call(event.target, event, event.originalEvent.detail);
						}

						if(delegateTo) {
							delete event.delegate;

							emitEvent.call(self, delegateTo, null, event._quid);
						}

						event._timeout = window.setTimeout(function() {
							delete storageEvents[uuid];
							delete event._timeout;

							event.dispose && event.dispose();
						}, 5000);
					};

				listener.type      = event;
				self._listener[id] = listener;

				element.addEventListener(event, listener);
			}

			return self;
		},
		one: function(events) {
			var self     = this,
				delegate = (arguments.length > 3 || typeof arguments[1] === 'string') ? arguments[1] : null,
				fn       = (arguments.length > 3 || typeof arguments[2] === 'function') ? arguments[2] : arguments[1],
				each     = ((arguments.length > 3) ? arguments[3] : arguments[2]) !== false,
				listener = function(event) {
					self.off(((each === true) ? event.type : events), listener);

					fn.call(self, event, event.originalEvent.detail);
				};

			fn._quid = listener._quid = generateUuid();

			if(delegate) {
				self.on(events, delegate, listener);
			} else {
				self.on(events, listener);
			}

			return self;
		},
		off: function(events, fn) {
			var self    = this,
				element = self.element,
				i = 0, event, id, listener;

			events = events.split(' ');

			for(; (event = events[i]) !== undefined; i++) {
				id       = fn._quid && event + '-' + fn._quid || null;
				listener = id && self._listener[id] || null;

				if(listener) {
					element.removeEventListener(event, listener);
					delete self._listener[id];
				} else {
					element.removeEventListener(event, fn);
				}
			}

			return self;
		},
		emit: function(event, data) {
			var self = this;

			emitEvent.call(self, event, data);

			return self;
		}
	});
}));