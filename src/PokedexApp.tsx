import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';

export const PokedexApp = ({children}: PropsWithChildren) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

// creando los directorios y componentes necesarios para el uso de mi app
