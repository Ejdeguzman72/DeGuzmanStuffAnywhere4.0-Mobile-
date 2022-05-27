import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Modal, Pressable, ScrollView } from "react-native";
import UserPicker from "../../pickers/UserPicker";

const AddRunEntryModal = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [runDate, setRunDate] = useState('');
    const [runDistance, setRunDistance] = useState(0);
    const [runTime, setRunTime] = useState('');
    const [user_id, setUser] = useState(0);
    const [submitted, setSubmitted] = useState(false)

    const newEntry = () => {
        setRunDate('');
        setRunTime('');
        setUser(0);
        setSubmitted(false);
    }

    const onHandleDateChange = (input) => { setRunDate(input) }
    const onHandleDistanceChange = (input) => { setRunDistance(input) }
    const onHandleTimeChange = (input) => { setRunTime(input) }

    const onHandleUserChange = (user_id) => { setUser(user_id) }

    const onSubmit = (event) => {
        event.preventDefault();

        const data = {
            runDate: runDate,
            runDistance: runDistance,
            runTime: runTime,
            user_id: user_id
        }

        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/run-tracker-app/add-run-tracker-info', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            console.log(data)
            setSubmitted(true)
        }).catch((error) => console.log(error))
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
                            <Text style={styles.modalText}>Add Run Entry</Text>
                            <Text>{`${runDate} ${runDistance} `} has been submitted!</Text>
                            <Pressable
                                style={[styles.modalButton, styles.buttonClose]}
                                onPress={newEntry}
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
                    <ScrollView>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Add Run</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Run Date"
                                    value={runDate}
                                    onChangeText={(event) => onHandleDateChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Distance"
                                    value={runDistance}
                                    onChangeText={(event) => onHandleDistanceChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Time"
                                    value={runTime}
                                    onChangeText={(event) => onHandleTimeChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />

                                <UserPicker
                                    onHandleUserChange={onHandleUserChange}
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
                    </ScrollView>
                )}

            </Modal>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Add Run Infomration</Text>
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
        backgroundColor: "#EE82EE",
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

export default AddRunEntryModal;