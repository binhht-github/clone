import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, TouchableOpacity, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import PostComp from '../components/Post/PostComp';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 60;

function TopMenuNavigation(props) {
  const [routeIndex, setRouteIndex] = useState(0);
  const [routes] = useState([
    {key: 'friend', title: 'Bạn Bè'},
    {key: 'followed', title: 'Đang Follow'},
    {key: 'foryou', title: 'Dành cho bạn'},
  ]);

  const FirstRoute = props => <PostComp />;

  const SecondRoute = () => (
    <View>
      <Text>Tab 2</Text>
    </View>
  );
  const ThirthRoute = () => (
    <View>
      <Text>Tab 3</Text>
    </View>
  );

  return (
    <TabView
      onIndexChange={setRouteIndex}
      initialLayout={{width: windowWidth}}
      navigationState={{
        index: 0,
        routes: routes,
      }}
      renderScene={({route, jumpTo}) => {
        switch (route.key) {
          case 'friend':
            return <FirstRoute jumpTo={jumpTo} />;
          case 'followed':
            return <SecondRoute jumpTo={jumpTo} />;
          case 'foryou':
            return <ThirthRoute jumpTo={jumpTo} pro={'parameter'} />;
        }
      }}
      renderTabBar={props => (
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            height: 50,
            width: windowWidth,
            zIndex: 1,
            justifyContent: 'space-between',
          }}>
          {/* btn live */}
          <TouchableOpacity
            onPress={() => {
              console.log('touch icon live');
            }}>
            <View
              style={{
                width: 25,
                height: 50,
                justifyContent: 'center',
                alignItem: 'center',
                zIndex: 3,
                marginLeft: 3,
              }}>
              <MaterialIcons
                style={{top: 0, zIndex: 3}}
                name={'live-tv'}
                color={'#ffffff'}
                size={23}
              />
            </View>
          </TouchableOpacity>
          <TabBar
            {...props}
            renderLabel={({route, focused, color}) => (
              <Text
                style={{
                  color,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                {route.title}
              </Text>
            )}
            activeColor="white"
            inactiveColor="hsla(50,0%,88%,1)"
            style={{
              backgroundColor: 'hsla(255,255,255,1)',
              // backgroundColor: 'red',
              width: windowWidth - 50,
              left: -6,
            }}
            indicatorStyle={{
              backgroundColor: 'white',
              height: 3,
              width: 20,
              marginLeft:
                (windowWidth - 50) / routes.length -
                (windowWidth - 50) / routes.length / 2 -
                10,
              marginBottom: 5,
              borderRadius: 50,
            }}
          />
          {/* btn search */}
          <View
            style={{
              width: 25,
              height: 50,
              justifyContent: 'center',
              alignItem: 'center',
              zIndex: 2,
            }}>
            <AntDesign
              style={{top: 2, left: -7}}
              name={'search1'}
              color={'#ffffff'}
              size={23}
            />
          </View>
        </View>
      )}
      tabBarPosition="top"
      pagerStyle={{
        width: windowWidth,
        zIndex: 0,
      }}
    />
  );
}
export default TopMenuNavigation;
