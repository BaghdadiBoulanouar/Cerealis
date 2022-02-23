/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import axios from 'axios';

const Formulaire = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  const sendData = () => {
    axios
      .post('https://localhost:44319/api/HubSpot/PostContact', {
        email: 'waterman@gmail.com',
        name: 'water',
        lastname: 'man',
      })
      .then(function (response) {
        console.log(response);
        alert('test ok');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../medias/logo.jpg')} />
      <Text style={styles.welcome}>Cerealis Coloring AR!</Text>
      <Text style={styles.inputtitle}>Votre nom</Text>
      <TextInput
        style={styles.input}
        placeholder="Dupont"
        // value={name}
        // onChange={e => setName(e.target.value)}
      ></TextInput>
      <Text>Votre e-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="example@domain.com"
        // value={email}
        // onChange={e => setEmail(e.target.value)}
      ></TextInput>
      <Button
        onPress={() => sendData()}
        title="Continuer"
        buttonStyle={{
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 10,
        }}
        containerStyle={{width: 300, marginHorizontal: 50, marginVertical: 10}}
        titleStyle={{fontWeight: 'bold'}}
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
    fontWeight: 'bold',
    color: 'black',
  },
  inputtitle: {},
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default Formulaire;
