export class THEOplayerWebGoogleDAI {
    constructor(_googleDAI: any);
    _googleDAI: any;
    get snapback(): Promise<any>;
    setSnapback(enabled: any): void;
    contentTimeForStreamTime(time: any): Promise<any>;
    streamTimeForContentTime(time: any): Promise<any>;
}
