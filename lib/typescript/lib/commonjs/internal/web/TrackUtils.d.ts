export const __esModule: boolean;
export function findNativeQualitiesByUid(mediaTrack: any, uid: any): any;
export function findNativeQualityByUid(mediaTrack: any, uid: any): any;
export function fromNativeCue(cue: any): {
    id: any;
    uid: any;
    startTime: number;
    endTime: number;
    content: any;
};
export function fromNativeMediaTrack(track: any): {
    kind: any;
    label: any;
    language: any;
    id: any;
    uid: any;
    activeQuality: any;
    qualities: any;
    targetQuality: any;
};
export function fromNativeTextTrack(track: any): {
    id: any;
    uid: any;
    kind: any;
    label: any;
    language: any;
    mode: any;
    type: any;
    src: any;
    forced: any;
    cues: any;
};
