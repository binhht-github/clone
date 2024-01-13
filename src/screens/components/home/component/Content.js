import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';
import ContenInteract from './ContenInteract';
import axios from 'axios';
import PostPlaceHolder from '../../../../components/Post/PostPlaceHolder';
import FastImage from 'react-native-fast-image';
import {getMusic} from '../../../../api/music';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 60;

function Content(props) {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState({
    tymQuantity: 0,
    cmtQuantity: 0,
    saveQuantity: 0,
    shareQuantity: 0,
  });

  const [music, setMusic] = useState([]);

  const fetchMusic = async () => {
    try {
      const result = await getMusic();

      setMusic(result.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const [posts, setPosts] = useState([]);
  const [postsFollower, setPostsFollower] = useState([]);

  let urlFollower =
    'http://192.168.1.7:3000/posts?userId=5&userId=4&_embed=like&_embed=save&_embed=comments';
  let urlForYou =
    'http://192.168.1.7:3000/posts/?userId_ne=1&_embed=like&_embed=save&_embed=comments';

  // call api post tru user dang dang nhap
  useEffect(() => {
    axios
      .get(urlForYou)
      .then(function (response) {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(urlFollower)
      .then(function (response) {
        setPostsFollower(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
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
  // set lai cmt state
  const setCmtState = itemCmt => {
    posts.map((item, index) => {
      if (item.id == itemCmt.postId) {
        let temp = posts;
        let i = temp[index];
        i.comments.push(itemCmt);
        temp[index] = i;
        setPosts(temp);
      }
    });
  };
  // set lai cmt state
  const setLikeState = (itemLike, key) => {
    posts.map((item, index) => {
      if (key == 'post') {
        if (item.id == itemLike.postId) {
          let temp = posts;
          let i = temp[index];
          i.save.push(itemLike);
          temp[index] = i;
          setPosts(temp);
        }
      }
      if (key == 'delete') {
        if (item.id == itemLike.postId) {
          let temp = posts;
          temp.splice(index, 1);
          setPosts(temp);
        }
      }
    });
  };
  // set lai cmt state
  const setSaveState = (itemSave, key) => {
    posts.map((item, index) => {
      if (key == 'post') {
        if (item.id == itemSave.postId) {
          let temp = posts;
          let i = temp[index];
          i.save.push(itemSave);
          temp[index] = i;
          setPosts(temp);
        }
      }
      if (key == 'delete') {
        if (item.id == itemSave.postId) {
          let temp = posts;
          temp.splice(index, 1);
          // let i = temp[index]
          // i.save.push(itemSave)
          // temp[index] = i
          setPosts(temp);
        }
      }
    });
  };

  const renderItem = ({item, index}) => {
    let checkTymUi = false;
    let checkSaveUI = false;
    let countTym = 0;
    let countSave = 0;
    let countCmt = 0;

    if (item.like.length) {
      item.like.find(i => i.postId == item.id && i.userId == 1)
        ? (checkTymUi = true)
        : (checkTymUi = false);
    }
    if (item.save.length) {
      item.save.find(i => i.postId == item.id && i.userId == 1)
        ? (checkSaveUI = true)
        : (checkSaveUI = false);
    }

    countTym = item.like.length;
    countCmt = item.comments.length;
    countSave = item.save.length;
    return (
      // item
      <View key={index}>
        <View style={styles.contentItem}>
          <FastImage
            style={{
              width: windowWidth,
              height: windowHeight,
            }}
            resizeMode="contain"
            source={{uri: `${item.src}`}}
          />
        </View>
        <ContenInteract
          postID={item.id}
          userName={item.userName}
          title={item.title}
          hashtag={item.hashtag}
          potsType={item.potsType}
          music={item.music}
          avtImg={item.avtImg}
          musicImg={item.musicImg}
          checkTymUi={checkTymUi}
          checkSaveUI={checkSaveUI}
          countTym={countTym}
          countSave={countSave}
          countCmt={countCmt}
          setPosts={setCmtState}
          setLikeState={setLikeState}
          setSaveState={setSaveState}
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
            data={props.menu === 'foryou' ? posts : postsFollower}
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
export default Content;
