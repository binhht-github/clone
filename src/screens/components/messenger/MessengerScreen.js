import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MessengerScreen() {
    return (
        <View style={styles.homeScrenContainer}>
            <Text>Messenger Screen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    homeScrenContainer: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default MessengerScreen;
