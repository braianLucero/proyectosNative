import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>ComponentsApp</Text>
      </View>
    </NavigationContainer>
  );
};
