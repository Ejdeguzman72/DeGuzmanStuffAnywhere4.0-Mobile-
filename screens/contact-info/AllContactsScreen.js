import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import ContactList from '../../components/contact-info/list/ContactList';
import Title from '../../components/title/Title';

const AllContactsScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <Text>All Contacts</Text>
                <ContactList />
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
        resizeMode: 'cover',
    },
})

export default AllContactsScreen;