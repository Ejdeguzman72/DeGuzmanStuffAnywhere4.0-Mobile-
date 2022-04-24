import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../../components/title/Title';
import ViewGeneralTrxBtn from '../../../components/finances/general/buttons/ViewGeneralTrxBtn';
import AddGeneralTrxModal from '../../../components/finances/general/modal/AddGeneralTrxModal';

const GeneralFinanceScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <ViewGeneralTrxBtn navigation={navigation} />
                    <AddGeneralTrxModal />
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