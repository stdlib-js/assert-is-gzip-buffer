// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,i=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol:void 0,a="function"==typeof n?n.toStringTag:"";e=r&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,o,c,s;if(null==e)return t.call(e);n=e[a],s=a,r=null!=(c=e)&&i.call(c,s);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=n:delete e[a],o}:function(e){return t.call(e)};var o=e,c="function"==typeof Uint8Array,s="function"==typeof Object.defineProperty?Object.defineProperty:null,l=Object.defineProperty;function p(e){return"number"==typeof e}function u(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function f(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+u(n):u(n)+e,i&&(e="-"+e)),e}var g=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!p(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=f(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=f(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var y=Math.abs,b=String.prototype.toLowerCase,w=String.prototype.toUpperCase,v=String.prototype.replace,m=/e\+(\d)$/,_=/e-(\d)$/,S=/^(\d+)$/,k=/^(\d+)e/,x=/\.0$/,E=/\.0*e/,j=/(\..*[^0])0*e/;function A(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!p(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":y(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=v.call(t,j,"$1e"),t=v.call(t,E,"e"),t=v.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=v.call(t,m,"e+0$1"),t=v.call(t,_,"e-0$1"),e.alternate&&(t=v.call(t,S,"$1."),t=v.call(t,k,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===w.call(e.specifier)?w.call(t):b.call(t)}function T(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var V=String.fromCharCode,$=Array.isArray;function F(e){return e!=e}function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,i,n,a,o,c,s,l,p,u,g,d;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if("string"==typeof(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=O(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,F(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,F(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=h(i);break;case"s":i.maxWidth=r?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!F(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=F(a)?String(i.arg):V(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=A(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=f(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(p=i.arg,u=i.width,g=i.padRight,d=void 0,(d=u-p.length)<0?p:p=g?p+T(d):T(d)+p)),o+=i.arg||"",c+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function R(e){var r,t,i,n;for(t=[],n=0,i=C.exec(e);i;)(r=e.slice(n,C.lastIndex-i[0].length)).length&&t.push(r),t.push(P(i)),n=C.lastIndex,i=C.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function U(e){var r,t;if("string"!=typeof e)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[R(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return I.apply(null,r)}var Z,B=Object.prototype,G=B.toString,L=B.__defineGetter__,W=B.__defineSetter__,z=B.__lookupGetter__,M=B.__lookupSetter__;Z=function(){try{return s({},"x",{}),!0}catch(e){return!1}}()?l:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(z.call(e,r)||M.call(e,r)?(i=e.__proto__,e.__proto__=B,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(e,r,t.get),o&&W&&W.call(e,r,t.set),e};var X,q=Z;X=Array.isArray?Array.isArray:function(e){return"[object Array]"===o(e)};var D=X;function H(e){return null!==e&&"object"==typeof e}var J=function(e){if("function"!=typeof e)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!D(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(H);return q(H,"isObjectLikeArray",{configurable:!1,enumerable:!1,writable:!1,value:J}),function(e){return!(!function(e){return c&&e instanceof Uint8Array||"[object Uint8Array]"===o(e)}(e)&&!function(e){return H(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}(e)||e.length<19||31!==e[0]||139!==e[1]||8!==e[2])}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isgzipBuffer=r();
//# sourceMappingURL=index.js.map
