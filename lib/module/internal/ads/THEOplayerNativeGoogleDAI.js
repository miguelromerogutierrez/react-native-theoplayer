import { NativeModules } from 'react-native';
export class THEOplayerNativeGoogleDAI {
  constructor(_player) {
    this._player = _player;
  }

  get snapback() {
    return NativeModules.AdsModule.daiSnapback(this._player.nativeHandle);
  }

  setSnapback(enabled) {
    NativeModules.AdsModule.daiSetSnapback(this._player.nativeHandle, enabled);
  }

  contentTimeForStreamTime(time) {
    return NativeModules.AdsModule.daiContentTimeForStreamTime(this._player.nativeHandle, time);
  }

  streamTimeForContentTime(time) {
    return NativeModules.AdsModule.daiStreamTimeForContentTime(this._player.nativeHandle, time);
  }

}
//# sourceMappingURL=THEOplayerNativeGoogleDAI.js.map