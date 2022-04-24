import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import AddAutoRepairShopBtn from '../../components/auto-repair-shops/buttons/AddAutoShopBtn';
import ViewAllAutoShopBtn from '../../components/auto-repair-shops/buttons/ViewAllAutoShops';
import Title from '../../components/title/Title';
import AutoShopDetailsCard from '../../components/auto-repair-shops/cards/AutoShopDetailsCard';
import AddAutoRepairShopModal from '../../components/auto-repair-shops/modal/AddBookModal';

const AutoShopScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <Divider />
                <View style={styles.row}>
                    <ViewAllAutoShopBtn navigation={navigation} />
                    <AddAutoRepairShopModal />
                </View>
                <AutoShopDetailsCard />
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

export default AutoShopScreen;