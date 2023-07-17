import React, { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';
import Message from '../../components/message';
import Notification from '../../components/notification';

function Notifications(): JSX.Element {
  const theme = useTheme();
  const WindowsHeight = Dimensions.get('window').height;
  const styles = getCustomStyles(theme, WindowsHeight);
  const [showFirstDependent, setShowFirstDependent] = useState(true);
  const [showSecondDependent, setShowSecondDependent] = useState(false);

  const toggleFirstDependent = () => {
    setShowFirstDependent(!showFirstDependent);
    setShowSecondDependent(!showSecondDependent);
  };

  const toggleSecondDependent = () => {
    setShowSecondDependent(!showSecondDependent);
    setShowFirstDependent(!showFirstDependent);
  };
  return (
    <View style={[styles.bgColor]}>
      <View style={[styles.innerContainer1]}>
        <Text style={[styles.title]}>Notifications</Text>
        <View style={[styles.innerContainer2]}>
          <Text style={[styles.text]} onPress={toggleFirstDependent}>message</Text>
          <Text style={[styles.text]} onPress={toggleSecondDependent}>notification</Text>
        </View>
        <View style={[styles.innerContainer3]}>
          {showFirstDependent && (<View style={[styles.line1]}></View>)}
          {showSecondDependent && (<View style={[styles.line2]}></View>)}
        </View>
      </View>
      {showFirstDependent && (<ScrollView>
        <Message />
      </ScrollView>)}
      {showSecondDependent && (<ScrollView>
        <Notification />
      </ScrollView>)}
    </View>
  );
}

const getCustomStyles = (theme: MD3Theme, WindowsHeight: number) =>
  StyleSheet.create({
    bgColor: {
      backgroundColor: theme.colors.primaryContainer,
      height: WindowsHeight,
    },
    line1:{
      backgroundColor:'#3D5CFF',
      height:3,
      width:40,
      marginLeft:70,
    },
    line2:{
      backgroundColor:'#3D5CFF',
      height:3,
      width:40,
      marginLeft:255,
    },
    innerContainer2: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    innerContainer3: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    innerContainer1: {
      gap: 10,
      marginTop:10,
    },
    title: {
      color: theme.colors.primary,
      fontWeight: 'bold',
      fontSize: 22,
      marginLeft:15,
      marginTop:10,
    },
    text: {
      fontSize: 18,
      color: theme.colors.primary,
    },
    firstDependent: {
      display:'none'
    },
    secondDependent: {
      display:'none'
    },
  });

export default Notifications;
