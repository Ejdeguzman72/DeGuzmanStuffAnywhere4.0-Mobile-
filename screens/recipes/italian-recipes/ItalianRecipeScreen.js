import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import ChickenMarsalaRecipeModal from '../../../components/recipes/modals/italian-recipes/ChickenMarsalaRecipeModal';
import ChickenParmesanRecipeModal from '../../../components/recipes/modals/italian-recipes/ChickenParmesanRecipeModal';
import CreamyMushroomPastaRecipeModal from '../../../components/recipes/modals/italian-recipes/CreamyMushroomPastaRecipeModal';
import GnocchiSpinachPastaRecipeModal from '../../../components/recipes/modals/italian-recipes/GnocchiSpinachPastaRecipeModal';
import MarinaraRecipeModal from '../../../components/recipes/modals/italian-recipes/MarinaSauceRecipeModal';
import MeatballRecipeModal from '../../../components/recipes/modals/italian-recipes/MeatballRecipeModal';
import MeatSauceRecipeModal from '../../../components/recipes/modals/italian-recipes/MeatSauceRecipeModal';
import StuffedShellsRecipeModal from '../../../components/recipes/modals/italian-recipes/StuffedShellsRecipeModal';

const ItalianRecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <ChickenMarsalaRecipeModal />
                <ChickenParmesanRecipeModal />
                <CreamyMushroomPastaRecipeModal />
                <GnocchiSpinachPastaRecipeModal />
                <MarinaraRecipeModal />
                <MeatballRecipeModal />
                <MeatSauceRecipeModal />
                <StuffedShellsRecipeModal />
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

export default ItalianRecipeScreen;