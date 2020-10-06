import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar, } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import NumberListScreen from './src/containers/NumberListScreen'
import NumberItemScreen from './src/containers/NumberItemScreen'
import AlphabetListScreen from './src/containers/AlphabetListScreen'

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="AlphabetList">
        <Stack.Screen name="NumberList" component={NumberListScreen} />
        <Stack.Screen name="AlphabeticList" component={AlphabetListScreen} />
        <Stack.Screen name="NumberItem" component={NumberItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App