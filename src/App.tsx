import React, { useEffect, useState } from 'react';
import {Image, SafeAreaView, StyleSheet,useColorScheme,} from 'react-native';
import Tutorial1 from './screens/tutorial1';
import Tutorial2 from './screens/tutorial2';
import {NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme, RouteProp, ParamListBase } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tutorial3 from './screens/tutorial3';
import Signup from './screens/signup';
import Login from './screens/login';
import {  MD3LightTheme as PaperDefaultTheme,MD3DarkTheme as PaperDarkTheme, PaperProvider, Card } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './screens/dashboard';
import Course from './screens/course';
import Account from './screens/account';
import Cards from './components/card';
import Search from './screens/search';
import Notifications from './screens/notifications';
function App(): JSX.Element {
   
  const Stack = createNativeStackNavigator();
  const lightTheme= {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      primaryContainer: 'white', 
      primary: 'black', 
      secondaryContainer:'white',
      tertiaryContainer:'#F0F0F2',
      onPrimaryContainer:'#F4F3FD',
      onPrimary:'#3D5CFF',
      onSecondaryContainer:'#F4F3FD',
      onSecondary:'#858597',
    },
  }; 
 
  const darkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      primaryContainer: '#1F1F39', 
      primary: 'white',  
      secondaryContainer:'#2F2F42',
      tertiaryContainer:'#1F1F39',
      onPrimaryContainer:'#3E3E55',
      onPrimary:'white',
      onSecondaryContainer:'#858597',
      onSecondary:'white',
    },
  };
  const colorScheme = useColorScheme();
  const theme = useColorScheme()==='dark' ? darkTheme : lightTheme;
  const Tab = createBottomTabNavigator();

//Screen names
const dashboardName = "Home";
const courseName = "Course";
const searchName = "Search";
const notificationName = "Notification";
const accountName = "Account";
 
  return (  <PaperProvider theme={theme}>
    <NavigationContainer theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
      {/* <Stack.Navigator> */}
          {/* <Stack.Screen name="Tutorial1" component={Tutorial1} />
          <Stack.Screen name="Tutorial2" component={Tutorial2} />
          <Stack.Screen name="Tutorial3" component={Tutorial3} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} /> */}
          {/* <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Course" component={Course} />
        </Stack.Navigator>
        <BottomNav /> */} 
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === dashboardName) {
              iconName = focused ? require('./assets/home.png') : require('./assets/home.png');
            } else if (route.name === courseName) {
              iconName = focused ? require('./assets/course.png') : require('./assets/course.png');
            }
            else if (route.name === searchName) {
              iconName = focused ? require('./assets/search.png') : require('./assets/search.png');
            }
            else if (route.name === notificationName) {
              iconName = focused ? require('./assets/notification.png') : require('./assets/notification.png');
            }
            else if (route.name === accountName) {
              iconName = focused ? require('./assets/account.png') : require('./assets/account.png');
            }
              return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
          },headerShown: false,tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { paddingTop: 10, height: 70}
        })}> 
          
        <Tab.Screen name={dashboardName} component={Dashboard} />
        <Tab.Screen name={courseName} component={Course} />
        <Tab.Screen name={searchName} component={Search} />
        <Tab.Screen name={notificationName} component={Notifications} />
        <Tab.Screen name={accountName} component={Account} />
         
      </Tab.Navigator>
     </SafeAreaView> 
    </NavigationContainer>
  </PaperProvider>
  );
}
 
export default App;