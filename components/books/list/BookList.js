import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [modalVisible, setModalVisible] = useState([]);

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/books/all')
            .then((response) => response.json())
            .then((json) => setBooks(json))
            .catch((error) => console.log(error) && Alert.alert(error));
    }, []);

    return (
        <ScrollView>
            <View style={styles.table}>
                {books &&
                    books.map((book, index) => (
                        <View>
                            {/* <Modal
                                animation="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => { setModalVisible(!modalVisible) }}
                            >
                                <View style={styles.centeredView}>
                                    <View stlye={styles.modalView}>
                                        <Text style={styles.modalText}>{book.title}</Text>
                                        <Text style={styles.modalText}>{book.author}</Text>
                                        <Text style={styles.modalText}>{book.descr}</Text>
                                        <Pressable
                                            style={[styles.modalButton, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <Text style={styles.textStyle}>Close </Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal> */}
                            <TouchableOpacity
                                style={styles.container}
                                key={book.book_id}
                                onPress={() => setModalVisible(true)}
                                avatar>
                                <Text>{`${book.title}`}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                <Divider />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    table: {
        padding: 10,
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        textAlign: 'center'
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
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 30
    },
})

export default BookList;