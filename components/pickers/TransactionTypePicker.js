import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";

function TransactionTypePicker(props) {
    const [selectedValue,setSelectedValue] = useState('Choose a Transaction Type')
    const [types,setTypes] = useState([]);

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/transaction-types/all')
            .then((response) => response.json())
            .then((json) => setTypes(json))
            .catch((error) => {
                console.log(error)
                Alert.alert(`Mobile App facing issue: ${error}`)
            })
    }, [])

    const handleValueChange = (input) => {
        props.onHandleTransactionTypeChange(input)
        setSelectedValue(input)
    }

    return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            mode="dropdown"
            style={styles.picker}
        >
            <Picker.Item label="Choose A Transaction Type" value="Choose A Transaction Type" />
            {types && types.map((type,index) => {
                return (
                    <Picker.Item label={type.transaction_type_descr} value={type.transaction_type_id} key={index} />
                )
            })}
        </Picker>
    )

}

const styles = StyleSheet.create({
    picker: {
        marginVertical: 30,
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderColor: "#666",
        textAlign: 'center'
    },
    pickerItem: {
        color: 'black'
    }
})

export default TransactionTypePicker;