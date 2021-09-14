import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import ListPlace from './src/screens/ListPlace';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <ListPlace />
    </QueryClientProvider>
  );
}
