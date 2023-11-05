import React from 'react';
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
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