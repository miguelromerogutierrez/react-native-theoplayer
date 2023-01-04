"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromBase64StringToUint8Array = fromBase64StringToUint8Array;
exports.fromObjectToBase64String = fromObjectToBase64String;
exports.fromObjectToString = fromObjectToString;
exports.fromObjectToUint8Array = fromObjectToUint8Array;
exports.fromStringToBase64String = fromStringToBase64String;
exports.fromStringToObject = fromStringToObject;
exports.fromStringToUint8Array = fromStringToUint8Array;
exports.fromUint8ArrayToBase64String = fromUint8ArrayToBase64String;
exports.fromUint8ArrayToObject = fromUint8ArrayToObject;
exports.fromUint8ArrayToString = fromUint8ArrayToString;

var _buffer = require("buffer");

// from object
function fromObjectToString(obj) {
  return JSON.stringify(obj);
}

function fromObjectToBase64String(obj) {
  return fromStringToBase64String(fromObjectToString(obj));
}

function fromObjectToUint8Array(obj) {
  return fromStringToUint8Array(fromObjectToString(obj));
} // from string


function fromStringToBase64String(str) {
  return _buffer.Buffer.from(str, 'utf8').toString('base64');
}

function fromStringToUint8Array(str) {
  return _buffer.Buffer.from(str, 'utf8');
}

function fromStringToObject(str) {
  return JSON.parse(str);
} // from base64 string


function fromBase64StringToUint8Array(str) {
  return _buffer.Buffer.from(str, 'base64');
} // from uint8Array


function fromUint8ArrayToBase64String(array) {
  return _buffer.Buffer.from(array).toString('base64');
}

function fromUint8ArrayToString(array) {
  return _buffer.Buffer.from(array).toString('utf8');
}

function fromUint8ArrayToObject(array) {
  return fromStringToObject(fromUint8ArrayToString(array));
}
//# sourceMappingURL=TypeUtils.js.map