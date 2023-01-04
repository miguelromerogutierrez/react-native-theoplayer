export class THEOplayerView extends React.PureComponent<any, any, any> {
    constructor(props: any);
    state: any;
    _adsApi: THEOplayerWebAdsAPI;
    componentDidMount(): void;
    _player: THEOplayer.ChromelessPlayer | THEOplayer.Player | undefined;
    componentWillUnmount(): void;
    seek(time: any): void;
    get ads(): THEOplayerWebAdsAPI;
    get nativePlayer(): THEOplayer.ChromelessPlayer | THEOplayer.Player | undefined;
    reset(): void;
    componentDidUpdate(prevProps: any): void;
    maybeChangeBufferingState(isBuffering: any): void;
    addEventListeners(): void;
    render(): React.DetailedReactHTMLElement<{
        id: string;
    }, HTMLElement>;
}
import React from "react";
import { THEOplayerWebAdsAPI } from "./ads/THEOplayerWebAdsAPI";
import * as THEOplayer from "theoplayer";
