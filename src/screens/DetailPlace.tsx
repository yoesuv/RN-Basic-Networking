import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function DetailPlace() {
  const route = useRoute();
  const { data } = route.params;
  console.log(`DetailPlace # ${data}`);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.nama}</Text>
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
  title : {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
