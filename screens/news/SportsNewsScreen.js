import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import SportsNewsList from '../../components/newsfeed/list/SportsNewsList';
import NewsCategoryPicker from '../../components/pickers/NewsCategoryPicker';

const SportsNewsScreen = ({ navigation}) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <NewsCategoryPicker />
                <View style={styles.row}>
                    <SportsNewsList />
                </View>
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

export default SportsNewsScreen;