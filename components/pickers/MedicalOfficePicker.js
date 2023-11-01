import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MedicalOfficeService from '../../services/MedicalOfficeService';

function MedicalOfficePicker(props) {
    const [selectedValue,setSelectedValue] = useState('')
    const [offices,setOffices] = useState([])

    const handleValueChange = (input) => {
        props.onHandleOfficeChange(input)
        setSelectedValue(input)
    }

    useEffect(() => {
        MedicalOfficeService.getAllMedicalOfficeInfo()
            .then((response) => (response.data))
            .then((json) => setOffices(json.list))
            .catch((error) => console.log(`Error fetching data ${error}`))
    }, [])

    return (
        <Picker 
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            mode="dropdown"
            style={styles.picker}
        >
            <Picker.Item value="Select Medical Office" label="Select Medical Office" />
            {offices && offices.map((office,index) => {
                return (
                    <Picker.Item label={office.name} value={office.medicalOfficeId} key={index} />
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
})

export default MedicalOfficePicker;