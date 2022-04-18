import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../components/title/Title';
import AddVehicleBtn from '../../components/vehicles/buttons/AddVehicleBtn';
import ViewAllVehiclesBtn from '../../components/vehicles/buttons/ViewAllVehicles';
import VehicleDetailsCard from '../../components/vehicles/cards/VehicleDetailsCard';

const VehicleScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <ViewAllVehiclesBtn navigation={navigation} />
                    <AddVehicleBtn />
                </View>
                <VehicleDetailsCard />
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

export default VehicleScreen;