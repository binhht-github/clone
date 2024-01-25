import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';

import PostContenTitle from './PostContenTitle';
import PostUserComp from './PostUserComp';
import PostLikeComp from './PostLikeComp';
import PostCommentComp from './PostCommentComp';
import PostSaveComp from './PostSaveComp';
import PostMusicIcon from './PostMusicIcon';
import PostShareComp from './PostShareComp';

const widthWindown = Dimensions.get('window').width;

function PostInteract(props) {
  const {post, user, checkSaveUI, checkTymUi, countTym, countSave, countCmt} =
    props;

  return (
    // content Interact
    <View style={styles.contenInteract}>
      <PostContenTitle
        userName={user.userName}
        title={post.title}
        hashtag={post.hashtag}
      />

      <View style={styles.interact}>
        {/* user */}
        <PostUserComp item={user} />
        {/* Tym */}
        <PostLikeComp
          countTym={countTym}
          checkTymUi={checkTymUi}
          postID={post.id}
        />
        {/* cmt */}
        <PostCommentComp countCmt={countCmt} postID={post.id} />
        {/* save */}
        <PostSaveComp
          countSave={countSave}
          checkSaveUI={checkSaveUI}
          postID={post.id}
        />
        {/* share */}
        <PostShareComp />
        {/* music  */}
        <PostMusicIcon user={user} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },
  // content Interact
  contenInteract: {
    // backgroundColor: 'red',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    // backgroundColor: 'hsla(30, 100%, 100%, 0.1)',
    bottom: 0,
  },
  interact: {
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,

    // backgroundColor: 'hsla(30, 100%, 100%, 0.5)',
  },
});
export default PostInteract;
