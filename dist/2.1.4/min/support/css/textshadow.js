(function(e,t){"use strict";var r="qoopido/support/css/textshadow",n=function n(){return t.qoopido.shared.prepareModule(r,e,arguments)};"function"==typeof define&&define.amd?define(["../../support"],n):n(t.qoopido.support)})(function(e){"use strict";return e.addTest("/css/textshadow",function(t){e.supportsProperty("text-shadow")?t.resolve(e.getProperty("text-shadow")):t.reject()})},window,document);