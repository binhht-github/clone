import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const TabTop = createMaterialTopTabNavigator();

function TopNavigation() {
    return (
        <NavigationContainer>
            <View style={{ width: windowWidth, height: windowHeight, flexDirection: 'row' }}>
                <Text>bbbb</Text>
                <TabTop.Navigator screenOptions={{
                    tabBarItemStyle: { width: 100, },
                    tabBarStyle: { backgroundColor: "blue" },
                    tabBarLabelStyle: { color: 'white' }
                }}>
                    <TabTop.Screen name="Tab1" component={HomeScreen} />
                    <TabTop.Screen name="Tab2" component={SettingsScreen} />
                </TabTop.Navigator>
            </View>
        </NavigationContainer >
    );
}

export default TopNavigation;
