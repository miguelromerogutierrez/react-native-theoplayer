export const __esModule: boolean;
declare const THEOplayerView_base: any;
export class THEOplayerView extends THEOplayerView_base {
    [x: string]: any;
    constructor(props: any);
    _root: any;
    state: any;
    _adsApi: _THEOplayerNativeAdsAPI.THEOplayerNativeAdsAPI;
    componentWillUnmount(): void;
    destroyTheoPlayer(): void;
    seek(time: any): void;
    get nativeHandle(): number | null;
    get ads(): _THEOplayerNativeAdsAPI.THEOplayerNativeAdsAPI;
    reset(): void;
    setNativeProps(nativeProps: any): void;
    maybeChangeBufferingState(isBuffering: any): void;
    buildWrapperProps(): any;
    render(): any;
}
import _THEOplayerNativeAdsAPI = require("./ads/THEOplayerNativeAdsAPI");
export {};
