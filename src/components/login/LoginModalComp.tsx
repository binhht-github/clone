
import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { useAppDispatch } from '../../redux/hooks';
import { useSelector } from 'react-redux';
import { uiLogInActionClose } from '../../reduxs/action/uiLogInAction';
import { logIn } from '../../reduxs/action/inforAction';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function LoginModalComp(): React.JSX.Element {

    const dispatch = useAppDispatch();

  
    const info = useSelector(state => state.modalLogIn.modalVisible);
    const [emailText, onChangeEmail] = useState('');
    const [passWordText, onChangePass] = useState('');
  

  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={info}
   >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
      <Pressable
          style={{ width:100,height:100, top:-40,right:-150}}
          onPress={() => {
            dispatch(uiLogInActionClose());
          }}>
          <Text style={[styles.textStyle,{color:'black',fontSize:24}]}>x</Text>
        </Pressable>
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
  </Modal>
  );
}

const styles = StyleSheet.create({

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
  

export default LoginModalComp;
