import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../components/title/Title';
import EntertainmentDetailsCard from '../../components/entertainment/card/EntertainmentDetailsCard';
import EntertainmentList from '../../components/entertainment/list/EntertainmentList';

const ListEntertainmentScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <EntertainmentList />
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

export default ListEntertainmentScreen;