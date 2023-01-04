export class THEOplayerWebGoogleDAI {
  constructor(_googleDAI) {
    this._googleDAI = _googleDAI;
  }

  get snapback() {
    return Promise.resolve(this._googleDAI.snapback);
  }

  setSnapback(enabled) {
    this._googleDAI.snapback = enabled;
  }

  contentTimeForStreamTime(time) {
    return Promise.resolve(this._googleDAI.contentTimeForStreamTime(time));
  }

  streamTimeForContentTime(time) {
    return Promise.resolve(this._googleDAI.streamTimeForContentTime(time));
  }

}
//# sourceMappingURL=THEOplayerWebGoogleDAI.js.map