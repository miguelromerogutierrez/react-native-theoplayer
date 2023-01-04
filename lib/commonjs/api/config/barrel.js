"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlayerConfiguration = require("./PlayerConfiguration");

Object.keys(_PlayerConfiguration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PlayerConfiguration[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PlayerConfiguration[key];
    }
  });
});
//# sourceMappingURL=barrel.js.map