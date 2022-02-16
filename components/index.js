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
        <Image
          style={styles.logo}
          source={{ uri: 'asset:/logo.PNG' }}
        />
         <Text style={styles.welcome}>
           Cerealis Coloring AR!
         </Text>
         <Button onPress={()=> navigation.navigate('Share')} title="Demarrer" buttonStyle={{ backgroundColor: 'black', borderWidth: 2, borderColor: 'white', borderRadius: 30, }} containerStyle={{ width: 200, marginHorizontal: 50,  marginVertical: 10, }} titleStyle={{ fontWeight: 'bold' }} 
        />
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
    height: 50,
    width: 50,
  },
 });
 
 export default HomeScreen;