
import React, { useEffect } from 'react';
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
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/redux/store';
import { useAppInfoIsSplash } from './src/redux/AppInfo/hooks';

function App(): React.JSX.Element {


  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <SafeAreaView >
      {/* <View><Text>abc</Text></View> */}
      <Main />
    </SafeAreaView>
      </PersistGate>
    </Provider>

    
  );
}

export default App;
