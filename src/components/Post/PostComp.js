import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PostPlaceHolder from './PostPlaceHolder';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import VideoComp from '../Video/VideoComp';
import PostInteract from './PostInteractCopm';
import {useDispatch, useSelector} from 'react-redux';
import {feacthPosts} from '../../redux/Post/action/postAction';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 60;
function PostComp() {
  const infor = useSelector(state => state.persinalInfor);
  // const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const posts = useSelector(state => state.postReducer);

  const dispath = useDispatch();

  useEffect(() => {
    dispath(feacthPosts());
  }, []);

  // loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handlScroll = e => {
    if (!e) {
      return;
    }
    const {nativeEvent} = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      const currenOffset = nativeEvent.contentOffset.y;
      let itemIndex = 0;
      if (currenOffset > 0) {
        itemIndex = Math.floor(
          (currenOffset + windowHeight / 2) / windowHeight,
        );
      }
      // console.log(currenOffset);
      // console.log(itemIndex);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderItem = ({item, index}) => {
    let checkTymUi = false;
    let checkSaveUI = false;
    let countTym = 0;
    let countSave = 0;
    let countCmt = 0;
    if (posts.length > 0) {
      if (item.like.length) {
        item.like.find(i => i.postId == item.id && i.userId == infor.id)
          ? (checkTymUi = true)
          : (checkTymUi = false);
      }
      if (item.save.length) {
        item.save.find(i => i.postId == item.id && i.userId == infor.id)
          ? (checkSaveUI = true)
          : (checkSaveUI = false);
      }
      countTym = item.like.length;
      countCmt = item.comments.length;
      countSave = item.save.length;
    }

    return (
      // item

      <View key={index}>
        {item.potsType === 'video' ? (
          <View style={{width: windowWidth, height: windowHeight}}>
            <VideoComp source={item.src} />
          </View>
        ) : (
          <View
            style={[
              styles.contentItem,
              {borderColor: 'white', borderWidth: 1},
            ]}>
            <FastImage
              style={{
                width: windowWidth,
                height: windowHeight,
              }}
              resizeMode="contain"
              source={{uri: `${item.src}`}}
            />
          </View>
        )}

        <PostInteract
          post={item}
          user={item.user}
          countTym={countTym}
          countSave={countSave}
          countCmt={countCmt}
          checkTymUi={checkTymUi}
          checkSaveUI={checkSaveUI}
        />
      </View>
    );
  };

  return (
    // content
    <View style={styles.contents}>
      <View style={styles.contentBody}>
        {loading ? (
          <PostPlaceHolder />
        ) : (
          <FlatList
            pagingEnabled
            scrollEventThrottle={16}
            onScroll={handlScroll}
            data={posts}
            // horizontal
            renderItem={renderItem}
            contentContainerStyle={{
              width: windowWidth,
              height: windowHeight * posts.length,
              backgroundColor: 'blue',
            }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  // contents
  contents: {
    height: windowHeight,
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
  },
  contentBody: {
    height: windowHeight,
    width: Dimensions.get('window').width,
  },
  contentItem: {
    height: windowHeight,
    width: Dimensions.get('window').width,
    backgroundColor: '#000',
  },
});
export default PostComp;
