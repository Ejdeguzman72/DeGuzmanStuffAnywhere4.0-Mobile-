import React, { useState,useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';

const VehicleList = () => {
    const [vehicles,setVehicles] = useState([]);
    const [currentVehicle, setCurrentVehicle] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [modalVisible, setModalVisible] = useState(!modalVisible)

    const setActiveVehicle = (vehicle, index) => {
        setCurrentVehicle(vehicle);
        setCurrentIndex(index)
        setModalVisible(!modalVisible)
    }
 
    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/vehicles/all')
            .then((response) => response.json())
            .then((json) => setVehicles(json))
            .catch((error) => console.log(error))
    }, [])

    console.log(vehicles)

    return (
        <ScrollView>
            <View style={styles.table}>
                {vehicles &&
                    vehicles.map((vehicle, index) => (
                        <TouchableOpacity style={styles.container} key={index} avatar onPress={() => setActiveVehicle(vehicle,index)}>
                            <Text>{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
                {currentVehicle ? (
                    <View style={styles.view}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(!modalVisible)}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Vehicle Information</Text>
                                <View style={styles.indexText}>
                                    <Text>Make:</Text><Text>{currentVehicle.make}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Model:</Text><Text>{currentVehicle.model}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Year:</Text><Text>{currentVehicle.year}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Capacity:</Text><Text>{currentVehicle.capacity}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Transmission:</Text><Text>{currentVehicle.transmission}</Text>
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

export default VehicleList;