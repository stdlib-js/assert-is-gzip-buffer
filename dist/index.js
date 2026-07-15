"use strict";var f=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(s){throw (i=0, s)}};};var t=f(function(p,e){
var n=require('@stdlib/assert-is-uint8array/dist'),u=require('@stdlib/assert-is-buffer/dist');function x(r){return!n(r)&&!u(r)||r.length<19?!1:r[0]===31&&r[1]===139&&r[2]===8}e.exports=x
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
