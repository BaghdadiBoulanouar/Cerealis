/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image
 } from 'react-native';
 import { Button } from 'react-native-elements';
 
 const HomeScreen = ({navigation}) => {
     return (
      <View style={styles.container}>
        <Image source={require('../medias/logo.jpg')} /> 
        <Text style={styles.welcome}>
           Cerealis Coloring AR!
        </Text>
        <Button onPress={()=> navigation.navigate('formulaire')} title="Demarrer" buttonStyle={{ backgroundColor: 'black', borderWidth: 2, borderColor: 'white', borderRadius: 30, }} containerStyle={{ width: 200, marginHorizontal: 50,  marginVertical: 10, }} titleStyle={{ fontWeight: 'bold' }} />
        <Image source={require('../medias/devfodes.png')} style={styles.logo} /> 
        <View style={styles.view2}>
          <Text onPress={()=> navigation.navigate('react')} >A propos</Text>
          <Text onPress={()=> navigation.navigate('react')} >Mentions légales</Text>
          <Text onPress={()=> navigation.navigate('Share')} style={styles.apropos} >Nous contacter</Text>
        </View>
      </View>
     );
   };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
   logo: {
    width: 150,
    height: 42,
    marginTop: 100,
    },
    view2: {
    }
 });
 
 export default HomeScreen;