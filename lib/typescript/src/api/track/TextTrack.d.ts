import type { Track } from './Track';
import type { TextTrackCue } from './TextTrackCue';
export declare type TextTrackType = 'srt' | 'ttml' | 'webvtt' | 'cea608' | '';
export declare type TextTrackKind = 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata' | 'thumbnails';
export declare type TextTrackMode = 'disabled' | 'showing';
export interface TextTrack extends Track {
    /**
     * The kind of the text track, represented by a value from the following list:
     * <br/> - `'subtitles'`: The track contains subtitles.
     * <br/> - `'captions'`: The track contains closed captions, a translation of dialogue and sound effects.
     * <br/> - `'descriptions'`: The track contains descriptions, a textual description of the video.
     * <br/> - `'chapters'`: The track contains chapter titles.
     * <br/> - `'metadata'`: The track contains metadata. This track will not serve display purposes.
     */
    readonly kind: TextTrackKind;
    /**
     * The label of the text track.
     */
    label: string;
    /**
     * The language of the text track.
     */
    readonly language: string;
    /**
     * The identifier of the text track.
     *
     * @remarks
     * <br/> - This identifier can be used to distinguish between related tracks, e.g. tracks in the same list.
     */
    readonly id: string;
    /**
     * A unique identifier of the text track.
     *
     * @remarks
     * <br/> - This identifier is unique across tracks of a THEOplayer instance and can be used to distinguish between tracks.
     */
    readonly uid: number;
    /**
     * The mode of the text track, represented by a value from the following list:
     * <br/> - `'disabled'`: The track is disabled.
     * <br/> - `'showing'`: The track is showing.
     */
    mode: TextTrackMode;
    /**
     * The content type of the text track.
     */
    readonly type: TextTrackType;
    /**
     * The list of cues of the track.
     *
     * @remarks
     * <br/> - If the {@link TextTrack.mode} is `'disabled'`, this property is `null`.
     */
    cues: TextTrackCue[] | null;
    /**
     * The source of the text track.
     */
    readonly src: string;
    /**
     * Indicates whether the track contains Forced Narrative cues.
     * This may only be true for subtitle tracks where
     * <br/> - For DASH: the corresponding AdaptationSet contains a child Role with its value attribute equal to `'forced_subtitle'`
     * <br/> - For HLS: the corresponding #EXT-X-MEDIA tag contains the attributes TYPE=SUBTITLES and FORCED=YES (not supported yet)
     */
    readonly forced: boolean;
}
/**
 * Retain renderable tracks.
 * https://html.spec.whatwg.org/multipage/embedded-content.html#text-track-showing
 */
export declare function filterRenderableTracks(textTracks: TextTrack[] | undefined): TextTrack[] | undefined;
/**
 * Retain first thumbnail track encountered in the textTracks list.
 */
export declare function filterThumbnailTracks(textTracks: TextTrack[] | undefined): TextTrack | undefined;
/**
 * Query whether a track is a valid thumbnail track.
 */
export declare function isThumbnailTrack(textTrack: TextTrack | undefined): boolean;
export declare function hasTextTrack(textTrackList: TextTrack[], textTrack: TextTrack): boolean;
export declare function removeTextTrack(textTrackList: TextTrack[], textTrack: TextTrack): TextTrack[];
export declare function addTextTrack(textTrackList: TextTrack[], textTrack: TextTrack): TextTrack[];
export declare function hasTextTrackCue(textTrack: TextTrack, cue: TextTrackCue): boolean;
export declare function removeTextTrackCue(textTrack: TextTrack, cue: TextTrackCue): void;
export declare function addTextTrackCue(textTrack: TextTrack, cue: TextTrackCue): void;
export declare function findTextTrackByUid(textTracks: TextTrack[], uid: number): TextTrack | undefined;
