import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomeRoute = () => ( <>
    <Image source={require('../assets/home.png')}  />
  </>);
  const CourseRoute = () => ( <>
    <Image source={require('../assets/course.png')}  />
  </>);
  const SearchRoute = () => ( <>
    <Image source={require('../assets/search.png')}  />
  </>);
const NotificationRoute = () => ( <>
    <Image source={require('../assets/notification.png')}  />
  </>);
  const AccountRoute = () => ( <>
    <Image source={require('../assets/account.png')}  />
  </>);


const BottomNav = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'home', title: 'home', icon: HomeRoute },
    { key: 'course', title: 'course', icon: CourseRoute },
    { key: 'search', title: 'search', icon: SearchRoute },
    { key: 'notification', title: 'notification', icon: NotificationRoute },
    { key: 'account', title: 'account', icon: AccountRoute },
  ]);

 const handleNavigation = (route:any) => {
    navigation.navigate(route.key);
  };

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    course: CourseRoute,
    search: SearchRoute,
    notification: NotificationRoute,
    account: AccountRoute
  });
  
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={({ route, color }) => <route.icon />}
      onTabPress={({ route }) => handleNavigation(route)}
    />
  );
};

export default BottomNav;