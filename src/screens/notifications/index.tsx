import React from 'react';
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

function Notifications(): JSX.Element {
  const theme = useTheme();
  const WindowsHeight = Dimensions.get('window').height;
  const styles = getCustomStyles(theme, WindowsHeight);

  return (
    <View style={[styles.bgColor]}>
      <View style={[styles.innerContainer1]}>
        <Text style={[styles.title]}>Notifications</Text>
        <View style={[styles.innerContainer2]}>
          <Text style={[styles.text]}>message</Text>
          <Text style={[styles.text]}>notification</Text>
        </View>
      </View>
      <ScrollView>
        <Message />
      </ScrollView>
    </View>
  );
}

const getCustomStyles = (theme: MD3Theme, WindowsHeight: number) =>
  StyleSheet.create({
    bgColor: {
      backgroundColor: theme.colors.primaryContainer,
      height: WindowsHeight,
    },
    innerContainer2: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    innerContainer1: {
      gap: 10,
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
  });

export default Notifications;
