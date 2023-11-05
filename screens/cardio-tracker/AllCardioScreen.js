import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import CardioEntryList from '../../components/fitness/cardio-tracker/list/CardioEntryList';
import Title from '../../components/title/Title';

const AllCardioScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <CardioEntryList />
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
        resizeMode: 'cover',
    },
})

export default AllCardioScreen;