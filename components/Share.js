import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { SocialIcon, Button } from 'react-native-elements';

const Share = ({navigation}) => {
  return (
    <View>
      <Text>Partager votre photo avec vos amis !</Text>
      <Image
          style={styles.logo}
          source={{ uri: 'assets:/logo.PNG' }}
        />
      <SocialIcon
        title='Partager avec Facebook'
        button
        type='facebook'
      />
      <SocialIcon
        title='Partager avec Twitter'
        button
        type='twitter'
      />
      <SocialIcon
        title='Partager avec Instagram'
        button
        type='instagram'
      />
      <Button title="Prendre une nouvelle photo" buttonStyle={{ backgroundColor: 'black',  borderRadius: 30, margin: 7, height: 60 }} />
      <Button onPress={()=> navigation.navigate('Accueil')} title="Revenir à l'accueil" buttonStyle={{ backgroundColor: 'black',  borderRadius: 30, margin: 7, height: 60 }} />
    </View>
    )
  };

const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 70,
  },
});

export default Share;