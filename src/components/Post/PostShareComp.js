import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function PostShareComp() {
  return (
    <View style={styles.interactItem}>
      <FontAwesome name="share" color="white" size={25}></FontAwesome>
      <Text style={styles.text}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },
  interactItem: {
    alignItems: 'center',
    // paddingVertical: 5,
  },
});
