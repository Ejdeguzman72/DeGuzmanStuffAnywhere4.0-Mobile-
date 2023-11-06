import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';
import BookService from '../../../services/BookService';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [modalVisible, setModalVisible] = useState(false);

    const setActiveBook = (book, index) => {
        setCurrentBook(book);
        setCurrentIndex(index);
        setModalVisible(!modalVisible);
    }

    useEffect(() => {
        BookService.getAllBooks()
            .then((response) => response.data)
            .then((json) => setBooks(json.list))
            .catch((error) => console.log(error))
    }, [])

    return (
        <ScrollView>
            <View style={styles.table}>
                {books &&
                    books.map((book, index) => (
                        <TouchableOpacity style={styles.container} key={index} avatar onPress={() => setActiveBook(book, index)}>
                            <Text>{`Title: ${book.title}`}</Text>
                            <Text>{`Author: ${book.author}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
                {currentBook ? (
                    <View style={styles.view}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(!modalVisible)}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Book Information</Text>
                                    <View style={styles.indexText}>
                                        <Text>Title:</Text><Text>{currentBook.title}</Text>
                                    </View>
                                    <View style={styles.indexText}>
                                        <Text>Author:</Text><Text>{currentBook.author}</Text>
                                    </View>
                                    <View style={styles.indexText}>
                                        <Text>Description:</Text><Text>{currentBook.descr}</Text>
                                    </View>
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Close </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </View>
                ) : null}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    table: {
        padding: 10,
        flex: 1
    },
    view: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        textAlign: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    contact: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black',
        fontFamily: 'monospace',
        fontSize: 15,
        justifyContent: 'center'
    },
    row: {
        padding: 10
    },
    listItem: {
        color: 'green'
    },
    centeredView: {
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
    buttonClose: {
        backgroundColor: 'black',
        width: 350,
        margin: 10,
        padding: 10
    },
    modalButton: {
        // width: 200,
        borderRadius: 20,
        padding: 10,
        margin: 10
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
    indexText: {
        height: 100,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 35,
        width: 300,
        textAlign: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
})

export default BookList;