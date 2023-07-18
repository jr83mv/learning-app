import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MD3Theme, useTheme} from 'react-native-paper';
import '../locales/index';
import {useTranslation} from 'react-i18next';

function Tutorial1(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {t} = useTranslation();
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
          source={require('../assets/illustration1.png')}
        />
        <Text style={[styles.gap, styles.textBold]}>{t('tutorial1.line1')}</Text>
        <Text style={[styles.gap, styles.textBold]}>{t('tutorial1.line2')}</Text>
        <Text style={[styles.gap, styles.text1]}>{t('tutorial1.line3')}</Text>
        <Text style={[styles.gap, styles.text1]}>{t('tutorial1.line4')}</Text>
        <Image
          source={require('../assets/pavigation.png')}
          style={[styles.gap, styles.pavig]}
        />
      </View>
    </View>
  );
}

const getCustomStyles = (theme: MD3Theme,WindowsHeight:number) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primaryContainer,
      height:WindowsHeight,
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

export default Tutorial1;
