import type { NativeContentProtectionEvent } from './NativeContentProtectionEvent';
import type { CertificateResponse } from 'react-native-theoplayer';
import type { NativeCertificateRequest } from './NativeCertificateRequest';
export interface NativeCertificateResponse extends NativeContentProtectionEvent {
    url: string;
    status: number;
    statusText: string;
    headers: {
        [headerName: string]: string;
    };
    base64body: string;
    request: NativeCertificateRequest;
}
export interface NativeCertificateResponseResult extends NativeContentProtectionEvent {
    base64body: string;
}
export declare function fromNativeCertificateResponse(response: NativeCertificateResponse): CertificateResponse;
export declare function toNativeCertificateResponseResult(requestId: string, integrationId: string, keySystemId: string, response: ArrayBuffer): NativeCertificateResponseResult;
