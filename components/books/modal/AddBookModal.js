import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput, Alert } from "react-native";
import Axios from 'axios';
import BookService from "../../../services/BookService";

const AddBookModal = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [descr, setDescr] = useState('');
    const [submitted, setSubmitted] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    // const setModalVisible = (visible) => {
    //     setModalVisible(visible)
    // }

    const onHandleTitleChange = (input) => {
        setTitle(input)
    }

    const onHandleAuthorChange = (input) => {
        setAuthor(input)
    }

    const onHandleDescrChange = (input) => {
        setDescr(input)
    }

    const newBook = () => {
        setTitle('');
        setAuthor('');
        setDescr('');
        setSubmitted(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: title,
            author: author,
            descr: descr,
        }

        BookService.addBookInformation(data)
            .then(response => {
                console.log(response)
                setTitle(response.data.book.title);
                setAuthor(response.data.author);
                setDescr(response.data.descr)
                setSubmitted(true)
            })
            .catch(error => {
                console.log("Applcation is facing issue: " + error)
                Alert.alert("Application is facing issue: " + error);
            })
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
                            <Text style={styles.modalText}>Add Book</Text>
                            <Text>{title} has been submitted!</Text>
                            <Pressable
                                style={[styles.modalButton, styles.buttonClose]}
                                onPress={newBook}
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
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Add Book</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Title"
                                value={title}
                                onChangeText={onHandleTitleChange}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Author"
                                value={author}
                                onChangeText={onHandleAuthorChange}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Description"
                                value={descr}
                                onChangeText={onHandleDescrChange}
                                multiline={true}
                                numberOfLines={9}
                            />
                            <Pressable
                                style={[styles.modalButton, styles.buttonClose]}
                                onPress={onSubmit}
                            >
                                <Text style={styles.textStyle}>Submit</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.modalButton, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            </Modal>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Add Book</Text>
            </TouchableOpacity>
        </View>
    )

};

const styles = StyleSheet.create({

    view: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#ADD8E6",
        padding: 10,
        width: 160,
        height: 160,
        borderRadius: 50,
        margin: 10,
        backgroundColor: '#20B2AA'
    },
    buttonView: {
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10
    },
    buttonText: {
        fontSize: 30,
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

export default AddBookModal;