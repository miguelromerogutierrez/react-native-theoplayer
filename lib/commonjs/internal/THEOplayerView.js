"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THEOplayerView = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _THEOplayerView = _interopRequireDefault(require("./THEOplayerView.style"));

var _THEOplayerNativeAdsAPI = require("./ads/THEOplayerNativeAdsAPI");

var _TypeUtils = require("./utils/TypeUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class THEOplayerView extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "_root", void 0);

    _defineProperty(this, "_adsApi", void 0);

    _defineProperty(this, "_onSourceChange", () => {
      this.reset();

      if (this.props.onSourceChange) {
        this.props.onSourceChange();
      }
    });

    _defineProperty(this, "_onLoadStart", () => {
      // potentially notify change in buffering state
      this.maybeChangeBufferingState(true);

      if (this.props.onLoadStart) {
        this.props.onLoadStart();
      }
    });

    _defineProperty(this, "_onLoadedData", () => {
      if (this.props.onLoadedData) {
        this.props.onLoadedData();
      }
    });

    _defineProperty(this, "_onLoadedMetadata", event => {
      if (this.props.onLoadedMetadata) {
        this.props.onLoadedMetadata({ ...event.nativeEvent,
          duration: (0, _TypeUtils.decodeNanInf)(event.nativeEvent.duration)
        });
      }
    });

    _defineProperty(this, "_onError", event => {
      const {
        error
      } = event.nativeEvent;
      this.setState({
        error
      }); // potentially notify change in buffering state

      this.maybeChangeBufferingState(false);

      if (this.props.onError) {
        this.props.onError(event.nativeEvent);
      }
    });

    _defineProperty(this, "_onProgress", event => {
      if (this.props.onProgress) {
        this.props.onProgress(event.nativeEvent);
      }
    });

    _defineProperty(this, "_onPlay", () => {
      if (this.props.onPlay) {
        this.props.onPlay();
      }
    });

    _defineProperty(this, "_onPlaying", () => {
      // potentially notify change in buffering state
      this.maybeChangeBufferingState(false);

      if (this.props.onPlaying) {
        this.props.onPlaying();
      }
    });

    _defineProperty(this, "_onPause", () => {
      if (this.props.onPause) {
        this.props.onPause();
      }
    });

    _defineProperty(this, "_onSeeking", () => {
      if (this.props.onSeeking) {
        this.props.onSeeking();
      }
    });

    _defineProperty(this, "_onSeeked", () => {
      if (this.props.onSeeked) {
        this.props.onSeeked();
      }
    });

    _defineProperty(this, "_onEnded", () => {
      if (this.props.onEnded) {
        this.props.onEnded();
      }
    });

    _defineProperty(this, "_onReadStateChange", event => {
      // potentially notify change in buffering state
      this.maybeChangeBufferingState(event.nativeEvent.readyState < 3);

      if (this.props.onReadyStateChange) {
        this.props.onReadyStateChange(event.nativeEvent);
      }
    });

    _defineProperty(this, "_onTimeUpdate", event => {
      if (this.props.onTimeUpdate) {
        this.props.onTimeUpdate(event.nativeEvent);
      }
    });

    _defineProperty(this, "_onDurationChange", event => {
      if (this.props.onDurationChange) {
        this.props.onDurationChange({
          duration: (0, _TypeUtils.decodeNanInf)(event.nativeEvent.duration)
        });
      }
    });

    _defineProperty(this, "_onSegmentNotFound", event => {
      if (this.props.onSegmentNotFound) {
        this.props.onSegmentNotFound(event.nativeEvent);
      }
    });

    _defineProperty(this, "_onTextTrackListEvent", event => {
      if (this.props.onTextTrackListEvent) {
        this.props.onTextTrackListEvent(event.nativeEvent);
      }
    });

    _defineProperty(this, "_onTextTrackEvent", event => {
      if (this.props.onTextTrackEvent) {
        this.props.onTextTrackEvent(event.nativeEvent);
      }
    });

    _defineProperty(this, "_onMediaTrackListEvent", event => {
      if (this.props.onMediaTrackListEvent) {
        this.props.onMediaTrackListEvent(event.nativeEvent);
      }
    });

    _defineProperty(this, "_onMediaTrackEvent", event => {
      if (this.props.onMediaTrackEvent) {
        this.props.onMediaTrackEvent(event.nativeEvent);
      }
    });

    _defineProperty(this, "_onAdEvent", event => {
      if (this.props.onAdEvent) {
        this.props.onAdEvent(event.nativeEvent);
      }
    });

    _defineProperty(this, "_onFullscreenPlayerWillPresent", () => {
      if (this.props.onFullscreenPlayerWillPresent) {
        this.props.onFullscreenPlayerWillPresent();
      }
    });

    _defineProperty(this, "_onFullscreenPlayerDidPresent", () => {
      if (this.props.onFullscreenPlayerDidPresent) {
        this.props.onFullscreenPlayerDidPresent();
      }
    });

    _defineProperty(this, "_onFullscreenPlayerWillDismiss", () => {
      if (this.props.onFullscreenPlayerWillDismiss) {
        this.props.onFullscreenPlayerWillDismiss();
      }
    });

    _defineProperty(this, "_onFullscreenPlayerDidDismiss", () => {
      if (this.props.onFullscreenPlayerDidDismiss) {
        this.props.onFullscreenPlayerDidDismiss();
      }
    });

    this._root = /*#__PURE__*/_react.default.createRef();
    this.state = THEOplayerView.initialState;
    this._adsApi = new _THEOplayerNativeAdsAPI.THEOplayerNativeAdsAPI(this);
  }

  componentWillUnmount() {
    if (_reactNative.Platform.OS === 'ios') {
      // on iOS, we trigger an explicit 'destroy' to clean up the underlying THEOplayer
      this.destroyTheoPlayer();
    }
  }

  destroyTheoPlayer() {
    const node = (0, _reactNative.findNodeHandle)(this._root.current);
    const command = _reactNative.UIManager['THEOplayerRCTView'].Commands.destroy;
    const params = [];

    _reactNative.UIManager.dispatchViewManagerCommand(node, command, params);
  }

  seek(time) {
    if (isNaN(time)) {
      throw new Error('Specified time is not a number');
    }

    this.setNativeProps({
      seek: time
    });
  }

  get nativeHandle() {
    return (0, _reactNative.findNodeHandle)(this._root.current);
  }

  get ads() {
    return this._adsApi;
  }

  reset() {
    this.setState(THEOplayerView.initialState);
  }

  setNativeProps(nativeProps) {
    var _this$_root;

    if ((_this$_root = this._root) !== null && _this$_root !== void 0 && _this$_root.current) {
      this._root.current.setNativeProps(nativeProps);
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
      this.props.onBufferingStateChange(isBuffering);
    }
  }

  buildWrapperProps() {
    const {
      targetVideoQuality
    } = this.props;
    return Object.assign({}, { ...this.props,
      // Always pass an array for targetVideoQuality.
      targetVideoQuality: !targetVideoQuality ? [] : Array.isArray(targetVideoQuality) ? targetVideoQuality : [targetVideoQuality]
    });
  }

  render() {
    const wrapperProps = this.buildWrapperProps();
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [_THEOplayerView.default.base, wrapperProps.style]
    }, /*#__PURE__*/_react.default.createElement(THEOplayerRCTView, _extends({
      ref: this._root,
      src: this.props.source || {},
      onNativeSourceChange: this._onSourceChange,
      onNativeLoadStart: this._onLoadStart,
      onNativeLoadedData: this._onLoadedData,
      onNativeLoadedMetadata: this._onLoadedMetadata,
      onNativeError: this._onError,
      onNativeProgress: this._onProgress,
      onNativePlay: this._onPlay,
      onNativePlaying: this._onPlaying,
      onNativePause: this._onPause,
      onNativeSeeking: this._onSeeking,
      onNativeSeeked: this._onSeeked,
      onNativeEnded: this._onEnded,
      onNativeReadyStateChange: this._onReadStateChange,
      onNativeTimeUpdate: this._onTimeUpdate,
      onNativeDurationChange: this._onDurationChange,
      onNativeSegmentNotFound: this._onSegmentNotFound,
      onNativeTextTrackListEvent: this._onTextTrackListEvent,
      onNativeTextTrackEvent: this._onTextTrackEvent,
      onNativeMediaTrackListEvent: this._onMediaTrackListEvent,
      onNativeMediaTrackEvent: this._onMediaTrackEvent,
      onNativeAdEvent: this._onAdEvent,
      onNativeFullscreenPlayerWillPresent: this._onFullscreenPlayerWillPresent,
      onNativeFullscreenPlayerDidPresent: this._onFullscreenPlayerDidPresent,
      onNativeFullscreenPlayerWillDismiss: this._onFullscreenPlayerWillDismiss,
      onNativeFullscreenPlayerDidDismiss: this._onFullscreenPlayerDidDismiss,
      style: _reactNative.StyleSheet.absoluteFill
    }, wrapperProps)));
  }

}

exports.THEOplayerView = THEOplayerView;

_defineProperty(THEOplayerView, "initialState", {
  isBuffering: false,
  error: undefined
});

const LINKING_ERROR = `The package 'react-native-theoplayer' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const ComponentName = 'THEOplayerRCTView';
const THEOplayerRCTView = _reactNative.UIManager.getViewManagerConfig(ComponentName) != null ? (0, _reactNative.requireNativeComponent)(ComponentName) : () => {
  throw new Error(LINKING_ERROR);
};
//# sourceMappingURL=THEOplayerView.js.map