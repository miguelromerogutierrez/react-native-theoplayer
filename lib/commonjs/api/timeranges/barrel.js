"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TimeRange = require("./TimeRange");

Object.keys(_TimeRange).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TimeRange[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TimeRange[key];
    }
  });
});
//# sourceMappingURL=barrel.js.map