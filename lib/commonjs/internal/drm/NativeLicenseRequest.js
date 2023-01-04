"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromNativeLicenseRequest = fromNativeLicenseRequest;
exports.toNativeLicenseRequest = toNativeLicenseRequest;

var _reactNativeTheoplayer = require("react-native-theoplayer");

function fromNativeLicenseRequest(request) {
  const {
    url,
    method,
    headers,
    useCredentials,
    base64body,
    fairplaySkdUrl
  } = request;
  const body = base64body ? (0, _reactNativeTheoplayer.fromBase64StringToUint8Array)(base64body) : null;
  return {
    url,
    method,
    headers,
    useCredentials,
    body,
    fairplaySkdUrl
  };
}

function toNativeLicenseRequest(requestId, integrationId, keySystemId, request) {
  return {
    requestId,
    integrationId,
    keySystemId,
    url: request.url,
    method: request.method,
    headers: request.headers,
    useCredentials: request.useCredentials ?? false,
    base64body: request.body ? (0, _reactNativeTheoplayer.fromUint8ArrayToBase64String)(request.body) : null,
    fairplaySkdUrl: request.fairplaySkdUrl
  };
}
//# sourceMappingURL=NativeLicenseRequest.js.map