import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput, ScrollView } from "react-native";
import TransactionTypePicker from "../../../pickers/TransactionTypePicker";
import UserPicker from "../../../pickers/UserPicker";
import { Picker } from "@react-native-picker/picker";

const AddGeneralTrxModal = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [amount, setAmount] = useState(0);
    const [paymentDate, setPaymentDate] = useState('');
    const [entity, setEntity] = useState('');
    const [transaction_type_id, setTransactionTypeId] = useState(0);
    const [user_id, setUserId] = useState(0);
    const [submitted, setSubmitted] = useState(false)

    const onHandleAmountChange = (input) => { setAmount(input) }
    const onHandleDateChange = (input) => { setPaymentDate(input) }
    const onHandleEntityChange = (input) => { setEntity(input) }

    const onHandleTransactionTypeChange = (transaction_type_id) => { setTransactionTypeId(transaction_type_id) }

    const onHandleUserChange = (user_id) => { setUserId(user_id) }

    const newTransaction = () => {
        setAmount(0);
        setPaymentDate('');
        setEntity('');
        setTransactionTypeId(0);
        setUserId(0);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const data = {
            amount: amount,
            paymentDate: paymentDate,
            entity: entity,
            transaction_type_id: transaction_type_id,
            user_id: user_id
        }

        fetch('http://ec2-3-89-42-57.compute-1.amazonaws.com:8080/app/general-transactions/add-general-transaction-information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
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
                            <Text style={styles.modalText}>Add Transaction</Text>
                            <Text>{amount} has been submitted!</Text>
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
                                <Text style={styles.modalText}>Add General Transaction</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="General Transaction Date"
                                    value={paymentDate}
                                    onChangeText={(event) => onHandleDateChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Amount"
                                    keyboardType="decimal-pad"
                                    value={amount}
                                    onChangeText={(event) => onHandleAmountChange(event)}
                                />

                                <Picker
                                    selectedValue={entity}
                                    onValueChange={(event) => onHandleEntityChange(event)}
                                    mode="dropdown"
                                    style={styles.picker}
                                >
                                    <Picker.Item value="Rent" label="Rent" />
                                    <Picker.Item value="Statefarm" label="Statefarm" />
                                    <Picker.Item value="AT&T" label="AT&T" />
                                    <Picker.Item value="Optimum" label="Optimum" />
                                    <Picker.Item value="PSEG" label="PSEG" />
                                    <Picker.Item value="Walmart" label="Walmart" />
                                    <Picker.Item value="99 Ranch Market" label="99 Ranch Market" />
                                    <Picker.Item value="Target" label="Target" />
                                    <Picker.Item value="Hulu" label="Hulu" />
                                    <Picker.Item value="Gas Station" label="Gas Station" />
                                    <Picker.Item value="Restaurant" label="Restaurant" />
                                    <Picker.Item value="Amazon" label="Amazon" />
                                    <Picker.Item value="Shopping Mall" label="Shopping Mall" />
                                    <Picker.Item value="HMART" label="HMART" />
                                </Picker>

                                <TransactionTypePicker
                                    onHandleTransactionTypeChange={onHandleTransactionTypeChange}
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
                <Text style={styles.buttonText}>Add Transaction</Text>
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
    picker: {
        marginVertical: 30,
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderColor: "#666",
    }
});

export default AddGeneralTrxModal;