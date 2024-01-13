import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

let sizeProps = 10;
let backgroundColor = 'black';
let boderWidthComp = 0;
function UserComp({
  source = 'https://cdnphoto.dantri.com.vn/WFUicZO6-nLHhjBILArp3JjgJmE=/thumb_w/960/2021/05/15/co-gai-noi-nhu-con-vi-anh-can-cuoc-xinh-nhu-mong-nhan-sac-ngoai-doi-con-bat-ngo-hon-3-1621075314074.jpg',
  size = 50,
  borderColor,
  boderWidth,
}) {
  boderWidth ? (boderWidthComp = boderWidth) : null;
  size ? (sizeProps = size) : (sizeProps = 20);
  borderColor ? (backgroundColor = borderColor) : null;

  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        width: sizeProps,
        height: sizeProps,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Image
        height={sizeProps - boderWidthComp}
        width={sizeProps - boderWidthComp}
        borderRadius={50}
        source={{
          uri: `${source}`,
        }}
      />
    </View>
  );
}

export default UserComp;
