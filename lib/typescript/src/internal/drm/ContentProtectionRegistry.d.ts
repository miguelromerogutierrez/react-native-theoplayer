import type { ContentProtectionAPI } from 'react-native-theoplayer';
import type { KeySystemId } from 'react-native-theoplayer';
import type { ContentProtectionIntegrationFactory } from 'react-native-theoplayer';
export declare class NativeContentProtectionRegistry implements ContentProtectionAPI {
    private emitter;
    private registeredFactories;
    private currentIntegration;
    constructor();
    registerContentProtectionIntegration(integrationId: string, keySystemId: KeySystemId, integrationFactory: ContentProtectionIntegrationFactory): void;
    private getFactory;
    private getIntegration;
    private onBuildIntegrationRequest;
    private onCertificateRequest;
    private onCertificateResponse;
    private onLicenseRequest;
    private onLicenseResponse;
    private onExtractFairplayContentId;
}
export declare const ContentProtectionRegistry: NativeContentProtectionRegistry;
