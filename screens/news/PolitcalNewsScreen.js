import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import PoliticalNewsList from '../../components/newsfeed/list/PoliticalNewsList';
import { Divider } from 'react-native-paper';
import NewsCategoryPicker from '../../components/pickers/NewsCategoryPicker';

const PoliticalNewsScreen = ({ navigation}) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <NewsCategoryPicker />
                <View style={styles.row}>
                    <PoliticalNewsList />
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

export default PoliticalNewsScreen;