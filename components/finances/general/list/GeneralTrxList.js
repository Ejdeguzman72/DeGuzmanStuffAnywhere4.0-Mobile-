import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';

const GeneralTrxList = () => {
    const[transactions, setTransactions] = useState([]);
    const [currentTransaction, setCurrentTransaction] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [modalVisible, setModalVisible] = useState(!modalVisible)

    const setActiveTransaction = (transaction, index) => {
        setCurrentTransaction(transaction)
        setCurrentIndex(index)
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/general-transactions/all')
            .then((response) => response.json())
            .then((json) => setTransactions(json))
            .catch((error) => console.log(error))
    }, []);
    console.log(transactions)
    return (
        <ScrollView>
            <View style={styles.table}>
                {transactions &&
                    transactions.map((transaction, index) => (
                        <TouchableOpacity style={styles.container} key={index} avatar onPress={() => setActiveTransaction(transaction,index)}>
                            <Text>{`${transaction.amount} ${transaction.payment_date}`}</Text>
                        </TouchableOpacity>
                    ))}
                {/* <Divider /> */}
                {currentTransaction ? (
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Transaction Information</Text>
                        <View style={styles.indexText}>
                            <Text>Amouunt:</Text><Text>{currentTransaction.amount}</Text>
                        </View>
                        <View style={styles.indexText}>
                            <Text>Payment Date:</Text><Text>{currentTransaction.payment_date}</Text>
                        </View>
                        <View style={styles.indexText}>
                            <Text>Transaction Type:</Text><Text>{currentTransaction.transaction_type_descr}</Text>
                        </View>
                        <View style={styles.indexText}>
                            <Text>Entity:</Text><Text>{currentTransaction.entity}</Text>
                        </View>
                        <View style={styles.indexText}>
                            <Text>User:</Text><Text>{currentTransaction.username}</Text>
                        </View>
                        <Pressable
                            style={[styles.modalButton, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close </Text>
                        </Pressable>
                    </View>
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
});

export default GeneralTrxList;
