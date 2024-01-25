import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function PostContenTitle(props) {
  const {userName, title, hashtag} = props;
  return (
    <View style={styles.contenText}>
      <View style={styles.contenTextItem}>
        <Text style={[styles.text, styles.name]}>{userName}</Text>
      </View>
      {title ? (
        <View style={styles.contenTextItem}>
          <Text style={[styles.text, styles.statusText]}>
            {title} {hashtag}
          </Text>
        </View>
      ) : (
        <View style={styles.contenTextItem}>
          <Text style={[styles.text, styles.keyTag]}></Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },
  contenText: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '85%',
    backgroundColor: 'hsla(0, 100%, 50%, 0)',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  contenTextItem: {},
  name: {
    fontSize: 16,
  },
  statusText: {
    fontSize: 14,
    paddingVertical: 8,
  },
  keyTag: {
    fontSize: 14,
    fontWeight: '900',
  },
});
