import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyBanner = (props) => {


    return (
        <View style={[styles.container, { backgroundColor: props.color }]} >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>{props.title}</Text>
                    <Text>{props.desc}</Text>
                </View>


                {/* {props.isActive ? null : <Text>Aktif degil</Text>} */}
                {!props.isActive && <Text>Aktif degil</Text>}
                {/* ikiside ayni anlama geliyor */}

            </View>
        </View>
    )
};

export default MyBanner;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eceff1",
        // bannerdaki  ikinci color ile override oldu
        padding: 10,
        margin: 10,
        borderRadius: 5,

    },
    text: {
        fontWeight: "bold",
        fontSize: 15,
    },
});