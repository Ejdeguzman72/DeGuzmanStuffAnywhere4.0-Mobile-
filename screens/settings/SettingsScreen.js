import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import LogoutBtn from '../../components/settings/LogoutBtn';
import Title from '../../components/title/Title';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <LogoutBtn navigation={navigation} />
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
    }
})

export default SettingsScreen;