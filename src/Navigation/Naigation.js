import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/home/HomeScreen';
import ShopScreen from '../screens/shop/ShopScreen';
import PostScreen from '../screens/post/PostScreen';
import MessengerScreen from '../screens/messenger/Messenger';
import UserScreen from '../screens/user/UserScreen';

import PlusIcon from '../assets/icons/PlusIcon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
        name="ShopScreen"
        component={ShopScreen}
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
        name="PostScreen"
        s
        component={PostScreen}
        listeners={() => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('PostScreen');
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
        name="UserScreen"
        component={UserScreen}
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

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeTabs"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
