;/*!wiki-common:packages/utils/guid.js*/
define("wiki-common:packages/utils/guid",function(e,i,d){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.random=i.hash=i.default=void 0;function n(){return o.v4.apply(void 0,arguments)}var o=e("wiki-common:node_modules/uuid/dist/index"),e=(i.hash=function(){return o.v5.apply(void 0,arguments)},i.random=n);i.default=e});