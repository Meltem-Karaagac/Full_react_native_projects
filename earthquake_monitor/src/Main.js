import React, { useEffect } from 'react';
import axios from 'axios';
import {
  FlatList, StyleSheet, Text, View, ActivityIndicator, SafeAreaView
} from 'react-native';
import GuncelDepremler from './components/GuncelDepremler';
import SearchBar from './components/SearchBar';

let originalList = [];



const Main = () => {
  const [listDeprem, setListDeprem] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const fetchData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      'https://api.orhanaydogdu.com.tr/deprem/live.php',
    );
    console.log(data.result);
    setListDeprem(data.result);
    originalList = [...data.result];
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const renderItemList = ({ item }) => {
    return <GuncelDepremler items={item} />;
  };

  function searchCity(search) {
    const filteredCities = originalList.filter((x) => {
      const text = search.toUpperCase();
      const cityName = x.lokasyon.toUpperCase();
      return cityName.indexOf(text) > -1;
    });

    setListDeprem(filteredCities);
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View>
        <View style={styles.header}>
          <Text style={styles.headertext}> GUNCEL DEPREM BILGILERI</Text>
        </View>

        <SearchBar

          placeholder="🔍 Search a city..."
          onSearch={(value) => searchCity(value)}
        />

        <View style={{ borderWidth: 0.5, borderColor: '#bdbdbd' }} />
        {isLoading ? (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="small" color="rgb(0,0,0)" />
            <ActivityIndicator size="large" color="rgb(0,170,234)" />
            <ActivityIndicator size="small" color="rgb(0,0,0)" />
            <ActivityIndicator size="large" color="rgb(0,170,234)" />
          </View>

        ) : (
            <FlatList
              data={listDeprem}
              renderItem={renderItemList}
              ItemSeparatorComponent={() => (
                <View style={{ borderWidth: 0.5, borderColor: '#bdbdbd' }} />
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          )}
      </View>
    </SafeAreaView >
  );
};

export default Main;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(0,0,0)',
    textAlign: 'center',
    margin: 10,
    padding: 20,
    borderRadius: 10,

  },
  headertext: {
    borderRadius: 10,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },


  container: {
    flex: 1,
    marginTop: 300,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },




});
