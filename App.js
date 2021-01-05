import React, { useState } from 'react';
import {
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


import Home from './views/Home';
import NewClient from './views/NewClient';
import ClientDetails from './views/ClientDetails';

import HeaderBar from './components/ui/HeaderBar';


const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme
}



const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary
            },
            headerTintColor: theme.colors.surface
          }}
        >
          <Stack.Screen
            name='Home'
            component={Home}
            options={({ navigation, route }) => ({
              headerTitleAlign: 'center',
              // headerLeft: (props) => <HeaderBar
              //   navigation={navigation}
              //   route={route}
              // />
            })}

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
