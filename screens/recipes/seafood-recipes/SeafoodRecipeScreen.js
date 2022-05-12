import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import CrabCakesRecipeModal from '../../../components/recipes/modals/seafood-recipes/CrabCakeRecipeModal';
import StuffedClamsRecipeModal from '../../../components/recipes/modals/seafood-recipes/StuffedClamsRecipeModal';
import Title from '../../../components/title/Title';

const SeafoodRecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <CrabCakesRecipeModal />
                <StuffedClamsRecipeModal />
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

export default SeafoodRecipeScreen;