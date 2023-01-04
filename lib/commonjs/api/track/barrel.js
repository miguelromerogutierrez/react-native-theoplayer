"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MediaTrack = require("./MediaTrack");

Object.keys(_MediaTrack).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MediaTrack[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MediaTrack[key];
    }
  });
});

var _Quality = require("./Quality");

Object.keys(_Quality).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Quality[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Quality[key];
    }
  });
});

var _TextTrack = require("./TextTrack");

Object.keys(_TextTrack).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TextTrack[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TextTrack[key];
    }
  });
});

var _TextTrackCue = require("./TextTrackCue");

Object.keys(_TextTrackCue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TextTrackCue[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TextTrackCue[key];
    }
  });
});

var _Track = require("./Track");

Object.keys(_Track).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Track[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Track[key];
    }
  });
});
//# sourceMappingURL=barrel.js.map