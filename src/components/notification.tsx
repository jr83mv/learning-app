import {Image, StyleSheet, Text, View} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';

function Notification(props: any): JSX.Element {
  const theme = useTheme();
  const styles = generateStyles(theme); // Call the function to generate styles

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={[]}>
        <Image source={require('../assets/icon.png')} />
      </View>
      <View style={[styles.innerContainer1]}>
        <Text style={[styles.text]}>{'Successful purchase!'}</Text>
        <View style={[styles.innerContainer2]}>
          <Image source={require('../assets/time.png')} />
          <Text style={[styles.text2]}>{'Just now'}</Text>
        </View>
      </View>
    </View>
  );
}

const generateStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    innerContainer1: {
      flexDirection: 'column',
      gap:3,
      justifyContent: 'space-around',
    },
    container: {
      paddingLeft:20,
      padding:10,
      margin:10,
      marginLeft:10,
      marginRight:10,
      borderRadius:15,
      gap: 10,
      flexDirection: 'row',
      backgroundColor: theme.colors.secondaryContainer,
    },
    title: {
      color: theme.colors.primary,
      fontWeight: 'bold',
      fontSize: 22,
    },
    text: {
      fontSize: 18,
      color: theme.colors.primary,
    },
    innerContainer2: {
      flexDirection: 'row',
      alignItems:'center',
      gap:5,
    },
    shadowProp: {
      shadowOffset: {width: -2, height: 4},
      shadowColor: '#171717',
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    text1:{
      color:'#B8B8D2',
    },
    text2:{
      color:'#858597',
    },
  });

export default Notification;
