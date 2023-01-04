function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { NativeEventEmitter, NativeModules } from 'react-native';
import { fromNativeLicenseRequest, toNativeLicenseRequest } from './NativeLicenseRequest';
import { fromNativeLicenseResponse, toNativeLicenseResponseResult } from './NativeLicenseResponse';
import { fromNativeCertificateRequest, toNativeCertificateRequest } from './NativeCertificateRequest';
import { fromNativeCertificateResponse, toNativeCertificateResponseResult } from './NativeCertificateResponse';
import { isBufferSource } from '../utils/TypeUtils';
export class NativeContentProtectionRegistry {
  constructor() {
    _defineProperty(this, "emitter", void 0);

    _defineProperty(this, "registeredFactories", []);

    _defineProperty(this, "currentIntegration", undefined);

    _defineProperty(this, "onBuildIntegrationRequest", event => {
      const {
        requestId,
        integrationId,
        keySystemId,
        drmConfig
      } = event;
      console.log('ContentProtectionModule', `onBuildIntegrationRequest ${integrationId} ${keySystemId}`);
      const factory = this.getFactory(integrationId, keySystemId);

      if (factory) {
        this.currentIntegration = {
          integrationId,
          keySystemId,
          integration: factory.build(drmConfig)
        };
        NativeModules.ContentProtectionModule.onBuildProcessed({
          requestId,
          resultString: 'success'
        });
      } else {
        NativeModules.ContentProtectionModule.onBuildProcessed({
          requestId,
          resultString: 'failed'
        });
      }
    });

    _defineProperty(this, "onCertificateRequest", async request => {
      const {
        requestId,
        integrationId,
        keySystemId
      } = request;
      console.log('ContentProtectionModule', `onCertificateRequest ${integrationId} ${keySystemId}`);
      const integration = this.getIntegration(integrationId, keySystemId);

      if (integration !== null && integration !== void 0 && integration.onCertificateRequest) {
        const result = await integration.onCertificateRequest(fromNativeCertificateRequest(request)); // TODO: we also want to support ArrayBufferView results

        if (isBufferSource(result)) {
          const nativeResponse = toNativeCertificateResponseResult(requestId, integrationId, keySystemId, result);
          NativeModules.ContentProtectionModule.onCertificateRequestProcessedAsCertificate(nativeResponse);
        } else if (result) {
          const modifiedNativeRequest = toNativeCertificateRequest(requestId, integrationId, keySystemId, result);
          NativeModules.ContentProtectionModule.onCertificateRequestProcessedAsRequest(modifiedNativeRequest);
        }
      } else {
        NativeModules.ContentProtectionModule.onCertificateRequestProcessedAsRequest(request);
      }
    });

    _defineProperty(this, "onCertificateResponse", async response => {
      const {
        requestId,
        integrationId,
        keySystemId
      } = response;
      console.log('ContentProtectionModule', `onCertificateResponse ${integrationId} ${keySystemId}`);
      const integration = this.getIntegration(integrationId, keySystemId);

      if (integration !== null && integration !== void 0 && integration.onCertificateResponse) {
        const responseResult = await integration.onCertificateResponse(fromNativeCertificateResponse(response)); // TODO: we also want to support ArrayBufferView results

        const modifiedNativeResponse = toNativeCertificateResponseResult(requestId, integrationId, keySystemId, responseResult);
        NativeModules.ContentProtectionModule.onCertificateResponseProcessed(modifiedNativeResponse);
      } else {
        NativeModules.ContentProtectionModule.onCertificateResponseProcessed(response);
      }
    });

    _defineProperty(this, "onLicenseRequest", async request => {
      const {
        requestId,
        integrationId,
        keySystemId
      } = request;
      console.log('ContentProtectionModule', `onLicenseRequest ${integrationId} ${keySystemId}`);
      const integration = this.getIntegration(integrationId, keySystemId); // Optionally let the custom integration modify the request.

      if (integration !== null && integration !== void 0 && integration.onLicenseRequest) {
        const result = await integration.onLicenseRequest(fromNativeLicenseRequest(request)); // TODO: we also want to support ArrayBufferView results

        if (isBufferSource(result)) {
          const nativeResponse = toNativeLicenseResponseResult(requestId, integrationId, keySystemId, result);
          NativeModules.ContentProtectionModule.onLicenseRequestProcessedAsLicense(nativeResponse);
        } else if (result) {
          const modifiedNativeRequest = toNativeLicenseRequest(requestId, integrationId, keySystemId, result);
          NativeModules.ContentProtectionModule.onLicenseRequestProcessedAsRequest(modifiedNativeRequest);
        }
      } else {
        NativeModules.ContentProtectionModule.onLicenseRequestProcessedAsRequest(request);
      }
    });

    _defineProperty(this, "onLicenseResponse", async response => {
      const {
        requestId,
        integrationId,
        keySystemId
      } = response;
      console.log('ContentProtectionModule', `onLicenseResponse ${integrationId} ${keySystemId}`);
      const integration = this.getIntegration(integrationId, keySystemId);

      if (integration !== null && integration !== void 0 && integration.onLicenseResponse) {
        const responseResult = await integration.onLicenseResponse(fromNativeLicenseResponse(response)); // TODO: we also want to support ArrayBufferView results

        const modifiedNativeResponse = toNativeLicenseResponseResult(requestId, integrationId, keySystemId, responseResult);
        NativeModules.ContentProtectionModule.onLicenseResponseProcessed(modifiedNativeResponse);
      } else {
        NativeModules.ContentProtectionModule.onLicenseResponseProcessed(response);
      }
    });

    _defineProperty(this, "onExtractFairplayContentId", async event => {
      const {
        integrationId,
        keySystemId,
        fairplaySkdUrl,
        requestId
      } = event;
      console.log('ContentProtectionModule', `onExtractFairplayContentId ${integrationId} ${keySystemId}`);
      const integration = this.getIntegration(integrationId, keySystemId);

      if (integration !== null && integration !== void 0 && integration.extractFairplayContentId) {
        const contentId = await integration.extractFairplayContentId(fairplaySkdUrl);
        NativeModules.ContentProtectionModule.onExtractFairplayContentIdProcessed({
          requestId,
          contentId
        });
      } else {
        const contentId = fairplaySkdUrl;
        NativeModules.ContentProtectionModule.onExtractFairplayContentIdProcessed({
          requestId,
          contentId
        });
      }
    });

    this.emitter = new NativeEventEmitter(NativeModules.ContentProtectionModule);
    this.emitter.addListener('onBuildIntegration', this.onBuildIntegrationRequest);
    this.emitter.addListener('onCertificateRequest', this.onCertificateRequest);
    this.emitter.addListener('onCertificateResponse', this.onCertificateResponse);
    this.emitter.addListener('onLicenseRequest', this.onLicenseRequest);
    this.emitter.addListener('onLicenseResponse', this.onLicenseResponse);
    this.emitter.addListener('onExtractFairplayContentId', this.onExtractFairplayContentId);
  }

