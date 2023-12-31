import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function NavigationMenu() {
    return (
        // Navigation Menu 
        <View style={[styles.navigationMenu]}>
            <View style={styles.navigationMenuItem}>
                <MaterialIcons style={styles.navigationMenuText} name={'live-tv'} color={'#ffffff'} size={20} />
            </View>
            <View style={styles.navigationMenuItem}>
                <Text style={styles.navigationMenuText}>Bạn bè</Text>
            </View>
            <View style={styles.navigationMenuItem}>
                <Text style={styles.navigationMenuText}>Đang Follow</Text>
            </View>
            <View style={styles.navigationMenuItem}>
                <Text style={styles.navigationMenuText}>Dành cho  bạn</Text>
            </View>
            <View style={styles.navigationMenuItem}>
                <AntDesign style={styles.navigationMenuText} name={'search1'} color={'#ffffff'} size={20} />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    text: {
        color: '#ffffff'
    },

    // navigation Menu
    navigationMenu: {
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'green',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        position: 'absolute',
        // top: 100
    },
    navigationMenuItem: {
        height: 30,
        // backgroundColor: 'red',
        paddingVertical: 'auto',
        // paddingHorizontal: 2,
        marginHorizontal: 2,
        alignItems: 'center',
    },
    navigationMenuText: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 0,
        paddingTop: 5,
        color: 'white',
        // backgroundColor: 'hsla(240, 100%, 50%, 0.5)',
        fontSize: 15,
        // backgroundColor: 'hsla(30, 100%, 100%, 0.5)'
    },
})

export default NavigationMenu;
