import React from 'react';
import { View, Text } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();
const TestScreen = () => {
    console.log('test screen');
}
function TopNavigation() {
    return (
        <View>
            {/* <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator> */}
        </View>
    );
}

export default TopNavigation;
