import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GuncelDepremler = ({ items }) => {
  return (
    <View style={styles.container}>



      <View
        style={{
          alignItems: 'center',
          margin: 5,
          padding: 5,
        }}>
        <Text style={{ fontSize: 20 }}>{items.lokasyon}</Text>
        <Text>Derinlik :{items.depth} km </Text>
        <Text>Tarih: {items.date}</Text>
        <Text>Siddeti: {items.mag}</Text>
      </View>
    </View>
  );
};

export default GuncelDepremler;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'rgb(255,185,156)',
    margin: 8,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
