import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';

const RunEntryList = () => {
    const [entries, setEntries] = useState([]);
    const [currentEntry, setCurrentEntry] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [modalVisible, setModalVisible] = useState(!modalVisible)

    setActiveEntry = (entry, index) => {
        setCurrentEntry(entry)
        setCurrentIndex(index)
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/run-tracker-app/all')
            .then((response) => response.json())
            .then((json) => setEntries(json))
            .catch((error) => console.log(error))
    }, [])

    return (
        <ScrollView>
            <View style={styles.table}>
                {entries &&
                    entries.map((entry, index) => (
                        <TouchableOpacity style={styles.container} key={index} avatar onPress={() => setActiveEntry(entry, index)}>
                            <Text>{`${entry.run_time} ${entry.run_distance} ${entry.run_date}`}</Text>
                            <Text note>{`${entry.username}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
                {currentEntry ? (
                    <View style={styles.view}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(!modalVisible)}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Run Information</Text>
                                    <View style={styles.indexText}>
                                        <Text>Run Time:</Text><Text>{currentEntry.run_time}</Text>
                                    </View>
                                    <View style={styles.indexText}>
                                        <Text>Run Distance:</Text><Text>{currentEntry.run_distance}</Text>
                                    </View>
                                    <View style={styles.indexText}>
                                        <Text>Date:</Text><Text>{currentEntry.run_date}</Text>
                                    </View>
                                    <View style={styles.indexText}>
                                        <Text>Username:</Text><Text>{currentEntry.username}</Text>
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
        padding: 20
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
        justifyContent: 'center'
    },
})

export default RunEntryList;