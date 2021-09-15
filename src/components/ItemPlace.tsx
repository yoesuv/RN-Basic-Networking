import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ItemPlace({ name }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width:"100%",
      height: 50
  },
})

export default ItemPlace;
