import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import BusinessNewsList from '../../components/newsfeed/list/BusinessNewsList';
import NewsCategoryPicker from '../../components/pickers/NewsCategoryPicker';

const BusinessNewsScreen = ({ selectedValue}) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <NewsCategoryPicker selectedValue='Business' />
                <View style={styles.row}>
                    <BusinessNewsList />
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

export default BusinessNewsScreen;