import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import AutoTrxList from '../../../components/finances/auto/list/AutoTrxList';
import Title from '../../../components/title/Title';

const AllAutoTrxScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <AutoTrxList />
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
        resizeMode: 'cover',
    },
})

export default AllAutoTrxScreen;