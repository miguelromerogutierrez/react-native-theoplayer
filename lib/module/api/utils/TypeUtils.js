import { Buffer } from 'buffer'; // from object

export function fromObjectToString(obj) {
  return JSON.stringify(obj);
}
export function fromObjectToBase64String(obj) {
  return fromStringToBase64String(fromObjectToString(obj));
}
export function fromObjectToUint8Array(obj) {
  return fromStringToUint8Array(fromObjectToString(obj));
} // from string

export function fromStringToBase64String(str) {
  return Buffer.from(str, 'utf8').toString('base64');
}
export function fromStringToUint8Array(str) {
  return Buffer.from(str, 'utf8');
}
export function fromStringToObject(str) {
  return JSON.parse(str);
} // from base64 string

export function fromBase64StringToUint8Array(str) {
  return Buffer.from(str, 'base64');
} // from uint8Array

export function fromUint8ArrayToBase64String(array) {
  return Buffer.from(array).toString('base64');
}
export function fromUint8ArrayToString(array) {
  return Buffer.from(array).toString('utf8');
}
export function fromUint8ArrayToObject(array) {
  return fromStringToObject(fromUint8ArrayToString(array));
}
//# sourceMappingURL=TypeUtils.js.map