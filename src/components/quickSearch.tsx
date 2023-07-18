import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';

function QuickSearch(props: any): JSX.Element {
  const theme = useTheme();
  const styles = generateStyles(theme);

  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
      setIsToggled(!isToggled);
    }
  return (
    <TouchableOpacity
      style={isToggled ? styles.buttonSelected : styles.button} onPress={handleToggle}>
      <Text style={ isToggled ? styles.buttonTitleSelected : styles.buttonTitle}>
        {"Visual identiy"}
      </Text>
    </TouchableOpacity>
  );
}

const generateStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    button: {
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      backgroundColor: theme.colors.onSecondaryContainer,
      paddingLeft:20,
      paddingRight:20,
      marginRight:10,
    },
    buttonTitle: {
      color: theme.colors.onSecondary,
      fontWeight: 'bold',
    },
    buttonSelected: {
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      backgroundColor: '#3D5CFF',
      paddingLeft:20,
      paddingRight:20,
      marginRight:10,
    },
    buttonTitleSelected: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

export default QuickSearch;
