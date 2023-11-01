import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import TransactionTypeService from '../../services/TrxTypeService'

function TransactionTypePicker(props) {
    const [selectedValue,setSelectedValue] = useState('Choose a Transaction Type')
    const [types,setTypes] = useState([]);

    useEffect(() => {
        TransactionTypeService.getAllTrxTypes()
            .then((response) => (response.data))
            .then((json) => setTypes(json.list))
            .catch((error) => console.log(`Error fetching data ${error}`))
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
                    <Picker.Item label={type.trxTypeDescr} value={type.trxTypeId} key={index} />
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