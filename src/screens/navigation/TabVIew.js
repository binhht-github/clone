import * as React from 'react';
import { Text, View, useWindowDimensions, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const FirstRoute = (props) => (
    <View style={{ flex: 1, backgroundColor: '#ff4081', position: 'absolute' }} ><Text>{props.pro} </Text></View>
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

const test = () => {
    // console.log('touch screen')
}

export default function TabVIew() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Music' },
        { key: 'albums', title: 'Albums' },
        { key: 'recents', title: 'Recents' },
        // { key: 'purchased', title: 'Purchased' },
    ]);

    return (
        <TabView
            // navigationState={{ index, routes }}
            // renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}


            navigationState={{
                index: 1,
                routes: routes
            }}
            renderScene={
                ({ route, jumpTo }) => {
                    switch (route.key) {
                        case 'music':
                            return <FirstRoute jumpTo={jumpTo} pro={'parameter'} />;
                        case 'albums':
                            return <SecondRoute jumpTo={jumpTo} />;
                    }
                }
            }


            // renderTabBar={() => null}
            renderTabBar={
                props =>
                    <View style={{
                        flexDirection: 'row',
                        // position: 'absolute',
                        // borderWidth: 1,
                        // borderColor: 'black',
                        // width: windowWidth,
                        // height: 50,
                        // backgroundColor: 'red',
                        top: 60,
                        zIndex: 10
                    }}>
                        <TouchableOpacity onPress={() => { console.log('touch') }}>
                            <Text style={{
                                width: 50,
                                height: 50,
                                backgroundColor: 'white',
                                // elevatedElement: {
                                //     zIndex: 3, // works on ios
                                //     elevation: 3, // works on android
                                // },
                                zIndex: 10111,
                                position: 'relative',
                                top: -20
                            }} >ss</Text>
                        </TouchableOpacity>
                        <TabBar
                            {...props}
                            labelStyle={{
                                // backgroundColor: 'blue',
                                color: 'black',
                                fontWeight: 'bold'
                            }}
                            activeColor='red'
                            inactiveColor='yellow'
                            style={{
                                // backgroundColor: 'blue',
                                width: windowWidth - 100,
                            }}
                            indicatorStyle={{ backgroundColor: 'black', height: 3, width: 20, marginLeft: ((windowWidth - 50) / routes.length) - (((windowWidth - 50) / routes.length) / 2) - 10, marginBottom: 5, borderRadius: 50 }}
                        // bounces={true}
                        />
                    </View>
            }
            tabBarPosition='top'
            // lazy={lazyPreloadDistance = true}
            // renderLazyPlaceholder={routes}
            onSwipeStart={test}

            pagerStyle={{
                backgroundColor: 'green',
                width: useWindowDimensions.width,
                height: windowHeight,
                zIndex: 0
            }}
        />
    );
}