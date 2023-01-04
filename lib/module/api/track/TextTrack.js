/**
 * Retain renderable tracks.
 * https://html.spec.whatwg.org/multipage/embedded-content.html#text-track-showing
 */
export function filterRenderableTracks(textTracks) {
  return textTracks && textTracks.filter(textTrack => textTrack.kind === 'subtitles' || textTrack.kind === 'captions');
}
/**
 * Retain first thumbnail track encountered in the textTracks list.
 */

export function filterThumbnailTracks(textTracks) {
  return textTracks && textTracks.find(isThumbnailTrack);
}
/**
 * Query whether a track is a valid thumbnail track.
 */

export function isThumbnailTrack(textTrack) {
  return !!textTrack && (textTrack.kind === 'thumbnails' || textTrack.kind === 'metadata' && textTrack.label === 'thumbnails');
}
export function hasTextTrack(textTrackList, textTrack) {
  return !!(textTrackList && textTrack && textTrackList.find(t => t.uid === textTrack.uid));
}
export function removeTextTrack(textTrackList, textTrack) {
  return textTrackList && textTrack ? textTrackList.filter(t => t.uid !== textTrack.uid) : textTrackList;
}
export function addTextTrack(textTrackList, textTrack) {
  return textTrackList && textTrack && !hasTextTrack(textTrackList, textTrack) ? [...textTrackList, textTrack] : textTrackList;
}
export function hasTextTrackCue(textTrack, cue) {
  return !!(textTrack.cues && cue && textTrack.cues.find(c => cue.uid === c.uid));
}
export function removeTextTrackCue(textTrack, cue) {
  if (textTrack && textTrack.cues && cue && !hasTextTrackCue(textTrack, cue)) {
    textTrack.cues = textTrack.cues.filter(c => c.uid !== cue.uid);
  }
}
export function addTextTrackCue(textTrack, cue) {
  if (textTrack && textTrack.cues && cue && !hasTextTrackCue(textTrack, cue)) {
    textTrack.cues.push(cue);
  }
}
export function findTextTrackByUid(textTracks, uid) {
  return textTracks.find(t => t.uid === uid);
}
//# sourceMappingURL=TextTrack.js.map