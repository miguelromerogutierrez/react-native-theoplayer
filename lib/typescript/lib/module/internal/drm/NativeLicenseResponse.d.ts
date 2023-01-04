export function fromNativeLicenseResponse(response: any): {
    url: any;
    status: any;
    statusText: any;
    headers: any;
    body: Uint8Array;
    request: {
        url: any;
        method: any;
        headers: any;
        useCredentials: any;
        body: Uint8Array | null;
        fairplaySkdUrl: any;
    };
};
export function toNativeLicenseResponseResult(requestId: any, integrationId: any, keySystemId: any, response: any): {
    requestId: any;
    integrationId: any;
    keySystemId: any;
    base64body: string;
};
