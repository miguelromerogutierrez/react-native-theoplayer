import type { NativeContentProtectionEvent } from './NativeContentProtectionEvent';
import type { LicenseResponse } from 'react-native-theoplayer';
import type { NativeLicenseRequest } from './NativeLicenseRequest';
export interface NativeLicenseResponse extends NativeContentProtectionEvent {
    url: string;
    status: number;
    statusText: string;
    headers: {
        [headerName: string]: string;
    };
    base64body: string;
    request: NativeLicenseRequest;
}
export interface NativeLicenseResponseResult extends NativeContentProtectionEvent {
    base64body: string;
}
export declare function fromNativeLicenseResponse(response: NativeLicenseResponse): LicenseResponse;
export declare function toNativeLicenseResponseResult(requestId: string, integrationId: string, keySystemId: string, response: ArrayBuffer): NativeLicenseResponseResult;
