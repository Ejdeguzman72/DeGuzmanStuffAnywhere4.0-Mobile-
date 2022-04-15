import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const DesertRecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Text>This is Desert Recipes Screen</Text>
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

export default DesertRecipeScreen;