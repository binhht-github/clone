
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Main from './src/Main';

function App(): React.JSX.Element {


  return (
    <SafeAreaView >
      {/* <View><Text>abc</Text></View> */}
      <Main />
    </SafeAreaView>
  );
}

export default App;
