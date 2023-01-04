"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THEOplayerView = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNativeTheoplayer = require("react-native-theoplayer");

var THEOplayer = _interopRequireWildcard(require("theoplayer"));

var _TrackUtils = require("./web/TrackUtils");

var _THEOplayerWebAdsAPI = require("./ads/THEOplayerWebAdsAPI");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class THEOplayerView extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "_player", null);

    _defineProperty(this, "_adsApi", void 0);

    _defineProperty(this, "onAddTextTrackCue", track => event => {
      const {
        onTextTrackEvent
      } = this.props;

      if (onTextTrackEvent) {
        const {
          cue
        } = event;

        if (cue) {
          onTextTrackEvent({
            type: _reactNativeTheoplayer.TextTrackEventType.AddCue,
            trackUid: track.uid,
            cue: (0, _TrackUtils.fromNativeCue)(cue)
          });
        }
      }
    });

    _defineProperty(this, "onRemoveTextTrackCue", track => event => {
      const {
        onTextTrackEvent
      } = this.props;

      if (onTextTrackEvent) {
        const {
          cue
        } = event;

        if (cue) {
          onTextTrackEvent({
            type: _reactNativeTheoplayer.TextTrackEventType.RemoveCue,
            trackUid: track.uid,
            cue: (0, _TrackUtils.fromNativeCue)(cue)
          });
        }
      }
    });

    _defineProperty(this, "onActiveQualityChanged", (trackType, track) => () => {
      const {
        onMediaTrackEvent
      } = this.props;

      if (onMediaTrackEvent) {
        const quality = track.activeQuality;
        onMediaTrackEvent({
          type: _reactNativeTheoplayer.MediaTrackEventType.ActiveQualityChanged,
          trackType,
          trackUid: track.uid,
          qualities: quality ? [quality] : undefined
        });
      }
    });

    _defineProperty(this, "dispatchTextTrackListEvent", (type, track) => {
      const {
        onTextTrackListEvent
      } = this.props;

      if (onTextTrackListEvent) {
        onTextTrackListEvent({
          type,
          track
        });
      }
    });

    _defineProperty(this, "dispatchMediaTrackListEvent", (type, trackType, track) => {
      const {
        onMediaTrackListEvent
      } = this.props;

      if (onMediaTrackListEvent) {
        onMediaTrackListEvent({
          type,
          trackType,
          track: track
        });
      }
    });

    this.state = THEOplayerView.initialState;
    this._adsApi = new _THEOplayerWebAdsAPI.THEOplayerWebAdsAPI(this);
  }

  componentDidMount() {
    const {
      config,
      source,
      abrConfig
    } = this.props;
    const element = document.querySelector('.theoplayer-container');

    if ((config === null || config === void 0 ? void 0 : config.chromeless) === true || (config === null || config === void 0 ? void 0 : config.chromeless) === undefined) {
      this._player = new THEOplayer.ChromelessPlayer(element, {
        libraryLocation: 'node_modules/theoplayer',
        ...config
      });
    } else {
      this._player = new THEOplayer.Player(element, {
        libraryLocation: 'node_modules/theoplayer',
        ...config,
        ui: {
          fluid: true
        }
      });
    }

    Object.assign(this._player.abr, abrConfig);

    this._player.prepareWithUserAction();

    this._player.source = source;
    this.addEventListeners();
  }

  componentWillUnmount() {
    if (this._player) {
      this._player.destroy();
    }
  }

  seek(time) {
    if (isNaN(time)) {
      throw new Error('Specified time is not a number');
    }

    if (this._player) {
      this._player.currentTime = time / 1e3;
    }
  }

  get ads() {
    return this._adsApi;
  }

  get nativePlayer() {
    return this._player;
  }

  reset() {
    this.setState(THEOplayerView.initialState);
  }

  componentDidUpdate(prevProps) {
    if (!this._player) {
      return;
    } // track property changes


    const {
      paused,
      volume,
      selectedTextTrack,
      selectedAudioTrack,
      selectedVideoTrack,
      targetVideoQuality,
      source,
      muted,
      playbackRate,
      fullscreen
    } = this.props;
    const {
      paused: wasPaused,
      selectedTextTrack: prevSelectedTextTrack,
      selectedAudioTrack: prevSelectedAudioTrack,
      selectedVideoTrack: prevSelectedVideoTrack,
      targetVideoQuality: prevTargetVideoQuality,
      source: prevSource,
      muted: wasMuted,
      playbackRate: prevPlaybackRate,
      fullscreen: wasFullscreen,
      volume: prevVolume
    } = prevProps;

    if (source !== prevSource) {
      this._player.source = source;
    }

    if (paused !== wasPaused) {
      if (paused) {
        this._player.pause();
      } else {
        this._player.play();
      }
    }

    if (muted !== wasMuted) {
      this._player.muted = Boolean(muted);
    }

    if (volume !== prevVolume) {
      this._player.volume = Number(volume);
    }

    if (fullscreen !== wasFullscreen) {
      const {
        onFullscreenPlayerWillPresent,
        onFullscreenPlayerWillDismiss
      } = this.props;
      const appContainer = document.getElementById('app');

      if (fullscreen) {
        if (onFullscreenPlayerWillPresent) {
          onFullscreenPlayerWillPresent();
        }

        appContainer === null || appContainer === void 0 ? void 0 : appContainer.requestFullscreen().then();
      } else {
        if (onFullscreenPlayerWillDismiss) {
          onFullscreenPlayerWillDismiss();
        }

        document.exitFullscreen().then();
      }
    }

    if (playbackRate && playbackRate !== prevPlaybackRate) {
      this._player.playbackRate = playbackRate;
    }

    if (selectedTextTrack !== prevSelectedTextTrack) {
      this._player.textTracks.forEach(textTrack => {
        textTrack.mode = textTrack.uid === selectedTextTrack ? 'showing' : 'disabled';
      });
    }

    if (selectedAudioTrack !== prevSelectedAudioTrack) {
      this._player.audioTracks.forEach(audioTrack => {
        audioTrack.enabled = audioTrack.uid === selectedAudioTrack;
      });
    }

    if (selectedVideoTrack !== prevSelectedVideoTrack) {
      this._player.videoTracks.forEach(videoTrack => {
        videoTrack.enabled = videoTrack.uid === selectedVideoTrack;
      });
    }

    if (targetVideoQuality != prevTargetVideoQuality) {
      const videoTrack = this._player.videoTracks.find(videoTrack => videoTrack.uid === selectedVideoTrack);

      if (videoTrack) {
        videoTrack.targetQuality = (0, _TrackUtils.findNativeQualitiesByUid)(videoTrack, targetVideoQuality);
      }
    }
  }

  maybeChangeBufferingState(isBuffering) {
    const {
      isBuffering: wasBuffering,
      error
    } = this.state;
    const {
      paused
    } = this.props; // do not change state to buffering in case of an error or if the player is paused

    const newIsBuffering = isBuffering && !error && !paused;
    this.setState({
      isBuffering: newIsBuffering
    }); // notify change in buffering state

    if (newIsBuffering !== wasBuffering && this.props.onBufferingStateChange) {
      this.props.onBufferingStateChange(newIsBuffering);
    }
  }

  addEventListeners() {
    var _player$ads;

    const player = this._player;

    if (!player) {
      return;
    }

    player.addEventListener('sourcechange', () => {
      const {
        onSourceChange,
        paused
      } = this.props;
      this.reset();

      if (!paused) {
        player.play();
      }

      if (onSourceChange) {
        onSourceChange();
      }
    });
    player.addEventListener('loadstart', () => {
      // potentially notify change in buffering state
      this.maybeChangeBufferingState(true);
      const {
        onLoadStart
      } = this.props;

      if (onLoadStart) {
        onLoadStart();
      }
    });
    player.addEventListener('loadeddata', () => {
      const {
        onLoadedData
      } = this.props;

      if (onLoadedData) {
        onLoadedData();
      }
    });
    player.addEventListener('loadedmetadata', () => {
      const {
        onLoadedMetadata
      } = this.props;

      if (onLoadedMetadata) {
        var _player$textTracks$fi, _player$videoTracks$f, _player$audioTracks$f;

        onLoadedMetadata({
          textTracks: player.textTracks.map(textTrack => (0, _TrackUtils.fromNativeTextTrack)(textTrack)),
          audioTracks: player.audioTracks.map(audioTrack => (0, _TrackUtils.fromNativeMediaTrack)(audioTrack)),
          videoTracks: player.videoTracks.map(videoTrack => (0, _TrackUtils.fromNativeMediaTrack)(videoTrack)),
          duration: 1e3 * player.duration,
          selectedTextTrack: (_player$textTracks$fi = player.textTracks.find(track => track.mode === 'showing')) === null || _player$textTracks$fi === void 0 ? void 0 : _player$textTracks$fi.uid,
          selectedVideoTrack: (_player$videoTracks$f = player.videoTracks.find(track => track.enabled)) === null || _player$videoTracks$f === void 0 ? void 0 : _player$videoTracks$f.uid,
          selectedAudioTrack: (_player$audioTracks$f = player.audioTracks.find(track => track.enabled)) === null || _player$audioTracks$f === void 0 ? void 0 : _player$audioTracks$f.uid
        });
      }
    });
    player.addEventListener('error', event => {
      const {
        errorObject
      } = event;
      const error = {
        errorCode: errorObject.code.toString(),
        errorMessage: errorObject.message
      };
      this.setState({
        error
      }); // potentially notify change in buffering state

      this.maybeChangeBufferingState(false);
      const {
        onError
      } = this.props;

      if (onError) {
        onError({
          error
        });
      }
    });
    player.addEventListener('progress', () => {
      const {
        onProgress
      } = this.props;

      if (onProgress) {
        const seekable = [];

        for (let i = 0; i < player.seekable.length; i++) {
          seekable.push({
            start: player.seekable.start(i) * 1e3,
            end: player.seekable.end(i) * 1e3
          });
        }

        onProgress({
          seekable
        });
      }
    });
    player.addEventListener('play', () => {
      const {
        onPlay
      } = this.props;

      if (onPlay) {
        onPlay();
      }
    });
    player.addEventListener('playing', () => {
      // potentially notify change in buffering state
      this.maybeChangeBufferingState(false);
      const {
        onPlaying
      } = this.props;

      if (onPlaying) {
        onPlaying();
      }
    });
    player.addEventListener('pause', () => {
      const {
        onPause
      } = this.props;

      if (onPause) {
        onPause();
      }
    });
    player.addEventListener('seeking', () => {
      const {
        onSeeking
      } = this.props;

      if (onSeeking) {
        onSeeking();
      }
    });
    player.addEventListener('seeked', () => {
      const {
        onSeeked
      } = this.props;

      if (onSeeked) {
        onSeeked();
      }
    });
    player.addEventListener('ended', () => {
      const {
        onEnded
      } = this.props;

      if (onEnded) {
        onEnded();
      }
    });
    player.addEventListener('readystatechange', event => {
      // potentially notify change in buffering state
      this.maybeChangeBufferingState(event.readyState < 3);
      const {
        onReadyStateChange
      } = this.props;

      if (onReadyStateChange) {
        onReadyStateChange({
          readyState: event.readyState
        });
      }
    });
    player.addEventListener('timeupdate', () => {
      const {
        onTimeUpdate
      } = this.props;

      if (onTimeUpdate) {
        var _player$currentProgra;

        onTimeUpdate({
          currentTime: player.currentTime * 1e3,
          currentProgramDateTime: (_player$currentProgra = player.currentProgramDateTime) === null || _player$currentProgra === void 0 ? void 0 : _player$currentProgra.getTime()
        });
      }
    });
    player.addEventListener('durationchange', event => {
      const {
        onDurationChange
      } = this.props;

      if (onDurationChange) {
        onDurationChange({
          duration: event.duration * 1e3
        });
      }
    });
    player.addEventListener('segmentnotfound', () => {
      const {
        onSegmentNotFound
      } = this.props;

      if (onSegmentNotFound) {
        onSegmentNotFound({
          segmentStartTime: 0,
          error: 'Segment not found',
          retryCount: -1
        });
      }
    });
    player.presentation.addEventListener('presentationmodechange', event => {
      const {
        presentationMode
      } = event;
      const {
        onFullscreenPlayerDidPresent,
        onFullscreenPlayerDidDismiss
      } = this.props;

      if (presentationMode === 'fullscreen') {
        if (onFullscreenPlayerDidPresent) {
          onFullscreenPlayerDidPresent();
        }
      } else if (presentationMode === 'inline') {
        if (onFullscreenPlayerDidDismiss) {
          onFullscreenPlayerDidDismiss();
        }
      }
    });
    player.textTracks.addEventListener('addtrack', event => {
      const track = event.track;
      track.addEventListener('addcue', this.onAddTextTrackCue(track));
      track.addEventListener('removecue', this.onRemoveTextTrackCue(track));
      this.dispatchTextTrackListEvent(_reactNativeTheoplayer.TrackListEventType.AddTrack, track);
    });
    player.textTracks.addEventListener('removetrack', event => {
      const track = event.track;
      track.removeEventListener('addcue', this.onAddTextTrackCue(track));
      track.removeEventListener('removecue', this.onRemoveTextTrackCue(track));
      this.dispatchTextTrackListEvent(_reactNativeTheoplayer.TrackListEventType.RemoveTrack, track);
    });
    player.textTracks.addEventListener('change', event => {
      this.dispatchTextTrackListEvent(_reactNativeTheoplayer.TrackListEventType.ChangeTrack, event.track);
    });
    [_reactNativeTheoplayer.MediaTrackType.Audio, _reactNativeTheoplayer.MediaTrackType.Video].forEach(trackType => {
      const mediaTracks = trackType === _reactNativeTheoplayer.MediaTrackType.Audio ? player.audioTracks : player.videoTracks;
      mediaTracks.addEventListener('addtrack', event => {
        const track = event.track;
        track.addEventListener('activequalitychanged', this.onActiveQualityChanged(trackType, track));
        this.dispatchMediaTrackListEvent(_reactNativeTheoplayer.TrackListEventType.AddTrack, trackType, track);
      });
    });
    [_reactNativeTheoplayer.MediaTrackType.Audio, _reactNativeTheoplayer.MediaTrackType.Video].forEach(trackType => {
      const mediaTracks = trackType === _reactNativeTheoplayer.MediaTrackType.Audio ? player.audioTracks : player.videoTracks;
      mediaTracks.addEventListener('removetrack', event => {
        const track = event.track;
        track.removeEventListener('activequalitychanged', this.onActiveQualityChanged(trackType, track));
        this.dispatchMediaTrackListEvent(_reactNativeTheoplayer.TrackListEventType.RemoveTrack, trackType, track);
      });
    });
    [_reactNativeTheoplayer.MediaTrackType.Audio, _reactNativeTheoplayer.MediaTrackType.Video].forEach(trackType => {
      const mediaTracks = trackType === _reactNativeTheoplayer.MediaTrackType.Audio ? player.audioTracks : player.videoTracks;
      mediaTracks.addEventListener('change', event => {
        const track = event.track;
        this.dispatchMediaTrackListEvent(_reactNativeTheoplayer.TrackListEventType.ChangeTrack, trackType, track);
      });
    });
    (_player$ads = player.ads) === null || _player$ads === void 0 ? void 0 : _player$ads.addEventListener(_reactNativeTheoplayer.AdEventNames, event => {
      const {
        onAdEvent
      } = this.props;

      if (onAdEvent) {
        onAdEvent(event);
      }
    });
  }

  render() {
    const {
      config
    } = this.props;
    const chromeless = (config === null || config === void 0 ? void 0 : config.chromeless) === undefined || (config === null || config === void 0 ? void 0 : config.chromeless) === true;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: 'theoplayer-wrapper'
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: chromeless ? 'theoplayer-container' : 'theoplayer-container video-js theoplayer-skin'
    }));
  }

}

exports.THEOplayerView = THEOplayerView;

_defineProperty(THEOplayerView, "initialState", {
  isBuffering: false,
  error: undefined
});
//# sourceMappingURL=THEOplayerView.web.js.map