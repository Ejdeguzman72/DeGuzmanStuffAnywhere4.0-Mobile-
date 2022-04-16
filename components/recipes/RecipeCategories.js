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
            <View style={styles.row}>
                <AmericanRecipeCategory navigation={navigation} />
                <AsianRecipeCategory navigation={navigation} />
            </View>
            <View style={styles.row}>
                <BarbequeRecipeCategory navigation={navigation} />
                <BreakfeastRecipeCategory navigation={navigation} />
            </View>
            <View style={styles.row}>
                <ComfortRecipeCategory navigation={navigation} />
                <DesertRecipeCategory navigation={navigation} />
            </View>
            <View style={styles.row}>
                <FilipinoRecipeCategory navigation={navigation} />
                <HispanicRecipeCategory navigation={navigation} />
            </View>
            <View style={styles.row}>
                <ItalianRecipeCategory navigation={navigation} />
                <SeafoodRecipeCategory navigation={navigation} />
            </View>
            <View style={styles.row}>
                <SlowCookerRecipeCategory navigation={navigation} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default RecipeCategories;