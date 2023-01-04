"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ABRConfiguration = require("./ABRConfiguration");

Object.keys(_ABRConfiguration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ABRConfiguration[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ABRConfiguration[key];
    }
  });
});
//# sourceMappingURL=barrel.js.map