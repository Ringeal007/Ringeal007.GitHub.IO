;/*!wiki-common:packages/utils/platform.js*/
define("wiki-common:packages/utils/platform",function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.isIE=function(e){var i=-1<t.indexOf("compatible")&&-1<t.indexOf("MSIE"),n=-1<t.indexOf("Trident")&&-1<t.indexOf("rv:11.0");if(!e)return i||n;if(11===e)return n;new RegExp("MSIE (\\d+\\.\\d+);").test(t);i=parseFloat(RegExp.$1);return e===i};var t=navigator.userAgent});