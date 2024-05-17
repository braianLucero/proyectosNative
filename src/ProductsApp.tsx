import 'react-native-gesture-handler';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './presentation/screen/home/HomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}
