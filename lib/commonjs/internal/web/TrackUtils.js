"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findNativeQualitiesByUid = findNativeQualitiesByUid;
exports.findNativeQualityByUid = findNativeQualityByUid;
exports.fromNativeCue = fromNativeCue;
exports.fromNativeMediaTrack = fromNativeMediaTrack;
exports.fromNativeTextTrack = fromNativeTextTrack;

function fromNativeCue(cue) {
  return {
    id: cue.id,
    uid: cue.uid,
    startTime: 1e3 * cue.startTime,
    endTime: 1e3 * cue.endTime,
    content: cue.content
  };
}

function fromNativeTextTrack(track) {
  const {
    id,
    uid,
    kind,
    label,
    language,
    mode,
    type,
    src,
    forced
  } = track;
  return {
    id,
    uid,
    kind,
    label,
    language,
    mode,
    type,
    src,
    forced,
    cues: track.cues ? track.cues.map(cue => fromNativeCue(cue)) : []
  };
}

function fromNativeMediaTrack(track) {
  const {
    id,
    uid,
    kind,
    label,
    language,
    activeQuality,
    qualities,
    targetQuality
  } = track;
  return {
    kind,
    label,
    language,
    id,
    uid,
    activeQuality,
    qualities,
    targetQuality
  };
}

function findNativeQualityByUid(mediaTrack, uid) {
  return mediaTrack.qualities.find(quality => quality.uid === uid);
}

function findNativeQualitiesByUid(mediaTrack, uid) {
  if (uid && mediaTrack) {
    if (Array.isArray(uid)) {
      return mediaTrack.qualities.filter(quality => uid.includes(quality.uid));
    } else {
      const quality = findNativeQualityByUid(mediaTrack, uid);
      return quality ? [quality] : undefined;
    }
  }

  return undefined;
}
//# sourceMappingURL=TrackUtils.js.map