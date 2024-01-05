import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { postApi } from '../../../../DB';

function NewPost({ navigation }) {

    initallPost = {
        "id": 9,
        "userId": 10,
        "shareQuantity": 10,
        "title": "",
        "hashtag": "",
        "potsType": "",
        "music": "",
        "avtImg": "",
        "src": "",
        "musicImg": "",
        "createDate": ""
    }

    const [newPost, setNewPost] = useState({})




    const addNewPost = () => {
        axios.get(`${postApi}`)
            .then(function (response) {
                console.log(response.data);
                console.log('response');
            })
            .catch(function (error) {
                console.log(error);
                console.log('error');
            });
        // console.log('add new post');

    }
    return (
        <View>
            <Text> New Post Screen</Text>

            <Text>chon file</Text>
            <Text>noi dung</Text>

            <Button
                title='Add New Post'
                onPress={addNewPost}
            />
            <Button
                title='go back'
            // onPress={navigation.navigate('HomeTabs')}
            ></Button>
        </View>
    );
}

export default NewPost;
