import React from 'react';
import { SafeAreaView,useColorScheme,} from 'react-native';
import {NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme, RouteProp, ParamListBase } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {  MD3LightTheme as PaperDefaultTheme,MD3DarkTheme as PaperDarkTheme, PaperProvider } from 'react-native-paper';
import AppNavigator from './navigation';
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
  const theme = useColorScheme()==='dark' ? darkTheme : lightTheme;
 
  return (  <PaperProvider theme={theme}>
    <NavigationContainer theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator/>
     </SafeAreaView> 
    </NavigationContainer>
  </PaperProvider>
  );
}
 
export default App;