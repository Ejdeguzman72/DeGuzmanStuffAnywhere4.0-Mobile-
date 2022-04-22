import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../components/title/Title';
import AddMusicModal from '../../components/music/modal/AddMusicModal';
import ViewAllMusicBtn from '../../components/music/buttons/ViewAllMusicBtn';
import MusicDetailsCard from '../../components/music/cards/MusicDetailsCard';

const MusicScreen = ({ navigation}) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <ViewAllMusicBtn navigation={navigation} />
                    <AddMusicModal />
                </View>
                <MusicDetailsCard />
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
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export default MusicScreen;