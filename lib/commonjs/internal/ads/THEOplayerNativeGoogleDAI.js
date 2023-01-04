"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THEOplayerNativeGoogleDAI = void 0;

var _reactNative = require("react-native");

class THEOplayerNativeGoogleDAI {
  constructor(_player) {
    this._player = _player;
  }

  get snapback() {
    return _reactNative.NativeModules.AdsModule.daiSnapback(this._player.nativeHandle);
  }

  setSnapback(enabled) {
    _reactNative.NativeModules.AdsModule.daiSetSnapback(this._player.nativeHandle, enabled);
  }

  contentTimeForStreamTime(time) {
    return _reactNative.NativeModules.AdsModule.daiContentTimeForStreamTime(this._player.nativeHandle, time);
  }

  streamTimeForContentTime(time) {
    return _reactNative.NativeModules.AdsModule.daiStreamTimeForContentTime(this._player.nativeHandle, time);
  }

}

exports.THEOplayerNativeGoogleDAI = THEOplayerNativeGoogleDAI;
//# sourceMappingURL=THEOplayerNativeGoogleDAI.js.map