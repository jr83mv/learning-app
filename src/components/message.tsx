import {Image, StyleSheet, Text, View} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';

function Message(props: any): JSX.Element {
  const theme = useTheme();
  const styles = generateStyles(theme); // Call the function to generate styles

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={[styles.innerContainer1]}>
        <View style={[styles.innerContainer1]}>
        <Image source={require('../assets/mes.png')} />
        <View style={[styles.innerContainer2]}>
          <Text style={[styles.text]}>{'Bert Pullman'}</Text>
          <Text style={[styles.text2]}>{'Online'}</Text>
        </View>
        </View>
        
        <Text style={[styles.text2]}>{'04:32 pm'}</Text>
      </View>
      <View style={[styles.innerContainer1]}>
        <Text style={[styles.text3]}>
          {
            'Congratulations on completing the first lesson, keep up the good work!'
          }
        </Text>
      </View>
    </View>
  );
}

const generateStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    innerContainer1: {
      flexDirection: 'row',
      gap: 20,
      justifyContent:'space-between'
    },
    innerContainer2: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    container: {
      padding: 10,
      margin: 10,
      borderRadius: 20,
      gap: 10,
      flexDirection: 'column',
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
    text3:{
      color:theme.colors.onSecondary,
    },
  });

export default Message;
