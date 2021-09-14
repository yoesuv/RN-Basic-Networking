import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import UseList from '../networks/UseList';

export default function ListPlace() {
  const { data, isLoading, isSuccess } = UseList();
  console.log(`ListPlace # isLoading: ${isLoading}`);
  return (
    <View style={styles.container}>
      <Text>List Place</Text>
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
});

export default ListPlace;
