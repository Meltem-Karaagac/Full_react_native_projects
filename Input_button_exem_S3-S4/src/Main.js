import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, Platform } from "react-native";

import MyBanner from "./Components/MyBanner";
import MyButton from "./Components/MyButton";
import MyInput from "./Components/MyInput";

const food_data = [
    {
        id: 0,
        title: "Corbalar",
        desc: "birbirinden lezzetli corbalar!",
        color: "#e57373",
        isActive: true,
    },
    {
        id: 1,
        title: "Ara sicaklar",
        desc: "lezzetli yemekler!",
        color: "#81d4fa",
        isActive: true,
    },
    {
        id: 2,
        title: "Corbalar",
        desc: "birbirinden lezzetli corbalar!",
        color: "#ffd54f",
        isActive: false,
    },
    {
        id: 3,
        title: "Ana yemekler",
        desc: "doyurucu yemekler!",
        color: "#e57373",
        isActive: false,
    }

]
const App = () => {

    const platform = Platform.OS;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {food_data.map((food) => {
                    return (
                        <MyBanner
                            title={food.title}
                            desc={food.desc}
                            color={food.color}
                            isActive={food.isActive} />
                    );
                })}

                <MyButton buttonTitle="Yenile" />
                {/* // <MyBanner
                //     title="Corbalar"
                //     desc="birbirinden lezzetli corbalar!"
                //     color="#e57373"
                //     isActive={false} />

                // <MyBanner
                //     title="Ara sicaklar"
                //     desc="lezzetli yemekler!"
                //     color="#81d4fa"
                //     isActive={true} />

                // <MyBanner
                //     title="Ana yemekler "
                //     desc="doyurucu yemekler!"
                //     color="#ffd54f"
                //     isActive={false} /> */}


                <View style={styles.inputContainer}>
                    <TextInput style={{ fontWeight: "bold" }, { fontSize: 30 }}
                        keyboardType="email-address"
                        placeholder="Aramak istedigimiz urunu giriniz.." />
                </View>
                <MyInput />
                {MyInput()}
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#e0e0e0",
        flex: 1,
    },

    inputContainer: {
        backgroundColor: "white",
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",

    },

})

export default App;
