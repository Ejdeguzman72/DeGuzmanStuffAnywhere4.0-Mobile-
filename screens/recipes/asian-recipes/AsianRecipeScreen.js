import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import BeefAndBrocolliModal from '../../../components/recipes/modals/asian-recipes/BeefAndBrocolliModal';
import EggFuYungRecipeModal from '../../../components/recipes/modals/asian-recipes/EggFuYungRecipeModal';
import KoreanStyleRibsModal from '../../../components/recipes/modals/asian-recipes/KoreanStyleRibsRecipeModal';
import PadThaiRecipeModal from '../../../components/recipes/modals/asian-recipes/PadThaiRecipeModal';
import PanFriedNoodlesRecipeModal from '../../../components/recipes/modals/asian-recipes/PanFriedNoodlesRecipeModal';
import PekingStylePorkChopsModal from '../../../components/recipes/modals/asian-recipes/PekingStylePorkRecipeModal';
import WontonSoupRecipeModal from '../../../components/recipes/modals/asian-recipes/WontonSoupRecipeModal';

const AsianRecipesScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Text>This is Asian Recipes Screen</Text>
                <BeefAndBrocolliModal />
                <EggFuYungRecipeModal />
                <KoreanStyleRibsModal />
                <PadThaiRecipeModal />
                <PanFriedNoodlesRecipeModal />
                <PekingStylePorkChopsModal />
                <WontonSoupRecipeModal />
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

export default AsianRecipesScreen;