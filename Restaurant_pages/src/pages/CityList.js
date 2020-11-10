import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

import { CityItem, SearchBar } from '../components'

let originalList = []

const CityList = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [cityList, setCityList] = useState([]);

    // ASYNC-AWAIT 
    const fetchCityData = async () => {
        setIsLoading(true);
        const { data } = await axios.get("https://opentable.herokuapp.com/api/cities");
        setCityList(data.cities);
        originalList = [...data.cities];
        setIsLoading(false);

    }

    useEffect(() => {
        fetchCityData();
    }, [])

    const renderCities = ({ item }) => {
        return (
            <CityItem
                cityName={item}
                onSelect={() => props.navigation.navigate('Restaurants', { selectedCity: item })}
            />
        )
    }

    const renderSeperator = () => <View style={{ borderWidth: 1, borderColor: '#e0e0e0' }} />

    function searchCity(search) {
        const filteredCities = originalList.filter(city => {
            const text = search.toUpperCase();
            const cityName = city.toUpperCase();

            return cityName.indexOf(text) > -1;
        })

        setCityList(filteredCities);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <SearchBar
                    placeholder="Search a city..."
                    onSearch={(value) => searchCity(value)}
                />
                {isLoading ? (
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator />
                        <ActivityIndicator size="large" />
                        <ActivityIndicator size="small" color="#0000ff" />
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                ) : (
                        <FlatList
                            keyExtractor={(_, index) => index.toString()}
                            data={cityList}
                            renderItem={renderCities}
                            ItemSeparatorComponent={renderSeperator}
                        />
                    )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});
export { CityList };