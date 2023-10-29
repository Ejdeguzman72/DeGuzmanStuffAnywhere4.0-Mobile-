import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';

const GymEntryList = () => {
    const [entries,setEntries] = useState([]);
    const [currentEntry,setCurrentEntry] = useState(null)
    const [currentIndex,setCurrentIndex] = useState(-1);
    const [modalVisible, setModalVisible] = useState(!modalVisible)

    const setActiveEntry = (entry, index) => {
        setCurrentEntry(entry)
        setCurrentIndex(index)
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        fetch('http://ec2-3-89-42-57.compute-1.amazonaws.com:8080/app/gym-tracker/all')
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
                            <Text>{`Exericise: ${entry.exerciseName} - ${entry.sets} x ${entry.reps}`}</Text>
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
                                <Text style={styles.modalText}>Gym Entry Information</Text>
                                <View style={styles.indexText}>
                                    <Text>Sets:</Text><Text>{currentEntry.sets}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Reps:</Text><Text>{currentEntry.reps}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Weight:</Text><Text>{currentEntry.weight}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Exercise Name:</Text><Text>{currentEntry.exerciseName}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Exercise Type:</Text><Text>{currentEntry.exercise_type_name}</Text>
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
});

export default GymEntryList;