"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlayerError = require("./PlayerError");

Object.keys(_PlayerError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PlayerError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PlayerError[key];
    }
  });
});
//# sourceMappingURL=barrel.js.map