import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/auth/signup';
import Login from '../screens/auth/login';
import TabNavigation from './tabNavigation';
import TutorialCarousel from '../screens/carousel';
function AppNavigator(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TutorialCarousel"
        component={TutorialCarousel}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabNavigator" component={TabNavigation} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
