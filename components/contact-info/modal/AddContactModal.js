import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, TextInput } from "react-native";

export default class AddContactModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person_id: 0,
            firstname: "",
            middle_initial: "",
            lastname: "",
            address01: "",
            address02: "",
            city: "",
            state: "",
            zipcode: "",
            phone: "",
            email: "",
            birthdate: "",
            modalVisible: false,
            submitted: false
        }
    }
    setModalVisible = (visible) => { this.setState({ modalVisible: visible }) }
    onHandleFirstnameChange = (input) => { this.setState({ firstname: input }) }
    onHandleMiddleInitialChange = (input) => { this.setState({ middle_initial: input }) }
    onHandleLastNameChange = (input) => { this.setState({ lastname: input }) }
    onHandleAddress01Change = (input) => { this.setState({ address01: input }) }
    onHandleAddress02Change = (input) => { this.setState({ address02: input }) }
    onHandleCityChange = (input) => { this.setState({ city: input }) }
    onHandleStateChange = (input) => { this.setState({ state: input }) }
    onHandleZipCodeChange = (input) => { this.setState({ zipcode: input }) }
    onHandlePhoneChange = (input) => { this.setState({ phone: input }) }
    onHandleEmailChange = (input) => { this.setState({ email: input }) }
    onHandleBirthdate = (input) => { this.setState({ birthdate: input }) }

    newContact = () => {
        this.setState({
            person_id: 0,
            firstname: "",
            middle_initial: "",
            lastname: "",
            address01: "",
            address02: "",
            city: "",
            state: "",
            zipcode: "",
            phone: "",
            email: "",
            birthdate: ""
        })
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const data = {
            person_id: this.state.person_id,
            firstname: this.state.firstname,
            middle_initial: this.state.middle_initial,
            lastname: this.state.lastname,
            address01: this.state.address01,
            address02: this.state.address02,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
            phone: this.state.phone,
            email: this.state.email,
            birthdate: this.state.birthdate
        }

        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/person-info/add-person-information', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(() => {
            console.log('Added contact information')
            this.setState({
                submitted: true
            })
        }).catch((error) => console.log(error))
    }

    render() {

        const { modalVisible } = this.state

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
                    {this.state.submitted ? (
                        <View style={styles.addCenteredView}>
                            <View style={styles.addModalView}>
                                <Text style={styles.modalText}>Add Contact</Text>
                                <Text>{this.state.firstname + ' ' + this.state.lastname} has been submitted!</Text>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={this.newSong}
                                >
                                    <Text style={styles.textStyle}>Add</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={() => this.setModalVisible(!modalVisible)}
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
                                    value={this.state.name}
                                    onChangeText={(event) => this.onHandleFirstnameChange(event)}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Middle Initial"
                                    value={this.state.middle_initial}
                                    onChangeText={(event) => this.onHandleMiddleInitialChange(event)}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChangeText={(event) => this.onHandleLastNameChange(event)}
                                        multiline={true}
                                        numberOfLines={4}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Address_01"
                                        value={this.state.address01}
                                        onChangeText={(event) => this.onHandleAddress01Change(event)}
                                        multiline={true}
                                        numberOfLines={4}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Address_02"
                                        value={this.state.address02}
                                        onChangeText={(event) => this.onHandleAddress02Change(event)}
                                        multiline={true}
                                        numberOfLines={4}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="City"
                                        value={this.state.city}
                                        onChangeText={(event) => this.onHandleCityChange(event)}
                                        multiline={true}
                                        numberOfLines={4}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="State"
                                        value={this.state.state}
                                        onChangeText={(event) => this.onHandleStateChange(event)}
                                        multiline={true}
                                        numberOfLines={4}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Zipcode"
                                        value={this.state.zipcode}
                                        onChangeText={(event) => this.onHandleZipCodeChange(event)}
                                        multiline={true}
                                        numberOfLines={4}
                                    />
                                    {/* <TextInput
                                        style={styles.input}
                                        placeholder="Age"
                                        value={this.state.age}
                                        onChangeText={(event) => this.onHandleAge}
                                        multiline={true}
                                        numberOfLines={4}
                                    /> */}
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Birth Date"
                                        value={this.state.birthdate}
                                        onChangeText={(event) => this.onHandleBirthdate(event)}
                                        multiline={true}
                                        numberOfLines={4}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChangeText={(event) => this.onHandleEmailChange(event)}
                                        multiline={true}
                                        numberOfLines={4}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Phone"
                                        value={this.state.phone}
                                        onChangeText={(event) => this.onHandlePhoneChange(event)}
                                        multiline={true}
                                        numberOfLines={4}
                                    />
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={(event) => this.onSubmit(event)}
                                    >
                                        <Text style={styles.textStyle}>Submit</Text>
                                    </Pressable>
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={() => this.setModalVisible(!modalVisible)}
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
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text style={styles.buttonText}>Add Contact</Text>
                </TouchableOpacity>
            </View>
        );
    }
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
});
