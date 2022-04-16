import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../components/title/Title';
import AddRestaurantBtn from '../../components/restaurants/buttons/AddRestaurantBtn';
import ViewAllRestaurantsBtn from '../../components/restaurants/buttons/ViewAllRestaurantsBtn';
import RestaurantDetailsCard from '../../components/restaurants/cards/RestaurantDetailsCard';

const RestaurantScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <ViewAllRestaurantsBtn />
                    <AddRestaurantBtn />
                </View>
                <RestaurantDetailsCard />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default RestaurantScreen;