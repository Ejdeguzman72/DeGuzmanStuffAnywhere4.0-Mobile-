import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

const MedicalTrxList = () => {
    const [transactions,setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/medical-transactions/all')
            .then((response) => response.json())
            .then((json) => setTransactions(json))
            .catch((error) => console.log(error))
        }, [])

    return (
        <ScrollView>
            <View style={styles.table}>
                {transactions &&
                    transactions.map((transaction, index) => (
                        <TouchableOpacity style={styles.container} key={transactions.medical_transasction_id} avatar>
                            <Text>{`${transaction.amouunt} ${transaction.medical_transaction_date}`}</Text>
                            <Text note>{`${transaction.username}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    table: {
        padding: 10,
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        textAlign: 'center'
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
    }
})

export default MedicalTrxList;