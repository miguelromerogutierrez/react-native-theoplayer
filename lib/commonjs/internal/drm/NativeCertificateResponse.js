"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromNativeCertificateResponse = fromNativeCertificateResponse;
exports.toNativeCertificateResponseResult = toNativeCertificateResponseResult;

var _NativeCertificateRequest = require("./NativeCertificateRequest");

var _reactNativeTheoplayer = require("react-native-theoplayer");

function fromNativeCertificateResponse(response) {
  const {
    url,
    status,
    statusText,
    headers,
    base64body,
    request
  } = response;
  const body = base64body ? (0, _reactNativeTheoplayer.fromBase64StringToUint8Array)(base64body) : new Uint8Array();
  return {
    url,
    status,
    statusText,
    headers,
    body,
    request: (0, _NativeCertificateRequest.fromNativeCertificateRequest)(request)
  };
}

function toNativeCertificateResponseResult(requestId, integrationId, keySystemId, response) {
  return {
    requestId,
    integrationId,
    keySystemId,
    base64body: response ? (0, _reactNativeTheoplayer.fromUint8ArrayToBase64String)(new Uint8Array(response)) : ''
  };
}
//# sourceMappingURL=NativeCertificateResponse.js.map