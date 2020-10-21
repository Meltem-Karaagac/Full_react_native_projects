
import React, { useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, Dimensions, Button } from 'react-native';



// const [counter, setCounter] = useState(0);


const Poster = ({ product }) => {
    const [counter, setCounter] = useState(0);
    const countUp = () => setCounter(counter + 1);
    return (

        <View style={styles.container}>
            <View >
                <Text style={styles.usertext}>{product.userName}</Text>
            </View>
            <View>
                <ImageBackground
                    source={{ uri: product.img }}
                    style={styles.image}
                ></ImageBackground>
            </View>
            <View style={styles.like}>
                <Text style={styles.desc}>{product.description}</Text>
                {/* <Text style={styles.text}>{product.isLiked ? `LIKED ♥` : null}</Text> */}
                <Text style={styles.number}>{counter}</Text>
                <Button sytle={styles.button} title="LIKE ♥" onPress={countUp} />
                <Text>{console.log(countUp)};</Text>
            </View>
        </View>

    )
}






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
    text: {
        backgroundColor: 'red',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 5,
        alignSelf: 'flex-end',
        padding: 5,


    },
    usertext: {
        fontSize: 26,
        padding: 10,


    },
    desc: {
        fontSize: 16,
        padding: 10,


    },
    number: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: "center",
        color: "red",


    },
    button: {
        backgroundColor: "red",
    }



})
export default Poster;
