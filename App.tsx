import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import UseList from './src/networks/UseList';

const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <ListPlace />
      </View>
    </QueryClientProvider>
  );
}

function ListPlace() {
  const { data, isLoading, isSuccess } = UseList();
  console.log(data);
  return (
    <Text>Loading</Text>
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
