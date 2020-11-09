import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const MyButton = (props) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => alert("hello")}>
            <Text style={styles.text}>{props.buttonTitle}</Text>
        </TouchableOpacity>
    );
};

export default MyButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0277bd',
        padding: 15,
        margin: 10,
        borderRadius: 10,
    },
    text: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 30,



    },

});

