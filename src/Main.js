import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  StatusBar,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import {uiLogInActionClose} from './reduxs/action/uiLogInAction';
// import Navigation from './screens/navigation/Navigation';
import {useAppInfoIsSplash} from './redux/AppInfo/hooks';
import {useAppDispatch} from './redux/hooks';
import {setSplash} from './redux/AppInfo/slice';

import {useDispatch, useSelector} from 'react-redux';
import {logIn, logInByAsyncStorage} from './reduxs/action/inforAction';

import LoginModalComp from './components/login/LoginModalComp';
import Navigation from './Navigation/Naigation';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenHeight = Dimensions.get('screen').height;
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;

function Main() {
  const isSplash = useAppInfoIsSplash();

  const dispatch = useAppDispatch();

  const a = useDispatch();
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        a(logInByAsyncStorage(jsonValue));
        return value;
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(setSplash(true));
    getData();
    console.log('check splas ', isSplash);
  }, []);

  const info = useSelector(state => state.modalLogIn.modalVisible);
  const [emailText, onChangeEmail] = useState('');
  const [passWordText, onChangePass] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      {/* <Navigation
        onLayout={event => {
          const {width, height} = event.nativeEvent.layout;
          console.log('NavigationContainer ' + width + ' ' + height);
        }}></Navigation> */}
      <View>
        <LoginModalComp />
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={info}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Log in</Text>

              <TextInput
                style={{
                  width: windowWidth - 80,
                  borderColor: 'black',
                  borderWidth: 1,
                }}
                onChangeText={onChangeEmail}
                value={emailText}
                placeholder="Nhap email"
              />
              <TextInput
                onChangeText={onChangePass}
                value={passWordText}
                style={{
                  width: windowWidth - 80,
                  borderColor: 'black',
                  borderWidth: 1,
                  marginVertical: 15,
                }}
                placeholder="Nhap password"
              />

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  dispatch(uiLogInActionClose());
                  dispatch(logIn('ken@gmail.com'));
                }}>
                <Text style={styles.textStyle}>Log In</Text>
              </Pressable>
            </View>
          </View>
        </Modal> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: windowWidth,
    height: windowHeight,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 220,
    marginBottom: -125,
  },
  modalView: {
    width: windowWidth,
    height: 600,
    margin: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Main;
