import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const AllMusicScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} image={styles.image}>
                <Text>This is All Music Screen</Text>
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

export default AllMusicScreen;