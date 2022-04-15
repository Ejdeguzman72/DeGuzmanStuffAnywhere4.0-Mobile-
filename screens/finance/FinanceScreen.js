import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View, Button } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import AutoFinanceCard from '../../components/finances/AutoFinanceCard';
import GeneralFinanceCard from '../../components/finances/GeneralFinanceCard';
import MedicalFinanceCard from '../../components/finances/MedicalFinanceCard';

const FinanceScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container} >
                <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                    <AutoFinanceCard navigation={navigation} />

                    <GeneralFinanceCard navigation={navigation} />

                    <MedicalFinanceCard navigation={navigation} />
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        // alignItems: 'center',
        //justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    }
});

export default FinanceScreen;