import React from 'react';
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import BeefaroniRecipeModal from '../../../components/recipes/modals/comfort-recipes/BeefaroniRecipeModal';
import BeefStewRecipeModal from '../../../components/recipes/modals/comfort-recipes/BeefStewRecipeModal';
import ChickenNoodleSoupRecipeModal from '../../../components/recipes/modals/comfort-recipes/ChickenNoodleSoupRecipeModa';
import ChickenPotPieRecipeModal from '../../../components/recipes/modals/comfort-recipes/ChickenPotPieRecipeModal';
import ChilliRecipeModal from '../../../components/recipes/modals/comfort-recipes/ChiliRecipeModal';
import HoneyGarlicPorkRecipeModal from '../../../components/recipes/modals/comfort-recipes/HoneyGarlicPorkRecipeModal';
import MeatloafRecipeModal from '../../../components/recipes/modals/comfort-recipes/MeatloafRecipeModal';
import QuicheRecipeModal from '../../../components/recipes/modals/comfort-recipes/QuicheRecipeModal';
import SalisburySteaksRecipeModal from '../../../components/recipes/modals/comfort-recipes/SalisburySteaksRecipeModal';
import Title from '../../../components/title/Title';

const ComfortRecipeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                    <Title />
                    <BeefaroniRecipeModal />
                    <BeefStewRecipeModal />
                    <ChickenNoodleSoupRecipeModal />
                    <ChickenPotPieRecipeModal />
                    <ChilliRecipeModal />
                    <HoneyGarlicPorkRecipeModal />
                    <MeatloafRecipeModal />
                    <SalisburySteaksRecipeModal />
                    <QuicheRecipeModal />
                </ImageBackground>
            </View>
        </ScrollView>
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

export default ComfortRecipeScreen;