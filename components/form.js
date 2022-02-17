/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component, useState } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
 } from 'react-native';
 import { Button } from 'react-native-elements';
 
 const Formulaire = ({navigation}) => {

  const [isSelected, setSelection] = useState(false);

     return (
       <View style={styles.container}>
         <Text style={styles.welcome}>Cerealis Coloring AR!</Text>
         <Text style={styles.inputtitle}>Votre nom</Text>
         <TextInput style={styles.input} placeholder='Dupont'></TextInput>
         <Text>Votre e-mail</Text>
         <TextInput style={styles.input} placeholder='example@domain.com'></TextInput>
         <Button onPress={()=> navigation.navigate('Share')} title="Continuer" buttonStyle={{ backgroundColor: 'black', borderWidth: 2, borderColor: 'white', borderRadius: 10, }} containerStyle={{ width: 300, marginHorizontal: 50,  marginVertical: 10, }} titleStyle={{ fontWeight: 'bold' }} />
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
     fontWeight: 'bold',
     color: 'black',
   },
   inputtitle: {
   },
   input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
   },
 });
 
 export default Formulaire;