import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native';
import { style } from '../front/style';

export default class Home extends Component {
  state={
    name: "",
  }
  render() {
    return (
        <View style={styles.container}>
            <Text>Test</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'center',
      justifyContent: 'center',
    },
});