import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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