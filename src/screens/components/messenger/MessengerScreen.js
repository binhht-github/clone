import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function MessengerScreen() {
  const info = useSelector(state => state.persinalInfor);
  return (
    <View style={styles.homeScrenContainer}>
      <Text>Messenger Screen</Text>
      <Text>User Name: {info.userName}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  homeScrenContainer: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MessengerScreen;
