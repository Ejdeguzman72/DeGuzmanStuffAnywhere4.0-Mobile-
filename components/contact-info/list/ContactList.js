import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { ListItem, Left, Body, Right, Icon } from 'native-base';
import ContactService from '../../../services/contact-service';

const ContactList = () => {
    const [contact, setContact] = useState([]);

    useEffect(() => {
        ContactService.getContactInfo()
            .then((response) => response.json())
            .then((json) => setContact(json))
            .catch((error) => console.log(error))
    }, [])

    return (
        <ScrollView>
            <View style={styles.table}>
                {contact &&
                    contact.map((contact) => (
                        <ListItem style={styles.container} key={contact.contactid} avatar>
                            <Left>
                                
                            </Left>
                            <Body>
                                <Text>{`${contact.firstname} ${contact.lastname}`}</Text>
                                <Text note>{`${contact.phone}`}</Text>
                            </Body>
                            <Right style={{ justifyContent: 'center' }}>
                                <Icon name="heart" style={{ paddingRight: 5, fontSize: 30 }} />
                            </Right>
                        </ListItem>
                    ))}
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