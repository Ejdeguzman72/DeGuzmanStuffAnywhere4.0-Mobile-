import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import DetailsCard from '../../components/details/AppDetailsCard';
import Title from '../../components/title/Title';
import WeatherCard from '../../components/newsfeed/card/WeatherCard';

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.container}>
          <Title />
          <WeatherCard />
          <DetailsCard />
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
    // backgroundColor: '#FFF5EE',
    justifyContent: 'center',
  },
  containerText: {
    fontSize: 30,
    fontFamily: 'Roboto',
    textAlign: 'center'
  }
})

export default DetailsScreen;