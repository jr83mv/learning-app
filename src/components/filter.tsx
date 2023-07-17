import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';
import FilterField from './filterField';

function Filter(props: any): JSX.Element {
  console.log(props.data2)
  const entries = Object.entries(props.data ? props.data : []);
  const WindowsHeight = Dimensions.get('window').height;
  const theme = useTheme();
  const styles = getCustomStyles(theme, WindowsHeight);

  const handleApplyFilter = () => {
    props.data1(props.data2);
    props.handleSubmit();
    props.closeModal();
  };

  const handleApplySort = (sortType: any) => {
    props.setSortData(sortType);
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.innerContainer1]}>
        <Text style={[styles.title]} onPress={props.closeModal}>
          X
        </Text>
        <Text style={[styles.title]}>Search Filter</Text>
      </View>
      <Text style={[styles.title]}>Sort</Text>
      <View style={[styles.filedsContainer]}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleApplySort({postedDate: 1})}>
          <Text style={[styles.buttonTitle1]}>Date {'\u2191'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleApplySort({postedDate: -1})}>
          <Text style={[styles.buttonTitle1]}>Date {'\u2193'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={[styles.filterScroll]}>
        {entries?.map((fieldsData: any) => (
          <View key={fieldsData[0]}>
            <Text style={[styles.text]}>{fieldsData[0]}</Text>
            <View style={[styles.filedsContainer]}>
              {fieldsData[1]?.slice(0, 4).map((fieldData: any) => (
                <FilterField
                  fieldData={fieldData}
                  fieldKey={fieldsData[0]}
                  filters={props.data2}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={[styles.innerContainer2]}>
        <TouchableOpacity style={styles.button1}>
          <Text style={[styles.buttonTitle1]}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleApplyFilter}>
          <Text style={[styles.buttonTitle2]}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const getCustomStyles = (theme: MD3Theme, WindowsHeight: number) =>
  StyleSheet.create({
    text: {
      fontSize: 16,
      color: theme.colors.primary,
    },
    title: {
      fontSize: 18,
      color: theme.colors.primary,
    },
    container: {
      backgroundColor: theme.colors.secondaryContainer,
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 10,
      padding: 10,
      paddingRight: 10,
      paddingLeft: 10,
    },
    innerContainer1: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 100,
    },
    innerContainer2: {
      flexDirection: 'row',
      gap: 10,
    },
    innerContainer3: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10,
    },
    textInput: {
      width: 250,
      color: theme.colors.primary,
    },
    button1: {
      borderRadius: 10,
      width: 100,
      borderStyle: 'solid',
      borderColor: '#3D5CFF',
      display: 'flex',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      backgroundColor: theme.colors.secondaryContainer,
    },
    button2: {
      borderRadius: 10,
      width: 210,
      borderStyle: 'solid',
      borderColor: '#3D5CFF',
      display: 'flex',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      backgroundColor: '#3D5CFF',
    },
    buttonTitle1: {
      color: theme.colors.onPrimary,
      fontWeight: 'bold',
    },
    buttonTitle2: {
      color: 'white',
      fontWeight: 'bold',
    },
    filedsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 5,
      marginTop: 10,
      marginBottom: 10,
    },
    filterScroll: {
      marginTop: 10,
      height: WindowsHeight / 2,
    },
  });

export default Filter;
