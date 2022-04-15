import React from 'react';
import { SafeAreaView, Text, ImageBackground, StyleSheet } from 'react-native';
import RecipeCategories from '../../components/recipes/RecipeCategories';

const RecipeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Text style={styles.recipeScreenText}>List of Recipe Categories</Text>
                <RecipeCategories navigation={navigation} />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    recipeScreenText: {
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'fantasy'
    }
})

export default RecipeScreen;