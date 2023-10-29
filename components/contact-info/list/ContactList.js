import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Pressable, Modal } from 'react-native';
import { Divider } from 'react-native-paper';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [currentContact, setCurrentContact] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    const setActiveContact = (contact, index) => {
        setCurrentContact(contact);
        setCurrentIndex(index);
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        fetch('http://ec2-3-89-42-57.compute-1.amazonaws.com:8080/app/person-info/all')
            .then((response) => response.json())
            .then((json) => setContacts(json.list))
            .catch((error) => console.log(error))
    }, [])

    return (
        <ScrollView>
            <View style={styles.table}>
                {contacts &&
                    contacts.map((contact, index) => (
                        <TouchableOpacity style={styles.container} key={index} avatar onPress={() => setActiveContact(contact,index)}>
                            <Text>{`${contact.firstname} ${contact.lastname}`}</Text>
                            <Text note>{`${contact.phone}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
                {currentContact ? (
                    <View style={styles.view}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(!modalVisible)}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Contact Information</Text>
                                <View style={styles.indexText}>
                                    <Text>Name:</Text><Text>{currentContact.firstname + ' ' + currentContact.lastname}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Address:</Text><Text>{currentContact.address01 + ', ' + currentContact.city + ' ' + currentContact.state + ' ' + currentContact.zipcode}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Birthdate:</Text><Text>{currentContact.birthdate}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Email:</Text><Text>{currentContact.email}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Phone:</Text><Text>{currentContact.phone}</Text>
                                </View>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Close </Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
                ) : null}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    table: {
        padding: 10,
        flex: 1
    },
    view: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        textAlign: 'center',
        padding: 20,
        borderBottomWidth:1,
        borderTopWidth:1
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 5,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 100,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonClose: {
        backgroundColor: 'black',
        width: 350,
        margin: 10,
        padding: 10
    },
    modalButton: {
        // width: 200,
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 30
    },
    indexText: {
        height: 100,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 35,
        width: 300,
        textAlign: 'center',
        justifyContent: 'center',
        borderBottomWidth:1,
        borderTopWidth:1
    },
})

export default ContactList;