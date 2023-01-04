import { fromNativeLicenseRequest } from './NativeLicenseRequest';
import { fromBase64StringToUint8Array, fromUint8ArrayToBase64String } from 'react-native-theoplayer';
export function fromNativeLicenseResponse(response) {
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
    request: fromNativeLicenseRequest(request)
  };
}
export function toNativeLicenseResponseResult(requestId, integrationId, keySystemId, response) {
  return {
    requestId,
    integrationId,
    keySystemId,
    base64body: response ? fromUint8ArrayToBase64String(new Uint8Array(response)) : ''
  };
}
//# sourceMappingURL=NativeLicenseResponse.js.map