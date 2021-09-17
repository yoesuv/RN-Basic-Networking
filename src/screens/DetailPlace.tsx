import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function DetailPlace() {
  const route = useRoute();
  const { data } = route.params as any;
  console.log(`DetailPlace # \n ${JSON.stringify(data, null, 4)}`);
  return (
    <View style={styles.container}>
      <Image source={{uri:data.gambar}} style={styles.containerImage} />
      <Text style={styles.title}>{data.nama}</Text>
      <Text style={styles.description}>{data.deskripsi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerImage: {
      width: "100%",
      height: 250
  },
  title : {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
    marginHorizontal: 10
  },
  description: {
    fontSize: 16,
    marginHorizontal: 10
  }
})
