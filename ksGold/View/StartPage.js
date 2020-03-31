import React, { Component } from 'react';
import { style } from '../front/style';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/flower.png')}
        />
        <Text style={style.logoText}>KS&GOLD</Text>
        <TouchableOpacity
          style={style.Button}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={style.textinButton}> Go ! </Text>
        </TouchableOpacity>
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
