import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useTheme} from 'react-native-paper';

function Tutorial1(): JSX.Element {
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
          source={require('../assets/illustration1.png')}
        />
        <Text style={[styles.gap, styles.textBold]}>Numerous free</Text>
        <Text style={[styles.gap, styles.textBold]}>trial courses</Text>
        <Text style={[styles.gap, styles.text]}>Free courses for you to </Text>
        <Text style={[styles.gap, styles.text]}>find your way to learning</Text>
        <Image
          source={require('../assets/pavigation.png')}
          style={[styles.gap, styles.pavig]}
        />
      </View>
    </SafeAreaView>
  );
}

export default Tutorial1;
