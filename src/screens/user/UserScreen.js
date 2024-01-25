import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {uiLogInActionOpen} from '../../redux/Login/action/uiLogInAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('my-key');
    if (value !== null) {
      // value previously stored
      console.log(value);
    }
  } catch (e) {
    // error reading value
  }
};

function UserScreen() {
  const dispatch = useDispatch();
  const test = useSelector(state => state.persinalInfor);
  return (
    <View>
      <Text>User</Text>
      <Button
        onPress={() => {
          console.log('open log in');
          dispatch(uiLogInActionOpen());
        }}
        title="Log in"
      />

      <Button
        title="test action state"
        onPress={() => {
          console.log(
            'persinalInfor =================================================================================================================================================',
          );
          console.log(test);
        }}
      />
      <Button
        title=" test sAsyncStorage"
        onPress={() => {
          getData();
        }}
      />
    </View>
  );
}
export default UserScreen;
