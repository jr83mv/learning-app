import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
function FilterField(props: any): JSX.Element {
  const theme = useTheme();
  const styles = StyleSheet.create({
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

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    if (props.filters[props.fieldKey]) {
      const isPresent = props.filters[props.fieldKey].includes(props.fieldData);
      setIsToggled(prevIstoggled => !prevIstoggled);
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

export default FilterField;
