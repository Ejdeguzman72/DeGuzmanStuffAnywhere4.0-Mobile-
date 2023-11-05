import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput } from "react-native";

const AddGymEntryBtn = () => {
    const [modalVisible, setModalVisible] = useState(false);
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
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Add Gym Entry</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Exercise Name"
                        // value={this.state.name}
                        // onChangeText={handleInputChange}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Sets"
                        // value={this.state.author}
                        // onChangeText={handleInputChange}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Reps"
                            // value={this.state.descr}
                            // onChangeText={handleInputChange}
                            multiline={true}
                            numberOfLines={4}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Weight"
                            // value={this.state.descr}
                            // onChangeText={handleInputChange}
                            multiline={true}
                            numberOfLines={4}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Date"
                            // value={this.state.descr}
                            // onChangeText={handleInputChange}
                            multiline={true}
                            numberOfLines={4}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Exercise Type ID"
                            // value={this.state.descr}
                            // onChangeText={handleInputChange}
                            multiline={true}
                            numberOfLines={4}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="User ID"
                            // value={this.state.descr}
                            // onChangeText={handleInputChange}
                            multiline={true}
                            numberOfLines={4}
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
            </Modal>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Add Gym Entry</Text>
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

export default AddGymEntryBtn;