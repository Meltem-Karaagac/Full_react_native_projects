import React, { useEffect, useState } from "react";
import { SafeAreaView, View, FlatList, Text, StyleSheet, ImageBackground, Button } from "react-native";

import ImageCard from "./components/ImageCard";
import ImageList from "./images.json";

const App = () => {
  const [imgList, setImgList] = useState([]);
  useEffect(() => {
    setImgList(ImageList);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }} >
        <Text style={styles.title}>IMAGES GALLERY</Text>

        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={imgList}
          renderItem={({ item }) => <ImageCard imageItem={item} />}
          numColumns={2}
        />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
  }

})

export default App;