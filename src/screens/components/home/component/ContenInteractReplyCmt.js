import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text, TouchableOpacity, Image } from 'react-native';

function ContenInteractReplyCmt(props) {

    const [uiState, setUiState] = useState({
        replyCmt: false
    })
    return (
        <>
            {/* <Text>{props.userName}</Text> */}
            {uiState.replyCmt ?
                <View style={{ marginLeft: 70, width: '80%', }}>
                    {/* item */}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginTop: 5 }}>
                            <Image
                                height={30}
                                width={30}
                                borderRadius={50}
                                source={{
                                    uri: 'https://phunugioi.com/wp-content/uploads/2021/09/Mau-anh-the-dep-cua-con-gai.jpg'
                                }}
                            ></Image>
                        </View>
                        <View style={{ marginLeft: 8, width: '86%' }}>
                            <Text style={{}}>name</Text>
                            <Text style={{}}>title</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ paddingHorizontal: 8 }}>1 phut truoc</Text>
                                    <Text style={{ paddingHorizontal: 8 }}>tra loi</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ paddingHorizontal: 8 }}>
                                        <AntDesign name={'heart'} size={17} color={'red'} />
                                    </View>
                                    <View style={{ paddingHorizontal: 8 }}>
                                        <AntDesign name={'dislike1'} size={17} color={'blue'} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => {
                        setUiState({ ...uiState, replyCmt: !uiState.replyCmt })
                    }}>
                        <Text style={{ marginLeft: '90%', paddingTop: 7 }}>Ẩn</Text>
                    </TouchableOpacity>

                </View>
                :
                <TouchableOpacity onPress={() => {
                    setUiState({ ...uiState, replyCmt: !uiState.replyCmt })
                }}>
                    <Text style={{ marginLeft: 100 }}>Xem cau tra loi</Text>
                </TouchableOpacity>
            }
        </>
    );
}

export default ContenInteractReplyCmt;
