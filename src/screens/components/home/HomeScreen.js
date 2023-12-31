import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Content from './component/Content';
import ContenInteract from './component/ContenInteract';
import NavigationMenu from './component/NavigationMenu';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const windowWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('screen').height;

function HomeScreen() {


    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'friend', title: 'Bạn Bè' },
        { key: 'followed', title: 'Đang Follow' },
        { key: 'foryou', title: 'Dành cho bạn' }
    ]);


    const FirstRoute = (props) => (
        <Content posts={posts} index={10}></Content>
    );

    const SecondRoute = () => (
        <Content posts={posts} index={10}></Content>
    );
    const ThirthRoute = () => (
        <Content posts={posts} index={10}></Content>
    );



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



    return (

        <TabView
            onIndexChange={setIndex}
            initialLayout={{ width: windowWidth }}
            navigationState={{
                index: 1,
                routes: routes
            }}
            renderScene={
                ({ route, jumpTo }) => {
                    switch (route.key) {
                        case 'friend':
                            return <FirstRoute jumpTo={jumpTo} />;
                        case 'followed':
                            return <SecondRoute jumpTo={jumpTo} />;
                        case 'foryou':
                            return <ThirthRoute jumpTo={jumpTo} pro={'parameter'} />;
                    }
                }
            }
            renderTabBar={
                props =>
                    <View
                        style={{
                            flexDirection: 'row',
                            position: 'absolute',
                            height: 50,
                            width: windowWidth,
                            zIndex: 1,
                            justifyContent: 'space-between'
                        }}>
                        <TouchableOpacity onPress={() => { console.log('touch') }}>
                            <View
                                style={{
                                    width: 25,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItem: 'center',
                                    zIndex: 3,
                                    marginLeft: 3
                                }}
                            >
                                <MaterialIcons style={{ top: 0, zIndex: 3 }} name={'live-tv'} color={'#ffffff'} size={23} />
                            </View>
                        </TouchableOpacity>
                        <TabBar
                            {...props}
                            renderLabel={({ route, focused, color }) => (
                                <Text style={{
                                    color,
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                }}>
                                    {route.title}
                                </Text>
                            )}
                            activeColor='white'
                            inactiveColor='hsla(50,0%,88%,1)'
                            style={{
                                backgroundColor: 'hsla(255,255,255,0)',
                                width: windowWidth - 50,
                                left: -10,

                            }}
                            indicatorStyle={{
                                backgroundColor: 'white',
                                height: 3, width: 20,
                                marginLeft: ((windowWidth - 50) / routes.length) - (((windowWidth - 50) / routes.length) / 2) - 10,
                                marginBottom: 5, borderRadius: 50
                            }}


                        />
                        <View
                            style={{
                                width: 25,
                                height: 50,
                                justifyContent: 'center',
                                alignItem: 'center',
                                zIndex: 2,
                            }}
                        >
                            <AntDesign style={{ top: 2, left: -7 }} name={'search1'} color={'#ffffff'} size={23} />
                        </View>
                    </View>
            }
            tabBarPosition='top'
            // onSwipeStart={test}

            pagerStyle={{
                width: windowWidth,
                zIndex: 0
            }}
        />

        // <View onLayout={(event) => {
        //     const { width, height } = event.nativeEvent.layout;
        //     console.log("home screen " + width + " " + height + ' ' + screenHeight)
        // }}>

        //     {/* <Content posts={posts} index={index}></Content> */}
        //     {/* <NavigationMenu></NavigationMenu> */}
        //     {/* <ContenInteract></ContenInteract> */}
        // </View>
    );
}
export default HomeScreen;
