import React, {useState, useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';

function Cards(props1: any): JSX.Element {
  const theme = useTheme();
  const styles = generateStyles(theme); // Call the function to generate styles

  // Calculate the number of days since the posted date using useMemo
  const daysSincePosted = useMemo(() => {
    const postedDate = new Date(props1.data.postedDate).getTime();
    return Math.round((Date.now() - postedDate) / (1000 * 3600 * 24));
  }, [props1.data.postedDate]);

  return (
    // Render the card view with the provided data
    <View style={[styles.container, styles.shadowProp]}>
      <Image source={require('../assets/Image.png')} />
      <View style={[styles.innerContainer1]}>
        {/* Display the job title */}
        <Text style={[styles.title]}>{props1.data.name}</Text>
        {/* Display the company name */}
        <Text style={[styles.text]}>{props1.data.company}</Text>
        {/* Display the job location */}
        <Text style={[styles.text]}>{props1.data.location}</Text>
        <View style={[styles.innerContainer2]}>
          {/* Display the number of days since the job was posted */}
          <Text style={[styles.text]}>Posted {daysSincePosted} day ago</Text>
          {/* Display a separator */}
          <Text style={[styles.text]}>•</Text>
          {/* Display the number of applicants */}
          <Text style={[styles.text]}>{props1.data.applicants} Applicants</Text>
        </View>
      </View>
    </View>
  );
}

const generateStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    outerContainer: {
      backgroundColor: theme.colors.primaryContainer,
    },
    text: {
      color: theme.colors.primary,
      fontSize: 14,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      color: theme.colors.primary,
    },
    container: {
      flexDirection: 'row',
      gap: 30,
      alignItems: 'center',
      backgroundColor: theme.colors.secondaryContainer,
      borderRadius: 10,
      padding: 5,
      marginBottom: 10,
    },
    innerContainer1: {
      flexDirection: 'column',
      gap: 5,
    },
    innerContainer2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 5,
    },
    profile: {
      alignSelf: 'center',
    },
    shadowProp: {
      shadowOffset: {width: -2, height: 4},
      shadowColor: '#171717',
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
  });

// Memoize the component to prevent unnecessary re-renders when props haven't changed
export default React.memo(Cards);
