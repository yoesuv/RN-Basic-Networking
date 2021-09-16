import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME_COLOR } from '../data/Colors';

export default function Splash({ navigation }: {navigation: any}) {
  setTimeout(() => {
    navigation.navigate('ListPlace');
    navigation.reset({
      index: 0,
      routes: [{ name: 'ListPlace' }]
    });
  }, 2000);
  return (
    <View style={styles.container}>
      <Text style={styles.textSplash}>Basic Networking</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSplash: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME_COLOR
  }
});
