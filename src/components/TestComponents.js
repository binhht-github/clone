import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Video from 'react-native-video';

import {useSharedValue} from 'react-native-reanimated';
import Slider from '@react-native-community/slider';

const windowWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('screen').height;

function TestComponents() {
  let a = 'tiktok1.mp4';
  const background = require('../public/video/tiktok3.mp4');
  const [state, setState] = useState({
    play: true,
    mute: false,
    volume: 0.1,
  });

  const videoPlayer = useRef(null);

  let lastPress = 0;
  const onDoublePress = () => {
    const time = new Date().getTime();
    const delta = time - lastPress;

    const DOUBLE_PRESS_DELAY = 400;
    if (delta < DOUBLE_PRESS_DELAY) {
      console.log('double press');
    }
    lastPress = time;
  };

  const [cur, setCur] = useState(0);
  const [cur2, setCur2] = useState(0);
  const [max, setMax] = useState(0);

  const onProgress = data => {
    let {currentTime, playableDuration, seekableDuration} = data;
    setCur(currentTime);
    console.log('time -', currentTime);
  };

  const onLoad = data => {
    const {duration} = data;
    console.log('duration ', duration);
    setMax(duration);
  };

  let arr = ['tikok1.mp4', 'tikok2.mp4', 'tikok3.mp4', 'tikok1.mp4'];

  let u = '.mp4';
  return (
    <View
      style={{
        width: windowWidth,
        height: screenHeight,
        backgroundColor: 'green',
      }}
      onStartShouldSetResponder={evt => onDoublePress()}>
      <Video
        source={background} // Can be a URL or a local file.
        ref={videoPlayer} // Store reference
        // poster={'https://vienthammydiva.vn/wp-content/uploads/2022/05/gai-xinh-trung-quoc-1-1.jpg'} // Store reference
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        audioOnly={true}
        style={styles.backgroundVideo}
        // controls={true}
        paused={state.play}
        volume={state.volume}
        posterResizeMode={'cover'}
        muted={state.mute}
        resizeMode={'contain'}
        // minLoadRetryCount={5}
        repeat={true}
        // playWhenInactive={true}
        // filter={"FilterType.POSTERIZE"}
        // filterEnabled={true}
        // hideShutterView={true}
        fullscreen={true}
        // progressUpdateInterval={0}
        onSeek={() => {
          currentTime: cur2;
          seekTime: cur2;
        }}
        // onLoad={e => console.log('check time =', e.currentPosition, e.duration)}
        onLoad={onLoad}
        onProgress={onProgress}
      />

      <View
        style={{
          paddingTop: 400,
        }}>
        <Slider
          style={{width: windowWidth, height: 40}}
          value={cur}
          minimumValue={0}
          maximumValue={max}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={value => {
            console.log(value);
            setCur2(value);
          }}
          tapToSeek={() => {
            console.log('tab');
          }}
          //   step={0.001}
        />

        <Button
          title={state.play ? 'play' : 'pause'}
          onPress={() => {
            setState({...state, play: !state.play});
          }}
        />
        <Button
          title={!state.mute ? 'mute' : 'un mute'}
          onPress={() => {
            setState({...state, mute: !state.mute});
          }}
        />
        <View
          style={{
            width: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button
            title="+"
            onPress={() => {
              setState({
                ...state,
                volume:
                  state.volume < 1 && state.volume >= 0
                    ? state.volume + 0.1
                    : 1,
              });
            }}
          />
          <Button
            title="-"
            onPress={() => {
              setState({
                ...state,
                volume:
                  state.volume <= 1 && state.volume > 0
                    ? state.volume - 0.1
                    : 0,
              });
            }}
          />
          <Text>{state.volume}</Text>
          {/* <Text>{a}</Text> */}
        </View>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  backgroundVideo: {
    width: windowWidth,
    height: screenHeight - 160,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    paddingBottom: 100,
  },
});
export default TestComponents;