  registerContentProtectionIntegration(integrationId, keySystemId, integrationFactory) {
    this.registeredFactories.push({
      integrationId,
      keySystemId,
      integrationFactory
    });
    NativeModules.ContentProtectionModule.registerContentProtectionIntegration(integrationId, keySystemId);
  }

  getFactory(integrationId, keySystemId) {
    var _this$registeredFacto;

    return (_this$registeredFacto = this.registeredFactories.find(init => init.integrationId === integrationId && init.keySystemId === keySystemId)) === null || _this$registeredFacto === void 0 ? void 0 : _this$registeredFacto.integrationFactory;
  }

  getIntegration(integrationId, keySystemId) {
    var _this$currentIntegrat, _this$currentIntegrat2, _this$currentIntegrat3;

    return ((_this$currentIntegrat = this.currentIntegration) === null || _this$currentIntegrat === void 0 ? void 0 : _this$currentIntegrat.integrationId) === integrationId && ((_this$currentIntegrat2 = this.currentIntegration) === null || _this$currentIntegrat2 === void 0 ? void 0 : _this$currentIntegrat2.keySystemId) === keySystemId ? (_this$currentIntegrat3 = this.currentIntegration) === null || _this$currentIntegrat3 === void 0 ? void 0 : _this$currentIntegrat3.integration : undefined;
  }

}
export const ContentProtectionRegistry = new NativeContentProtectionRegistry();
//# sourceMappingURL=ContentProtectionRegistry.js.map