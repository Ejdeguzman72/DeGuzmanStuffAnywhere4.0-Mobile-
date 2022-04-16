import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView, Alert, Pressable } from 'react-native';
import BookRecCard from '../../components/home/BookRecCard';
import ContactInfoCard from '../../components/home/ContactInfoCard';
import FinanceCard from '../../components/home/FinanceCard';
import FitnessCard from '../../components/home/FitnessCard';
import MusicCard from '../../components/home/MusicCard';
import RecipesCard from '../../components/home/RecipesCard';
import RestaurantCard from '../../components/home/RestaurantCard';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container} >
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <BookRecCard navigation={navigation}/>
                <ContactInfoCard navigation={navigation} />
                <FinanceCard navigation={navigation} />
                <FitnessCard navigation={navigation} />
                <MusicCard navigation={navigation} />
                <RecipesCard navigation={navigation} />
                <RestaurantCard navigation={navigation} />
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        // alignItems: 'center',
        //justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover"
    }
});