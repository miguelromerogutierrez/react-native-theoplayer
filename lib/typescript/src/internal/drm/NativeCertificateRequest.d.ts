import type { NativeContentProtectionEvent } from './NativeContentProtectionEvent';
import type { CertificateRequest } from 'react-native-theoplayer';
export interface NativeCertificateRequest extends NativeContentProtectionEvent {
    url: string;
    method: string;
    headers: {
        [headerName: string]: string;
    };
    base64body: string | null;
    useCredentials: boolean;
}
export declare function fromNativeCertificateRequest(request: NativeCertificateRequest): CertificateRequest;
export declare function toNativeCertificateRequest(requestId: string, integrationId: string, keySystemId: string, request: CertificateRequest): NativeCertificateRequest;
