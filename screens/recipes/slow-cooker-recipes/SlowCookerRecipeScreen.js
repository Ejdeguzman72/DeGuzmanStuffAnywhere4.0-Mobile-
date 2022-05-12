import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import BlackEyedPeasModal from '../../../components/recipes/modals/slow-cooker-recipes/BlackEyedPeasModal';
import PotRoastRecipeModal from '../../../components/recipes/modals/slow-cooker-recipes/PotRoastRecipeModal';
import PulledPorkRecipeModal from '../../../components/recipes/modals/slow-cooker-recipes/PulledPorkRecipeModal';
import StuffedGreenPepeprsModal from '../../../components/recipes/modals/slow-cooker-recipes/StuffedGreenPeppersModal';
import Title from '../../../components/title/Title';

const SlowCookerRecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <BlackEyedPeasModal />
                <StuffedGreenPepeprsModal />
                <PulledPorkRecipeModal />
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