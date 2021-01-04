import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';
import NewClient from './views/NewClient';
import ClientDetails from './views/ClientDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
        >
          <Stack.Screen
            name='Home'
            component={Home}
          />
          <Stack.Screen
            name='New Client'
            component={NewClient}
          />
          <Stack.Screen
            name='Client Details'
            component={ClientDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
