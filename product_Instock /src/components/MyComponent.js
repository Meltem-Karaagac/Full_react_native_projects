import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Selamlar</Text>
            <Text>Clarusway App'e hosgeldiniz!</Text>
            <View>
                <Text>Fullstack Developer olmaya hazir olun!</Text>
            </View>
        </View>
    )
}

export default MyComponent

const styles = StyleSheet.create({
    container:{
        // backgroundColor:"cyan",
        margin:5,
        padding:10,
        borderWidth:2,
        borderColor:'#e0e0e0',
        borderRadius:10
    }
})




