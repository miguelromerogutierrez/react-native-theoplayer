/**
 * Represents a media track (audio or video) of a media resource.
 *
 * @public
 */
export function findMediaTrackByUid(mediaTracks, uid) {
  return mediaTracks.find(track => track.uid === uid);
}
export function findQualityByUid(mediaTrack, uid) {
  return mediaTrack.qualities.find(quality => quality.uid === uid);
}
export function findQualitiesByUid(mediaTrack, uid) {
  if (uid && mediaTrack) {
    if (Array.isArray(uid)) {
      return mediaTrack.qualities.filter(quality => uid.includes(quality.uid));
    } else {
      const quality = findQualityByUid(mediaTrack, uid);
      return quality ? [quality] : undefined;
    }
  }

  return undefined;
}
//# sourceMappingURL=MediaTrack.js.map