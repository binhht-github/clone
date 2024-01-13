import axios from 'axios';
import LottieView from 'lottie-react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Moment from 'moment';
import ContenInteractReplyCmt from './ContenInteractReplyCmt';

const widthWindown = Dimensions.get('window').width;

function ContenInteract(props) {
  const {
    postID,
    userName,
    title,
    hashtag,
    avtImg,
    musicImg,
    checkTymUi,
    checkSaveUI,
    countTym,
    countSave,
    countCmt,
    setPosts,
    setLikeState,
    setSaveState,
  } = props;

  // let checkSaveUI;

  // Moment.locale('vi')

  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const [uiState, setUiState] = useState({
    tymUI: checkTymUi,
    saveUI: checkSaveUI,
    modalVisible: false,
    cmtBtn: false,
    countCmt: countCmt,
    countTym: countTym,
    countSave: countSave,
    replyCmt: false,
  });
  const animationRef = useRef(null);

  // console.log('check save = ', checkSaveUI)

  const tuochHandle = (userId, postId, key) => {
    if (key === 'like') {
      // setUiState({
      //     ...uiState,
      //     tymUI: !uiState.tymUI
      // })
      handleLikePost(postId);
    }
    if (key === 'cmt') {
      setUiState({
        ...uiState,
        modalVisible: !uiState.modalVisible,
      });

      if (!uiState.modalVisible) {
        axios
          .get(
            `http://192.168.1.7:3000/comments/?_expand=user&postId=${postID}`,
          )
          .then(res => {
            setComments(res.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    }

    if (key === 'save') {
      // setUiState({
      //     ...uiState,
      // saveUI: !uiState.saveUi,
      // })
      onPressSaveBtn(postId);
    }
  };

  // func like & unlike
  const handleLikePost = pID => {
    // console.log(uiState.tymUI);
    data = {
      userId: 1,
      postId: pID,
      createDate: Moment(),
    };

    axios
      .get(
        `http://192.168.1.7:3000/like?userId=${data.userId}&postId=${data.postId}`,
      )
      .then(response => {
        if (response.data.length == 1) {
          // un like
          if (uiState.tymUI) {
            axios
              .delete(`http://192.168.1.7:3000/like/${response.data[0].id}`)
              .then(function (res) {
                setLikeState(response.data[0], 'delete');
                setUiState({
                  ...uiState,
                  tymUI: false,
                  countTym: uiState.countTym - 1,
                });
                console.log('Un like success');
              })
              .catch(e => {
                console.log(e);
              });
          }
        } else {
          if (!uiState.tymUI) {
            //like
            axios
              .post('http://192.168.1.7:3000/like', data)
              .then(function (res) {
                setLikeState(res.data, 'post');
                setUiState({
                  ...uiState,
                  tymUI: true,
                  countTym: uiState.countTym + 1,
                });
                console.log('like success');
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              });
          }
        }
      })
      .catch(err => {
        console.log(error);
      });
  };

  const onPressCommnetBtn = pID => {
    // console.log(pID);
    setText('');
    setUiState({
      ...uiState,
      cmtBtn: false,
    });

    const data = {
      userId: 1,
      postId: pID,
      content: text,
      createDate: Moment(),
    };
    axios
      .post('http://192.168.1.7:3000/comments?_expand=user', data)
      .then(res => {
        // console.log(res);
        setComments([
          ...comments,
          {
            id: res.data.id,
            userId: res.data.userId,
            postId: res.data.postId,
            content: res.data.content,
            createDate: res.data.createDate + '',
            user: {
              id: 1,
              userName: 'Binh_4Tui',
              passWord: '123',
              avtSrc:
                'https://img.pikbest.com/png-images/qiantu/anime-character-avatar-cute-beautiful-girl-second-element-free-button_2652661.png!w700wp',
              follower: [1, 2, 3, 4, 5],
              createDate: '31/12/2023  10:08:00',
            },
          },
        ]);
        setPosts(res.data);

        setUiState({...uiState, countCmt: uiState.countCmt + 1});
      })
      .catch(e => console.log(e));
  };

  const handleChangeComment = newText => {
    setText(newText);

    newText
      ? setUiState({
          ...uiState,
          cmtBtn: true,
        })
      : setUiState({
          ...uiState,
          cmtBtn: false,
        });
  };

  const onPressSaveBtn = pID => {
    let data = {
      userId: 1,
      postId: pID,
      createDate: Moment(),
    };

    axios
      .get(`http://192.168.1.7:3000/save?userId=1&postId=${pID}`)
      .then(res => {
        if (res.data.length == 1) {
          if (uiState.saveUI) {
            axios
              .delete(`http://192.168.1.7:3000/save/${res.data[0].id}`)
              .then(function (response) {
                setSaveState(res.data[0], 'delete');
                setUiState({
                  ...uiState,
                  saveUI: false,
                  countSave: uiState.countSave - 1,
                });
                console.log('Un save success');
              })
              .catch(e => {
                console.log(e);
              });
          }
        } else {
          if (!uiState.saveUI) {
            axios
              .post(`http://192.168.1.7:3000/save`, data)
              .then(response => {
                setSaveState(response.data, 'post');
                setUiState({
                  ...uiState,
                  saveUI: true,
                  countSave: uiState.countSave + 1,
                });
                console.log('save success');
              })
              .catch(e => {
                console.log(e);
              });
          }
        }
      })
      .catch(e => console.log(e));
  };

  return (
    // content Interact
    <View style={styles.contenInteract}>
      <View style={styles.contenText}>
        <View style={styles.contenTextItem}>
          <Text style={[styles.text, styles.name]}>{userName}</Text>
        </View>
        {title ? (
          <View style={styles.contenTextItem}>
            <Text style={[styles.text, styles.statusText]}>
              {title} {hashtag}
            </Text>
          </View>
        ) : (
          <View style={styles.contenTextItem}>
            <Text style={[styles.text, styles.keyTag]}></Text>
          </View>
        )}
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
              }}></Image>
            <View style={styles.interactItemUserFolow}>
              <Ionicons name="add-circle" color="red" size={22}></Ionicons>
            </View>
          </View>
        </View>
        {/* Tym */}
        <TouchableOpacity
          onPress={() => {
            tuochHandle(userName, postID, 'like');
          }}>
          <View style={styles.interactItem}>
            <AntDesign
              name="heart"
              color={uiState.tymUI ? 'red' : 'white'}
              size={25}></AntDesign>
            <Text style={styles.text}>
              {uiState.countTym > 999999
                ? (uiState.countTym + '').substring(
                    0,
                    (uiState.countTym + '').length - 6,
                  ) + '.M'
                : uiState.countTym > 999
                ? (uiState.countTym + '').substring(
                    0,
                    (uiState.countTym + '').length - 3,
                  ) + '.k'
                : uiState.countTym}
            </Text>
          </View>
        </TouchableOpacity>
        {/* <LottieView
          source={require('../../../../assets/lotties/a.json')}
          autoPlay
          loop
          style={[
            styles.interactItem,
            {width: 200, height: 200, position: 'absolute'},
          ]}
        /> */}
        {/* cmt */}
        <TouchableOpacity
          onPress={() => {
            tuochHandle(userName, postID, 'cmt');
          }}>
          <View style={styles.interactItem}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={uiState.modalVisible}
              // visible={true}
              onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
                setModalVisible(!uiState.modalVisible);
              }}>
              <View style={styles.centeredView}>
                <TouchableOpacity
                  onPress={() => {
                    setUiState({
                      ...uiState,
                      modalVisible: !uiState.modalVisible,
                    });
                  }}>
                  <View style={{width: widthWindown, height: '100%'}}></View>
                </TouchableOpacity>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Bình Luận</Text>
                  <View style={styles.modelContent}>
                    {comments.length == 0 ? (
                      <View
                        style={{
                          height: '100%',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={{color: 'gray', fontSize: 16}}>
                          {' '}
                          Chưa có bình luận nào
                        </Text>
                      </View>
                    ) : (
                      <View style={styles.cmtItems}>
                        <ScrollView>
                          {comments.map((item, index) => {
                            let munite = Moment().diff(
                              Moment(item.createDate),
                              'minutes',
                            );
                            return (
                              <View key={index}>
                                <View style={styles.cmtItem}>
                                  <View style={styles.cmtItemLeft}>
                                    <Image
                                      height={40}
                                      width={40}
                                      borderRadius={50}
                                      source={{
                                        uri: `${item.user.avtSrc}`,
                                      }}></Image>
                                  </View>
                                  <View style={styles.cmtItemRight}>
                                    <Text style={styles.cmtName}>
                                      {item.user.userName}
                                    </Text>
                                    <Text style={styles.cmtContent}>
                                      {item.content}
                                    </Text>
                                    <View style={styles.cmtFooter}>
                                      <View style={styles.cmtFooterLeft}>
                                        {/* <Text>{munite}  </Text> */}
                                        <Text style={styles.cmtmunite}>
                                          {munite / 518400 > 5
                                            ? Moment(item.createDate).format(
                                                'DD-MM-YYYY',
                                              )
                                            : munite / 518400 > 1
                                            ? Math.floor(
                                                munite / 60 / 24 / 30 / 12,
                                              ) + ' năm'
                                            : munite / 43200 > 1
                                            ? Math.floor(
                                                munite / 60 / 24 / 30,
                                              ) + ' tháng'
                                            : munite / 1440 > 1
                                            ? Math.floor(munite / 60 / 24) +
                                              ' ngày'
                                            : munite / 60 > 1
                                            ? Math.floor(munite / 60) + ' giờ'
                                            : munite > 1
                                            ? munite + ' phút'
                                            : 'vừa xong'}
                                        </Text>
                                        <Text style={styles.btnReply}>
                                          Trả Lời
                                        </Text>
                                      </View>
                                      <View style={styles.cmtFooterRight}>
                                        <View style={styles.cmtLike}>
                                          <AntDesign
                                            name={'heart'}
                                            size={17}
                                            color={'red'}
                                          />
                                          <Text style={styles.cmtLikeQuantity}>
                                            2
                                          </Text>
                                        </View>
                                        <View style={styles.unLike}>
                                          <AntDesign
                                            name={'dislike1'}
                                            size={17}
                                            color={'blue'}
                                          />
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                                {/* ========================================================= reply============================================= */}
                                <ContenInteractReplyCmt
                                  userName={['item.userName']}
                                />
                              </View>
                            );
                          })}
                        </ScrollView>
                      </View>
                    )}
                    <View style={styles.cmtView}>
                      <View style={styles.cmtAvt}>
                        <Image
                          borderRadius={50}
                          source={{
                            uri: `${avtImg}`,
                          }}
                          style={{
                            width: '100%',
                            height: '100%',
                          }}></Image>
                      </View>
                      <View style={styles.cmtInput}>
                        <TextInput
                          style={{
                            paddingLeft: 16,
                            // backgroundColor: 'red',
                            flex: 1,
                            // width: '50%',
                          }}
                          value={text}
                          onChangeText={newText => handleChangeComment(newText)}
                          placeholder="Thêm bình luận..."
                        />
                        {uiState.cmtBtn ? (
                          <View
                            style={{
                              flexDirection: 'row',
                              // backgroundColor: 'green',
                              alignItems: 'center',
                            }}>
                            {/* <Text style={{ color: "black", fontSize: 22 }}>@</Text> */}
                            <TouchableOpacity
                              onPress={() => {
                                onPressCommnetBtn(postID);
                              }}>
                              <FontAwesome6
                                name={'circle-arrow-up'}
                                size={25}
                                color="red"
                                style={{
                                  marginHorizontal: 8,
                                  backgroundColor: 'white',
                                  borderRadius: 50,
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                        ) : null}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            <FontAwesome
              name="commenting"
              color="white"
              size={25}></FontAwesome>
            <Text style={styles.text}>
              {uiState.countCmt > 999
                ? (uiState.countCmt + '').substring(
                    0,
                    (uiState.countCmt + '').length - 3,
                  ) + '.k'
                : uiState.countCmt > 99999
                ? (uiState.countCmt + '').substring(
                    0,
                    (uiState.countCmt + '').length - 6,
                  ) + '.M'
                : uiState.countCmt}
            </Text>
          </View>
        </TouchableOpacity>
        {/* save */}
        <TouchableOpacity
          onPress={() => {
            tuochHandle(userName, postID, 'save');
          }}>
          <View style={styles.interactItem}>
            <FontAwesome
              name="bookmark"
              color={uiState.saveUI ? 'yellow' : 'white'}
              size={25}
            />
            <Text style={styles.text}>
              {uiState.countSave > 999999
                ? (uiState.countSave + '').substring(
                    0,
                    (uiState.countSave + '').length - 6,
                  ) + '.M'
                : uiState.countSave > 999
                ? (uiState.countSave + '').substring(
                    0,
                    (uiState.countSave + '').length - 3,
                  ) + '.k'
                : uiState.countSave}
            </Text>
          </View>
        </TouchableOpacity>
        {/* share */}
        <View style={styles.interactItem}>
          <FontAwesome name="share" color="white" size={25}></FontAwesome>
          <Text style={styles.text}></Text>
        </View>
        {/* music  */}
        <View style={[styles.interactItem, styles.interactItemMusic]}>
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
            }}></Image>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },
  // content Interact
  contenInteract: {
    // backgroundColor: 'red',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    // backgroundColor: 'hsla(30, 100%, 100%, 0.1)',
    bottom: 0,
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
    marginBottom: 10,
  },
  interactItemUserFolow: {
    position: 'absolute',
    borderRadius: 50,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    top: 25,
    backgroundColor: 'white',
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
    height: 500,
  },
  contenText: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '85%',
    // backgroundColor: 'hsla(30, 100%, 100%, 0.5)',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  contenTextItem: {},
  name: {
    fontSize: 16,
  },
  statusText: {
    fontSize: 14,
    paddingVertical: 8,
  },
  keyTag: {
    fontSize: 14,
    fontWeight: '900',
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
    height: '100%',
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
    marginVertical: 5,
  },
  cmtItemLeft: {
    width: 70,
    height: 70,
    // backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingTop: 6,
    // justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },
  cmtItemRight: {
    // width: "100%",
    width: widthWindown - 70,
    height: 70,
    // backgroundColor: 'cyan',
    justifyContent: 'space-between',
  },

  cmtName: {
    width: widthWindown - 70,
    height: 20,
    // backgroundColor: 'red'
  },
  cmtContent: {
    width: widthWindown - 70,
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
    flexDirection: 'row',
  },
  cmtTime: {
    paddingRight: 8,
  },
  btnReply: {
    paddingLeft: 14,
  },

  cmtFooterRight: {
    // width: widthWindown,
    flexDirection: 'row',
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
    paddingLeft: 10,
    paddingRight: 10,
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
    // backgroundColor: 'red'
  },
  cmtAvt: {
    height: '80%',
    width: '10%',
    borderRadius: 50,
    marginRight: 20,
    // backgroundColor: 'green'
  },
  cmtInput: {
    width: '80%',
    height: '80%',
    flexDirection: 'row',
    borderRadius: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default ContenInteract;
