import { PureComponent } from 'react';
import type { AdsAPI, PlayerError, THEOplayerViewProps } from 'react-native-theoplayer';
import { THEOplayerViewComponent } from 'react-native-theoplayer';
import * as THEOplayer from 'theoplayer';
interface THEOplayerRCTViewState {
    isBuffering: boolean;
    error?: PlayerError;
}
export declare class THEOplayerView extends PureComponent<THEOplayerViewProps, THEOplayerRCTViewState> implements THEOplayerViewComponent {
    private _player;
    private readonly _adsApi;
    private static initialState;
    constructor(props: THEOplayerViewProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    seek(time: number): void;
    get ads(): AdsAPI;
    get nativePlayer(): THEOplayer.ChromelessPlayer | null;
    private reset;
    componentDidUpdate(prevProps: Readonly<THEOplayerViewProps>): void;
    private maybeChangeBufferingState;
    private onAddTextTrackCue;
    private onRemoveTextTrackCue;
    private onActiveQualityChanged;
    private addEventListeners;
    private dispatchTextTrackListEvent;
    private dispatchMediaTrackListEvent;
    render(): JSX.Element;
}
export {};
