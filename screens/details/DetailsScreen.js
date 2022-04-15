import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.container}>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  container: {
    backgroundColor: '#FFF5EE',
    justifyContent: 'center',
  },
  containerText: {
    fontSize: 30,
    fontFamily: 'Roboto',
    textAlign: 'center'
  }
})

export default DetailsScreen;