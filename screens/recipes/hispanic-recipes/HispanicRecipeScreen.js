import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import ChilaquilesRecipeModal from '../../../components/recipes/modals/hispanic-recipes/ChilaquilesRecipeModal';
import EnchiladasRecipeModal from '../../../components/recipes/modals/hispanic-recipes/EnchiladasRecipeModal';
import FajitasRecipeModal from '../../../components/recipes/modals/hispanic-recipes/FajitasRecipeModal';

const HispanicRecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <ChilaquilesRecipeModal />
                <EnchiladasRecipeModal />
                <FajitasRecipeModal />
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

export default HispanicRecipeScreen;