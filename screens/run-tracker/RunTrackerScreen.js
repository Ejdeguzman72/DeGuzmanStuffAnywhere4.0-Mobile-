import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import Title from '../../components/title/Title';
import RunTrackerDetailsCard from '../../components/run-tracker/cards/RunTrackerDetailsCard';
import ViewAllRunsBtn from '../../components/run-tracker/buttons/ViewAllRunsBtn';
import AddRunEntryModal from '../../components/run-tracker/modal/AddRunModal';

const RunTrackerScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <Divider />
                <View style={styles.row}>
                    <ViewAllRunsBtn navigation={navigation} />
                    <AddRunEntryModal />
                </View>
                <RunTrackerDetailsCard />
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

export default RunTrackerScreen;