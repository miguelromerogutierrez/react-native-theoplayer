export const __esModule: boolean;
export function addTextTrack(textTrackList: any, textTrack: any): any;
export function addTextTrackCue(textTrack: any, cue: any): void;
/**
 * Retain renderable tracks.
 * https://html.spec.whatwg.org/multipage/embedded-content.html#text-track-showing
 */
export function filterRenderableTracks(textTracks: any): any;
/**
 * Retain first thumbnail track encountered in the textTracks list.
 */
export function filterThumbnailTracks(textTracks: any): any;
export function findTextTrackByUid(textTracks: any, uid: any): any;
export function hasTextTrack(textTrackList: any, textTrack: any): boolean;
export function hasTextTrackCue(textTrack: any, cue: any): boolean;
/**
 * Query whether a track is a valid thumbnail track.
 */
export function isThumbnailTrack(textTrack: any): boolean;
export function removeTextTrack(textTrackList: any, textTrack: any): any;
export function removeTextTrackCue(textTrack: any, cue: any): void;
