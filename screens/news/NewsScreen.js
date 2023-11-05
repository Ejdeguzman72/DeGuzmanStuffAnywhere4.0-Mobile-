import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../components/title/Title';
import WeatherCard from '../../components/newsfeed/card/WeatherCard';
import NewsList from '../../components/newsfeed/list/NewsList';
import { Divider } from 'react-native-paper';
import NewsCategoryPicker from '../../components/pickers/NewsCategoryPicker';

const NewsScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <NewsCategoryPicker  selectedValue='News' />
                <View style={styles.row}>
                    <NewsList />
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

export default NewsScreen;