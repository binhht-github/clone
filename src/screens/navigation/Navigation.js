import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LinearGradient from 'react-native-linear-gradient';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../components/home/HomeScreen';
import MessengerScreen from '../components/messenger/MessengerScreen';
import Shop from '../components/shop/Shop';
import YourUser from '../components/youruser/YourUser';
import NewPost from '../components/newpost/NewPost';
import LinearGradient from 'react-native-linear-gradient';
import PlusIcon from '../../assets/icons/PlusIcon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function EmptyScreen() {
  return <View />;
}

function HomeTabs({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          // backgroundColor: 'hsla(240, 100%, 50%, 0.1)',
          height: 60,
          backgroundColor: 'black',
        },
        tabBarItemStyle: {
          // backgroundColor: '#00ff00',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#808080',
        headerShown: false,
        // tabBarIcon: (() => { <Ionicons name="home" color="black" size={22}></Ionicons> })
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          // tabBarBadge: 3,
          tabBarIcon: ({focused}) => {
            const c = focused ? 'white' : '#808080';
            return <Ionicons name="home" color={c} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: 'Shop',
          // tabBarBadge: 3,
          tabBarIcon: ({focused}) => {
            const c = focused ? 'white' : '#808080';
            return (
              <FontAwesome5
                name={'shopping-bag'}
                color={c}
                size={25}></FontAwesome5>
            );
          },
        }}
      />
      <Tab.Screen
        name="NewPost"
        s
        component={NewPost}
        listeners={() => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('NewPost');
          },
        })}
        options={{
          tabBarLabel: '',
          // tabBarBadge: 3,
          tabBarIcon: () => (
            <LinearGradient
              colors={['cyan', 'red']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={{
                flex: 1,
                paddingHorizontal: 5,
                borderRadius: 5,
                margin: 2,
              }}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: 30,
                  // paddingHorizontal: 5
                  // marginVertical: 10
                }}>
                <PlusIcon size={30} color="black" />
              </View>
            </LinearGradient>
          ),
        }}
      />

      <Tab.Screen
        name="MessengerScreen"
        component={MessengerScreen}
        options={{
          tabBarLabel: 'Hộp thư',
          tabBarBadge: 3,
          tabBarIcon: ({focused}) => {
            const c = focused ? 'white' : '#808080';
            return (
              <MaterialCommunityIcons
                name={'message-minus-outline'}
                color={c}
                size={25}></MaterialCommunityIcons>
            );
          },
        }}
      />
      <Tab.Screen
        name="YourUser"
        component={YourUser}
        options={{
          tabBarLabel: 'Hồ sơ',
          // tabBarBadge: 3,
          tabBarIcon: ({focused}) => {
            const c = focused ? 'white' : '#808080';
            return <AntDesign name={'user'} color={c} size={25}></AntDesign>;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const logIn = () => {
  <View>
    <Text>log in</Text>
  </View>;
};

import {Provider} from 'react-redux';
import {stores} from '../../reduxs/stores';

function Navigation() {
  return (
    // <Provider store={stores}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeTabs"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen
          name="NewPost"
          component={NewPost}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}

export default Navigation;
