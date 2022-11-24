import React from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import UseList from '../networks/UseList';
import ItemPlace from '../components/item-place';
import Divider from '../components/divider';
import { THEME_COLOR } from '../data/colors';

const queryClient = new QueryClient();

export default function ListPlace() {
  return (
    <QueryClientProvider client={queryClient}>
      <BuildList />
    </QueryClientProvider>
  );
}

function BuildList(): JSX.Element {
  const { data, status } = UseList();
  if (status === 'loading') {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={THEME_COLOR}/>
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
          renderItem = {({item}) => (
            <ItemPlace place={item} />
          )}
          keyExtractor = {(_, index) => index.toString()}
          ItemSeparatorComponent= {() => <Divider/>}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Screen List Place</Text>
    </View>
  );
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
