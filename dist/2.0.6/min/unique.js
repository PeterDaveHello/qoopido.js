(function(t,e,n,r){"use strict";var o="qoopido/unique",i=function i(){for(var i=(o=o.split("/")).splice(o.length-1,1),s=e,u=0;o[u]!==r;u++)s[o[u]]=s[o[u]]||{},s=s[o[u]];return[].push.apply(arguments,[e,n,r]),s[i]=t.apply(null,arguments)};"function"==typeof define&&define.amd?define(["./base"],i):i(e.qoopido.base)})(function(t){"use strict";function e(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=0|16*Math.random(),n="x"===t?e:8|3&e;return n.toString(16)})}function n(t){for(t=parseInt(t,10)||12,r="",o=0;t>o;o++)r+=s[parseInt(Math.random()*(s.length-1),10)];return r}var r,o,i={uuid:{},string:{}},s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");return t.extend({uuid:function(){do r=e();while(i.uuid[r]!==undefined);return i.uuid[r]=!0,r},string:function(t){do r=n(t);while(i.string[r]!==undefined);return i.string[r]=!0,r}})},window,document);