import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const Third = (props) => {
    const [userName, setUserName] = useState("")
    const userValue = props.route.params.selecteditem

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 40 }}>Third</Text>
                <Text style={{ fontSize: 40 }}>Value: {userValue}</Text>
                <Button
                    title="Back"
                    onPress={() => props.navigation.goBack()}
                />

            </View>
        </SafeAreaView>
    );
}

export default Third;