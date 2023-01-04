import type { AdBreak, AdsAPI } from "react-native-theoplayer";
import type { AdDescription } from "react-native-theoplayer";
import type { Ad } from "react-native-theoplayer";
import type { THEOplayerView } from "react-native-theoplayer";
import type { GoogleDAI } from "react-native-theoplayer";
export declare class THEOplayerNativeAdsAPI implements AdsAPI {
    private _player;
    private readonly _dai;
    constructor(_player: THEOplayerView);
    playing(): Promise<boolean>;
    skip(): void;
    currentAdBreak(): Promise<AdBreak>;
    currentAds(): Promise<Ad[]>;
    scheduledAdBreaks(): Promise<AdBreak[]>;
    schedule(ad: AdDescription): void;
    get dai(): GoogleDAI | undefined;
}
