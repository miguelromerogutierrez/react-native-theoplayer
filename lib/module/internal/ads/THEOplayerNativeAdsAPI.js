function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { NativeModules } from "react-native";
import { THEOplayerNativeGoogleDAI } from "./THEOplayerNativeGoogleDAI";
export class THEOplayerNativeAdsAPI {
  constructor(_player) {
    this._player = _player;

    _defineProperty(this, "_dai", void 0);

    this._dai = new THEOplayerNativeGoogleDAI(this._player);
  }

  playing() {
    return NativeModules.AdsModule.playing(this._player.nativeHandle);
  }

  skip() {
    NativeModules.AdsModule.skip(this._player.nativeHandle);
  }

  currentAdBreak() {
    return NativeModules.AdsModule.currentAdBreak(this._player.nativeHandle);
  }

  currentAds() {
    return NativeModules.AdsModule.currentAds(this._player.nativeHandle);
  }

  scheduledAdBreaks() {
    return NativeModules.AdsModule.scheduledAdBreaks(this._player.nativeHandle);
  }

  schedule(ad) {
    NativeModules.AdsModule.schedule(this._player.nativeHandle, ad);
  }

  get dai() {
    return this._dai;
  }

}
//# sourceMappingURL=THEOplayerNativeAdsAPI.js.map