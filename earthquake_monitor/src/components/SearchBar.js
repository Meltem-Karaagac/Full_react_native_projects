import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


const SearchBar = (props) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.SearchBox}>
      <TextInput style={styles.textinput}
        placeholder={props.placeholder}
        onChangeText={(value) => props.onSearch(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBox: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bdbdbd'



  },
  textinput: {
    fontSize: 18,

  }
})

export default SearchBar;

