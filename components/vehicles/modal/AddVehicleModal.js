import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput } from "react-native";

export default class AddVehicleModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            vehicle_id: 0,
            year: "",
            make: "",
            model: "",
            transmission: "",
            capacity: 0,
            submitted: false,
            modalVisible: false
        }
    }

    newVehcle = () => {
        this.setState({
            make: "",
            model: "",
            year: "",
            transmission: "",
            capacity: 0,
            submitted: false,
        })
    }

    setModalVisible = (visible) => { this.setState({ modalVisible: visible }) }
    onHandleMakeChage = (input) => { this.setState({ make: input }) }
    onHandleModelChange = (input) => { this.setState({ model: input }) }
    onHandleYearChange = (input) => { this.setState({ year: input }) }
    onHandleTransmissionChange = (input) => { this.setState({ transmission: input }) }
    onHandleCapacityChange = (input) => { this.setState({ capacity: input }) }

    onSubmit = (event) => {
        event.preventDefault();

        const data = {
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            transmission: this.state.transmission,
            capacity: this.state.capacity
        }

        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/vehicles/add-vehicle-information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(() => {
            console.log("Added new vehicle information")
            this.setState({
                submitted: true
            })
        })
        .catch((error) => console.log(error))
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
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    {this.state.submitted ? (
                        <View style={styles.addCenteredView}>
                            <View style={styles.addModalView}>
                                <Text style={styles.modalText}>Add Music</Text>
                                <Text>{this.state.title} has been submitted!</Text>
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
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Add Vehicle</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Manufacturer"
                                    value={this.state.make}
                                    onChangeText={(event) => this.onHandleMakeChage(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Model"
                                    value={this.state.model}
                                    onChangeText={(event) => this.onHandleModelChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Year"
                                    value={this.state.year}
                                    onChangeText={(event) => this.onHandleYearChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Capacity"
                                    value={this.state.capacity}
                                    onChangeText={(event) => this.onHandleCapacityChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Transmission"
                                    value={this.state.transmission}
                                    onChangeText={(event) => this.onHandleTransmissionChange(event)}
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
                    )}
                </Modal>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text style={styles.buttonText}>Add Vehicle Information</Text>
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
});
