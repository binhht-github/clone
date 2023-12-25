import React from 'react';
import { View, Text, Button } from 'react-native';

function NewPost({ navigation }) {
    return (
        <View>
            <Text> New Post Screen</Text>
            <Button
                title='go back'
            // onPress={navigation.navigate('HomeTabs')}
            ></Button>
        </View>
    );
}

export default NewPost;
