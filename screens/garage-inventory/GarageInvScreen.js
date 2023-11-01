import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../components/title/Title';
import ViewAllGarageInvButton from '../../components/garage-inventory/buttons/ViewAllGarageInvButton';
import AddGarageInvButton from '../../components/garage-inventory/buttons/AddGarageInvButton';
import AddGarageInventoryModal from '../../components/garage-inventory/modal/AddGarageInventoryModal';

const GarageInvScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <ViewAllGarageInvButton navigation={navigation} />
                    <AddGarageInventoryModal />
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

export default GarageInvScreen;