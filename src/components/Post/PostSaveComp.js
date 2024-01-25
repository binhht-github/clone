import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {saveAction} from '../../redux/Save/action/saveAction';
import Moment from 'moment';
import {uiLogInActionOpen} from '../../redux/Login/action/uiLogInAction';
import {checkSave, save, unSave} from '../../api/save';

export default function PostSaveComp(props) {
  const infor = useSelector(state => state.persinalInfor);
  const dispatch = useDispatch();
  const {countSave, checkSaveUI, postID} = props;
  const [saveQuantity, setSaveQuantity] = useState(countSave);
  const [uiSave, setUiSave] = useState(checkSaveUI);

  const onHandleSave = async (postID, uiSave) => {
    // setUiSave(!uiSave);

    if (infor.id == '') {
      dispatch(uiLogInActionOpen());
      return;
    }

    if (!uiSave) {
      const result = await checkSave(postID, infor.id);
      console.log(result.data);
      if (result.data.length < 1) {
        const data = {
          userId: infor.id,
          postId: postID,
          createDate: Moment(),
        };
        const Like = save(data);
        setSaveQuantity(saveQuantity + 1);
        setUiSave(!uiSave);
      }
    }
    if (uiSave) {
      const result = await checkSave(postID, infor.id);
      console.log(result);
      if (result.data.length > 0) {
        const UnLike = unSave(result.data[0].id);
        setSaveQuantity(saveQuantity - 1);
        setUiSave(!uiSave);
      }
    }

    dispatch(
      saveAction({
        userId: infor.id,
        postId: postID,
        createDate: Moment(),
        id: 0,
      }),
    );
    // console.log('save ', saveQuantity, ' = ', uiSave);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        onHandleSave(postID, uiSave);
      }}>
      <View style={styles.interactItem}>
        <FontAwesome
          name="bookmark"
          color={uiSave ? 'yellow' : 'white'}
          size={25}
        />
        <Text style={styles.text}>
          {countSave > 999999
            ? (saveQuantity + '').substring(0, (saveQuantity + '').length - 6) +
              '.M'
            : saveQuantity > 999
            ? (saveQuantity + '').substring(0, (saveQuantity + '').length - 3) +
              '.k'
            : saveQuantity > 0
            ? saveQuantity
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
