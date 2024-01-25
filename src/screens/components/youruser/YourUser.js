import React from 'react';
import {Button, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {uiLogInActionOpen} from '../../../reduxs/action/uiLogInAction';

function YourUser() {
  const info = useSelector(state => state.persinalInfor);
  const dispatch = useDispatch();

  // const [state, dispatchUI] = React.useReducer(uiLog);

  return (
    <View>
      <Text> Your User Screen: name {info.userName}</Text>
      <Button
        title="check UI"
        onPress={() => {
          dispatch(uiLogInActionOpen());
          // dispatchUI({type: 'UI_LOG'});
        }}
      />
    </View>
  );
}

export default YourUser;
