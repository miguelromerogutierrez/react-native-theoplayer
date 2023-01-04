"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  THEOplayerView: true,
  ContentProtectionRegistry: true
};
Object.defineProperty(exports, "ContentProtectionRegistry", {
  enumerable: true,
  get: function () {
    return _ContentProtectionRegistry.ContentProtectionRegistry;
  }
});
Object.defineProperty(exports, "THEOplayerView", {
  enumerable: true,
  get: function () {
    return _THEOplayerView.THEOplayerView;
  }
});

var _barrel = require("./api/barrel");

Object.keys(_barrel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _barrel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _barrel[key];
    }
  });
});

var _THEOplayerView = require("./internal/THEOplayerView");

var _ContentProtectionRegistry = require("./internal/drm/ContentProtectionRegistry");
//# sourceMappingURL=index.js.map