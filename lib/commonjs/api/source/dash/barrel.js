"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DashPlaybackConfiguration = require("./DashPlaybackConfiguration");

Object.keys(_DashPlaybackConfiguration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DashPlaybackConfiguration[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DashPlaybackConfiguration[key];
    }
  });
});
//# sourceMappingURL=barrel.js.map