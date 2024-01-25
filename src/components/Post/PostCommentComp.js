import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AvtUserComp from '../User/AvtUserComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Moment from 'moment';
import {createComment, getCommentForPost} from '../../api/comment';
import {useDispatch, useSelector} from 'react-redux';
import {uiLogInActionOpen} from '../../redux/Login/action/uiLogInAction';
import {
  createCmtAction,
  deleteCmtAction,
  featchComment,
} from '../../redux/Comment/action/commentAction';

const widthWindown = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PostCommentComp(props) {
  const dispath = useDispatch();
  const infor = useSelector(state => state.persinalInfor);
  const cmts = useSelector(state => state.commentReducer);

  const {countCmt, postID, user} = props;
  const [uiModal, setUiModal] = useState(false);
  const [uiBtnCmt, setUiBtnCmt] = useState(false);
  const [cmtText, setCmtText] = useState('');

  const onChangeText = newText => {
    setCmtText(newText);
    newText ? setUiBtnCmt(true) : setUiBtnCmt(false);
  };

  const onPressBtnCmt = async () => {
    if (infor.id != '') {
      if (cmtText != '') {
        const data = {
          userId: infor.id,
          postId: postID,
          content: cmtText,
          createDate: Moment(),
          id: 0,
        };
        // const data = {
        //   userId: infor.id,
        //   postId: postID,
        //   content: cmtText,
        //   createDate: Moment(),
        //   id: 0,
        //   user: {
        //     id: infor.id,
        //     email: infor.email,
        //     userName: infor.userName,
        //     passWord: infor.id.passWord,
        //     avtSrc: infor.avtSrc,
        //     follower: infor.follower,
        //     createDate: infor.createDate,
        //   },
        // };

        try {
          const result = await createComment(data);
          dispath(
            createCmtAction({
              userId: result.data.userId,
              postId: result.data.postId,
              content: result.data.content,
              createDate: result.data.createDate + '',
              id: result.data.id,
              user: {
                id: infor.id,
                email: infor.email,
                userName: infor.userName,
                passWord: infor.id.passWord,
                avtSrc: infor.avtSrc,
                follower: infor.follower,
                createDate: infor.createDate,
              },
            }),
          );
        } catch (error) {
          console.log(error);
        } finally {
          setCmtText('');
        }
      } else {
        setUiBtnCmt(false);
        Alert.alert('Chưa viết bình luận');
      }
    } else {
      dispath(uiLogInActionOpen());
    }
  };

  const onDeleteCmt = cmtID => {
    dispath(deleteCmtAction(cmtID));
  };

  const renderCmtItem = ({item, index}) => {
    let munite = Moment().diff(Moment(item.createDate), 'minutes');
    return (
      <View key={index}>
        <TouchableOpacity
          onLongPress={() => {
            onDeleteCmt(item.id);
          }}
          // delayLongPress={1200}
        >
          <View style={styles.cmtItem}>
            <View style={styles.cmtItemLeft}>
              <AvtUserComp
                size={40}
                source={item.user ? item.user.avtSrc : ''}
              />
            </View>
            <View style={styles.cmtItemRight}>
              <Text style={styles.cmtName}>
                {item.user ? item.user.userName : ''}
              </Text>
              <Text style={styles.cmtContent}>{item.content}</Text>
              <View style={styles.cmtFooter}>
                <View style={styles.cmtFooterLeft}>
                  {/* <Text>{munite}  </Text> */}
                  <Text style={styles.cmtmunite}>
                    {munite / 518400 > 5
                      ? Moment(item.createDate).format('DD-MM-YYYY')
                      : munite / 518400 > 1
                      ? Math.floor(munite / 60 / 24 / 30 / 12) + ' năm'
                      : munite / 43200 > 1
                      ? Math.floor(munite / 60 / 24 / 30) + ' tháng'
                      : munite / 1440 > 1
                      ? Math.floor(munite / 60 / 24) + ' ngày'
                      : munite / 60 > 1
                      ? Math.floor(munite / 60) + ' giờ'
                      : munite > 1
                      ? munite + ' phút'
                      : 'vừa xong'}
                  </Text>
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
          {/* ========================================================= reply============================================= */}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={() => {
        dispath(featchComment(postID));
        setUiModal(true);
      }}>
      <View style={styles.interactItem}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={uiModal}
          onRequestClose={() => {
            setModalVisible(uiModal);
          }}>
          <View style={styles.centeredView}>
            <TouchableOpacity
              onPress={() => {
                setUiModal(false);
              }}>
              <View
                style={{
                  width: widthWindown,
                  height: '100%',
                }}></View>
            </TouchableOpacity>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Bình Luận</Text>
              <View style={styles.modelContent}>
                {cmts.length == 0 ? (
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
                    <FlatList
                      // pagingEnabled
                      scrollEventThrottle={16}
                      data={cmts}
                      renderItem={renderCmtItem}
                      contentContainerStyle={{
                        width: widthWindown,
                        height: 82 * cmts.length,
                        // backgroundColor: 'blue',
                      }}
                    />
                    {/* <ScrollView>
                      {cmts.map((item, index) => {
                        let munite = Moment().diff(
                          Moment(item.createDate),
                          'minutes',
                        );
                        return (
                          <View key={index}>
                            <TouchableOpacity
                              onLongPress={() => {
                                onDeleteCmt(item.id);
                              }}
                              delayLongPress={1200}>
                              <View style={styles.cmtItem}>
                                <View style={styles.cmtItemLeft}>
                                  <AvtUserComp
                                    size={40}
                                    source={item.user ? item.user.avtSrc : ''}
                                  />
                                </View>
                                <View style={styles.cmtItemRight}>
                                  <Text style={styles.cmtName}>
                                    {item.user ? item.user.userName : ''}
                                  </Text>
                                  <Text style={styles.cmtContent}>
                                    {item.content}
                                  </Text>
                                  <View style={styles.cmtFooter}>
                                    <View style={styles.cmtFooterLeft}>
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
                                          ? Math.floor(munite / 60 / 24 / 30) +
                                            ' tháng'
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
                            </TouchableOpacity>
                          </View>
                        );
                      })}
                    </ScrollView> */}
                  </View>
                )}
                <View style={styles.cmtView}>
                  <View style={styles.cmtAvt}>
                    <AvtUserComp size={40} source={infor ? infor.avtSrc : ''} />
                  </View>
                  <View style={styles.cmtInput}>
                    <TextInput
                      style={{
                        paddingLeft: 16,
                        flex: 1,
                      }}
                      value={cmtText}
                      onChangeText={newText => {
                        onChangeText(newText);
                      }}
                      //   onFocus={() => {
                      //     if (infor.id === '') {
                      //       dispatch(uiLogInActionOpen());
                      //     }
                      //   }}
                      // showSoftInputOnFocus={infor.id === '' ? false : true}
                      placeholder="Thêm bình luận..."
                      // showSoftInputOnFocus={true}
                    />
                    {uiBtnCmt ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          // backgroundColor: 'green',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            onPressBtnCmt();
                            // dispatch(uiLogInActionOpen);
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
        <FontAwesome name="commenting" color="white" size={25}></FontAwesome>
        <Text style={styles.text}>
          {countCmt > 999
            ? (countCmt + '').substring(0, (countCmt + '').length - 3) + '.k'
            : countCmt > 99999
            ? (countCmt + '').substring(0, (countCmt + '').length - 6) + '.M'
            : countCmt > 0
            ? countCmt
            : 0}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },
  interactItem: {
    alignItems: 'center',
    paddingVertical: 5,
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
