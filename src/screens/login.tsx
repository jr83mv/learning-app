import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';
function Login(): JSX.Element {
  const WindowsWidth = Dimensions.get('window').width;
  const theme = useTheme();
  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      marginBottom: 10,
    },
    input1: {
      height: 40,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      marginBottom: 0,
    },
    button: {
      borderRadius: 10,
      width: WindowsWidth - 65,
      borderStyle: 'solid',
      borderColor: '#3D5CFF',
      display: 'flex',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      backgroundColor: '#3D5CFF',
    },
    buttonTitle: {
      color: 'white',
    },
    text: {
      color: theme.colors.primary,
    },

    textAlready: {
      textAlign: 'center',
      color: '#858597',
      padding: 40,
    },

    container: {
      flexDirection: 'column',
      backgroundColor: '#F0F0F2',
    },

    containerHeader: {
      flexDirection: 'column',
      paddingTop: 80,
      backgroundColor: theme.colors.tertiaryContainer,
    },

    containerHeaderText: {
      fontFamily: 'poppins',
      color: theme.colors.primary,
      fontSize: 32,
      lineHeight: 48,
      fontWeight: '800',
      paddingLeft: 24,
    },

    containerBody: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: theme.colors.secondaryContainer,
      padding: 16,
      paddingTop: 25,
      paddingBottom: 150,
    },

    textForgetPassword: {
      fontFamily: 'Poppins',
      fontSize: 12,
      fontWeight: 'normal',
      textAlign: 'right',
      letterSpacing: 0.5,
      lineHeight: 21,
      marginBottom: 10,
      marginTop: 5,
      color: theme.colors.primary,
    },

    textDontHave: {
      fontFamily: 'Poppins',
      fontSize: 14,
      fontWeight: 'normal',
      letterSpacing: 0.5,
      lineHeight: 21,
      color: theme.colors.primary,
      padding: 14,
    },

    accounts: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '70%',
      padding: 10,
    },

    accountSetup: {
      flexDirection: 'column',
      alignItems: 'center',
    },

    lineContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },

    line: {
      width: '25%',
      height: 1,
      backgroundColor: '#B8B8D2',
    },
    signupText: {
      textAlign: 'center',
      color: '#3D5CFF',
      padding: 20,
    },
  });
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.containerHeaderText}>Log In</Text>
          <View style={styles.containerBody}>
            <View>
              <View>
                <Text style={styles.text}>Your Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email"
                  placeholderTextColor="#999999"
                />
              </View>
              <View>
                <Text style={styles.text}>Password</Text>
                <TextInput
                  style={styles.input1}
                  placeholder="Enter Password"
                  placeholderTextColor="#999999"
                />
              </View>
              <Text style={styles.textForgetPassword}>Forget Password?</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('TabNavigator')}>
                <Text style={styles.buttonTitle}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.accountSetup}>
              <View>
                <Text style={styles.textDontHave}>Don't have an account?</Text>
                <Text
                  style={styles.signupText}
                  onPress={() => navigation.navigate('Signup')}>
                  Sign Up
                </Text>
              </View>

              <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.textDontHave}>Or Login with</Text>
                <View style={styles.line} />
              </View>
              <View style={styles.accounts}>
                <Image source={require('../assets/logo.png')} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Login;
