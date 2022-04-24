import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import ViewAllBUtton from '../../components/contact-info/buttons/ViewAllButton';
import ContactDetailsCard from '../../components/contact-info/cards/ContactDetailsCard';
import AddContactModal from '../../components/contact-info/modal/AddContactModal';
import Title from '../../components/title/Title';

const ContactInfoScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <ViewAllBUtton navigation={navigation} />
                    <AddContactModal />
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