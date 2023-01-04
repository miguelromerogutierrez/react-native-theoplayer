"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THEOplayerNativeAdsAPI = void 0;

var _reactNative = require("react-native");

var _THEOplayerNativeGoogleDAI = require("./THEOplayerNativeGoogleDAI");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class THEOplayerNativeAdsAPI {
  constructor(_player) {
    this._player = _player;

    _defineProperty(this, "_dai", void 0);

    this._dai = new _THEOplayerNativeGoogleDAI.THEOplayerNativeGoogleDAI(this._player);
  }

  playing() {
    return _reactNative.NativeModules.AdsModule.playing(this._player.nativeHandle);
  }

  skip() {
    _reactNative.NativeModules.AdsModule.skip(this._player.nativeHandle);
  }

  currentAdBreak() {
    return _reactNative.NativeModules.AdsModule.currentAdBreak(this._player.nativeHandle);
  }

  currentAds() {
    return _reactNative.NativeModules.AdsModule.currentAds(this._player.nativeHandle);
  }

  scheduledAdBreaks() {
    return _reactNative.NativeModules.AdsModule.scheduledAdBreaks(this._player.nativeHandle);
  }

  schedule(ad) {
    _reactNative.NativeModules.AdsModule.schedule(this._player.nativeHandle, ad);
  }

  get dai() {
    return this._dai;
  }

}

exports.THEOplayerNativeAdsAPI = THEOplayerNativeAdsAPI;
//# sourceMappingURL=THEOplayerNativeAdsAPI.js.map