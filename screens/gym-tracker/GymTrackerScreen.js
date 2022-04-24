import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import AddGymEntryBtn from '../../components/gym-tracker/buttons/AddGymEntryBtn';
import ViewAllGymEntriesBtn from '../../components/gym-tracker/buttons/ViewAllGymEntriesBtn';
import GymTrackerDetailsCard from '../../components/gym-tracker/cards/GymTrackerDetailsCard';
import AddGymEntryModal from '../../components/gym-tracker/modal/AddGymEntryModal';
import Title from '../../components/title/Title';

const GymTrackerScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <ViewAllGymEntriesBtn navigation={navigation} />
                    <AddGymEntryModal />
                </View>
                <GymTrackerDetailsCard />
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
})

export default GymTrackerScreen;