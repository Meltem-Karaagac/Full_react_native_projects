import React from 'react';
import {Text, View, Button} from 'react-native';

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <View>
        <Text> {this.state.counter} </Text>
        <Button
          onPress={() => this.setCounter({counter: this.state.counter + 1})}
        />
      </View>
    );
  }
}
export default Class;
