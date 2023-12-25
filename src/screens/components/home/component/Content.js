import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, Button, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ContenInteract from './ContenInteract';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 70;

const ContentItem = () => {
    return (
        <View>
            <Text>Item</Text>
        </View>
    );
}



function Content(props) {
    const { posts } = props;

    const t = () => {
        console.log(items)
    }

    const handlScoll = (e) => {
        if (!e) { return }
        const { nativeEvent } = e
        if (nativeEvent && nativeEvent.contentOffset) {
            const currenOffset = nativeEvent.contentOffset.y;

            // console.log(currenOffset);
        }
    }


    return (
        // content
        <View style={styles.contents}>
            <View style={styles.contentBody} onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                console.log("Body " + width + " " + height + " " + windowHeight)
            }}>
                <ScrollView
                    pagingEnabled
                    scrollEventThrottle={16}
                    onScroll={handlScoll}
                    contentContainerStyle={{ width: windowWidth, height: windowHeight * posts.length, backgroundColor: 'blue' }}
                >
                    {
                        posts.map((item, index) => {
                            return (

                                // item
                                <View key={index}>
                                    <View style={styles.contentItem}
                                    >
                                        <Image
                                            width={windowWidth}
                                            height={windowHeight}
                                            style={{
                                                // width: '100%',
                                                height: '100%',
                                                resizeMode: 'contain',

                                            }}
                                            source={{ uri: `${item.duongdan}`, }}
                                        />
                                    </View>
                                    <ContenInteract
                                        // name={item.userName}
                                        id={item.id}
                                        userName={item.userName}
                                        title={item.title}
                                        hashtag={item.hashtag}
                                        potsType={item.potsType}
                                        music={item.music}
                                        avtImg={item.avtImg}
                                        duongdan={item.duongdan}
                                        musicImg={item.musicImg}
                                        tymCheck={item.tymCheck}
                                        tymQuantity={item.tymQuantity}
                                        cmtId={item.cmtId}
                                        cmtQuantity={item.cmtQuantity}
                                        saveCheck={item.saveCheck}
                                        saveQuantity={item.saveQuantity}
                                        shareQuantity={item.shareQuantity}

                                    />
                                    {/* <Text style={{ color: 'white' }}>{item.userName}</Text> */}
                                </View>
                            );
                        })
                    }
                </ScrollView>


            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    // contents
    contents: {
        height: windowHeight,
        width: Dimensions.get('window').width,
        backgroundColor: 'red',

    },
    contentBody: {
        height: windowHeight,
        width: Dimensions.get('window').width,
        // backgroundColor: 'blue',
    },
    contentItem: {
        height: windowHeight,
        width: Dimensions.get('window').width,
        backgroundColor: '#000',
        // backgroundColor: 'hsla(23,80%,80%,0.8)',
        borderWidth: 0.55,
        borderColor: '#ffffff'
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
