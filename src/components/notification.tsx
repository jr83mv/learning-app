import {Image, StyleSheet, Text, View} from "react-native";
import { useTheme } from "react-native-paper";

function Notification(props:any): JSX.Element{

    const theme = useTheme();
  const styles = StyleSheet.create({
    innerContainer1: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    container: {
      gap: 10,
      flexDirection: 'row',
      backgroundColor:theme.colors.secondaryContainer,
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
        flexDirection: 'column',
      },
      shadowProp: {
        shadowOffset: {width: -2, height: 4},
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
  });
  
    return(
        <View style={[styles.container,styles.shadowProp]}>
            <View style={[]}>
                <Image source={require('../assets/icon.png')}/>
            </View>
            <View style={[styles.innerContainer1]}>
                <Text style={[styles.text]}>{'Successful purchase!'}</Text>
                <View style={[styles.innerContainer2]}>
                    <Image source={require('../assets/time.png')}/>
                    <Text style={[styles.text]}>{'Just now'}</Text>
                </View>
                
            </View>
        </View>
    )
}

export default Notification;
