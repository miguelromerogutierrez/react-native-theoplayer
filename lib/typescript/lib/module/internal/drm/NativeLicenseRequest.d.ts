export function fromNativeLicenseRequest(request: any): {
    url: any;
    method: any;
    headers: any;
    useCredentials: any;
    body: Uint8Array | null;
    fairplaySkdUrl: any;
};
export function toNativeLicenseRequest(requestId: any, integrationId: any, keySystemId: any, request: any): {
    requestId: any;
    integrationId: any;
    keySystemId: any;
    url: any;
    method: any;
    headers: any;
    useCredentials: any;
    base64body: string | null;
    fairplaySkdUrl: any;
};
