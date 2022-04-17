import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import AddMedicalTrxButton from '../../../components/finances/medical/buttons/AddMedicalTrxBtn';
import ViewMedicalTrxButton from '../../../components/finances/medical/buttons/ViewMedicalTrxBtn';
import Title from '../../../components/title/Title';

const MedicalFinanceScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <AddMedicalTrxButton navigation={navigation} />
                    <ViewMedicalTrxButton navigation={navigation} />
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

export default MedicalFinanceScreen;