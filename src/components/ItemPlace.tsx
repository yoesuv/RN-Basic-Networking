import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { THEME_COLOR_TRANSPARENT } from '../data/Colors';

export default function ItemPlace({place, onPress}: {place: any, onPress: any}) {
  return (
    <Pressable onPress={onPress}
      style={({pressed}) => [{
        backgroundColor: pressed ? THEME_COLOR_TRANSPARENT : 'transparent'
      }]}>
      <View style={styles.container}>
        <Text style={styles.title}>{place.nama}</Text>
        <Text style={styles.subtitle}>{place.lokasi}</Text>
      </View>
    </Pressable>
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
  },
})
