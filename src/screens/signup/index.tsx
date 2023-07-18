import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Dimensions} from 'react-native';
import {Checkbox, MD3Theme, useTheme} from 'react-native-paper';

function Signup(): JSX.Element {
  const [checked, setChecked] = React.useState(false);
  const theme = useTheme();
  const WindowsWidth = Dimensions.get('window').width;
  const WindowsHeight = Dimensions.get('window').height;
  const styles = customStyles(theme, WindowsHeight, WindowsWidth);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerHeader}>
          <Text style={styles.containerHeaderText}>Sign Up</Text>
          <Text style={[styles.text1, styles.containerHeaderNote]}>
            Enter your details below & Sign up
          </Text>

          <View style={styles.containerBody}>
            <View>
              <Text style={[styles.text2]}>Your Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Email"
                placeholderTextColor="#999999"
              />
            </View>
            <View>
              <Text style={[styles.text2]}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                placeholderTextColor="#999999"
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('TabNavigator')}>
              <Text style={styles.buttonTitle}>Sign up</Text>
            </TouchableOpacity>
            <View style={styles.checkBoxContainer}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={[styles.text1, styles.checkBoxText]}>
                By creating an account you have to agree with our terms and
                conditions
              </Text>
            </View>
            <View style={styles.textAlready}>
            <Text style={[styles.text1]}>Already have an account? </Text>
            <Text
              style={[styles.text3]}
              onPress={() => navigation.navigate('Login')}>
               Log in
            </Text>
            </View>
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const customStyles = (
  theme: MD3Theme,
  WindowsHeight: number,
  WindowsWidth: number,
) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#F0F0F2',
      height: WindowsHeight,
    },
    input: {
      height: 40,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      marginBottom: 10,
    },
    containerHeader: {
      flexDirection: 'column',
      paddingTop: 70,
      backgroundColor: theme.colors.tertiaryContainer,
      height: WindowsHeight,
    },
    button: {
      borderRadius: 10,
      width: WindowsWidth - 33,
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
    containerHeaderText: {
      fontFamily: 'poppins',
      color: theme.colors.primary,
      fontSize: 32,
      lineHeight: 48,
      fontWeight: '800',
      paddingLeft: 24,
    },
    text: {
      color: theme.colors.primary,
    },
    containerHeaderNote: {
      paddingLeft: 26,
      textAlign: 'left',
    },
    textAlready: {
      textAlign: 'center',
      alignSelf:'center',
      flexDirection:'row',
    },
    containerBody: {
      display: 'flex',
      gap: 15,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 16,
      paddingTop: 25,
      marginTop: 10,
      backgroundColor: theme.colors.secondaryContainer,
      paddingBottom: 190,
    },
    checkBoxContainer: {
      flexDirection: 'row',
    },
    checkBoxText: {
      marginRight: 40,
    },
    text1:{
      color:'#B8B8D2',
    },
    text2:{
      color:'#858597',
    },
    text3:{
      color:'#3D5CFF',
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    }
  });

export default Signup;
