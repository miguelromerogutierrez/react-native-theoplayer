import type { TextTrackCue as NativeTextTrackCue, TextTrack as NativeTextTrack, MediaTrack as NativeMediaTrack, Quality as NativeQuality } from 'theoplayer';
import type { TextTrack, TextTrackCue, MediaTrack } from 'react-native-theoplayer';
export declare function fromNativeCue(cue: NativeTextTrackCue): TextTrackCue;
export declare function fromNativeTextTrack(track: NativeTextTrack): TextTrack;
export declare function fromNativeMediaTrack(track: NativeMediaTrack): MediaTrack;
export declare function findNativeQualityByUid(mediaTrack: NativeMediaTrack, uid: number | undefined): NativeQuality | undefined;
export declare function findNativeQualitiesByUid(mediaTrack: NativeMediaTrack | undefined, uid: number | number[] | undefined): NativeQuality[] | undefined;
