import React from 'react';
import { View, Text, Image, SafeAreaView, Dimensions, StyleSheet, StatusBar } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { NavigationContainer } from '@react-navigation/native';
import Navigation from './screens/navigation/Navigation';
import TopNavigation from './screens/navigation/TopNavigation';
import TabVIew from './screens/navigation/TabVIew';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenHeight = Dimensions.get('screen').height;
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;


function Main() {
    return (
        // <View></View>
        <SafeAreaView style={styles.container}
            onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                console.log("navigation " + width + " " + height)
                console.log('Screen ' + screenHeight);
                console.log('STATUS_BAR_HEIGHT ' + STATUS_BAR_HEIGHT);
            }}
        >
            {/* <TabVIew></TabVIew> */}
            {/* <View style={{ width: windowWidth, height: windowHeight, flexDirection: 'row' }}>
                <Text>aaaa</Text>
                <TopNavigation></TopNavigation>
            </View> */}
            {/* <FontAwesome5 name={'shopping-bag'} color={"white"} size={25}></FontAwesome5> */}
            <Navigation onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                console.log("NavigationContainer " + width + " " + height)
            }}></Navigation>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        width: windowWidth,
        height: windowHeight
    },
});

export default Main;
