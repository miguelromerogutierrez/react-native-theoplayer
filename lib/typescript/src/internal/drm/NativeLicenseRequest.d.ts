import type { NativeContentProtectionEvent } from './NativeContentProtectionEvent';
import type { LicenseRequest } from 'react-native-theoplayer';
export interface NativeLicenseRequest extends NativeContentProtectionEvent {
    url: string;
    method: string;
    headers: {
        [headerName: string]: string;
    };
    base64body: string | null;
    useCredentials: boolean;
    fairplaySkdUrl: string | undefined;
}
export declare function fromNativeLicenseRequest(request: NativeLicenseRequest): LicenseRequest;
export declare function toNativeLicenseRequest(requestId: string, integrationId: string, keySystemId: string, request: LicenseRequest): NativeLicenseRequest;
