import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import MusicList from '../../components/music/list/MusicList';
import Title from '../../components/title/Title';

const AllMusicScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <Text>All Music</Text>
                <MusicList />
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