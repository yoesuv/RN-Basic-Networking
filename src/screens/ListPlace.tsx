import React from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import UseList from '../networks/UseList';
import ItemPlace from '../components/ItemPlace';
import Divider from '../components/Divider';
import { THEME_COLOR } from '../data/Colors';

const queryClient = new QueryClient();

function onItemPress({data}: {data: any}) {
  console.log(`ListPlace # item pressed ${data.nama}`)
}

export default function ListPlace({ navigation }: NativeStackScreenProps<{},'ListPlace'>) {
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
          renderItem = {({item, index}) => (
            <ItemPlace place={item} onPress={() => onItemPress(item)}/>
          )}
          keyExtractor = {(item, index) => index.toString()}
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
