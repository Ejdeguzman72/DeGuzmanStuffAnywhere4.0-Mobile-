import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../../components/title/Title';
import RecipeCategoryPicker from '../../../components/recipes/picker/RecipePicker';
import AmericanRecipeList from '../../../components/recipes/list/AmericanRecipeList';

const AmericanRecipesScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <RecipeCategoryPicker />
                <AmericanRecipeList />
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

export default AmericanRecipesScreen;