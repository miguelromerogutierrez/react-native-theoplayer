import type { ContentProtectionAPI, ContentProtectionIntegrationFactory, KeySystemId } from 'react-native-theoplayer';
export declare class WebContentProtectionRegistry implements ContentProtectionAPI {
    registerContentProtectionIntegration(integrationId: string, keySystem: KeySystemId, integrationFactory: ContentProtectionIntegrationFactory): void;
}
export declare const ContentProtectionRegistry: WebContentProtectionRegistry;
