import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

import Splash from './src/screens/Splash';
import ListPlace from './src/screens/ListPlace';

const Stack = createNativeStackNavigator();

export default function App() {
  /* https://stackoverflow.com/a/65573567 */
  LogBox.ignoreLogs(['Setting a timer for a long period of time'])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="ListPlace" component={ListPlace} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
