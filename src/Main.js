import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { NavigationContainer } from '@react-navigation/native';
import Navigation from './screens/navigation/Navigation';
import TopNavigation from './screens/navigation/TopNavigation';
import TabVIew from './screens/navigation/TabVIew';
import {useAppInfoIsSplash} from './redux/AppInfo/hooks';
import {useAppDispatch} from './redux/hooks';
import {setSplash} from './redux/AppInfo/slice';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenHeight = Dimensions.get('screen').height;
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;

function Main() {
  const isSplash = useAppInfoIsSplash();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setSplash(true));
    console.log('check splas ', isSplash);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Navigation
        onLayout={event => {
          const {width, height} = event.nativeEvent.layout;
          console.log('NavigationContainer ' + width + ' ' + height);
        }}></Navigation>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: windowWidth,
    height: windowHeight,
  },
});

export default Main;
