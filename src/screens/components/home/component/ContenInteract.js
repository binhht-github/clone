import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Modal, Button, TextInput, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const widthWindown = Dimensions.get('window').width;

function ContenInteract(props) {
    const { id,
        userName,
        title,
        hashtag,
        potsType,
        music,
        avtImg,
        duongdan,
        musicImg,
        tymCheck,
        tymQuantity,
        cmtId,
        cmtQuantity,
        saveCheck,
        saveQuantity,
        shareQuantity, } = props

    const [uiState, setUiState] = useState({
        tymUI: tymCheck,
        saveUI: saveCheck,
        modalVisible: false
    })

    const tuochHandle = (userId, postId, key) => {
        if (key === "like") {
            setUiState({
                ...uiState,
                tymUI: !uiState.tymUI
            })
        }
        if (key === "cmt") {
            setUiState({
                ...uiState,
                modalVisible: !uiState.modalVisible
            })
            // setModalVisible(true)}>
        }
        if (key === "save") {
            setUiState({
                ...uiState,
                saveUI: !uiState.saveUI
            })
        }
        // console.log("Touch Screen: userId: " + userId + " postId: " + postId + " key: " + key);
        // console.log(uiState)
    }

    return (

        // content Interact 
        <View style={styles.contenInteract}>

            <View style={styles.contenText}>
                <View style={styles.contenTextItem}>
                    <Text style={[styles.text, styles.name]}>{userName}</Text>
                </View>
                {title ? <View style={styles.contenTextItem}>
                    <Text style={[styles.text, styles.statusText]}>{title}  {hashtag}</Text>
                </View> :

                    <View style={styles.contenTextItem}>
                        <Text style={[styles.text, styles.keyTag]}></Text>
                    </View>

                }

            </View>

            <View style={styles.interact}>

                <View style={styles.interactItem}>
                    <View style={styles.interactItemUser}>
                        <Image
                            height={38}
                            width={38}
                            borderRadius={50}
                            source={{
                                uri: `${avtImg}`,
                            }}
                        ></Image>
                        <View style={styles.interactItemUserFolow}>
                            <Ionicons name="add-circle" color="red" size={22}></Ionicons>
                        </View>
                    </View>
                </View>
                {/* Tym */}
                <TouchableOpacity
                    onPress={() => { tuochHandle(userName, id, 'like') }}
                >
                    <View style={styles.interactItem}>
                        <AntDesign name="heart" color={uiState.tymUI ? "red" : "white"} size={25} ></AntDesign>
                        {/* <Text style={styles.text}>{tym}</Text> */}
                        <Text style={styles.text}>{
                            (tymQuantity > 999999) ? (((tymQuantity + "").substring(0, (tymQuantity + "").length - 6)) + '.M')
                                :
                                ((tymQuantity > 999) ? (((tymQuantity + "").substring(0, (tymQuantity + "").length - 3)) + '.k') : tymQuantity)}</Text>
                    </View>
                </TouchableOpacity>
                {/* cmt */}
                <TouchableOpacity
                    onPress={() => { tuochHandle(userName, id, 'cmt') }}
                >
                    <View style={styles.interactItem}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={uiState.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!uiState.modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setUiState({
                                            ...uiState,
                                            modalVisible: !uiState.modalVisible
                                        })
                                    }}
                                >
                                    <View style={{ width: widthWindown, height: "100%" }}></View>
                                </TouchableOpacity>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Bình Luận</Text>
                                    <View style={styles.modelContent}>
                                        <View style={styles.cmtItems}>{/*  //ad */}
                                            <ScrollView>
                                                <View style={styles.cmtItem}>
                                                    <View style={styles.cmtItemLeft}>
                                                        <Image
                                                            height={40}
                                                            width={40}
                                                            borderRadius={50}
                                                            source={{
                                                                uri: `${avtImg}`,
                                                            }}
                                                        ></Image>
                                                    </View>
                                                    <View style={styles.cmtItemRight}>
                                                        <Text style={styles.cmtName}>Binh_4Tui</Text>
                                                        <Text style={styles.cmtContent}>aksdhakshdakds</Text>
                                                        <View style={styles.cmtFooter}>
                                                            <View style={styles.cmtFooterLeft}>
                                                                <Text style={styles.cmtTime}>30 phut</Text>
                                                                <Text style={styles.btnReply}>Trả Lời</Text>
                                                            </View>
                                                            <View style={styles.cmtFooterRight}>
                                                                <View style={styles.cmtLike}>
                                                                    <AntDesign name={'heart'} size={17} color={'red'} />
                                                                    <Text style={styles.cmtLikeQuantity}>2</Text>
                                                                </View>
                                                                <View style={styles.unLike}>
                                                                    <AntDesign name={'dislike1'} size={17} color={'blue'} />
                                                                </View>
                                                            </View>

                                                        </View>
                                                    </View>
                                                </View>
                                            </ScrollView>
                                        </View>
                                        <View style={styles.cmtView}>
                                            <View style={styles.cmtAvt}><Image
                                                // height={30}
                                                // width={30}
                                                borderRadius={50}
                                                source={{
                                                    uri: `${avtImg}`,
                                                }}
                                                style={{
                                                    width: "100%",
                                                    height: "100%"
                                                }}
                                            ></Image></View>
                                            <TextInput
                                                style={styles.cmtInput}
                                                placeholder='Thêm bình luận...'
                                            ></TextInput>

                                        </View>

                                    </View>
                                </View>
                            </View>
                        </Modal>
                        <FontAwesome name="commenting" color="white" size={25} ></FontAwesome>
                        {/* <Text style={styles.text}>{cmtQuantity}</Text> */}
                        <Text style={styles.text}>{
                            (cmtQuantity > 999) ? (((cmtQuantity + "").substring(0, (cmtQuantity + "").length - 3)) + '.k')
                                :
                                ((cmtQuantity > 99999) ? (((cmtQuantity + "").substring(0, (cmtQuantity + "").length - 6)) + '.M') : cmtQuantity)}</Text>
                    </View >
                </TouchableOpacity >
                {/* save */}
                < TouchableOpacity
                    onPress={() => { tuochHandle(userName, id, 'save') }
                    }
                >
                    <View style={styles.interactItem}>
                        <FontAwesome name="bookmark" color={uiState.saveUI ? "yellow" : "white"} size={25}></FontAwesome>
                        <Text style={styles.text}>{saveQuantity}</Text>
                    </View>
                </TouchableOpacity >
                {/* share */}
                < View style={styles.interactItem} >
                    <FontAwesome name="share" color="white" size={25}></FontAwesome>
                    <Text style={styles.text}>{shareQuantity}</Text>
                </View >
                {/* music  */}
                < View style={[styles.interactItem, styles.interactItemMusic]} >
                    <Image
                        height={23}
                        width={23}
                        style={{
                            borderRadius: 50,
                            // transform: [
                            //     { rotate: '160deg' },
                            // ],

                        }}
                        source={{
                            uri: `${musicImg}`,
                        }}
                    ></Image>
                </View >
            </View >
        </View >
    );
}
const styles = StyleSheet.create({
    text: {
        color: '#ffffff'
    },
    // content Interact
    contenInteract: {
        // backgroundColor: 'red',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        // backgroundColor: 'hsla(30, 100%, 100%, 0.1)',
        bottom: 0
    },
    interact: {
        paddingRight: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,

        // backgroundColor: 'hsla(30, 100%, 100%, 0.5)',
    },
    interactItem: {
        alignItems: 'center',
        paddingVertical: 5,
    },
    interactItemUser: {
        backgroundColor: 'white',
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    interactItemUserFolow: {
        position: 'absolute',
        borderRadius: 50,
        width: 22,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        top: 25,
        backgroundColor: 'white'
    },
    interactItemUserFolowText: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
    },
    interactItemMusic: {
        width: 35,
        height: 35,
        backgroundColor: 'hsl(144, 13%, 10%)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 0.5,
        // borderColor: 'white',

    },
    contenBody: {
        flex: 1,
        backgroundColor: 'white',
        height: 500
    },
    contenText: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: '85%',
        // backgroundColor: 'hsla(30, 100%, 100%, 0.5)',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    contenTextItem: {

    },
    name: {
        fontSize: 16,
    },
    statusText: {
        fontSize: 14,
        paddingVertical: 8
    },
    keyTag: {
        fontSize: 14,
        fontWeight: '900'
    },



    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 22,
        // borderWidth: 2,
        // borderColor: 'green',
        // backgroundColor: 'red',
    },
    modalView: {
        width: widthWindown,
        height: 460,
        marginBottom: 40,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginTop: 5,
        textAlign: 'center',
        height: 20,
        // borderBottomWidth: 0.5,
        width: widthWindown,
        // backgroundColor: 'red'
    },
    modelContent: {
        marginTop: 20,
        // backgroundColor: 'green',
        width: widthWindown,
        // height: 430,
        height: "100%",
        justifyContent: 'flex-end',
    },

    cmtItems: {
        backgroundColor: 'white',
        width: widthWindown,
        height: '90%',
        // paddingTop: 50,
    },

    cmtItem: {
        width: widthWindown,
        height: 70,
        backgroundColor: 'white',
        flexDirection: 'row',
        // borderBottomWidth: 0.5,
        marginVertical: 5

    },
    cmtItemLeft: {
        width: 70,
        height: 70,
        // backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingTop: 6,
        // justifyContent: 'center',
        alignItems: 'center'
        // flex: 1,
    },
    cmtItemRight: {
        // width: "100%",
        width: widthWindown - 70,
        height: 70,
        // backgroundColor: 'cyan',
        justifyContent: 'space-between'
    },

    cmtName: {
        width: widthWindown - 70,
        height: 20,
        // backgroundColor: 'red'
    },
    cmtContent: {
        width: widthWindown - 70
    },
    cmtFooter: {
        width: widthWindown - 70,
        height: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    cmtFooterLeft: {
        // width: widthWindown,
        flexDirection: 'row'
    },
    cmtTime: {
        paddingRight: 8
    },
    btnReply: {
        paddingLeft: 8
    },

    cmtFooterRight: {
        // width: widthWindown,
        flexDirection: 'row'
    },

    cmtLike: {
        paddingRight: 10,
        flexDirection: 'row',
        // alignItems: 'center'
    },
    cmtLikeQuantity: {
        paddingLeft: 5,
        // backgroundColor: 'red',
    },
    unLike: {
        paddingLeft: 10, paddingRight: 10
    },




    cmtView: {
        borderTopWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        width: widthWindown,
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingBottom: 10,
    },
    cmtAvt: {
        height: "80%",
        width: "10%",
        borderRadius: 50,
        marginRight: 20,
        // backgroundColor: 'green'
    },
    cmtInput: {
        width: "80%",
        height: "80%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 50,
        // backgroundColor: "gray",
        paddingLeft: 15,
    }



})
export default ContenInteract;
