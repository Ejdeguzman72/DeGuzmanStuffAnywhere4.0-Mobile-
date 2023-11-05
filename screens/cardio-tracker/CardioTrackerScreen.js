import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import Title from '../../components/title/Title';
import ViewAllCardioBtn from '../../components/fitness/cardio-tracker/buttons/ViewAllCardioBtn';
import AddCardioModal from '../../components/fitness/cardio-tracker/modal/AddCardioModal';
import CardioTrackerDetailsCard from '../../components/fitness/cardio-tracker/cards/CardioTrackerDetailsCard';

const CardioTrackerScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <Divider />
                <View style={styles.row}>
                    <ViewAllCardioBtn navigation={navigation} />
                    <AddCardioModal />
                </View>
                <CardioTrackerDetailsCard />
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

export default CardioTrackerScreen;