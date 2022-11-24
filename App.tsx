import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

import Splash from './src/screens/Splash';
import ListPlace from './src/screens/ListPlace';
import DetailPlace from './src/screens/DetailPlace';
import { THEME_COLOR } from './src/data/colors';
import { RootStackParamList } from './src/screens/RootStackParams';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  /* https://stackoverflow.com/a/65573567 */
  LogBox.ignoreLogs(['Setting a timer for a long period of time'])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="ListPlace" component={ListPlace} options={{
          title: 'List Place',
          headerStyle: {
            backgroundColor: THEME_COLOR
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}/>
        <Stack.Screen name="DetailPlace" component={DetailPlace} options={{
          title: 'Detail Place',
          headerStyle: {
            backgroundColor: THEME_COLOR
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
