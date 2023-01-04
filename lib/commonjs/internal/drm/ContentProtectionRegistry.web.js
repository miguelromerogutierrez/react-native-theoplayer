"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebContentProtectionRegistry = exports.ContentProtectionRegistry = void 0;

var _theoplayer = require("theoplayer");

class WebContentProtectionRegistry {
  registerContentProtectionIntegration(integrationId, keySystem, integrationFactory) {
    (0, _theoplayer.registerContentProtectionIntegration)(integrationId, keySystem, integrationFactory);
  }

}

exports.WebContentProtectionRegistry = WebContentProtectionRegistry;
const ContentProtectionRegistry = new WebContentProtectionRegistry();
exports.ContentProtectionRegistry = ContentProtectionRegistry;
//# sourceMappingURL=ContentProtectionRegistry.web.js.map