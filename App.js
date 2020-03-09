import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import bottomGraphic from './assets/bottomPanda.png' 

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Button
          style={{margin: 15}}
          titleStyle={styles.buttonTitle}
          title="Sign Up"
          type='outline'
          onPress={()=> {
            _test();
          }}
        />
        <Button
          style={{margin: 15}}
          title="Login"
          titleStyle={styles.buttonTitle}
          type='solid'
          onPress={()=> {
            _test();
          }}
        />
      </View>
      <View style={styles.bottomImage}>
        <Image source={bottomGraphic} />
      </View>
    </View>
  );
}

const _test = (() => {
  alert('test');
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffed',
    color: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContent: {
    flex: 10,
    backgroundColor: '#ffffed',
    color: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 30
  },
  buttonTitle: {
    fontSize: 35, 
    width: '80%', 
    textTransform: 'uppercase', 
    fontFamily: 'AlNile-Bold',
  },
});
