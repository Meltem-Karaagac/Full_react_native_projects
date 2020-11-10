import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, Platform } from "react-native";



const MyInput = () => {
    return (

        <View style={styles.inputContainer}>
            <TextInput style={{ fontWeight: "bold" }, { fontSize: 30 }}
                keyboardType="email-address"
                placeholder="Aramak istedigimiz urunu giriniz.." />
        </View>
    )
}

const styles = StyleSheet.create({



    inputContainer: {
        backgroundColor: "white",
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",

    },

})

export default MyInput