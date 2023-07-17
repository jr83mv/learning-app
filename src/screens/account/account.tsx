import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';
function Account(): JSX.Element {
  const WindowsHeight = Dimensions.get('window').height;
  const theme = useTheme();
  const styles = StyleSheet.create({
    outerContainer: {
      backgroundColor: theme.colors.primaryContainer,
      height: WindowsHeight,
    },
    text: {
      color: theme.colors.primary,
      fontSize: 18,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      color: theme.colors.primary,
    },
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 10,
      padding: 20,
      paddingRight: 20,
      paddingLeft: 20,
    },
    innerContainer1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    profile: {
      alignSelf: 'center',
    },
  });

  return (
    <SafeAreaView style={[styles.outerContainer]}>
      <View style={[styles.container]}>
        <Text style={[styles.title]}>Account</Text>
        <Image
          style={[styles.profile]}
          source={require('../../assets/Avatar1.png')}
        />
        <View style={[styles.innerContainer1]}>
          <Text style={[styles.text]}>Favourite</Text>
          <Image source={require('../../assets/right.png')} />
        </View>
        <View style={[styles.innerContainer1]}>
          <Text style={[styles.text]}>Edit Account</Text>
          <Image source={require('../../assets/right.png')} />
        </View>
        <View style={[styles.innerContainer1]}>
          <Text style={[styles.text]}>Settings and Privacy</Text>
          <Image source={require('../../assets/right.png')} />
        </View>
        <View style={[styles.innerContainer1]}>
          <Text style={[styles.text]}>Help</Text>
          <Image source={require('../../assets/right.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Account;
