// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t,e,r,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,i=o,u=function(t){return i.call(t)},l=Object.prototype.hasOwnProperty,f=function(t,e){return null!=t&&l.call(t,e)},c="function"==typeof Symbol?Symbol.toStringTag:"",a=f,y=c,p=o,s=u,b=function(t){var e,r,n;if(null==t)return p.call(t);r=t[y],e=a(t,y);try{t[y]=void 0}catch(e){return p.call(t)}return n=p.call(t),e?t[y]=r:delete t[y],n},_=n&&"symbol"==typeof Symbol.toStringTag?b:s,d=_,g="function"==typeof Uint8Array,m=function(t){return g&&t instanceof Uint8Array||"[object Uint8Array]"===d(t)},j="function"==typeof Object.defineProperty?Object.defineProperty:null,v=function(){try{return j({},"x",{}),!0}catch(t){return!1}},h=Object.defineProperty,w=Object.prototype,A=w.toString,S=w.__defineGetter__,O=w.__defineSetter__,T=w.__lookupGetter__,P=w.__lookupSetter__,B=h,E=function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(T.call(t,e)||P.call(t,e)?(n=t.__proto__,t.__proto__=w,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&S&&S.call(t,e,r.get),u&&O&&O.call(t,e,r.set),t},k=v()?B:E,x=_,U=Array.isArray?Array.isArray:function(t){return"[object Array]"===x(t)},V=function(t){return null!==t&&"object"==typeof t};t=V,e="isObjectLikeArray",r=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!U(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(V),k(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r});var G=V,z=function(t){return G(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};return function(t){return!(!m(t)&&!z(t)||t.length<19||31!==t[0]||139!==t[1]||8!==t[2])}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isgzipBuffer=e();
//# sourceMappingURL=browser.js.map
