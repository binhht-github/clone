import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, RefreshControl, FlatList } from 'react-native'
import ContenInteract from './ContenInteract';
import axios from 'axios';
import PostPlaceHolder from '../../../../components/Post/PostPlaceHolder';
import FastImage from 'react-native-fast-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 70;

function Content(props) {
    const [refreshing, setRefreshing] = useState(false)
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState({
        'tymQuantity': 0,
        'cmtQuantity': 0,
        'saveQuantity': 0,
        'shareQuantity': 0
    })





    const [posts, setPosts] = useState([]);


    // call api post tru user dang dang nhap
    useEffect(() => {
        axios.get(' http://192.168.1.2:3000/posts/?userId_ne=1&_embed=like&_embed=save&_embed=comments')
            .then(function (response) {
                setPosts(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

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
    }, [])

    const handlScroll = (e) => {
        if (!e) { return }
        const { nativeEvent } = e
        if (nativeEvent && nativeEvent.contentOffset) {
            const currenOffset = nativeEvent.contentOffset.y;
            let itemIndex = 0;
            if (currenOffset > 0) {
                itemIndex = Math.floor((currenOffset + windowHeight / 2) / windowHeight);
            }
            // console.log(currenOffset);
            // console.log(itemIndex);
        }
    }
    // set lai cmt state
    const setCmtState = (itemCmt) => {
        posts.map((item, index) => {
            if (item.id == itemCmt.postId) {
                let temp = posts
                let i = temp[index]
                i.comments.push(itemCmt)
                temp[index] = i
                setPosts(temp)
            }
        })
    }
    // set lai cmt state
    const setLikeState = (itemLike, key) => {
        posts.map((item, index) => {
            if (key == "post") {
                if (item.id == itemLike.postId) {
                    let temp = posts
                    let i = temp[index]
                    i.save.push(itemLike)
                    temp[index] = i
                    setPosts(temp)
                }
            }
            if (key == "delete") {
                if (item.id == itemLike.postId) {
                    let temp = posts
                    temp.splice(index, 1)
                    setPosts(temp)
                }
            }
        })
    }
    // set lai cmt state
    const setSaveState = (itemSave, key) => {
        posts.map((item, index) => {
            if (key == "post") {
                if (item.id == itemSave.postId) {
                    let temp = posts
                    let i = temp[index]
                    i.save.push(itemSave)
                    temp[index] = i
                    setPosts(temp)
                }
            }
            if (key == "delete") {
                if (item.id == itemSave.postId) {
                    let temp = posts
                    temp.splice(index, 1)
                    // let i = temp[index]
                    // i.save.push(itemSave)
                    // temp[index] = i
                    setPosts(temp)
                }
            }
        })
    }







    const renderItem = ({ item, index }) => {
        let checkTymUi = false;
        let checkSaveUI = false;
        let countTym = 0;
        let countSave = 0;
        let countCmt = 0;

        if (item.like.length >= 1) {
            checkTymUi = true
            countTym = item.like.length;
        }
        if (item.save.length >= 1) {
            countSave = item.save.length;
            checkSaveUI = true
        }
        if (item.comments.length >= 1) {
            countCmt = item.comments.length;
            // checkSaveUI = true
        }
        return (
            // item
            <View key={index}>
                <View style={styles.contentItem}
                >
                    <FastImage
                        style={{
                            width: windowWidth,
                            height: windowHeight,
                        }}
                        resizeMode='contain'
                        source={{ uri: `${item.src}`, }}
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

                // onLikePost={onLikePost}
                // onSvaeFunc={onSvaeFunc}
                />
            </View>
        );
    }

    return (
        // content
        <View style={styles.contents}>
            <View
                style={styles.contentBody}
            >
                {/* {loading ? <PostPlaceHolder /> :
                    <ScrollView
                        pagingEnabled
                        scrollEventThrottle={16}
                        onScroll={handlScroll}
                        contentContainerStyle={{ width: windowWidth, height: windowHeight * posts.length, backgroundColor: 'blue' }}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    >
                        {
                            posts.map((item, index) => {
                                let checkTymUi;
                                let checkSaveUI;
                                if (like) {
                                    like.find(i => { i.postsId == item.id ? checkTymUi = true : checkSaveUI = false })
                                }
                                if (save) {
                                    save.find(i => { i.postsId == item.id ? checkSaveUI = true : checkSaveUI = false })
                                }

                                return (

                                    // item
                                    <View key={index}>
                                        <View style={styles.contentItem}
                                        >
                                            <Image
                                                width={windowWidth}
                                                height={windowHeight}
                                                style={{
                                                    // height: '100%',
                                                    resizeMode: 'contain',
                                                }}
                                                source={{ uri: `${item.src}`, }}
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
                                            onLikePost={props.onLikePost}
                                            onComment={props.onComment}
                                        />
                                    </View>
                                );
                            })
                        }
                    </ScrollView>
                } */}

                {loading ? <PostPlaceHolder /> :
                    <FlatList
                        pagingEnabled
                        scrollEventThrottle={16}
                        onScroll={handlScroll}
                        data={posts}
                        renderItem={renderItem}
                        contentContainerStyle={{ width: windowWidth, height: windowHeight * posts.length, backgroundColor: 'blue' }}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    />
                }
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

})
export default Content;








// return (
//     // content
//     <View style={styles.contents}>
//         <View style={styles.contentBody}>
//             {/* <FlatList
//                 style={{
//                     height: Dimensions.get('window').height - 90,
//                     width: Dimensions.get('window').width,
//                 }}
//                 data={items}
//                 renderItem={({ item }) =>
//                     <View style={styles.contentItem} key={item.id}>
//                         <Image
//                             height={'100%'}
//                             width={'100%'}
//                             source={{ uri: `${item.duongdan}` }}
//                             style={{
//                                 resizeMethod: 'contain'
//                             }}
//                         ></Image>
//                     </View>
//                 }


//                 keyExtractor={(item) => item.id}
//                 snapToAlignment="start"
//                 decelerationRate={"fast"}
//                 snapToInterval={Dimensions.get('window').height - 90}
//             /> */}

//         </View>
//         {/* <Button
//             title='tets'
//             onPress={t}
//         /> */}
//     </View>
// );
