import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Content from './component/Content';
import ContenInteract from './component/ContenInteract';
import NavigationMenu from './component/NavigationMenu';

const windowHeight = Dimensions.get('screen').height;

function HomeScreen() {


    const [posts, setPosts] = useState([
        {
            id: "1",
            userName: 'Khi nào đẹp thì đổi tên',
            userId: '1',
            tymCheck: true,
            tymQuantity: 10,
            cmtId: '1',
            cmtQuantity: 10,
            saveQuantity: 10,
            saveCheck: false,
            shareQuantity: 10,
            title: 'gái xinh châu á',
            hashtag: '#hanoi#chill',
            potsType: 'img',
            music: '',
            avtImg: 'https://media.muanhatructuyen.vn/post/221/31/3/hinh-nen-gai-xinh-cho-dien-thoai-mac-ao-khoac-ho-vai.jpg',
            duongdan: "https://media.muanhatructuyen.vn/post/221/31/3/hinh-nen-gai-xinh-cho-dien-thoai-mac-ao-khoac-ho-vai.jpg",
            musicImg: 'https://media.muanhatructuyen.vn/post/221/31/3/hinh-nen-gai-xinh-cho-dien-thoai-mac-ao-khoac-ho-vai.jpg'
        },
        {
            id: "2",
            userId: '1',
            userName: 'GirlXinh',
            tymCheck: true,
            tymQuantity: 120,
            cmtId: '1',
            cmtQuantity: 10,
            saveQuantity: 5,
            saveCheck: false,
            shareQuantity: 120,
            title: 'ăn bánh khum',
            hashtag: '#hanoi#chill',
            potsType: 'img',
            music: '',
            avtImg: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/hinh-nen-girl-xinh-3.jpg',
            duongdan: "https://i.9mobi.vn/cf/Images/huy/2021/12/6/hinh-nen-girl-xinh-3.jpg",
            musicImg: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/hinh-nen-girl-xinh-3.jpg',
        },
        {
            id: "3",
            userId: '1',
            userName: 'Nhi nhí  nhảnh',
            tymCheck: false,
            tymQuantity: 7,
            cmtId: '1',
            cmtQuantity: 8,
            saveQuantity: 2,
            saveCheck: true,
            shareQuantity: 1,
            title: '',
            hashtag: '#hanoi#chill',
            potsType: 'img',
            music: '',
            avtImg: 'https://meliawedding.com.vn/wp-content/uploads/2022/05/hinh-nen-gai-xinh-8-1.jpg',
            duongdan: "https://meliawedding.com.vn/wp-content/uploads/2022/05/hinh-nen-gai-xinh-8-1.jpg",
            musicImg: 'https://meliawedding.com.vn/wp-content/uploads/2022/05/hinh-nen-gai-xinh-8-1.jpg',
        },
        {
            id: "4",
            userId: '1',
            userName: 'Photograper',
            tymCheck: true,
            tymQuantity: 1000,
            cmtId: '1',
            cmtQuantity: 200,
            saveQuantity: 5,
            saveCheck: true,
            shareQuantity: 3,
            title: 'Photograper',
            hashtag: '#hanoi#chill',
            potsType: 'img',
            music: '',
            avtImg: 'https://taimienphi.vn/tmp/cf/aut/hinh-nen-girl-xinh-1.jpg',
            duongdan: "https://taimienphi.vn/tmp/cf/aut/hinh-nen-girl-xinh-1.jpg",
            musicImg: 'https://taimienphi.vn/tmp/cf/aut/hinh-nen-girl-xinh-1.jpg',
        },
        {
            id: "5",
            userId: '1',
            userName: 'Binh_4_tui',
            tymCheck: false,
            tymQuantity: 25,
            cmtId: '1',
            cmtQuantity: 3,
            saveQuantity: 4,
            saveCheck: true,
            shareQuantity: 5,
            title: 'Cảnh đẹp thiên nhiên',
            hashtag: '#hanoi#chill',
            potsType: 'img',
            music: '',
            avtImg: 'https://img.pikbest.com/origin/09/41/85/916pIkbEsTzRC.jpg!w700wp',
            duongdan: "https://img.pikbest.com/origin/09/41/85/916pIkbEsTzRC.jpg!w700wp",
            musicImg: 'https://img.pikbest.com/origin/09/41/85/916pIkbEsTzRC.jpg!w700wp',
        },
        {
            id: "6",
            userId: '1',
            userName: 'kenzyn99',
            tymCheck: false,
            tymQuantity: 10000,
            cmtId: '1',
            cmtQuantity: 850,
            saveQuantity: 10,
            saveCheck: true,
            shareQuantity: 200,
            title: 'Thiên nhiên kỳ diệu,',
            hashtag: '#thiennhien #nam #namdoc #nature #thiennhienkythu',
            potsType: 'img',
            music: '',
            avtImg: 'https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg',
            duongdan: "https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg",
            musicImg: 'https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg',
        },
        {
            id: "7",
            userId: '1',
            userName: 'Na.to9776',
            tymCheck: true,
            tymQuantity: 1000000,
            cmtId: '1',
            cmtQuantity: 200000,
            saveQuantity: 55,
            saveCheck: false,
            shareQuantity: 3,
            title: 'Sơn thuỷ hữu tình ',
            hashtag: '#canhdep#thiennhien',
            potsType: 'img',
            music: '',
            avtImg: 'https://sohanews.sohacdn.com/2018/11/6/photo-1-1541483744832650156783.jpg',
            duongdan: "https://sohanews.sohacdn.com/2018/11/6/photo-1-1541483744832650156783.jpg",
            musicImg: 'https://sohanews.sohacdn.com/2018/11/6/photo-1-1541483744832650156783.jpg',
        },
        {
            id: "8",
            userId: '1',
            userName: 'LeminhBoy',
            tymCheck: false,
            tymQuantity: 50,
            cmtId: '1',
            cmtQuantity: 10,
            saveQuantity: 2,
            saveCheck: true,
            shareQuantity: 3,
            title: 'Kỳ thú',
            hashtag: '#chill #chillwithtiktok #nhachay #nhachaymoingay #canhdep #scenery #beautifulscenery #thiennhien #forever',
            potsType: 'img',
            music: '',
            avtImg: 'https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            duongdan: "https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            musicImg: 'https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
    ]);

    const [items, setItems] = useState([
        {
            id: "1",
            duongdan: "https://media.muanhatructuyen.vn/post/221/31/3/hinh-nen-gai-xinh-cho-dien-thoai-mac-ao-khoac-ho-vai.jpg",
        },
        {
            id: "2",
            duongdan: "https://i.9mobi.vn/cf/Images/huy/2021/12/6/hinh-nen-girl-xinh-3.jpg",
        },
        {
            id: "3",
            duongdan: "https://meliawedding.com.vn/wp-content/uploads/2022/05/hinh-nen-gai-xinh-8-1.jpg",
        },
        {
            id: "4",
            duongdan: "https://taimienphi.vn/tmp/cf/aut/hinh-nen-girl-xinh-1.jpg",
        },
        {
            id: "5",
            duongdan: "https://img.pikbest.com/origin/09/41/85/916pIkbEsTzRC.jpg!w700wp",
        },
        {
            id: "6",
            duongdan: "https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg",
        },
        {
            id: "7",
            duongdan: "https://sohanews.sohacdn.com/2018/11/6/photo-1-1541483744832650156783.jpg",
        },
        {
            id: "8",
            duongdan: "https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
    ]);


    return (
        <View onLayout={(event) => {
            const { width, height } = event.nativeEvent.layout;
            console.log("home screen " + width + " " + height + ' ' + windowHeight)
        }}>
            <Content posts={posts}></Content>
            <NavigationMenu></NavigationMenu>
            {/* <ContenInteract></ContenInteract> */}
        </View>
    );
}
// const styles = StyleSheet.create({
//     backgroundVideo: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//     },
//     text: {
//         color: '#ffffff'
//     },

//     // navigation Menu
//     navigationMenu: {
//         flexDirection: 'row',
//         width: '100%',
//         // backgroundColor: 'green',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         height: 40,
//         position: 'absolute',
//         top: 40
//     },
//     navigationMenuItem: {
//         height: 30,
//         // backgroundColor: 'red',
//         paddingVertical: 'auto',
//         // paddingHorizontal: 2,
//         marginHorizontal: 2,
//         alignItems: 'center',
//     },
//     navigationMenuText: {
//         height: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingVertical: 0,
//         paddingTop: 5,
//         color: 'white',
//         // backgroundColor: 'hsla(240, 100%, 50%, 0.5)',
//         fontSize: 15,
//         // backgroundColor: 'hsla(30, 100%, 100%, 0.5)'
//     },

//     // contents
//     contents: {
//         height: Dimensions.get('window').height - 90,
//         width: Dimensions.get('window').width,
//         backgroundColor: 'red',

//     },
//     contentBody: {
//         height: Dimensions.get('window').height - 90,
//         width: Dimensions.get('window').width,
//         backgroundColor: 'blue',
//     },
//     contentItem: {
//         height: Dimensions.get('window').height - 90,
//         width: Dimensions.get('window').width,
//         backgroundColor: 'yellow',
//     },




//     // content Interact
//     contenInteract: {
//         // backgroundColor: 'red',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         // backgroundColor: 'hsla(30, 100%, 100%, 0.1)',
//         bottom: 320
//     },
//     interact: {
//         paddingRight: 10,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         paddingBottom: 10,

//         // backgroundColor: 'hsla(30, 100%, 100%, 0.5)',
//     },
//     interactItem: {
//         alignItems: 'center',
//         paddingVertical: 5,
//     },
//     interactItemUser: {
//         backgroundColor: 'white',
//         height: 40,
//         width: 40,
//         borderRadius: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 10
//     },
//     interactItemUserFolow: {
//         position: 'absolute',
//         borderRadius: 50,
//         width: 22,
//         height: 22,
//         justifyContent: 'center',
//         alignItems: 'center',
//         top: 25,
//         backgroundColor: 'white'
//     },
//     interactItemUserFolowText: {
//         justifyContent: 'center',
//         alignContent: 'center',
//         color: 'white',
//     },
//     interactItemMusic: {
//         width: 35,
//         height: 35,
//         backgroundColor: 'black',
//         borderRadius: 50,
//         justifyContent: 'center',
//         alignItems: 'center',

//     },
//     contenBody: {
//         flex: 1,
//         backgroundColor: 'white',
//         height: 500
//     },
//     contenText: {
//         paddingHorizontal: 10,
//         paddingVertical: 8,
//         // backgroundColor: 'hsla(30, 100%, 100%, 0.5)',
//         justifyContent: 'flex-end',
//         paddingBottom: 10,
//         // position: 'relative',
//         // top: 10,
//         // bottom: 0,
//         // right: -20
//     },
//     contenTextItem: {

//     },
//     name: {
//         fontSize: 16,
//     },
//     statusText: {
//         fontSize: 14,
//         paddingVertical: 8
//     },
//     keyTag: {
//         fontSize: 14,
//         fontWeight: '900'
//     }







// })
export default HomeScreen;
