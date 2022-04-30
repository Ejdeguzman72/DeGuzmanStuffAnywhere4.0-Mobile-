import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Modal, Pressable } from "react-native";

export default class AddRunEntryModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            run_id: 0,
            runDate: "",
            runDistance: 0,
            runTime: "",
            user_id: 0,
            submitted: false,
            modalVisible: false
        }
    }

    newEntry = () => {
        this.setState({
            run_id: 0,
            runDate: "",
            runDistance: 0,
            runTime: "",
            user_id: 0,
            submitted: false
        })
    }

    setModalVisible = (visible) => { this.setState({ modalVisible: visible })}
    onHandleDateChange = (input) => { this.setState({ date: input })}
    onHandleDistanceChange = (input) => { this.setState({ runDistance: input })}
    onHandleTimeChange = (input) => { this.setState({ runTime: input })}
    onHandleUserChange = (input) => { this.setState({ user_id: input })}

    onSubmit = (event) => {
        event.preventDefault();

        const data = {
            run_id: this.state.run_id,
            runDate: this.state.runDate,
            runDistance: this.state.runDistance,
            runTime: this.state.runTime,
            user_id: this.state.user_id
        }

        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/run-tracker-app/add-run-tracker-info', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            console.log(data)
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
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Add Run</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Run Date"
                            value={this.state.runDate}
                            onChangeText={(event) => this.onHandleDateChange(event)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Distance"
                            value={this.state.runDistance}
                            onChangeText={(event) => this.onHandleDistanceChange(event)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Time"
                                value={this.state.runTime}
                                onChangeText={this.onHandleTimeChange(event)}
                                multiline={true}
                                numberOfLines={4}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="User ID"
                                value={this.state.user_id}
                                onChangeText={(event) => this.onHandleUserChange(event)}
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
                </Modal>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text style={styles.buttonText}>Add Run Infomration</Text>
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
