import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Tutorial2(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const theme = useTheme();
  const WindowsHeight = Dimensions.get('window').height;
  const styles = getCustomStyles(theme,WindowsHeight);

  return (
    <View>
      <View style={[styles.container]}>
        <View style={styles.skipContainer}>
          <Text style={[styles.skip]}>skip</Text>
        </View>
        <Image
          style={[styles.skip]}
          source={require('../assets/illustration_2.png')}
        />
        <Text style={[styles.gap, styles.textBold]}>Quick and easy</Text>
        <Text style={[styles.gap, styles.textBold]}>learning</Text>
        <Text style={[styles.gap, styles.text1]}>Easy and fast learning at</Text>
        <Text style={[styles.gap, styles.text1]}>any time to help you </Text>
        <Text style={[styles.gap, styles.text1]}>improve various skills </Text>
        <Image
          source={require('../assets/pavigation1.png')}
          style={[styles.gap, styles.pavig]}
        />
      </View>
    </View>
  );
}

const getCustomStyles = (theme: MD3Theme,WindowsHeight:number) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.colors.primaryContainer,
      height:WindowsHeight,
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
      color:'#858597',
      marginTop: 10,
      marginBottom: 20,
    },
    skipContainer: {
      alignSelf: 'flex-end',
      marginRight: 20,
      marginTop: 40,
    },
    text1:{
      color:theme.colors.onSecondary,
    },
  });

export default Tutorial2;
