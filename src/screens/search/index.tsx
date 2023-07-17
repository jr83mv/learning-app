import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';
import Cards from '../../components/card';
import Filter from '../../components/filter';

function Search(props: any): JSX.Element {
  const WindowsHeight = Dimensions.get('window').height;
  const theme = useTheme();
  const styles = getCustomStyles(theme, WindowsHeight);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [positionsData, setPositionsData] = useState([]);
  const [filterFiledsData, setFilterFiledsData] = useState([]);
  const [sortData, setSortData] = useState('');
  const [selectedFilterData, setSelectedFilterData] = useState({
    education: [],
    skills: [],
    location: [],
    company: [],
  });
  const [searchData, setSearchData] = useState('');
  const [pageNo, setPageNo] = useState(1);

  const fetchData = async () => {
    try {
      setSearchData(searchData);
      let reqBody = {
        filter: selectedFilterData,
        sort: sortData,
        searchQuery: searchData,
        pageSize: 10,
        page: pageNo,
      };
      const response = await fetch('http://localhost:3000/positions-filter', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
          // 'origin':'https://job-search-frontend-nu.vercel.app',
          'Content-type': 'application/json; charset=UTF-8',
          // 'mode': 'no-cors',
          // 'credentials': 'include',
          // 'host':'vercel.app'
        },
      })
        .then(response => response.json())
        .then(data => {
          setPositionsData(data.positions);
          if (data.filterFileds) {
            setFilterFiledsData(data.filterFileds);
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchData]);

  const [searchText, setSearchText] = useState('');

  const handleSearchClick = () => {
    setSearchData(searchText);
  };

  const handleInputChange = (text: string) => {
    setSearchText(text);
  };

  const cardsData = positionsData;
  return (
    <SafeAreaView style={[styles.outerContainer]}>
      <View style={[styles.container]}>
        <View style={[styles.innerContainer2]}>
          <View style={[styles.innerContainer3]}>
            <TouchableOpacity onPress={handleSearchClick}>
              <Image source={require('../../assets/search1.png')} />
            </TouchableOpacity>
            <TextInput
              style={[styles.textInput]}
              placeholder="Find Course"
              onChangeText={handleInputChange}
              value={searchText}
            />
          </View>
          <TouchableOpacity onPress={openModal}>
            <Image source={require('../../assets/filter.png')} />
          </TouchableOpacity>
        </View>
        <Image style={[]} source={require('../../assets/Frame.png')} />
        <Text style={[styles.text]}>Results</Text>
        <ScrollView style={[styles.cardContainer]}>
          {cardsData.map((cardData: JSON) => (
            <Cards data={cardData} />
          ))}
        </ScrollView>

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Filter
                closeModal={closeModal}
                data={filterFiledsData}
                handleSubmit={() => fetchData()}
                data1={setSelectedFilterData}
                data2={selectedFilterData}
                sortData={sortData}
                setSortData={setSortData}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const getCustomStyles = (theme: MD3Theme, WindowsHeight: number) =>
  StyleSheet.create({
    outerContainer: {
      backgroundColor: theme.colors.primaryContainer,
      height: WindowsHeight,
    },
    text: {
      fontSize: 18,
      color: theme.colors.primary,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      color: theme.colors.primary,
    },
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 10,
      padding: 10,
      paddingRight: 20,
      paddingLeft: 20,
    },
    innerContainer1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    innerContainer2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: theme.colors.onPrimaryContainer,
      padding: 10,
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
    cardContainer: {},
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: theme.colors.secondaryContainer,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 16,
    },
  });

export default Search;
