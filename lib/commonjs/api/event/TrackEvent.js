"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackListEventType = exports.TextTrackEventType = exports.MediaTrackType = exports.MediaTrackEventType = void 0;
let TrackListEventType;
exports.TrackListEventType = TrackListEventType;

(function (TrackListEventType) {
  TrackListEventType[TrackListEventType["AddTrack"] = 0] = "AddTrack";
  TrackListEventType[TrackListEventType["RemoveTrack"] = 1] = "RemoveTrack";
  TrackListEventType[TrackListEventType["ChangeTrack"] = 2] = "ChangeTrack";
})(TrackListEventType || (exports.TrackListEventType = TrackListEventType = {}));

let TextTrackEventType;
exports.TextTrackEventType = TextTrackEventType;

(function (TextTrackEventType) {
  TextTrackEventType[TextTrackEventType["AddCue"] = 0] = "AddCue";
  TextTrackEventType[TextTrackEventType["RemoveCue"] = 1] = "RemoveCue";
})(TextTrackEventType || (exports.TextTrackEventType = TextTrackEventType = {}));

let MediaTrackType;
exports.MediaTrackType = MediaTrackType;

(function (MediaTrackType) {
  MediaTrackType[MediaTrackType["Audio"] = 0] = "Audio";
  MediaTrackType[MediaTrackType["Video"] = 1] = "Video";
})(MediaTrackType || (exports.MediaTrackType = MediaTrackType = {}));

let MediaTrackEventType;
exports.MediaTrackEventType = MediaTrackEventType;

(function (MediaTrackEventType) {
  MediaTrackEventType[MediaTrackEventType["ActiveQualityChanged"] = 0] = "ActiveQualityChanged";
})(MediaTrackEventType || (exports.MediaTrackEventType = MediaTrackEventType = {}));
//# sourceMappingURL=TrackEvent.js.map