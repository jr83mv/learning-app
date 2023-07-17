import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/home/dashboard';
import Course from '../screens/course/course';
import Account from '../screens/account/account';
import Search from '../screens/search/search';
import Notifications from '../screens/notifications/notifications';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('../assets/home.png')
              : require('../assets/home.png');
          } else if (route.name === 'Course') {
            iconName = focused
              ? require('../assets/course.png')
              : require('../assets/course.png');
          } else if (route.name === 'Search') {
            iconName = focused
              ? require('../assets/search.png')
              : require('../assets/search.png');
          } else if (route.name === 'Notifications') {
            iconName = focused
              ? require('../assets/notification.png')
              : require('../assets/notification.png');
          } else if (route.name === 'Account') {
            iconName = focused
              ? require('../assets/account.png')
              : require('../assets/account.png');
          }
          return (
            <Image
              source={iconName}
              style={{width: size, height: size, tintColor: color}}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {paddingBottom: 10, fontSize: 10},
        tabBarStyle: {paddingTop: 10, height: 70},
      })}>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Course" component={Course} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
