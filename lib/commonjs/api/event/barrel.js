"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlayerEvent = require("./PlayerEvent");

Object.keys(_PlayerEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PlayerEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PlayerEvent[key];
    }
  });
});

var _TrackEvent = require("./TrackEvent");

Object.keys(_TrackEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TrackEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TrackEvent[key];
    }
  });
});

var _AdEvent = require("./AdEvent");

Object.keys(_AdEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AdEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AdEvent[key];
    }
  });
});
//# sourceMappingURL=barrel.js.map