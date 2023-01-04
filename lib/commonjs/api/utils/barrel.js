"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TypeUtils = require("./TypeUtils");

Object.keys(_TypeUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TypeUtils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TypeUtils[key];
    }
  });
});
//# sourceMappingURL=barrel.js.map