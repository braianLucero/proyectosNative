import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {PaperProvider} from 'react-native-paper';

export const PokedexApp = ({children}: PropsWithChildren) => {
  return (
    <PaperProvider>
      <NavigationContainer>{children}</NavigationContainer>;
    </PaperProvider>
  );
};
