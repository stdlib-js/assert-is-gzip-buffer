// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).isgzipBuffer=t()}(this,(function(){"use strict";var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return r&&"symbol"==typeof Symbol.toStringTag},e=Object.prototype.toString,n=e;var o=function(r){return n.call(r)},i=Object.prototype.hasOwnProperty;var u=function(r,t){return null!=r&&i.call(r,t)},a="function"==typeof Symbol?Symbol.toStringTag:"",f=u,c=a,l=e;var y=o,p=function(r){var t,e,n;if(null==r)return l.call(r);e=r[c],t=f(r,c);try{r[c]=void 0}catch(t){return l.call(r)}return n=l.call(r),t?r[c]=e:delete r[c],n},s=t()?p:y,b=s,_="function"==typeof Uint8Array;var v=function(r){return _&&r instanceof Uint8Array||"[object Uint8Array]"===b(r)},d="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=function(){try{return d({},"x",{}),!0}catch(r){return!1}},m=Object.defineProperty,j=Object.prototype,h=j.toString,w=j.__defineGetter__,A=j.__defineSetter__,S=j.__lookupGetter__,O=j.__lookupSetter__;var T=m,P=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===h.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===h.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(S.call(r,t)||O.call(r,t)?(n=r.__proto__,r.__proto__=j,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&w&&w.call(r,t,e.get),u&&A&&A.call(r,t,e.set),r},B=g()?T:P;var E=function(r,t,e){B(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},k=s;var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===k(r)};var U=function(r){return null!==r&&"object"==typeof r};E(U,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!x(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(U));var V=U;var G=v,z=function(r){return V(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};return function(r){return!(!G(r)&&!z(r))&&(!(r.length<19)&&(31===r[0]&&139===r[1]&&8===r[2]))}}));
//# sourceMappingURL=bundle.js.map
