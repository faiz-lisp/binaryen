function asmFunc(global, env, buffer) {
 "almost asm";
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 function $0(var$0) {
  var$0 = var$0 | 0;
  var $1 = 0, $2 = 0;
  return __wasm_grow_memory(var$0 | 0) | 0;
 }
 
 function $1() {
  var $0 = 0;
  return __wasm_current_memory() | 0;
 }
 
 function __wasm_ctz_i32(x) {
  x = x | 0;
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0;
  if ((x | 0) == (0 | 0)) $9 = 32; else $9 = 31 - Math_clz32(x ^ (x - 1 | 0) | 0) | 0;
  return $9 | 0;
 }
 
 function __wasm_popcnt_i32(x) {
  x = x | 0;
  var count = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0;
  count = 0;
  b : {
   l : do {
    $5 = count;
    if ((x | 0) == (0 | 0)) break b;
    x = x & (x - 1 | 0) | 0;
    count = count + 1 | 0;
    continue l;
    break l;
   } while (1);
  };
  return $5 | 0;
 }
 
 function __wasm_rotl_i32(x, k) {
  x = x | 0;
  k = k | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0;
  return ((4294967295 >>> (k & 31 | 0) | 0) & x | 0) << (k & 31 | 0) | 0 | (((4294967295 << (32 - (k & 31 | 0) | 0) | 0) & x | 0) >>> (32 - (k & 31 | 0) | 0) | 0) | 0 | 0;
 }
 
 function __wasm_rotr_i32(x, k) {
  x = x | 0;
  k = k | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0;
  return ((4294967295 << (k & 31 | 0) | 0) & x | 0) >>> (k & 31 | 0) | 0 | (((4294967295 >>> (32 - (k & 31 | 0) | 0) | 0) & x | 0) << (32 - (k & 31 | 0) | 0) | 0) | 0 | 0;
 }
 
 function __wasm_grow_memory(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_current_memory() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65535)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new global.Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = newHEAP8;
   HEAP16 = new global.Int16Array(newBuffer);
   HEAP32 = new global.Int32Array(newBuffer);
   HEAPU8 = new global.Uint8Array(newBuffer);
   HEAPU16 = new global.Uint16Array(newBuffer);
   HEAPU32 = new global.Uint32Array(newBuffer);
   HEAPF32 = new global.Float32Array(newBuffer);
   HEAPF64 = new global.Float64Array(newBuffer);
   buffer = newBuffer;
  }
  return oldPages;
 }
 
 function __wasm_current_memory() {
  return buffer.byteLength / 65536 | 0;
 }
 
 return {
  memory: Object.create(Object.prototype, {
   grow: {
    value: __wasm_grow_memory
   }, 
   buffer: {
    get: function () {
     return buffer;
    }
    
   }
  }), 
  grow: $0, 
  current: $1
 };
}
