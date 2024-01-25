import React from 'react';
import {StyleSheet, View} from 'react-native';
import AvtUserComp from '../User/AvtUserComp';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PostUserComp(props) {
  const {item} = props;
  return (
    <View style={styles.interactItem}>
      <AvtUserComp size={38} source={item.avtSrc} />
      <View style={styles.interactItemUserFolow}>
        <Ionicons name="add-circle" color="red" size={22}></Ionicons>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  interactItem: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  interactItemUser: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  interactItemUserFolow: {
    position: 'absolute',
    borderRadius: 50,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    top: 40,
    backgroundColor: 'white',
  },
});
