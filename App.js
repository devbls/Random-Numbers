import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const randomNumberGenerator = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  alert(randomNumber);
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Random number generator
        </Text>
        <Button
          title='Generate'
          onPress={randomNumberGenerator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
