import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput, ScrollView, Alert } from "react-native";
import AutoShopPicker from "../../../pickers/AutoShopPicker";
import TransactionTypePicker from "../../../pickers/TransactionTypePicker";
import UserPicker from "../../../pickers/UserPicker";
import VehiclePicker from "../../../pickers/VehiclePicker";
import AutoTrxService from '../../../../services/AutoTrxService';

const AddAutoTrxModal = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [amount, setAmount] = useState(0);
    const [autoTrxDate, setAutoTrxDate] = useState('');
    const [autoShopId, setAutoShop] = useState(0);
    const [vehicleId, setVehicle] = useState(0);
    const [trxTypeId, setTransactionType] = useState(0);
    const [userId, setUser] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const newTransaction = () => {
        setAmount(0);
        setAutoTrxDate('');
        setAutoShop(0);
        setVehicle(0);
        setTransactionType(0);
        setUser(0);
        setSubmitted(false);
    }

    const onHandleAmountChange = (input) => { setAmount(input) }
    const onHandleDateChange = (input) => { setAutoTrxDate(input) }
    const onHandleAutoShopChange = (autoShopId) => { setAutoShop(autoShopId) }
    const onHandleVehicleChange = (vehicleId) => { setVehicle(vehicleId) }
    const onHandleTransactionTypeChange = (trxTypeId) => { setTransactionType(trxTypeId) }
    const onHandleUserChange = (userId) => { setUser(userId) }

    const onSubmit = (event) => {
        event.preventDefault();

        const data = {
            amount: amount,
            autoTrxDate: autoTrxDate,
            autoShopId: autoShopId,
            vehicleId: vehicleId,
            trxTypeId: trxTypeId,
            userId: userId
        }

        AutoTrxService.addAutoTransactionInformation(data)
            .then(response => {
                setAmount(response.amount)
                setAutoTrxDate(response.autoTrxDate)
                setAutoShop(response.autoShopId)
                setVehicle(response.vehicleId)
                setTransactionType(response.trxTypeId)
                setUser(response.userId)
                setSubmitted(true)
                console.log(amount)
            })
            .catch((error) => {
                console.log(`Error fetching data: ${error}`)
                Alert.alert(`Error fetching data: ${error}`)
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
                            <Text style={styles.modalText}>Add Transaction</Text>
                            <Text>{this.state.amount} has been submitted!</Text>
                            <Pressable
                                style={[styles.modalButton, styles.buttonClose]}
                                onPress={newTransaction}
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
                                <Text style={styles.modalText}>Add Auto Transaction</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Auto Transaction Date"
                                    value={autoTrxDate}
                                    onChangeText={(event) => onHandleDateChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Amount"
                                    value={amount}
                                    onChangeText={(event) => onHandleAmountChange(event)}
                                />

                                <TransactionTypePicker
                                    onHandleTransactionTypeChange={onHandleTransactionTypeChange}
                                />

                                <VehiclePicker
                                    onHandleVehicleChange={onHandleVehicleChange}
                                />

                                <AutoShopPicker
                                    onHandleAutoShopChange={onHandleAutoShopChange}
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
                <Text style={styles.buttonText}>Add Auto Transaction</Text>
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
        backgroundColor: "#FFB6C1",
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

export default AddAutoTrxModal;