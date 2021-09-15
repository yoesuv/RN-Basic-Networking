import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import UseList from '../networks/UseList';
import ItemPlace from '../components/ItemPlace';

const queryClient = new QueryClient();

export default function ListPlace() {

  return (
    <QueryClientProvider client={queryClient}>
      <BuildList />
    </QueryClientProvider>
  );
}

function BuildList() {
  const { data, status } = UseList();
  if (status === 'loading') {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (status === 'error') {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (status === 'success') {
    return (
      <View style={styles.container}>
        <FlatList
          data = {data}
          renderItem = {({item, index}) => (
            <ItemPlace name={item.nama}/>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch',
    width:"100%",
  },
});

export default ListPlace;
