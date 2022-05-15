import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput } from "react-native";
import UserPicker from "../../../pickers/UserPicker";

export default class AddAutoTrxModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            auto_transaction_id: 0,
            amount: 0,
            auto_transaction_date: "",
            auto_shop_id: 0,
            vehicle_id: 0,
            transaction_type_id: 0,
            user_id: 0,
            submitted: false,
            modalVisible: false
        }
    }

    newTransaction = () => {
        this.setState({
            auto_tranasction_id: 0,
            amount: 0,
            auto_transaction_date: "",
            auto_shop_id: 0,
            vehicle_id: 0,
            transaction_type_id: 0,
            user_id: 0,
            submitted: false
        })
    }

    setModalVisible = (visible) => { this.setState({ modalVisible: visible }) }
    onHandleAmountChange = (input) => { this.setState({ amount: input }) }
    onHandleDateChange = (input) => { this.setState({ auto_transaction_date: input }) }
    onHandleAutoShopChange = (input) => { this.setState({ auto_shop_id: input }) }
    onHandleVehicleChange = (input) => { this.setState({ vehicle_id: input }) }
    onHandleTransactionTypeChange = (input) => { this.setState({ transaction_type_id: input }) }
    onhandleUserChange = (input) => { this.setState({ user_id: input }) }

    onSubmit = (event) => {
        event.preventDefault();

        const data = {
            auto_transaction_id: this.state.auto_tranasction_id,
            amount: this.state.amount,
            auto_transaction_date: this.state.auto_transaction_date,
            auto_shop_id: this.state.auto_shop_id,
            vehicle_id: this.state.vehicle_id,
            transaction_type_id: this.state.transaction_type_id,
            user_id: this.state.user_id
        }

        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/auto-transactions/add-auto-transaction-information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            console.log(data)
            this.setState({ submitted: true })
        }).catch((error) => console.log(error))
    }

    render() {
        const { modalVisible } = this.state
        return (
            <View style={styles.view}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    {this.state.submitted ? (
                        <View style={styles.addCenteredView}>
                            <View style={styles.addModalView}>
                                <Text style={styles.modalText}>Add Transaction</Text>
                                <Text>{this.state.amount} has been submitted!</Text>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={this.newTransaction}
                                >
                                    <Text style={styles.textStyle}>Add</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={() => this.setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Close </Text>
                                </Pressable>
                            </View>
                        </View>
                    ) : (
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Add Auto Transaction</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Auto Transaction Date"
                                    value={this.state.auto_transaction_date}
                                    onChangeText={(event) => this.onHandleDateChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Amount"
                                    value={this.state.amount}
                                    onChangeText={(event) => this.onHandleAmountChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Auto Shop ID"
                                    value={this.state.auto_shop_id}
                                    onChangeText={(event) => this.onHandleAutoShopChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Transation Type ID"
                                    value={this.state.transaction_type_id}
                                    onChangeText={(event) => this.onHandleTransactionTypeChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Vehicle ID"
                                    value={this.state.vehicle_id}
                                    onChangeText={(event) => this.onHandleVehicleChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="User ID"
                                    value={this.state.user_id}
                                    onChangeText={(event) => this.onhandleUserChange(event)}
                                />
                                <UserPicker />
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={(event) => this.onSubmit(event)}
                                >
                                    <Text style={styles.textStyle}>Submit</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={() => this.setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Close </Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                </Modal>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text style={styles.buttonText}>Add Auto Transaction</Text>
                </TouchableOpacity>
            </View>
        );
    }
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
