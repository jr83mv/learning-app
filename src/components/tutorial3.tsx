import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';

function Tutorial3(): JSX.Element {
  const navigation = useNavigation();

  const theme = useTheme();
  const WindowsHeight = Dimensions.get('window').height;
  const styles = getCustomStyles(theme,WindowsHeight);

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <View style={[styles.container]}>
        <Image
          style={[styles.skip]}
          source={require('../assets/illustration03.png')}
        />
        <Text style={[styles.gap, styles.textBold]}>Create your own </Text>
        <Text style={[styles.gap, styles.textBold]}>study plan</Text>
        <Text style={[styles.gap, styles.text]}>Study according to the </Text>
        <Text style={[styles.gap, styles.text1]}>study plan, make study </Text>
        <Text style={[styles.gap, styles.text1]}>more motivated </Text>
        <Image
          source={require('../assets/pavigation2.png')}
          style={[styles.gap, styles.pavig]}
        />
        <View style={[styles.buttonContainer]}>
          <TouchableOpacity style={styles.button1} onPress={handleSignup}>
            <Text style={styles.buttonTitle1}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={handleLogin}>
            <Text style={styles.buttonTitle2}>Log in</Text>
          </TouchableOpacity>
        </View>
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
    buttonContainer: {
      marginTop: 30,
      flexDirection: 'row',
      gap: 20,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    button1: {
      borderRadius: 10,
      width: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      backgroundColor: '#3D5CFF',
    },
    button2: {
      borderRadius: 10,
      width: 150,
      display: 'flex',
      borderWidth: 1,
      borderColor:theme.colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      backgroundColor:theme.colors.onSecondaryContainer
    },
    buttonTitle1: {
      color: 'white',
    },
    text: {
      color: theme.colors.primary,
    },
    buttonTitle2: {
      color: theme.colors.onPrimary,
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
    pavig: {
      marginTop: 20,
    },
    skip: {
      marginTop: 80,
      marginBottom: 20,
    },
    skipContainer: {
      alignSelf: 'flex-end',
      marginRight: 10,
    },
    text1:{
      color:theme.colors.onSecondary,
    },
  });

export default Tutorial3;
