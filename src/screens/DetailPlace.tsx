import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function DetailPlace() {
  return (
    <View style={styles.container}>
      <Text>Detail Place</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
