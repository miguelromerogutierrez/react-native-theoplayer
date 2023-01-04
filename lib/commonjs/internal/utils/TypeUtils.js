"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayContainsElement_ = arrayContainsElement_;
exports.decodeNanInf = decodeNanInf;
exports.isArrayBufferView_ = void 0;
exports.isBufferSource = isBufferSource;
exports.objectToString = void 0;
const NAN_VALUE = -1;
const POS_INF_VALUE = -2; // We can't send INF and NaN values over the bridge, so convert if necessary.

function decodeNanInf(v) {
  if (v === NAN_VALUE) {
    return NaN;
  }

  if (v === POS_INF_VALUE) {
    return Infinity;
  }

  return v;
}

const objectToString = {}.toString;
exports.objectToString = objectToString;
const viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]', '[object DataView]'];

function arrayContainsElement_(array, element) {
  return array.indexOf(element) !== -1;
}

const isArrayBufferView_ = ArrayBuffer.isView || (obj => obj && arrayContainsElement_(viewClasses, objectToString.call(obj)));

exports.isArrayBufferView_ = isArrayBufferView_;

function isBufferSource(bufferSource) {
  return bufferSource instanceof ArrayBuffer || isArrayBufferView_(bufferSource);
}
//# sourceMappingURL=TypeUtils.js.map