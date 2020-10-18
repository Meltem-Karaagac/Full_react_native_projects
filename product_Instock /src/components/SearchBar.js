import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

const SearchBar = ({onSearch}) => {
    return (
        <View style={styles.searchBar}>
        <TextInput
            placeholder="Ürün ara..."
            onChangeText={onSearch}
        />
    </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "#eceff1",
        padding: 8,
        margin: 5,
        borderRadius: 10
    }
})
