import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput, ScrollView } from "react-native";
import AutoShopPicker from "../../../pickers/AutoShopPicker";
import TransactionTypePicker from "../../../pickers/TransactionTypePicker";
import UserPicker from "../../../pickers/UserPicker";
import VehiclePicker from "../../../pickers/VehiclePicker";

const AddAutoTrxModal = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [amount, setAmount] = useState(0);
    const [auto_transaction_date, setAutoTrxDate] = useState('');
    const [auto_shop_id, setAutoShop] = useState(0);
    const [vehicle_id, setVehicle] = useState(0);
    const [transaction_type_id, setTransactionType] = useState(0);
    const [user_id, setUser] = useState(0);
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

    const onHandleAutoShopChange = (auto_shop_id) => { setAutoShop(auto_shop_id) }

    const onHandleVehicleChange = (vehicle_id) => { setVehicle(vehicle_id) }

    const onHandleTransactionTypeChange = (transaction_type_id) => { setTransactionType(transaction_type_id) }

    const onHandleUserChange = (user_id) => { setUser(user_id) }

    const onSubmit = (event) => {
        event.preventDefault();

        const data = {
            amount: amount,
            auto_transaction_date: auto_transaction_date,
            auto_shop_id: auto_shop_id,
            vehicle_id: vehicle_id,
            transaction_type_id: transaction_type_id,
            user_id: user_id
        }

        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/auto-transactions/add-auto-transaction-information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            console.log(data)
            setSubmitted(false)
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
                                    value={auto_transaction_date}
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