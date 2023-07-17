import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/signup/index';
import Login from '../screens/login/index';
import TabNavigation from './tabNavigation';
import TutorialCarousel from '../screens/carousel/index';
function AppNavigator(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TutorialCarousel"
        component={TutorialCarousel}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="TabNavigator" component={TabNavigation} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default AppNavigator;
