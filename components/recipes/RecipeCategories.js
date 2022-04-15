import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AmericanRecipeCategory from './categories/AmericanRecipeCategory';
import AsianRecipeCategory from './categories/AsianRecipeCategory';
import BarbequeRecipeCategory from './categories/BarbequeRecipeCategory';
import BreakfeastRecipeCategory from './categories/BreakfeastRecipeCategory';
import ComfortRecipeCategory from './categories/ComfortReipceCategory';
import DesertRecipeCategory from './categories/DesertRecipeCategory';
import FilipinoRecipeCategory from './categories/FilipinoRecipeCategory';
import HispanicRecipeCategory from './categories/HispanicRecipeCategory';
import ItalianRecipeCategory from './categories/ItalianRecipeCategory';
import SeafoodRecipeCategory from './categories/SeafoodRecipeCategory';
import SlowCookerRecipeCategory from './categories/SlowCookerRecipeCategory';

const RecipeCategories = ({ navigation }) => {
    return (
        <ScrollView>
            <AmericanRecipeCategory navigation={navigation} />
            <AsianRecipeCategory navigation={navigation} />
            <BarbequeRecipeCategory navigation={navigation} />
            <BreakfeastRecipeCategory navigation={navigation} />
            <ComfortRecipeCategory navigation={navigation} />
            <DesertRecipeCategory navigation={navigation} />
            <FilipinoRecipeCategory navigation={navigation} />
            <HispanicRecipeCategory navigation={navigation} />
            <ItalianRecipeCategory navigation={navigation} />
            <SeafoodRecipeCategory navigation={navigation} />
            <SlowCookerRecipeCategory navigation={navigation} />
        </ScrollView>
    )
}

export default RecipeCategories;