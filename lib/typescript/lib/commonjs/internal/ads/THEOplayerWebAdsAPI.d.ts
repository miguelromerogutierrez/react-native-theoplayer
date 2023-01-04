export const __esModule: boolean;
export class THEOplayerWebAdsAPI {
    constructor(_player: any);
    _player: any;
    currentAdBreak(): Promise<any>;
    currentAds(): Promise<any>;
    playing(): Promise<any>;
    schedule(ad: any): void;
    scheduledAdBreaks(): Promise<any>;
    skip(): void;
    get dai(): _THEOplayerWebGoogleDAI.THEOplayerWebGoogleDAI | undefined;
    _dai: _THEOplayerWebGoogleDAI.THEOplayerWebGoogleDAI | undefined;
}
import _THEOplayerWebGoogleDAI = require("./THEOplayerWebGoogleDAI");
