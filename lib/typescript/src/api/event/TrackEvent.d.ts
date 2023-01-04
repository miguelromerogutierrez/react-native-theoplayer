import type { TextTrack } from '../track/TextTrack';
import type { TextTrackCue } from '../track/TextTrackCue';
import type { MediaTrack } from '../track/MediaTrack';
import type { Quality } from '../track/Quality';
export declare enum TrackListEventType {
    /**
     * Dispatched when track has been added to the track list.
     */
    AddTrack = 0,
    /**
     * Dispatched when track has been removed from the track list.
     */
    RemoveTrack = 1,
    /**
     * Fired when a track has been changed.
     */
    ChangeTrack = 2
}
export interface TrackListEvent {
    /**
     * The type of track list event.
     */
    readonly type: TrackListEventType;
}
export interface TextTrackListEvent extends TrackListEvent {
    /**
     * The relevant text track.
     */
    readonly track: TextTrack;
}
export declare enum TextTrackEventType {
    /**
     * Dispatched when cue has been added to the text track.
     */
    AddCue = 0,
    /**
     * Dispatched when cue has been removed from the text track.
     */
    RemoveCue = 1
}
export interface TextTrackEvent {
    /**
     * The type of text track event.
     */
    readonly type: TextTrackEventType;
    /**
     * The text track's uid to which this cue belongs.
     */
    readonly trackUid: number;
    /**
     * The text track's cue.
     */
    readonly cue: TextTrackCue;
}
export declare enum MediaTrackType {
    Audio = 0,
    Video = 1
}
export interface MediaTrackListEvent extends TrackListEvent {
    /**
     * The relevant media track type, either {@link MediaTrackType.Audio} or {@link MediaTrackType.Video}.
     */
    readonly trackType: MediaTrackType;
    /**
     * The relevant media track.
     */
    readonly track: MediaTrack;
}
export declare enum MediaTrackEventType {
    /**
     * Dispatched when the media track's active quality changes.
     */
    ActiveQualityChanged = 0
}
export interface MediaTrackEvent {
    /**
     * The type of media track event.
     */
    readonly type: MediaTrackEventType;
    /**
     * The media track's type to which event belongs, either {@link MediaTrackType.Audio} or {@link MediaTrackType.Video}.
     */
    readonly trackType: MediaTrackType;
    /**
     * The media track's uid to which event belongs.
     */
    readonly trackUid: number;
    /**
     * The affected media track's qualities.
     */
    readonly qualities?: Quality | Quality[];
}
