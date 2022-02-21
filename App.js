/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Share from './components/Share';
import index from './components/index';
import formulaire from './components/form';
import react from './components/react';
import photo from './components/photo';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accueil"
          component={index}
          options={{title: 'Accueil'}}
        />
        <Stack.Screen
          name="Share"
          component={Share}
          options={{title: 'Partager'}}
        />
        <Stack.Screen
          name="formulaire"
          component={formulaire}
          options={{title: 'Formulaire'}}
        />
        <Stack.Screen
          name="react"
          component={react}
          options={{title: 'React'}}
        />
        <Stack.Screen
          name="photo"
          component={photo}
          options={{title: 'Photo'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
