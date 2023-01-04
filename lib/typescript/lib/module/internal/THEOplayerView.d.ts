export class THEOplayerView extends React.PureComponent<any, any, any> {
    constructor(props: any);
    _root: React.RefObject<any>;
    state: any;
    _adsApi: THEOplayerNativeAdsAPI;
    componentWillUnmount(): void;
    destroyTheoPlayer(): void;
    seek(time: any): void;
    get nativeHandle(): number | null;
    get ads(): THEOplayerNativeAdsAPI;
    reset(): void;
    setNativeProps(nativeProps: any): void;
    maybeChangeBufferingState(isBuffering: any): void;
    buildWrapperProps(): {
        targetVideoQuality: any[];
        children?: React.ReactNode;
    };
    render(): React.CElement<import("react-native").ViewProps, View>;
}
import React from "react";
import { THEOplayerNativeAdsAPI } from "./ads/THEOplayerNativeAdsAPI";
import { View } from "react-native";
