import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

const App = (props) => {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState('');
  const [createDate, setCreateDate] = useState(new Date());
  useEffect(() => {
    Alert.alert('WElCOM', 'My sweet app');
  }, []);
  useEffect(() => {
    if (counter == 10) {
      Alert.alert('OOPS', '10 dan fazla tiklayamazsin');
    }
  }, [counter]);

  console.log('RENDER');
  const countUp = () => setCounter(counter + 1);
  const countDown = () => setCounter(counter - 1);
  const countReset = () => setCounter(0);
  return (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 70,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {counter}
      </Text>
      <Button title="Up!" onPress={countUp} />
      <Button title="Down!" onPress={countDown} />
      <Button title="Reset!" onPress={countReset} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
