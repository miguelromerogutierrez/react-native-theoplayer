export class THEOplayerNativeAdsAPI {
    constructor(_player: any);
    _player: any;
    _dai: THEOplayerNativeGoogleDAI;
    playing(): any;
    skip(): void;
    currentAdBreak(): any;
    currentAds(): any;
    scheduledAdBreaks(): any;
    schedule(ad: any): void;
    get dai(): THEOplayerNativeGoogleDAI;
}
import { THEOplayerNativeGoogleDAI } from "./THEOplayerNativeGoogleDAI";
