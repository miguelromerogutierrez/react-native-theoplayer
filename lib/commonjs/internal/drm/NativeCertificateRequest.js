"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromNativeCertificateRequest = fromNativeCertificateRequest;
exports.toNativeCertificateRequest = toNativeCertificateRequest;

var _reactNativeTheoplayer = require("react-native-theoplayer");

function fromNativeCertificateRequest(request) {
  const {
    url,
    method,
    headers,
    useCredentials,
    base64body
  } = request;
  const body = base64body ? (0, _reactNativeTheoplayer.fromBase64StringToUint8Array)(base64body) : null;
  return {
    url,
    method,
    headers,
    useCredentials,
    body
  };
}

function toNativeCertificateRequest(requestId, integrationId, keySystemId, request) {
  return {
    requestId,
    integrationId,
    keySystemId,
    url: request.url,
    method: request.method,
    headers: request.headers,
    useCredentials: request.useCredentials ?? false,
    base64body: request.body ? (0, _reactNativeTheoplayer.fromUint8ArrayToBase64String)(request.body) : null
  };
}
//# sourceMappingURL=NativeCertificateRequest.js.map