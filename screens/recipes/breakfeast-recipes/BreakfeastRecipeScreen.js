import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import CornedBeefRecipeModal from '../../../components/recipes/modals/breakfeast-recipes/CornedBeefRecipeModal';
import FrenchToastRecipeModal from '../../../components/recipes/modals/breakfeast-recipes/FrenchToastRecipeModal';
import PancakeRecipeModal from '../../../components/recipes/modals/breakfeast-recipes/PancakeRecipeModal';
import StrataRecipeModal from '../../../components/recipes/modals/breakfeast-recipes/StrataRecipeModal';
import WafflesRecipeModal from '../../../components/recipes/modals/breakfeast-recipes/WafflesRecipeModal';

const BreakfeastRecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Text>This is Breakfeast Recipes Screen</Text>
                <StrataRecipeModal />
                <CornedBeefRecipeModal />
                <PancakeRecipeModal />
                <FrenchToastRecipeModal />
                <WafflesRecipeModal />
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

export default BreakfeastRecipeScreen;