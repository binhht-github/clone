import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function PostMusicIcon({user}) {
  return (
    <View style={[styles.interactItem, styles.interactItemMusic]}>
      <Image
        height={25}
        width={25}
        style={{
          borderRadius: 50,
          // transform: [
          //     { rotate: '160deg' },
          // ],
        }}
        source={{
          uri: `${user.id != '' ? user.avtSrc : ''}`,
        }}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },
  interactItem: {
    alignItems: 'center',
    marginBottom: 15,
  },
  interactItemMusic: {
    width: 35,
    height: 35,
    // backgroundColor: 'hsl(144, 13%, 10%)',
    backgroundColor: '#d3d3d3',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 0.5,
    // borderColor: 'white',
  },
});
