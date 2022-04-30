import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput } from "react-native";

export default class AddGymEntryModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            exercise_id: 0,
            date: "",
            exerciseName: "",
            sets: 0,
            reps: 0,
            weight: 0,
            exercise_type_id: 0,
            user_id: 0,
            submitted: false,
            modalVisible: false
        }
    }

    newEntry = () => {
        this.setState({
            exercise_id: 0,
            exerciseName: "",
            date:"",
            sets: 0,
            reps: 0,
            weight: 0,
            exercise_type_id: 0,
            user_id: 0,
            submitted: false,

        })
    }

    setModalVisible = (visible) => { this.setState({ modalVisible: visible })}
    onHandleExerciseNameChange = (input) => { this.setState({ exerciseName: input })}
    onHandleSetsChange = (input) => { this.setState({ sets: input })}
    onHandleRepsChange = (input) => { this.setState({ reps: input })}
    onHandleWeightChange = (input) => { this.setState({ weight: input })}
    onHandleDateChange = (input) => { this.setState({ date: input })}
    onHandleExerciseTypeChange = (input) => { this.setState({ exercise_type_id: input })}
    onHandleUserChange = (input) => { this.setState({ user_id: input })}

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
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Add Gym Entry</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Exercise Name"
                            value={this.state.exerciseName}
                            onChangeText={(event) => this.onHandleExerciseNameChange(event)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Sets"
                            value={this.state.sets}
                            onChangeText={(event) => this.onHandleSetsChange(event)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Reps"
                                value={this.state.reps}
                                onChangeText={(event) => this.onHandleRepsChange(event)}
                                multiline={true}
                                numberOfLines={4}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Weight"
                                value={this.state.weight}
                                onChangeText={(event) => this.onHandleWeightChange(event)}
                                multiline={true}
                                numberOfLines={4}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Date"
                                value={this.state.date}
                                onChangeText={(event) => this.onHandleDateChange(event)}
                                multiline={true}
                                numberOfLines={4}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Exercise Type ID"
                                value={this.state.exercise_type_id}
                                onChangeText={(event) => this.onHandleExerciseTypeChange(event)}
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
                    <Text style={styles.buttonText}>Add Gym Entry</Text>
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
