"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTextTrack = addTextTrack;
exports.addTextTrackCue = addTextTrackCue;
exports.filterRenderableTracks = filterRenderableTracks;
exports.filterThumbnailTracks = filterThumbnailTracks;
exports.findTextTrackByUid = findTextTrackByUid;
exports.hasTextTrack = hasTextTrack;
exports.hasTextTrackCue = hasTextTrackCue;
exports.isThumbnailTrack = isThumbnailTrack;
exports.removeTextTrack = removeTextTrack;
exports.removeTextTrackCue = removeTextTrackCue;

/**
 * Retain renderable tracks.
 * https://html.spec.whatwg.org/multipage/embedded-content.html#text-track-showing
 */
function filterRenderableTracks(textTracks) {
  return textTracks && textTracks.filter(textTrack => textTrack.kind === 'subtitles' || textTrack.kind === 'captions');
}
/**
 * Retain first thumbnail track encountered in the textTracks list.
 */


function filterThumbnailTracks(textTracks) {
  return textTracks && textTracks.find(isThumbnailTrack);
}
/**
 * Query whether a track is a valid thumbnail track.
 */


function isThumbnailTrack(textTrack) {
  return !!textTrack && (textTrack.kind === 'thumbnails' || textTrack.kind === 'metadata' && textTrack.label === 'thumbnails');
}

function hasTextTrack(textTrackList, textTrack) {
  return !!(textTrackList && textTrack && textTrackList.find(t => t.uid === textTrack.uid));
}

function removeTextTrack(textTrackList, textTrack) {
  return textTrackList && textTrack ? textTrackList.filter(t => t.uid !== textTrack.uid) : textTrackList;
}

function addTextTrack(textTrackList, textTrack) {
  return textTrackList && textTrack && !hasTextTrack(textTrackList, textTrack) ? [...textTrackList, textTrack] : textTrackList;
}

function hasTextTrackCue(textTrack, cue) {
  return !!(textTrack.cues && cue && textTrack.cues.find(c => cue.uid === c.uid));
}

function removeTextTrackCue(textTrack, cue) {
  if (textTrack && textTrack.cues && cue && !hasTextTrackCue(textTrack, cue)) {
    textTrack.cues = textTrack.cues.filter(c => c.uid !== cue.uid);
  }
}

function addTextTrackCue(textTrack, cue) {
  if (textTrack && textTrack.cues && cue && !hasTextTrackCue(textTrack, cue)) {
    textTrack.cues.push(cue);
  }
}

function findTextTrackByUid(textTracks, uid) {
  return textTracks.find(t => t.uid === uid);
}
//# sourceMappingURL=TextTrack.js.map