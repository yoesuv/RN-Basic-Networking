import React from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';

import ItemPlace from '../components/item-place';
import Divider from '../components/divider';
import { THEME_COLOR } from '../data/colors';
import UseListPlace from '../networks/list-place-service';

export default function ListPlaceScreen() {
  
  const { data, isLoading, isError, isPending } = UseListPlace();
 
  if (isPending || isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={THEME_COLOR}/>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>Error Load...</Text>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch',
    width:"100%",
  },
});
