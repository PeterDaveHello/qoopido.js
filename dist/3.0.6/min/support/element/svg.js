(function(t,e){"use strict";function n(){return e.qoopido.initialize("support/element/svg",t,arguments)}"function"==typeof define&&define.amd?define(["../../support"],n):n()})(function(t,e,n,i,o){"use strict";return t.support.addTest("/element/svg",function(t){o.createElementNS&&o.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect?t.resolve():t.reject()})},window);