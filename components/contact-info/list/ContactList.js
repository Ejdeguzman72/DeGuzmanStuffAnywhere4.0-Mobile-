import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { ListItem, Left, Body, Right, Icon } from 'native-base';
import ContactService from '../../../services/contact-service';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        ContactService.getContactInfo().
        then(response => {
            console.log(response.data)
        });
        console.log(contacts);
    }, [])

    return (
        <ScrollView>
            <View style={styles.table}>
                
                <Divider />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    table: {
        padding: 10,
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        textAlign: 'center'
    },
    contact: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black',
        fontFamily: 'monospace',
        fontSize: 15,
        justifyContent: 'center'
    },
    row: {
        padding: 10
    },
    listItem: {
        color: 'green'
    }
})

export default ContactList;