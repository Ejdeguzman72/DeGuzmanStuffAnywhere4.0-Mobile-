import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput, Alert } from "react-native";

const AddBookModal = () => {
    const initialState = {
        book_id: 0,
        name: "",
        author: "",
        descr: ""
    }

    const [books, setBooks] = useState([]);
    const [modalVisible, setModalVisible] = useState(false)
    const [submitted, setSubmitted] = useState(false);

    const newBook = () => {
        setBooks(initialState)
        setSubmitted(false);
    }

    const handleInputChange = (input) => {
        const { name, value } = input
        setBooks({ ...books, [name]: value })
    }

    const onSubmit = async (event) => {
        const data = {
            book_id: books.book_id,
            name: books.name,
            author: books.author,
            descr: books.descr
        }

        try {
            const response = await fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/books/add-book-information', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            return this.setState({
                book_id: json.book_id,
                name: json.name,
                author: json.author,
                descr: json.descr,
                submitted: true
            });
        } catch (error) {
            console.log(error);
        }

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
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Add Book</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Title"
                            value={books.title}
                            onChangeText={handleInputChange}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Author"
                            value={books.author}
                            onChangeText={handleInputChange}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            value={books.descr}
                            onChangeText={handleInputChange}
                            multiline={true}
                            numberOfLines={4}
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
            </Modal>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text style={styles.buttonText}>Add Book</Text>
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