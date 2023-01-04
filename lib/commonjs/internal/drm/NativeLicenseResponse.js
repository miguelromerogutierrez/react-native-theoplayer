"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromNativeLicenseResponse = fromNativeLicenseResponse;
exports.toNativeLicenseResponseResult = toNativeLicenseResponseResult;

var _NativeLicenseRequest = require("./NativeLicenseRequest");

var _reactNativeTheoplayer = require("react-native-theoplayer");

function fromNativeLicenseResponse(response) {
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
    request: (0, _NativeLicenseRequest.fromNativeLicenseRequest)(request)
  };
}

function toNativeLicenseResponseResult(requestId, integrationId, keySystemId, response) {
  return {
    requestId,
    integrationId,
    keySystemId,
    base64body: response ? (0, _reactNativeTheoplayer.fromUint8ArrayToBase64String)(new Uint8Array(response)) : ''
  };
}
//# sourceMappingURL=NativeLicenseResponse.js.map