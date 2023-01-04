import React, { PureComponent } from 'react';
import { NativeSyntheticEvent, HostComponent } from 'react-native';
import type { DurationChangeEvent, ErrorEvent, LoadedMetadataEvent, ReadyStateChangeEvent, THEOplayerViewComponent, THEOplayerViewProps, TimeUpdateEvent, ProgressEvent, PlayerError, SegmentNotFoundEvent, TextTrackListEvent, TextTrackEvent, AdEvent, AdsAPI, MediaTrackEvent, MediaTrackListEvent } from 'react-native-theoplayer';
import type { SourceDescription } from 'react-native-theoplayer';
interface THEOplayerRCTViewProps extends THEOplayerViewProps {
    ref: React.RefObject<THEOplayerViewNativeComponent>;
    src: SourceDescription;
    seek?: number;
    onNativeSourceChange: () => void;
    onNativeLoadStart: () => void;
    onNativeLoadedData: () => void;
    onNativeLoadedMetadata: (event: NativeSyntheticEvent<LoadedMetadataEvent>) => void;
    onNativeReadyStateChange?: (event: NativeSyntheticEvent<ReadyStateChangeEvent>) => void;
    onNativeError: (event: NativeSyntheticEvent<ErrorEvent>) => void;
    onNativeProgress: (event: NativeSyntheticEvent<ProgressEvent>) => void;
    onNativePlay: () => void;
    onNativePlaying: () => void;
    onNativePause: () => void;
    onNativeSeeking: () => void;
    onNativeSeeked: () => void;
    onNativeEnded: () => void;
    onNativeTimeUpdate: (event: NativeSyntheticEvent<TimeUpdateEvent>) => void;
    onNativeDurationChange: (event: NativeSyntheticEvent<DurationChangeEvent>) => void;
    onNativeSegmentNotFound: (event: NativeSyntheticEvent<SegmentNotFoundEvent>) => void;
    onNativeTextTrackListEvent: (event: NativeSyntheticEvent<TextTrackListEvent>) => void;
    onNativeTextTrackEvent: (event: NativeSyntheticEvent<TextTrackEvent>) => void;
    onNativeMediaTrackListEvent: (event: NativeSyntheticEvent<MediaTrackListEvent>) => void;
    onNativeMediaTrackEvent: (event: NativeSyntheticEvent<MediaTrackEvent>) => void;
    onNativeAdEvent: (event: NativeSyntheticEvent<AdEvent>) => void;
    onNativeFullscreenPlayerWillPresent?: () => void;
    onNativeFullscreenPlayerDidPresent?: () => void;
    onNativeFullscreenPlayerWillDismiss?: () => void;
    onNativeFullscreenPlayerDidDismiss?: () => void;
}
interface THEOplayerRCTViewState {
    isBuffering: boolean;
    error?: PlayerError;
}
interface THEOplayerViewNativeComponent extends THEOplayerViewComponent, HostComponent<THEOplayerViewProps> {
    setNativeProps: (props: Partial<THEOplayerRCTViewProps>) => void;
}
export declare class THEOplayerView extends PureComponent<THEOplayerViewProps, THEOplayerRCTViewState> implements THEOplayerViewComponent {
    private readonly _root;
    private readonly _adsApi;
    private static initialState;
    constructor(props: THEOplayerRCTViewProps);
    componentWillUnmount(): void;
    private destroyTheoPlayer;
    seek(time: number): void;
    get nativeHandle(): number | null;
    get ads(): AdsAPI;
    private reset;
    private setNativeProps;
    private maybeChangeBufferingState;
    private _onSourceChange;
    private _onLoadStart;
    private _onLoadedData;
    private _onLoadedMetadata;
    private _onError;
    private _onProgress;
    private _onPlay;
    private _onPlaying;
    private _onPause;
    private _onSeeking;
    private _onSeeked;
    private _onEnded;
    private _onReadStateChange;
    private _onTimeUpdate;
    private _onDurationChange;
    private _onSegmentNotFound;
    private _onTextTrackListEvent;
    private _onTextTrackEvent;
    private _onMediaTrackListEvent;
    private _onMediaTrackEvent;
    private _onAdEvent;
    private _onFullscreenPlayerWillPresent;
    private _onFullscreenPlayerDidPresent;
    private _onFullscreenPlayerWillDismiss;
    private _onFullscreenPlayerDidDismiss;
    private buildWrapperProps;
    render(): JSX.Element;
}
export {};
