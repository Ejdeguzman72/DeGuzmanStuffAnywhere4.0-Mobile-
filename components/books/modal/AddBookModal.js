import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Alert, Pressable } from 'react-native';

const AddBookModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
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
                    <Text style={styles.modalText}>Add Book</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                    // value={this.state.name}
                    // onChangeText={handleInputChange}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Author"
                    // value={this.state.author}
                    // onChangeText={handleInputChange}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
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
    )
}

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
    }
});


export default AddBookModal;