import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/icon.png' 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffed',
    color: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
