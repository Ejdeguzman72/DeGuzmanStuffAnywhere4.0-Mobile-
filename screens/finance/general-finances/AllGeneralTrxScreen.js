import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import GeneralTrxList from '../../../components/finances/general/list/GeneralTrxList';
import Title from '../../../components/title/Title';

const AllGeneralTrxScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <Text>All General Transactions</Text>
                <GeneralTrxList />
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

export default AllGeneralTrxScreen;