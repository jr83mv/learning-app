import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function Tutorial2(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const theme = useTheme();
  const styles = StyleSheet.create({
    bgColor: {
      backgroundColor: theme.colors.background,
    },
    container: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    gap: {
      marginTop: 0,
      marginBottom: 5,
    },
    textBold: {
      fontWeight: 'bold',
      fontSize: 20,
      color: theme.colors.primary,
    },
    text: {
      color: theme.colors.primary,
    },
    pavig: {
      marginTop: 40,
    },
    skip: {
      marginTop: 10,
      marginBottom: 20,
    },
    skipContainer: {
      alignSelf: 'flex-end',
      marginRight: 10,
    },
  });

  return (
    <SafeAreaView style={styles.bgColor}>
      <View style={[styles.container, styles.bgColor]}>
        <View style={styles.skipContainer}>
          <Text style={[styles.skip, styles.text]}>skip</Text>
        </View>
        <Image
          style={[styles.skip]}
          source={require('../assets/illustration_2.png')}
        />
        <Text style={[styles.gap, styles.textBold]}>Quick and easy</Text>
        <Text style={[styles.gap, styles.textBold]}>learning</Text>
        <Text style={[styles.gap, styles.text]}>Easy and fast learning at</Text>
        <Text style={[styles.gap, styles.text]}>any time to help you </Text>
        <Text style={[styles.gap, styles.text]}>improve various skills </Text>
        <Image
          source={require('../assets/pavigation1.png')}
          style={[styles.gap, styles.pavig]}
        />
      </View>
    </SafeAreaView>
  );
}

export default Tutorial2;
