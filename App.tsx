import React from 'react';
import { LogBox } from 'react-native';

import AppNavigation from './src/navigation';

export default function App() {
  /* https://stackoverflow.com/a/65573567 */
  LogBox.ignoreLogs(['Setting a timer for a long period of time']);
  return (
    <AppNavigation />
  );
}
