import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ItemPlace({place}: {place: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{place.nama}</Text>
      <Text style={styles.subtitle}>{place.lokasi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14
  }
})
