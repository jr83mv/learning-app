import {
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
  } from '@react-navigation/native';
  import {
    MD3LightTheme as PaperDefaultTheme,
    MD3DarkTheme as PaperDarkTheme,
  } from 'react-native-paper';
  
  export const lightTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      primaryContainer: 'white',
      primary: 'black',
      secondaryContainer: 'white',
      tertiaryContainer: '#F0F0F2',
      onPrimaryContainer: '#F4F3FD',
      onPrimary: '#3D5CFF',
      onSecondaryContainer: '#F4F3FD',
      onSecondary: '#858597',
      secondary:'#3D5CFF',
      tertiary:'white',
    },
  };
  
  export const darkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      primaryContainer: '#1F1F39',
      primary: 'white',
      secondaryContainer: '#2F2F42',
      tertiaryContainer: '#1F1F39',
      onPrimaryContainer: '#3E3E55',
      onPrimary: 'white',
      onSecondaryContainer: '#858597',
      onSecondary: 'white',
      secondary:'#858597',
      tertiary:'#858597',
    },
  };
  