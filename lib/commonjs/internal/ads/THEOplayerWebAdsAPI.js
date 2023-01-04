"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THEOplayerWebAdsAPI = void 0;

var _THEOplayerWebGoogleDAI = require("./THEOplayerWebGoogleDAI");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class THEOplayerWebAdsAPI {
  constructor(_player) {
    this._player = _player;

    _defineProperty(this, "_dai", void 0);
  }

  currentAdBreak() {
    var _this$_player$nativeP, _this$_player$nativeP2;

    const adBreak = (_this$_player$nativeP = this._player.nativePlayer) === null || _this$_player$nativeP === void 0 ? void 0 : (_this$_player$nativeP2 = _this$_player$nativeP.ads) === null || _this$_player$nativeP2 === void 0 ? void 0 : _this$_player$nativeP2.currentAdBreak;
    return adBreak ? Promise.resolve(adBreak) : Promise.reject();
  }

  currentAds() {
    var _this$_player$nativeP3, _this$_player$nativeP4;

    const ads = (_this$_player$nativeP3 = this._player.nativePlayer) === null || _this$_player$nativeP3 === void 0 ? void 0 : (_this$_player$nativeP4 = _this$_player$nativeP3.ads) === null || _this$_player$nativeP4 === void 0 ? void 0 : _this$_player$nativeP4.currentAds;
    return ads ? Promise.resolve(ads) : Promise.reject();
  }

  playing() {
    var _this$_player$nativeP5, _this$_player$nativeP6;

    return Promise.resolve(((_this$_player$nativeP5 = this._player.nativePlayer) === null || _this$_player$nativeP5 === void 0 ? void 0 : (_this$_player$nativeP6 = _this$_player$nativeP5.ads) === null || _this$_player$nativeP6 === void 0 ? void 0 : _this$_player$nativeP6.playing) || false);
  }

  schedule(ad) {
    var _this$_player$nativeP7, _this$_player$nativeP8;

    (_this$_player$nativeP7 = this._player.nativePlayer) === null || _this$_player$nativeP7 === void 0 ? void 0 : (_this$_player$nativeP8 = _this$_player$nativeP7.ads) === null || _this$_player$nativeP8 === void 0 ? void 0 : _this$_player$nativeP8.schedule(ad);
  }

  scheduledAdBreaks() {
    var _this$_player$nativeP9, _this$_player$nativeP10;

    const adBreaks = (_this$_player$nativeP9 = this._player.nativePlayer) === null || _this$_player$nativeP9 === void 0 ? void 0 : (_this$_player$nativeP10 = _this$_player$nativeP9.ads) === null || _this$_player$nativeP10 === void 0 ? void 0 : _this$_player$nativeP10.scheduledAdBreaks;
    return adBreaks ? Promise.resolve(adBreaks) : Promise.reject();
  }

  skip() {
    var _this$_player$nativeP11, _this$_player$nativeP12;

    (_this$_player$nativeP11 = this._player.nativePlayer) === null || _this$_player$nativeP11 === void 0 ? void 0 : (_this$_player$nativeP12 = _this$_player$nativeP11.ads) === null || _this$_player$nativeP12 === void 0 ? void 0 : _this$_player$nativeP12.skip();
  }

  get dai() {
    if (!this._dai) {
      var _this$_player$nativeP13, _this$_player$nativeP14;

      const nativeDai = (_this$_player$nativeP13 = this._player.nativePlayer) === null || _this$_player$nativeP13 === void 0 ? void 0 : (_this$_player$nativeP14 = _this$_player$nativeP13.ads) === null || _this$_player$nativeP14 === void 0 ? void 0 : _this$_player$nativeP14.dai;

      if (!nativeDai) {
        // Not native DAI available
        return undefined;
      }

      this._dai = new _THEOplayerWebGoogleDAI.THEOplayerWebGoogleDAI(nativeDai);
    }

    return this._dai;
  }

}

exports.THEOplayerWebAdsAPI = THEOplayerWebAdsAPI;
//# sourceMappingURL=THEOplayerWebAdsAPI.js.map