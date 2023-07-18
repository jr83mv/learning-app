import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { lightTheme, darkTheme } from './themes/theme'; // Import the custom themes
import AppNavigator from './navigation';

import * as Sentry from '@sentry/react-native';

Sentry.init({ 
  dsn: 'https://27b86f32a38a437ebfb8111719dfb403@o4505470554603520.ingest.sentry.io/4505548884606976', 
});


function App(): JSX.Element {
  const theme = useColorScheme() === 'dark' ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
