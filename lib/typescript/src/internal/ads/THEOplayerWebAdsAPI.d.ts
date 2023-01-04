import type { Ad, AdDescription, AdBreak, AdsAPI } from "react-native-theoplayer";
import type { THEOplayerView } from "../THEOplayerView.web";
import type { GoogleDAI } from "react-native-theoplayer";
export declare class THEOplayerWebAdsAPI implements AdsAPI {
    private readonly _player;
    private _dai;
    constructor(_player: THEOplayerView);
    currentAdBreak(): Promise<AdBreak>;
    currentAds(): Promise<Ad[]>;
    playing(): Promise<boolean>;
    schedule(ad: AdDescription): void;
    scheduledAdBreaks(): Promise<AdBreak[]>;
    skip(): void;
    get dai(): GoogleDAI | undefined;
}
