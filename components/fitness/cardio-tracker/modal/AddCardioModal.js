import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Modal, Pressable, ScrollView } from "react-native";
import UserPicker from "../../../pickers/UserPicker";
import CardioTrackerService from "../../../../services/CardioTrackerService";
import { Alert } from "react-native";
import CardioTypePicker from "../../../pickers/CardioTypePicker";

const AddCardioEntryModal = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [cDate, setDate] = useState('');
    const [cDistance, setDistance] = useState(0);
    const [cTime, setTime] = useState('');
    const [cardioTypeId, setCardioTypeId] = useState(0);
    const [userId, setUser] = useState(0);
    const [submitted, setSubmitted] = useState(false)

    const newEntry = () => {
        setDate('');
        setDistance('');
        setTime('');
        setUser(0);
        setSubmitted(false);
    }

    const onHandleDateChange = (input) => { setDate(input) }
    const onHandleDistanceChange = (input) => { setDistance(input) }
    const onHandleTimeChange = (input) => { setTime(input) }

    const onHandleCardioType = (cardioTypeId) => {
        setCardioTypeId(cardioTypeId)
    }
    const onHandleUserChange = (userId) => { setUser(userId) }

    const onSubmit = (event) => {
        event.preventDefault();

        const data = {
            cDate: cDate,
            cDistance: cDistance,
            cTime: cTime,
            cardioTypeId: cardioTypeId,
            userId: userId
        }

        CardioTrackerService.addCardioInfo(data)
            .then((response) => {
                setDate(response.cDate)
                setDistance(response.cDistance)
                setTime(response.cTime)
                setCardioTypeId(response.cardioTypeId)
                setUser(response.userId)
                setSubmitted(true)
            })
            .catch((error) => {
                console.log(`Error sending data: ${error}`)
                Alert.alert(`Error sending data: ${error}`)
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
                            <Text style={styles.modalText}>Add Entry</Text>
                            <Text>{`${cDate} ${cDistance} `} has been submitted!</Text>
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
                                <Text style={styles.modalText}>Add Entry</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Date"
                                    value={cDate}
                                    onChangeText={(event) => onHandleDateChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Distance"
                                    value={cDistance}
                                    onChangeText={(event) => onHandleDistanceChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Time"
                                    value={cTime}
                                    onChangeText={(event) => onHandleTimeChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />

                                <CardioTypePicker
                                    onHandleCardioType={onHandleCardioType}
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
                <Text style={styles.buttonText}>Add Cardio</Text>
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

export default AddCardioEntryModal;