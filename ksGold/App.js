import React, { Component } from 'react';
import AppNavigator from './AppNavigator';
import { StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
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
