import { fromBase64StringToUint8Array, fromUint8ArrayToBase64String } from 'react-native-theoplayer';
export function fromNativeLicenseRequest(request) {
  const {
    url,
    method,
    headers,
    useCredentials,
    base64body,
    fairplaySkdUrl
  } = request;
  const body = base64body ? fromBase64StringToUint8Array(base64body) : null;
  return {
    url,
    method,
    headers,
    useCredentials,
    body,
    fairplaySkdUrl
  };
}
export function toNativeLicenseRequest(requestId, integrationId, keySystemId, request) {
  return {
    requestId,
    integrationId,
    keySystemId,
    url: request.url,
    method: request.method,
    headers: request.headers,
    useCredentials: request.useCredentials ?? false,
    base64body: request.body ? fromUint8ArrayToBase64String(request.body) : null,
    fairplaySkdUrl: request.fairplaySkdUrl
  };
}
//# sourceMappingURL=NativeLicenseRequest.js.map