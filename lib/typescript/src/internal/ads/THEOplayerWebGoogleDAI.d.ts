import type { GoogleDAI } from 'react-native-theoplayer';
import type { GoogleDAI as NativeGoogleDAI } from 'theoplayer';
export declare class THEOplayerWebGoogleDAI implements GoogleDAI {
    private readonly _googleDAI;
    constructor(_googleDAI: NativeGoogleDAI);
    get snapback(): Promise<boolean>;
    setSnapback(enabled: boolean): void;
    contentTimeForStreamTime(time: number): Promise<number>;
    streamTimeForContentTime(time: number): Promise<number>;
}
