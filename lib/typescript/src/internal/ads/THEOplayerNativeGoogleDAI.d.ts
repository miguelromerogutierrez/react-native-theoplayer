import type { GoogleDAI } from 'react-native-theoplayer';
import type { THEOplayerView } from 'react-native-theoplayer';
export declare class THEOplayerNativeGoogleDAI implements GoogleDAI {
    private readonly _player;
    constructor(_player: THEOplayerView);
    get snapback(): Promise<boolean>;
    setSnapback(enabled: boolean): void;
    contentTimeForStreamTime(time: number): Promise<number>;
    streamTimeForContentTime(time: number): Promise<number>;
}
