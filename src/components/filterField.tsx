import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';

function FilterField(props: any): JSX.Element {
  const theme = useTheme();
  const styles = generateStyles(theme); // Call the function to generate styles

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    if (props.filters[props.fieldKey]) {
      const isPresent = props.filters[props.fieldKey].includes(props.fieldData);
      setIsToggled(prevIsToggled => !prevIsToggled);
      if (!isPresent) {
        props.filters[props.fieldKey].push(props.fieldData);
      } else {
        const index = props.filters[props.fieldKey].indexOf(props.fieldData);
        if (index !== -1) {
          props.filters[props.fieldKey].splice(index, 1);
        }
      }
    }
  };

  return (
    <TouchableOpacity
      style={isToggled ? styles.buttonSelected : styles.button}
      onPress={handleToggle}>
      <Text style={isToggled ? styles.buttonTitleSelected : styles.buttonTitle}>
        {props.fieldData}
      </Text>
    </TouchableOpacity>
  );
}

const generateStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    button: {
      borderRadius: 10,
      width: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      backgroundColor: theme.colors.onSecondaryContainer,
    },
    buttonTitle: {
      color: theme.colors.onSecondary,
      fontWeight: 'bold',
    },
    buttonSelected: {
      borderRadius: 10,
      width: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      backgroundColor: '#3D5CFF',
    },
    buttonTitleSelected: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

export default FilterField;
