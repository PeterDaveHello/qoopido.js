(function(e,t){"use strict";function n(){return t.qoopido.initialize("support/css/borderradius",e,arguments)}"function"==typeof define&&define.amd?define(["../../support"],n):n()})(function(e){"use strict";return e.support.addTest("/css/borderradius",function(t){e.support.supportsProperty("border-radius")?t.resolve(e.support.getProperty("border-radius")):t.reject()})},window);