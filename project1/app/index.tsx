import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
const icedCoffeeImage = require('../assets/images/iced-coffee.png');

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffeeImage} resizeMode='cover' style={styles.image}>
      <Text style={styles.text}>Heloo World</Text>
      </ImageBackground>
    </View>
  )
}



export default index


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  text :{
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10
  },
  image :{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  }
})