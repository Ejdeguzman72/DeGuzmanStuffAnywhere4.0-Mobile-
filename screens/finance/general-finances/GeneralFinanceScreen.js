import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../../components/title/Title';
import AddGeneralTrxBtn from '../../../components/finances/general/buttons/AddGeneralTrxBtn';
import ViewGeneralTrxBtn from '../../../components/finances/general/buttons/ViewGeneralTrxBtn';

const GeneralFinanceScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <AddGeneralTrxBtn />
                    <ViewGeneralTrxBtn navigation={navigation} />
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

export default GeneralFinanceScreen;