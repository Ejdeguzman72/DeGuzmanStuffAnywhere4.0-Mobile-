import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../components/title/Title';
import EntertainmentDetailsCard from '../../components/entertainment/card/EntertainmentDetailsCard';
import ViewAllButton from '../../components/entertainment/buttons/ViewAllButton';
import AddEntertainmentModal from '../../components/entertainment/modal/AddEntertainmentModal';

const EntertainmentScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <ViewAllButton navigation={navigation}/>
                    <AddEntertainmentModal />
                </View>
                <EntertainmentDetailsCard />
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

export default EntertainmentScreen;