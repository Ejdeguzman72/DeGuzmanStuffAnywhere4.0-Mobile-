import React from 'react';
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import RecipeCategoryPicker from '../../../components/recipes/picker/RecipePicker';
import FilipinoRecipeList from '../../../components/recipes/list/FilipinoRecipeList';

const FilipinoRecipeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                    <RecipeCategoryPicker />
                    <FilipinoRecipeList />
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