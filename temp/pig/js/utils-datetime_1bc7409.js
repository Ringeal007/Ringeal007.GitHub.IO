;/*!wiki-common:packages/utils/datetime.js*/
define("wiki-common:packages/utils/datetime",function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatDate=a,t.formatDuration=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length?arguments[1]:void 0;!1!==t&&(t=!0);return(0,i.default)(e,{leading:t})},t.formatPublishTime=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Date.now(),t=Date.now(),n=new Date(e).getTime(),o=36e5,t=t-n;if(t<6e4)return"刚刚";if(t<o)return Math.round(t/6e4)+"分钟前";if(t<864e5)return Math.round(t/o)+"小时前";return a(e,"yyyy-MM-dd hh:mm")};var o=r(e("wiki-common:node_modules/date-format/lib/index")),i=r(e("wiki-common:node_modules/format-duration/index"));function r(e){return e&&e.__esModule?e:{default:e}}function a(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Date.now();return(0,o.default)(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",new Date(e))}});