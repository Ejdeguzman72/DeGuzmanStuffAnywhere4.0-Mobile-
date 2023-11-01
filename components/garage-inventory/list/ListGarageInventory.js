import React, { useState,useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';
import InventoryService from '../../../services/InventoryService'

const ListGarageInventory = () => {
    const [offices,setOffices] = useState([]);
    const [currentOffice, setCurrentOffice] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [modalVisible, setModalVisible] = useState(false)

    const setActiveOffice = (office, index) => {
        setCurrentOffice(office)
        setCurrentIndex(index);
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        InventoryService.getAllInventory()
            .then((response) => (response.data))
            .then((json) => setOffices(json.list))
            .catch((error) => {
                console.log(`Error fetching data: ${error}`)
                Alert.alert(`Error fetching data: ${error}`)
            })
    }, [])

    return (
        <ScrollView>
            <View style={styles.table}>
                {offices &&
                    offices.map((office, index) => (
                        <TouchableOpacity style={styles.container} key={index} avatar onPress={() => setActiveOffice(office, index)}>
                            <Text>{`Item: ${office.name}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
                {currentOffice ? (
                    <View style={styles.view}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(!modalVisible)}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Medical Office Information</Text>
                                <View style={styles.indexText}>
                                    <Text>Name:</Text><Text>{currentOffice.name}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Description:</Text><Text>{currentOffice.description}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Condition:</Text><Text>{currentOffice.condition}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Location:</Text><Text>{currentOffice.location}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Quantity:</Text><Text>{currentOffice.quantity}</Text>
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

export default ListGarageInventory;