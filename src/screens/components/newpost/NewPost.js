import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import axios from 'axios';
import {postApi} from '../../../../DB';
import {useDispatch, useSelector} from 'react-redux';
import {logIn, updateEmail} from '../../../reduxs/action/inforAction';

function NewPost({navigation}) {
  initallPost = {
    id: 9,
    userId: 10,
    shareQuantity: 10,
    title: '',
    hashtag: '',
    potsType: '',
    music: '',
    avtImg: '',
    src: '',
    musicImg: '',
    createDate: '',
  };
  const dispatch = useDispatch();
  const [emailText, onChangeEmail] = useState('a');

  const info = useSelector(state => state.persinalInfor);
  useEffect(() => {
    console.log('info: ', info);
    dispatch(logIn('ken@gmail.com'));
  }, []);

  return (
    <View>
      {/* id: '', email: "", userName: "", passWord: "", avtSrc: "", */}
      <Text>ID: {info.id}</Text>
      <Text>Email: {info.email}</Text>
      <Text>User Name: {info.userName}</Text>

      <TextInput
        style={{
          width: 200,
          //   backgroundColor: 'red',
          borderWidth: 1,
          borderColor: 'black',
        }}
        onChangeText={onChangeEmail}
        value={emailText}
      />
      <Button
        title="Add New Post"
        onPress={() => {
          console.log(emailText);
          // dispatch(updateEmail(email));
          dispatch(logIn(emailText));
        }}
      />
      <Button
        title="go back"
        // onPress={navigation.navigate('HomeTabs')}
      ></Button>
    </View>
  );
}

export default NewPost;
