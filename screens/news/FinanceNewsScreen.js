import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import FinanceNewsList from '../../components/newsfeed/list/FinanceNewsList';
import NewsCategoryPicker from '../../components/pickers/NewsCategoryPicker';

const FinanceNewsScreen = ({ navigation}) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <NewsCategoryPicker />
                <View style={styles.row}>
                    <FinanceNewsList />
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

export default FinanceNewsScreen;