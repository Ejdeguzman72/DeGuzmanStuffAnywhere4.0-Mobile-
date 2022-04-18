import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import AddMedicalOfficeBtn from '../../components/medical-offices/buttons/AddMedicalOfficeBtn';
import ViewAllMedicalOfficesBtn from '../../components/medical-offices/buttons/ViewAllMedicalOffice';
import Title from '../../components/title/Title';

const MedicalOfficeScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <AddMedicalOfficeBtn />
                    <ViewAllMedicalOfficesBtn navigation={navigation} />
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

export default MedicalOfficeScreen;