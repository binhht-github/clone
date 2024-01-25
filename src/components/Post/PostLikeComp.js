import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {likeAction} from '../../redux/Like/action/likeAction';
import Moment from 'moment';
import {checkLike, findLike, like, unlike} from '../../api/like';
import {uiLogInActionOpen} from '../../redux/Login/action/uiLogInAction';

export default function PostLikeComp(props) {
  const dispatch = useDispatch();
  const infor = useSelector(state => state.persinalInfor);
  const {checkTymUi, postID} = props;
  let {countTym} = props;
  const [tymQuantity, setTymQuantity] = useState(countTym);
  const [uiTym, setUiTym] = useState(checkTymUi);

  const onHandleLike = async (postID, checkTymUi) => {
    // uiTym ? setTymQuantity(tymQuantity - 1) : setTymQuantity(tymQuantity + 1);
    // setUiTym(!uiTym);

    if (infor.id == '') {
      dispatch(uiLogInActionOpen());
      return;
    }

    if (!uiTym) {
      const result = await checkLike(postID, infor.id);
      console.log(result.data);
      if (result.data.length < 1) {
        const data = {
          userId: infor.id,
          postId: postID,
          createDate: Moment(),
        };
        const Like = like(data);
        setTymQuantity(tymQuantity + 1);
        setUiTym(!uiTym);
      }
    }
    if (uiTym) {
      const result = await checkLike(postID, infor.id);
      console.log(result);
      if (result.data.length > 0) {
        const UnLike = unlike(result.data[0].id);
        setTymQuantity(tymQuantity - 1);
        setUiTym(!uiTym);
      }
    }
    dispatch(
      likeAction({
        userId: infor.id,
        postId: postID,
        createDate: Moment(),
        id: 0,
      }),
    );
  };

  return (
    <TouchableOpacity
      onPress={() => {
        onHandleLike(postID, checkTymUi);
      }}>
      <View style={styles.interactItem}>
        <AntDesign
          name="heart"
          color={uiTym ? 'red' : 'white'}
          size={25}></AntDesign>
        <Text style={styles.text}>
          {tymQuantity > 999999
            ? (tymQuantity + '').substring(0, (tymQuantity + '').length - 6) +
              '.M'
            : tymQuantity > 999
            ? (tymQuantity + '').substring(0, (tymQuantity + '').length - 3) +
              '.k'
            : tymQuantity > 0
            ? tymQuantity
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
});
