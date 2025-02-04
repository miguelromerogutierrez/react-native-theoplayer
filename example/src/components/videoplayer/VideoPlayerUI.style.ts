import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  background: {
    position: 'absolute',
    height: 100,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#00000066',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  fullScreenCenter: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    padding: 10,
    paddingBottom: 20,
    zIndex: 1,
  },
  bottomControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 16,
    paddingLeft: 50,
    paddingRight: 50,
    color: 'white',
  },
  playButton: {
    width: 90,
    height: 90,
    tintColor: '#ffc50f',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  timeLabel: {
    marginLeft: 20,
    height: 20,
    alignSelf: 'center',
  },
  thumbnailContainerCarousel: {
    justifyContent: 'center',
    marginBottom: 15,
  },
  thumbnailContainerSingle: {
    marginBottom: 15,
  },
  thumbnailCurrentCarousel: {
    borderColor: '#ffc50f',
    borderWidth: 2,
  },
  thumbnailCurrentSingle: {
    borderWidth: 0,
  },
  thumbnailCarousel: {
    margin: 4,
  },
});
