export class NativeContentProtectionRegistry {
    currentIntegration: {
        integrationId: any;
        keySystemId: any;
        integration: any;
    };
    emitter: NativeEventEmitter;
    registerContentProtectionIntegration(integrationId: any, keySystemId: any, integrationFactory: any): void;
    getFactory(integrationId: any, keySystemId: any): any;
    getIntegration(integrationId: any, keySystemId: any): any;
}
export const ContentProtectionRegistry: NativeContentProtectionRegistry;
import { NativeEventEmitter } from "react-native";
