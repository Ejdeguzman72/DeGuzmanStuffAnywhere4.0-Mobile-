import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AddVehicleModal = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [make, setMake] = useState('')
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [transmission, setTransmission] = useState('Select Transmission')
    const [capacity, setCapacity] = useState('Select Capacity');
    const [submitted, setSubmitted] = useState(false);

    const newVehcle = () => {
        setMake('');
        setModel('');
        setYear('');
        setTransmission('');
        setCapacity('');
        setSubmitted(false);
    }

    const onHandleMakeChage = (input) => { setMake(input) }
    const onHandleModelChange = (input) => { setModel(input) }
    const onHandleYearChange = (input) => { setYear(input) }
    const onHandleTransmissionChange = (input) => { setTransmission(input) }
    const onHandleCapacityChange = (input) => { setCapacity(input) }

    const onSubmit = (event) => {
        event.preventDefault();

        const data = {
            make: make,
            model: model,
            year: year,
            transmission: transmission,
            capacity: capacity
        }

        fetch('http://ec2-3-89-42-57.compute-1.amazonaws.com:8080/app/vehicles/add-vehicle-information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            console.log("Added new vehicle information")
            setSubmitted(true)
        })
            .catch((error) => console.log(error))
    }

    return (
        <View style={styles.view}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                {submitted ? (
                    <View style={styles.addCenteredView}>
                        <View style={styles.addModalView}>
                            <Text style={styles.modalText}>Add Vehicle</Text>
                            <Text>{`${year} ${make} ${model}`} has been submitted!</Text>
                            <Pressable
                                style={[styles.modalButton, styles.buttonClose]}
                                onPress={newVehcle}
                            >
                                <Text style={styles.textStyle}>Add</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.modalButton, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close </Text>
                            </Pressable>
                        </View>
                    </View>
                ) : (
                    <ScrollView>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Add Vehicle</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Manufacturer"
                                    value={make}
                                    onChangeText={(event) => onHandleMakeChage(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Model"
                                    value={model}
                                    onChangeText={(event) => onHandleModelChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Year"
                                    value={year}
                                    onChangeText={(event) => onHandleYearChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                <Picker
                                    selectedValue={capacity}
                                    onValueChange={(event) => onHandleCapacityChange(event)}
                                    mode="dropdown"
                                    style={styles.picker}
                                >
                                    <Picker.Item value="" label="Choose Capacity" />
                                    <Picker.Item value="1" label="1" />
                                    <Picker.Item value="2" label="2" />
                                    <Picker.Item value="4" label="4" />
                                    <Picker.Item value="6" label="6" />
                                    <Picker.Item value="8" label="8" />
                                </Picker>
                                <Picker
                                    selectedValue={capacity}
                                    onValueChange={(event) => onHandleTransmissionChange(event)}
                                    mode="dropdown"
                                    style={styles.picker}
                                >
                                    <Picker.Item value="" label="Select Transmission" />
                                    <Picker.Item value="Automatic" label="Automatic" />
                                    <Picker.Item value="Manual" label="Manual" />
                                </Picker>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={(event) => onSubmit(event)}
                                >
                                    <Text style={styles.textStyle}>Submit</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Close </Text>
                                </Pressable>
                            </View>
                        </View>
                    </ScrollView>
                )}
            </Modal>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Add Vehicle Information</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#EE82EE",
        padding: 10,
        width: 160,
        height: 160,
        borderRadius: 50,
        margin: 10,
    },
    buttonView: {
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10
    },
    buttonText: {
        fontSize: 20,
        flexWrap: 'wrap',
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 20,
        textTransform: 'uppercase'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    addCenteredView: {
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
    addModalView: {
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
        elevation: 5,
        height: 300,
        width: 300,
        fontSize: 20
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
    closeButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 10,
    },
    buttonClose: {
        backgroundColor: 'black',
        width: 300
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 25,
        width: 300,
        borderRadius: 10
    },
    modalButton: {
        // width: 200,
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
    picker: {
        marginVertical: 30,
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderColor: "#666",
    }
});

export default AddVehicleModal;