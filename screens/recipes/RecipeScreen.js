import React from 'react';
import { SafeAreaView, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../components/title/Title';
import RecipeList from '../../components/recipes/list/RecipeList';
import RecipeCategoryPicker from '../../components/recipes/picker/RecipePicker';

const RecipeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <RecipeCategoryPicker />
                <RecipeList />
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