import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';

function Dashboard(): JSX.Element {
  const WindowsWidth = Dimensions.get('window').width;
  const WindowsHeight = Dimensions.get('window').height;
  const theme = useTheme();
  const styles = getCustomStyles(theme, WindowsHeight, WindowsWidth);

  return (
    <SafeAreaView style={[styles.bgColor]}>
      <ScrollView>
        <View style={[styles.outerContainer]}>
          <View>
            <Text style={[styles.textColor1]}>Hi, Kristin</Text>
            <Text style={[styles.textColor2]}>Let's start learning</Text>
          </View>
          <Image source={require('../../assets/Avatar.png')} />
        </View>

        <View style={[styles.learntodayContainer, styles.shadowProp]}>
          <View style={[styles.learntodayContainer3]}>
            <View style={[styles.learntodayContainer1]}>
              <Text style={[styles.learntodayText]}>Learned today</Text>
              <Text style={[styles.mycourseText]}>My courses</Text>
            </View>
            <View style={[styles.learntodayContainer2]}>
              <Text style={[styles.min46Text]}>46min</Text>
              <Text style={[styles.learntodayText]}> / 60min</Text>
            </View>
            <View style={[styles.recImage]}>
              <Image source={require('../../assets/Rectangle.png')} />
            </View>
          </View>
        </View>

        <View style={[styles.outerContainer1]}>
          <Image
            style={[styles.ads]}
            source={require('../../assets/ads.png')}
          />
          <Text style={[styles.learnplanText]}>Learning plan</Text>
          <View style={[styles.learnplanContainer, styles.shadowProp]}>
            <View style={[styles.learntodayContainer1]}>
              <View style={[styles.learntodayContainer2]}>
                <Image
                  style={[styles.progress]}
                  source={require('../../assets/progress.png')}
                />
                <Text style={[styles.learntodayText]}>Packaging Design</Text>
              </View>
              <View style={[styles.learntodayContainer2]}>
                <Text style={[styles.min46Text]}>40</Text>
                <Text style={[styles.learntodayText]}> / 48</Text>
              </View>
            </View>
            <View style={[styles.learntodayContainer1]}>
              <View style={[styles.learntodayContainer2]}>
                <Image
                  style={[styles.progress]}
                  source={require('../../assets/progress.png')}
                />
                <Text style={[styles.learntodayText]}>Product Design</Text>
              </View>
              <View style={[styles.learntodayContainer2]}>
                <Text style={[styles.min46Text]}>6</Text>
                <Text style={[styles.learntodayText]}> / 24</Text>
              </View>
            </View>
          </View>
          <Image
            style={[styles.meet]}
            source={require('../../assets/Meetup.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const getCustomStyles = (
  theme: MD3Theme,
  WindowsHeight: number,
  WindowsWidth: number,
) =>
  StyleSheet.create({
    outerContainer: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#3D5CFF',
      justifyContent: 'space-between',
      paddingRight: 20,
      paddingLeft: 20,
      paddingTop: 20,
      height: WindowsHeight / 5.7,
    },
    bgColor: {
      backgroundColor: theme.colors.primaryContainer,
      height: WindowsHeight,
    },
    textColor1: {
      color: 'white',
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: '700',
    },
    textColor2: {
      color: '#FFF',
      fontFamily: 'Poppins',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
    },
    learntodayContainer: {
      width: WindowsWidth - 30,
      borderRadius: 10,
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 15,
      paddingBottom: 15,
      backgroundColor: theme.colors.secondaryContainer,
      alignSelf: 'center',
      bottom: 40,
    },
    learntodayText: {
      color: theme.colors.primary,
    },
    mycourseText: {
      color: '#3D5CFF',
    },
    learntodayContainer1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    learntodayContainer2: {
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
    },
    min46Text: {
      color: theme.colors.primary,
      fontWeight: 'bold',
      fontSize: 20,
    },
    learntodayContainer3: {
      flexDirection: 'column',
      gap: 5,
    },
    recImage: {
      backgroundColor: '#F4F3FD',
      borderRadius: 10,
    },
    learnplanContainer: {
      width: WindowsWidth - 30,
      borderRadius: 10,
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 15,
      paddingBottom: 15,
      backgroundColor: theme.colors.secondaryContainer,
      alignSelf: 'center',
      gap: 5,
      bottom: 15,
    },
    ads: {
      alignSelf: 'flex-end',
      bottom: 20,
      objectFit: 'fill',
      height: 120,
      width: 360,
    },
    outerContainer1: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.colors.primaryContainer,
      gap: 10,
      height: WindowsHeight - 300,
    },
    learnplanText: {
      color: theme.colors.primary,
      marginLeft: 20,
      fontSize: 18,
      fontWeight: 'bold',
      bottom: 13,
    },
    shadowProp: {
      shadowOffset: {width: -2, height: 4},
      shadowColor: '#171717',
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    progress: {
      marginRight: 10,
    },
    meet: {
      bottom: 15,
      height: 130,
      width: 370,
      objectFit: 'fill',
    },
  });

export default Dashboard;
