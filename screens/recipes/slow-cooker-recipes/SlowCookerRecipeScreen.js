import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import PotRoastRecipeModal from '../../../components/recipes/modals/slow-cooker-recipes/PotRoastRecipeModal';

const SlowCookerRecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Text>This is Slow Cooker Recipes Screen</Text>
                <PotRoastRecipeModal />
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
        resizeMode: 'cover'
    }
})

export default SlowCookerRecipeScreen;