import type { Ad, AdBreak } from 'react-native-theoplayer';
export interface AdEvent {
    /**
     * Type of ad event.
     */
    type: AdEventType;
    /**
     * The ad or adbreak for which the event was dispatched.
     */
    ad: Ad | AdBreak;
}
export declare const AdEventNames: readonly ["addadbreak", "removeadbreak", "adloaded", "adbreakbegin", "adbreakend", "adbreakchange", "updateadbreak", "addad", "adbegin", "adend", "updatead", "adloaded", "adfirstquartile", "admidpoint", "adthirdquartile", "adskip", "adimpression", "aderror", "admetadata", "adbuffering"];
export declare type AdEventType = typeof AdEventNames[number];
