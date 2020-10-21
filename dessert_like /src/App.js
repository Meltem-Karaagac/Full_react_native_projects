
import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, FlatList, Button } from 'react-native';
import Poster from "./components/poster";
import ProductData from "./product.data.json";




const App = () => {
    const renderListItem = ({ item }) => <Poster product={item} />
    const [counter, setCounter] = useState(0);
    const countUp = () => setCounter(counter + 1);
    return (


        <>
            <SafeAreaView>
                <ScrollView>

                    <FlatList
                        keyExtractor={(_, index) => index.toString()}
                        data={ProductData}
                        renderItem={renderListItem} />

                </ScrollView>
            </SafeAreaView>
        </>

    )


}



export default App;
