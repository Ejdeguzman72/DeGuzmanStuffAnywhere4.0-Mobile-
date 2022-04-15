import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const BarbequeRecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Text>This is Barbeque Recipes Screen</Text>
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

export default BarbequeRecipeScreen;