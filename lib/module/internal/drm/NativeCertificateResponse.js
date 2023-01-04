import { fromNativeCertificateRequest } from './NativeCertificateRequest';
import { fromBase64StringToUint8Array, fromUint8ArrayToBase64String } from 'react-native-theoplayer';
export function fromNativeCertificateResponse(response) {
  const {
    url,
    status,
    statusText,
    headers,
    base64body,
    request
  } = response;
  const body = base64body ? fromBase64StringToUint8Array(base64body) : new Uint8Array();
  return {
    url,
    status,
    statusText,
    headers,
    body,
    request: fromNativeCertificateRequest(request)
  };
}
export function toNativeCertificateResponseResult(requestId, integrationId, keySystemId, response) {
  return {
    requestId,
    integrationId,
    keySystemId,
    base64body: response ? fromUint8ArrayToBase64String(new Uint8Array(response)) : ''
  };
}
//# sourceMappingURL=NativeCertificateResponse.js.map