import React, { useState, useEffect } from 'react';
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
import TopTabNavigation from './component/TopTabNavigation';

const windowWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('screen').height;

function HomeScreen() {

    return (
        <TopTabNavigation></TopTabNavigation>

    );
}
export default HomeScreen;
