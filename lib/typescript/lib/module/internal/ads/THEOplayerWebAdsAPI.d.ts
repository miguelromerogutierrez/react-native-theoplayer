export class THEOplayerWebAdsAPI {
    constructor(_player: any);
    _player: any;
    currentAdBreak(): Promise<any>;
    currentAds(): Promise<any>;
    playing(): Promise<any>;
    schedule(ad: any): void;
    scheduledAdBreaks(): Promise<any>;
    skip(): void;
    get dai(): THEOplayerWebGoogleDAI | undefined;
    _dai: THEOplayerWebGoogleDAI | undefined;
}
import { THEOplayerWebGoogleDAI } from "./THEOplayerWebGoogleDAI";
