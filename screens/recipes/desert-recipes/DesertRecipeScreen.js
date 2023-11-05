import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../../components/title/Title';
import RecipeCategoryPicker from '../../../components/recipes/picker/RecipePicker';
import DesertRecipeList from '../../../components/recipes/list/DesertRecipeList';

const DesertRecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <RecipeCategoryPicker />
                <DesertRecipeList />
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