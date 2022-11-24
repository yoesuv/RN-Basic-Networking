import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

import SplashScreen from './src/screens/splash';
import ListPlaceScreen from './src/screens/list-place';
import DetailPlaceScreen from './src/screens/detail-place';
import { THEME_COLOR } from './src/data/colors';
import { RootStackParamList } from './src/screens/root-stack-params';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  /* https://stackoverflow.com/a/65573567 */
  LogBox.ignoreLogs(['Setting a timer for a long period of time'])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="ListPlace" component={ListPlaceScreen} options={{
          title: 'List Place',
          headerStyle: {
            backgroundColor: THEME_COLOR
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}/>
        <Stack.Screen name="DetailPlace" component={DetailPlaceScreen} options={{
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
