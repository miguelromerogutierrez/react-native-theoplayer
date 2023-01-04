export let TrackListEventType;

(function (TrackListEventType) {
  TrackListEventType[TrackListEventType["AddTrack"] = 0] = "AddTrack";
  TrackListEventType[TrackListEventType["RemoveTrack"] = 1] = "RemoveTrack";
  TrackListEventType[TrackListEventType["ChangeTrack"] = 2] = "ChangeTrack";
})(TrackListEventType || (TrackListEventType = {}));

export let TextTrackEventType;

(function (TextTrackEventType) {
  TextTrackEventType[TextTrackEventType["AddCue"] = 0] = "AddCue";
  TextTrackEventType[TextTrackEventType["RemoveCue"] = 1] = "RemoveCue";
})(TextTrackEventType || (TextTrackEventType = {}));

export let MediaTrackType;

(function (MediaTrackType) {
  MediaTrackType[MediaTrackType["Audio"] = 0] = "Audio";
  MediaTrackType[MediaTrackType["Video"] = 1] = "Video";
})(MediaTrackType || (MediaTrackType = {}));

export let MediaTrackEventType;

(function (MediaTrackEventType) {
  MediaTrackEventType[MediaTrackEventType["ActiveQualityChanged"] = 0] = "ActiveQualityChanged";
})(MediaTrackEventType || (MediaTrackEventType = {}));
//# sourceMappingURL=TrackEvent.js.map