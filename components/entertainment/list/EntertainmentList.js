import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';
import EntertainmentService from '../../../services/EntertainmentService';

const EntertainmentList = () => {
    const [list, setList] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [modalVisible, setModalVisible] = useState(false);

    const setActiveItem = (item, index) => {
        setCurrentItem(item);
        setCurrentIndex(index);
        setModalVisible(!modalVisible);
    }

    useEffect(() => {
        EntertainmentService.getAllEntertainment()
            .then(response => response.data)
            .then(json => setList(json.list))
            .catch((error) => console.log(error))
    }, [])

    return (
        <ScrollView>
            <View style={styles.table}>
                {list &&
                    list.map((item, index) => (
                        <TouchableOpacity style={styles.container} key={index} avatar onPress={() => setActiveItem(item, index)}>
                            <Text>{`Title: ${item.title}`}</Text>
                            <Text>{`Author: ${item.author}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
                {currentItem ? (
                    <View style={styles.view}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(!modalVisible)}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Entertainment Information</Text>
                                    <View style={styles.indexText}>
                                        <Text>Title:</Text><Text>{currentItem.title}</Text>
                                    </View>
                                    <View style={styles.indexText}>
                                        <Text>Author:</Text><Text>{currentItem.author}</Text>
                                    </View>
                                    <View style={styles.indexText}>
                                        <Text>Description:</Text><Text>{currentItem.descr}</Text>
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
        borderBottomWidth:1,
        borderTopWidth:1
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
        borderBottomWidth:1,
        borderTopWidth:1
    },
})

export default EntertainmentList;