import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';

const AutoTrxList = () => {
    const [transactions,setTransactions] = useState([]);
    const [currentTransaction, setCurrentTransaction] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [modalVisible, setModalVisible] = useState(false);

    const setActiveTransaction = (transaction, index) => {
        setCurrentTransaction(transaction);
        setCurrentIndex(index);
        setModalVisible(!modalVisible);
    }

    useEffect(() => {
        fetch('http://ec2-3-89-42-57.compute-1.amazonaws.com:8080/app/auto-transactions/all')
            .then((response) => response.json())
            .then((json) => setTransactions(json.list))
            .catch((error) => console.log(error))
    }, [])

    return (
        <ScrollView>
            <View style={styles.table}>
                {transactions &&
                    transactions.map((transaction, index) => (
                        <TouchableOpacity style={styles.container} key={index} avatar onPress={() => setActiveTransaction(transaction,index)}>
                            <Text>{`Amount: ${transaction.amount} `}</Text>
                            <Text note>{`Date: ${transaction.auto_transaction_date}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
                {currentTransaction ? (
                    <View style={styles.view}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(!modalVisible)}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Transaction Information</Text>
                                <View style={styles.indexText}>
                                    <Text>Amount:</Text><Text>{currentTransaction.amount}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Payment Date:</Text><Text>{currentTransaction.auto_transaction_date}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Auto Shop Name:</Text><Text>{currentTransaction.auto_shop_name}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Vehicle:</Text><Text>{`${currentTransaction.year} ${currentTransaction.make} ${currentTransaction.model}`}</Text>
                                </View>
                                <View style={styles.indexText}>
                                    <Text>Transaction Type:</Text><Text>{`${currentTransaction.transaction_type_descr}`}</Text>
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

export default AutoTrxList;