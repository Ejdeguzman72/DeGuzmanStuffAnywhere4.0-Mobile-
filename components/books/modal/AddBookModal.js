import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput, Alert } from "react-native";

export default class AddBookModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            book_id: 0,
            title: "",
            author: "",
            descr: "",
            submitted: false,
            modalVisible: false
        }
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible})
    }

    onHandleTitleChange = (input) => {
        this.setState({ title: input })
    }

    onHandleAuthorChange = (input) => {
        this.setState({ author: input})
    }

    onHandleDescrChange = (input) => {
        this.setState({ descr: input})
    }

    newBook = () => {
        this.setState({
            title: "",
            author: "",
            descr: "",
            submitted: false,
            modalVisible: false
        })
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const data = {
            book_id: this.state.book_id,
            title: this.state.title,
            author: this.state.author,
            descr: this.state.descr
        }

        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/books/add-book-information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            console.log("Added new book information")
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
                                <Text style={styles.modalText}>Add Book</Text>
                                <Text>{this.state.title} has been submitted!</Text>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={this.newBook}
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
                                <Text style={styles.modalText}>Add Book</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Title"
                                    value={this.state.title}
                                    onChangeText={(event) => this.onHandleTitleChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Author"
                                    value={this.state.author}
                                    onChangeText={(event) => this.onHandleAuthorChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Description"
                                    value={this.state.descr}
                                    onChangeText={(event) => this.onHandleDescrChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={this.onSubmit}
                                >
                                    <Text style={styles.textStyle}>Submit</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={() => this.setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                </Modal>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setModalVisible(!modalVisible)}
                >
                    <Text style={styles.buttonText}>Add Book</Text>
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