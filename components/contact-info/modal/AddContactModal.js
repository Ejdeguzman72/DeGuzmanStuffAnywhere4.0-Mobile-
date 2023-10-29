import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, TextInput } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const AddContactModal = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [firstname, setFirstName] = useState('');
    const [middleInitial, setMiddleInitial] = useState('');
    const [lastname, setLastName] = useState('');
    const [address01, setAddress01] = useState('');
    const [address02, setAddress02] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const onHandleFirstnameChange = (input) => { setFirstName(input) }
    const onHandleMiddleInitialChange = (input) => { setMiddleInitial(input) }
    const onHandleLastNameChange = (input) => { setLastName(input) }
    const onHandleAddress01Change = (input) => { setAddress01(input) }
    const onHandleAddress02Change = (input) => { setAddress02(input) }
    const onHandleCityChange = (input) => { setCity(input) }
    const onHandleStateChange = (input) => { setState(input) }
    const onHandleZipCodeChange = (input) => { setZipcode(input) }
    const onHandlePhoneChange = (input) => { setPhone(input) }
    const onHandleEmailChange = (input) => { setEmail(input) }
    const onHandleBirthdate = (input) => { setBirthdate(input) }

    const newContact = () => {
        setFirstName('');
        setMiddleInitial('');
        setLastName('');
        setAddress01('');
        setAddress02('');
        setCity('');
        setState('');
        setZipcode('');
        setPhone('');
        setEmail('');
        setBirthdate('');
        setSubmitted(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const data = {
            firstname: firstname,
            middle_initial: middleInitial,
            lastname: lastname,
            address01: address01,
            address02: address02,
            city: city,
            state: state,
            zipcode: zipcode,
            phone: phone,
            email: email,
            birthdate: birthdate
        }

        fetch('http://ec2-3-89-42-57.compute-1.amazonaws.com:8080/app/person-info/add-person-information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('Added contact information')
            setSubmitted(true)
        }).catch((error) => console.log(error))
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
                            <Text style={styles.modalText}>Add Contact</Text>
                            <Text>{firstname + ' ' + lastname} has been submitted!</Text>
                            <Pressable
                                style={[styles.modalButton, styles.buttonClose]}
                                onPress={newContact}
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
                                <Text style={styles.modalText}>Add Contact Information</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder="First Name"
                                    value={firstname}
                                    onChangeText={(event) => onHandleFirstnameChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Middle Initial"
                                    value={middleInitial}
                                    onChangeText={(event) => onHandleMiddleInitialChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Last Name"
                                    value={lastname}
                                    onChangeText={(event) => onHandleLastNameChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Address_01"
                                    value={address01}
                                    onChangeText={(event) => onHandleAddress01Change(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Address_02"
                                    value={address02}
                                    onChangeText={(event) => onHandleAddress02Change(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="City"
                                    value={city}
                                    onChangeText={(event) => onHandleCityChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                {/* <TextInput
                                        style={styles.input}
                                        placeholder="State"
                                        value={state}
                                        onChangeText={(event) => onHandleStateChange(event)}
                                        multiline={true}
                                        numberOfLines={4}
                                    /> */}
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
                                    placeholder="Zipcode"
                                    value={zipcode}
                                    onChangeText={(event) => onHandleZipCodeChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                    keyboardType='numeric'
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Birth Date"
                                    value={birthdate}
                                    onChangeText={(event) => onHandleBirthdate(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                    keyboardType='numbers-and-punctuation'
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    value={email}
                                    onChangeText={(event) => onHandleEmailChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                    keyboardType='email-address'
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Phone"
                                    value={phone}
                                    onChangeText={(event) => onHandlePhoneChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                    keyboardType='phone-pad'
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
                <Text style={styles.buttonText}>Add Contact</Text>
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
        backgroundColor: "#FFB6C1",
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
        padding: 20,
        elevation: 2,
        margin: 10,
    },
    buttonClose: {
        backgroundColor: 'black',
        width: 300,
        margin: 10
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

export default AddContactModal;