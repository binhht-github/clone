import Slider from '@react-native-community/slider';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Video from 'react-native-video';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 60;

let press = 0;
let lastPress = 0;
function VideoComp({source = 'https://gdurl.com/U6T8'}, size) {
  // let url = require('../../public/video/tiktok1.mp4');
  let url = require('../../public/video/tiktok1.mp4');

  const videoPlayer = useRef(null);

  const [state, setState] = useState({
    play: false,
    mute: false,
    volume: 0.8,
    repeat: true,
    rate: 1,
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [rankSlider, setRankSlider] = useState({min: 0, max: 0});

  // console.log('reload');
  const onPress = () => {
    press++;
    const a = setInterval(() => {
      if (press == 1) {
        setState({...state, play: !state.play});
        // console.log('press');
      }
      if (press == 2) {
        console.log('double press');
      }
      clearInterval(a);
      press = 0;
    }, 260);
  };

  const onLoad = data => {
    const {duration} = data;
    setRankSlider({...rankSlider, max: duration});
  };

  const onProgress = data => {
    let {currentTime, playableDuration, seekableDuration} = data;
    setCurrentTime(currentTime);
  };

  const onTouch = status => {};
  const onEnd = () => {
    console.log('end');
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      // onPressIn={onPress}
      // onPressOut={onPress}
      onLongPress={() => {
        onTouch('press');
      }}
      onPressOut={() => {
        onTouch('unPress');
      }}>
      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          height: windowHeight,
          backgroundColor: '#000',
        }}>
        <Video
          // source={url}
          source={{
            uri: source,
          }}
          // source={{
          //   uri: 'https://drive.google.com/uc?export=download&id=1CulocoWr8u9hGppxH1rG4JEg0JE8MJ7s',
          // }}
          ref={videoPlayer}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          audioOnly={true}
          rate={state.rate}
          style={styles.backgroundVideo}
          paused={!state.play}
          volume={state.volume}
          muted={state.mute}
          resizeMode={'contain'}
          // resizeMode={'cover'}
          repeat={state.repeat}
          onLoad={onLoad}
          onProgress={onProgress}
          onEnd={onEnd}
          // controls={true}
        />
        {!state.play ? <View style={styles.btnPlay} /> : null}
        <Slider
          style={{
            width: windowWidth,
            height: 10,
            position: 'absolute',
            bottom: 3,
          }}
          value={currentTime}
          minimumValue={0}
          maximumValue={rankSlider.max}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#fffff"
          onValueChange={value => {
            console.log(value);
          }}
          thumbImage={null}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  btnPlay: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'hsla(0, 0%, 50%,0.5)',
    transform: [{rotate: '90deg'}],
    position: 'absolute',
    top: windowHeight / 2 - 30,
    left: windowWidth / 2 - 20,
  },
});
export default VideoComp;
