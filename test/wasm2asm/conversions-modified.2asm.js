function asmFunc(global, env, buffer) {
 "use asm";
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
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var i64toi32_i32$HIGH_BITS = 0;
 function $0(x) {
  x = x | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  i64toi32_i32$1 = x;
  i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
  i64toi32_i32$1 = i64toi32_i32$1;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $1(x) {
  x = x | 0;
  i64toi32_i32$HIGH_BITS = 0;
  return x | 0;
 }
 
 function $2(x, x$hi) {
  x = x | 0;
  x$hi = x$hi | 0;
  return x | 0;
 }
 
 function $3(x) {
  x = Math_fround(x);
  return ~~x | 0;
 }
 
 function $4(x) {
  x = Math_fround(x);
  return ~~x >>> 0 | 0;
 }
 
 function $5(x) {
  x = +x;
  return ~~x | 0;
 }
 
 function $6(x) {
  x = +x;
  return ~~x >>> 0 | 0;
 }
 
 function $7(x) {
  x = Math_fround(x);
  var i64toi32_i32$0 = Math_fround(0), $2 = 0, $3 = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = x;
  if (Math_fround(Math_abs(i64toi32_i32$0)) >= Math_fround(1.0)) {
   if (i64toi32_i32$0 > Math_fround(0.0)) $2 = ~~Math_fround(Math_min(Math_fround(Math_floor(Math_fround(i64toi32_i32$0 / Math_fround(4294967296.0)))), Math_fround(Math_fround(4294967296.0) - Math_fround(1.0)))) >>> 0; else $2 = ~~Math_fround(Math_ceil(Math_fround(Math_fround(i64toi32_i32$0 - Math_fround(~~i64toi32_i32$0 >>> 0 >>> 0)) / Math_fround(4294967296.0)))) >>> 0;
   $3 = $2;
  } else $3 = 0;
  i64toi32_i32$2 = ~~i64toi32_i32$0 >>> 0;
  i64toi32_i32$HIGH_BITS = $3;
  return i64toi32_i32$2 | 0;
 }
 
 function $8(x) {
  x = Math_fround(x);
  var i64toi32_i32$0 = Math_fround(0), $2 = 0, $3 = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = x;
  if (Math_fround(Math_abs(i64toi32_i32$0)) >= Math_fround(1.0)) {
   if (i64toi32_i32$0 > Math_fround(0.0)) $2 = ~~Math_fround(Math_min(Math_fround(Math_floor(Math_fround(i64toi32_i32$0 / Math_fround(4294967296.0)))), Math_fround(Math_fround(4294967296.0) - Math_fround(1.0)))) >>> 0; else $2 = ~~Math_fround(Math_ceil(Math_fround(Math_fround(i64toi32_i32$0 - Math_fround(~~i64toi32_i32$0 >>> 0 >>> 0)) / Math_fround(4294967296.0)))) >>> 0;
   $3 = $2;
  } else $3 = 0;
  i64toi32_i32$2 = ~~i64toi32_i32$0 >>> 0;
  i64toi32_i32$HIGH_BITS = $3;
  return i64toi32_i32$2 | 0;
 }
 
 function $9(x) {
  x = +x;
  var i64toi32_i32$0 = 0.0, $2 = 0, $3 = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = x;
  if (Math_abs(i64toi32_i32$0) >= 1.0) {
   if (i64toi32_i32$0 > 0.0) $2 = ~~Math_min(Math_floor(i64toi32_i32$0 / 4294967296.0), 4294967296.0 - 1.0) >>> 0; else $2 = ~~Math_ceil((i64toi32_i32$0 - +(~~i64toi32_i32$0 >>> 0 >>> 0)) / 4294967296.0) >>> 0;
   $3 = $2;
  } else $3 = 0;
  i64toi32_i32$2 = ~~i64toi32_i32$0 >>> 0;
  i64toi32_i32$HIGH_BITS = $3;
  return i64toi32_i32$2 | 0;
 }
 
 function $10(x) {
  x = +x;
  var i64toi32_i32$0 = 0.0, $2 = 0, $3 = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = x;
  if (Math_abs(i64toi32_i32$0) >= 1.0) {
   if (i64toi32_i32$0 > 0.0) $2 = ~~Math_min(Math_floor(i64toi32_i32$0 / 4294967296.0), 4294967296.0 - 1.0) >>> 0; else $2 = ~~Math_ceil((i64toi32_i32$0 - +(~~i64toi32_i32$0 >>> 0 >>> 0)) / 4294967296.0) >>> 0;
   $3 = $2;
  } else $3 = 0;
  i64toi32_i32$2 = ~~i64toi32_i32$0 >>> 0;
  i64toi32_i32$HIGH_BITS = $3;
  return i64toi32_i32$2 | 0;
 }
 
 function $11(x) {
  x = x | 0;
  return Math_fround(Math_fround(x | 0));
 }
 
 function $12(x, x$hi) {
  x = x | 0;
  x$hi = x$hi | 0;
  return Math_fround(Math_fround(+(x >>> 0) + 4294967296.0 * +(x$hi | 0)));
 }
 
 function $13(x) {
  x = x | 0;
  return +(+(x | 0));
 }
 
 function $14(x, x$hi) {
  x = x | 0;
  x$hi = x$hi | 0;
  return +(+(x >>> 0) + 4294967296.0 * +(x$hi | 0));
 }
 
 function $15(x) {
  x = x | 0;
  return Math_fround(Math_fround(x >>> 0));
 }
 
 function $16(x, x$hi) {
  x = x | 0;
  x$hi = x$hi | 0;
  return Math_fround(Math_fround(+(x >>> 0) + 4294967296.0 * +(x$hi >>> 0)));
 }
 
 function $17(x) {
  x = x | 0;
  return +(+(x >>> 0));
 }
 
 function $18(x, x$hi) {
  x = x | 0;
  x$hi = x$hi | 0;
  return +(+(x >>> 0) + 4294967296.0 * +(x$hi >>> 0));
 }
 
 function $19(x) {
  x = Math_fround(x);
  return +(+x);
 }
 
 function $20(x) {
  x = +x;
  return Math_fround(Math_fround(x));
 }
 
 function $21(x) {
  x = x | 0;
  return Math_fround((HEAP32[0] = x, HEAPF32[0]));
 }
 
 function $22(x, x$hi) {
  x = x | 0;
  x$hi = x$hi | 0;
  HEAP32[0 >> 2] = x;
  HEAP32[(0 + 4 | 0) >> 2] = x$hi;
  return +(+HEAPF64[0 >> 3]);
 }
 
 function $23(x) {
  x = Math_fround(x);
  return (HEAPF32[0] = x, HEAP32[0]) | 0;
 }
 
 function $24(x) {
  x = +x;
  var i64toi32_i32$1 = 0;
  HEAPF64[0 >> 3] = x;
  i64toi32_i32$1 = HEAP32[0 >> 2] | 0;
  i64toi32_i32$HIGH_BITS = HEAP32[(0 + 4 | 0) >> 2] | 0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_ctz_i32(x) {
  x = x | 0;
  var $1 = 0;
  if ((x | 0) == (0 | 0)) $1 = 32; else $1 = 31 - Math_clz32(x ^ (x - 1 | 0) | 0) | 0;
  return $1 | 0;
 }
 
 function __wasm_popcnt_i32(x) {
  x = x | 0;
  var count = 0, $2 = 0;
  count = 0;
  b : {
   l : do {
    $2 = count;
    if ((x | 0) == (0 | 0)) break b;
    x = x & (x - 1 | 0) | 0;
    count = count + 1 | 0;
    continue l;
    break l;
   } while (1);
  };
  return $2 | 0;
 }
 
 function __wasm_rotl_i32(x, k) {
  x = x | 0;
  k = k | 0;
  return ((4294967295 >>> (k & 31 | 0) | 0) & x | 0) << (k & 31 | 0) | 0 | (((4294967295 << (32 - (k & 31 | 0) | 0) | 0) & x | 0) >>> (32 - (k & 31 | 0) | 0) | 0) | 0 | 0;
 }
 
 function __wasm_rotr_i32(x, k) {
  x = x | 0;
  k = k | 0;
  return ((4294967295 << (k & 31 | 0) | 0) & x | 0) >>> (k & 31 | 0) | 0 | (((4294967295 >>> (32 - (k & 31 | 0) | 0) | 0) & x | 0) << (32 - (k & 31 | 0) | 0) | 0) | 0 | 0;
 }
 
 return {
  i64_extend_s_i32: $0, 
  i64_extend_u_i32: $1, 
  i32_wrap_i64: $2, 
  i32_trunc_s_f32: $3, 
  i32_trunc_u_f32: $4, 
  i32_trunc_s_f64: $5, 
  i32_trunc_u_f64: $6, 
  i64_trunc_s_f32: $7, 
  i64_trunc_u_f32: $8, 
  i64_trunc_s_f64: $9, 
  i64_trunc_u_f64: $10, 
  f32_convert_s_i32: $11, 
  f32_convert_s_i64: $12, 
  f64_convert_s_i32: $13, 
  f64_convert_s_i64: $14, 
  f32_convert_u_i32: $15, 
  f32_convert_u_i64: $16, 
  f64_convert_u_i32: $17, 
  f64_convert_u_i64: $18, 
  f64_promote_f32: $19, 
  f32_demote_f64: $20, 
  f32_reinterpret_i32: $21, 
  f64_reinterpret_i64: $22, 
  i32_reinterpret_f32: $23, 
  i64_reinterpret_f64: $24
 };
}

