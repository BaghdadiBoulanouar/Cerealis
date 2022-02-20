import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { SocialIcon, Button } from 'react-native-elements';
import {
  shareOnFacebook,
  shareOnTwitter,
} from 'react-native-social-share';

const tweet = () => {

  shareOnTwitter({
      'text':'J\'ai pris une photo sur #cerealis #coloring #AR !',
      'link':'http://www.cerealis.com/',
      //'imagelink':'https://ionnews.mu/wp-content/uploads/2022/02/kylian-mbappe.jpg',
      //or use image
      'image': 'logo.PNG',
    },
    (results) => {
      console.log(results);
    }
  );
};

const facebookShare = () => {

  shareOnFacebook({
      'text':'J\'ai pris une photo sur #cerealis #coloring #AR !',
      'link':'http://www.cerealis.com/',
      'imagelink':'https://artboost.com/apple-touch-icon-144x144.png',
      //or use image
      'image': 'logo.PNG',
    },
    (results) => {
      console.log(results);
    }
  );
};

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
        onPress={facebookShare}
      />
      <SocialIcon
        title='Partager avec Twitter'
        button
        type='twitter'
        onPress={tweet}
      />
      <SocialIcon
        title='Partager avec Instagram'
        button
        light
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
    justifyContent: 'center',
    alig
  },
});

export default Share;