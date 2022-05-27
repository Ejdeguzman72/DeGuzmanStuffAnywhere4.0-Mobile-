import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput, ScrollView } from "react-native";
import RestaurantTypePicker from '../../pickers/RestaurantTypePicker';
import { Picker } from "@react-native-picker/picker";

const AddRestaurantModal = ({ props }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [restaurant_type_id, setRestaurantTypeId] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const newRestaurant = () => {
        setName('');
        setAddress('');
        setCity('');
        setState('');
        setZip('');
        setRestaurantTypeId(0)
        setSubmitted(false)
    }

    const onHandleNameChange = (input) => { setName(input) }
    const onHandleAddressChange = (input) => { setAddress(input) }
    const onHandleCityChange = (input) => { setCity(input) }
    const onHandleStateChange = (input) => { setState(input) }
    const onHandleZipChange = (input) => { setZip(input) }

    const onHandleRestaurantType = (restaurant_type_id) => {
        setRestaurantTypeId(restaurant_type_id)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip,
            restaurant_type_id: restaurant_type_id
        }

        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/restaurants/add-restaurant-information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => setSubmitted(true))
            .catch((error) => console.log(error))
    }

    return (
        <View style={styles.view}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                {submitted ? (
                    <View style={styles.addCenteredView}>
                        <View style={styles.addModalView}>
                            <Text style={styles.modalText}>Add Restaurant</Text>
                            <Text>{name} has been submitted!</Text>
                            <Pressable
                                style={[styles.modalButton, styles.buttonClose]}
                                onPress={newRestaurant}
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
                                <Text style={styles.modalText}>Add Restaurant</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Name"
                                    value={name}
                                    onChangeText={(event) => onHandleNameChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Address"
                                    value={address}
                                    onChangeText={(event) => onHandleAddressChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="City"
                                    value={city}
                                    onChangeText={(event) => onHandleCityChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                <Picker
                                    selectedValue={state}
                                    onValueChange={(event) => onHandleStateChange(event)}
                                    mode="dropdown"
                                    style={styles.picker}
                                >
                                    <Picker.Item value="Alabama" label="Alabama" />
                                    <Picker.Item value="Alaska" label="Alaska" />
                                    <Picker.Item value="Arizona" label="Arizona" />
                                    <Picker.Item value="Arkansas" label="Arkansas" />
                                    <Picker.Item value="California" label="California" />
                                    <Picker.Item value="Colorado" label="Colorado" />
                                    <Picker.Item value="Conneticut" label="Conneticut" />
                                    <Picker.Item value="Delaware" label="Delaware" />
                                    <Picker.Item value="Florida" label="Florida" />
                                    <Picker.Item value="Georgia" label="Georgia" />
                                    <Picker.Item value="Hawaii" label="Hawaii" />
                                    <Picker.Item value="Idaho" label="Idaho" />
                                    <Picker.Item value="Illinois" label="Illinois" />
                                    <Picker.Item value="Indiana" label="Indiana" />
                                    <Picker.Item value="Iowa" label="Iowa" />
                                    <Picker.Item value="Kansas" label="Kansas" />
                                    <Picker.Item value="Kentucky" label="Kentucky" />
                                    <Picker.Item value="Louisiana" label="Louisiana" />
                                    <Picker.Item value="Maine" label="Maine" />
                                    <Picker.Item value="Maryland" label="Maryland" />
                                    <Picker.Item value="Massachussetts" label="Massachussetts" />
                                    <Picker.Item value="Michigan" label="Michigan" />
                                    <Picker.Item value="Minnesota" label="Minnesota" />
                                    <Picker.Item value="Mississippi" label="Mississippi" />
                                    <Picker.Item value="Missouri" label="Missouri" />
                                    <Picker.Item value="Montana" label="Montana" />
                                    <Picker.Item value="Nebraska" label="Nebraska" />
                                    <Picker.Item value="Nevaada" label="Nevada" />
                                    <Picker.Item value="New Hampshire" label="New Hampshire" />
                                    <Picker.Item value="New Jersey" label="New Jersey" />
                                    <Picker.Item value="New Mexico" label="New Mexico" />
                                    <Picker.Item value="New York" label="New York" />
                                    <Picker.Item value="North Carolina" label="North Carolina" />
                                    <Picker.Item value="North Dakota" label="North Dakota" />
                                    <Picker.Item value="Ohio" label="Ohio" />
                                    <Picker.Item value="Oklahoma" label="Oklahoma" />
                                    <Picker.Item value="Oregon" label="Oregon" />
                                    <Picker.Item value="Pennsylvania" label="Pennsylvania" />
                                    <Picker.Item value="Rhode Island" label="Rhode Island" />
                                    <Picker.Item value="South Carolina" label="South Carolina" />
                                    <Picker.Item value="South Dakota" label="South Dakota" />
                                    <Picker.Item value="Tennessee" label="Tennessee" />
                                    <Picker.Item value="Texas" label="Texas" />
                                    <Picker.Item value="Utah" label="Utah" />
                                    <Picker.Item value="Vermont" label="Vermont" />
                                    <Picker.Item value="Virginia" label="Virginia" />
                                    <Picker.Item value="Washington" label="Washington" />
                                    <Picker.Item value="West Virginia" label="West Virginia" />
                                    <Picker.Item value="Wisconsin" label="Wisconsin" />
                                    <Picker.Item value="Wyoming" label="Wyoming" />
                                </Picker>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Zip"
                                    value={zip}
                                    keyboardType='number-pad'
                                    onChangeText={(event) => onHandleZipChange(event)}
                                />

                                <RestaurantTypePicker
                                    onHandleRestaurantType={onHandleRestaurantType}
                                />

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
                <Text style={styles.buttonText}>Add Restaurant</Text>
            </TouchableOpacity>
        </View>
    );


}

const styles = StyleSheet.create({

    view: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#663399",
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

export default AddRestaurantModal;