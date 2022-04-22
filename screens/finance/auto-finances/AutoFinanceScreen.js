import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import AddAutoTrxBtn from '../../../components/finances/auto/buttons/AddAutoTrxBtn';
import ViewAutoTrxBtn from '../../../components/finances/auto/buttons/ViewAutoTrxBtn';
import Title from '../../../components/title/Title';

const AutoFinanceScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <AddAutoTrxBtn />
                    <ViewAutoTrxBtn navigation={navigation} />
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
})

export default AutoFinanceScreen;