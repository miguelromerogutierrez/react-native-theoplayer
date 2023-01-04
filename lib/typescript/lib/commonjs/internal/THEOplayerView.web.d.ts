export const __esModule: boolean;
declare const THEOplayerView_base: any;
export class THEOplayerView extends THEOplayerView_base {
    [x: string]: any;
    constructor(props: any);
    state: any;
    _adsApi: _THEOplayerWebAdsAPI.THEOplayerWebAdsAPI;
    componentDidMount(): void;
    _player: any;
    componentWillUnmount(): void;
    seek(time: any): void;
    get ads(): _THEOplayerWebAdsAPI.THEOplayerWebAdsAPI;
    get nativePlayer(): any;
    reset(): void;
    componentDidUpdate(prevProps: any): void;
    maybeChangeBufferingState(isBuffering: any): void;
    addEventListeners(): void;
    render(): any;
}
import _THEOplayerWebAdsAPI = require("./ads/THEOplayerWebAdsAPI");
export {};
