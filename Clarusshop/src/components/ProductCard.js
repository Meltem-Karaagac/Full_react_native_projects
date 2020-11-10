import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions,ImageBackground } from 'react-native';
// {
//     "id": 1,
//     "title": "General Mobile GM 20",
//     "imgURL": "https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg",
//     "price": "₺1.810,21",
//     "inStock": true
// }
const ProductCard = ({ product }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: product.imgURL }}
                style={styles.image}
    ></ImageBackground>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text>{product.title}</Text>
                <Text style={{ fontWeight: 'bold' }}>{product.price}</Text>
                <Text style={styles.text}>{product.inStock ? "InStock 😎" : "Not InStock 😌"}</Text>
            </View>
        </View>
    )
}
export { ProductCard }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#e0e0e0'
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain'
    },
    text:{
        backgroundColor:'rgba(100,100,150,0.6)',
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        borderRadius:5,
        alignSelf:'flex-start',
        padding:5,

    }
})