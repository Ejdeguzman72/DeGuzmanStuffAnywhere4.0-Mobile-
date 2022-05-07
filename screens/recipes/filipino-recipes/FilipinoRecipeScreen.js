import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AdoboRecipeModal from '../../../components/recipes/modals/filipino-recipes/AdoboRecipeModal';
import ArrozCaldoRecipeModal from '../../../components/recipes/modals/filipino-recipes/ArrozCaldoRecipeModal';
import CrispyPataRecipeModal from '../../../components/recipes/modals/filipino-recipes/CrispyPataRecipeModal';
import LecheFlanRecipeModal from '../../../components/recipes/modals/filipino-recipes/LecheFlanRecipeModal';
import LumpiaRecipeModal from '../../../components/recipes/modals/filipino-recipes/LumpiaRecipeModal';
import PandesalRecipeModal from '../../../components/recipes/modals/filipino-recipes/PandesalRecipeModal';
import SinigangRecipeModal from '../../../components/recipes/modals/filipino-recipes/SinigangRecipeModal';
import UkoyRecipeModal from '../../../components/recipes/modals/filipino-recipes/UkoyRecipeModal';
import Title from '../../../components/title/Title';

const FilipinoRecipeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                    <Title />
                    <AdoboRecipeModal />
                    <ArrozCaldoRecipeModal />
                    <CrispyPataRecipeModal />
                    <LecheFlanRecipeModal />
                    <LumpiaRecipeModal />
                    <PandesalRecipeModal />
                    <SinigangRecipeModal />
                    <UkoyRecipeModal />
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

export default FilipinoRecipeScreen;