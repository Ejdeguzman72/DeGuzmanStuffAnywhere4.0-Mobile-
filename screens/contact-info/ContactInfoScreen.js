import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import AddContactButton from '../../components/contact-info/buttons/AddContactButton';
import ViewAllBUtton from '../../components/contact-info/buttons/ViewAllButton';
import ContactDetailsCard from '../../components/contact-info/cards/ContactDetailsCard';
import Title from '../../components/title/Title';

const ContactInfoScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <AddContactButton />
                    <ViewAllBUtton navigation={navigation} />
                </View>
                <ContactDetailsCard />
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
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    }
})

export default ContactInfoScreen;