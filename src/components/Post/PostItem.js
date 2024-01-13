import React from 'react';
import {View} from 'react-native';

function PostItem() {
  const [posts, setPosts] = useState([]);

  const renderItem = ({item, index}) => {
    let checkTymUi = false;
    let checkSaveUI = false;
    let countTym = 0;
    let countSave = 0;
    let countCmt = 0;

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
export default PostItem;
