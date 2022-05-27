import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function MedicalOfficePicker(props) {
    const [selectedValue,setSelectedValue] = useState('')
    const [offices,setOffices] = useState([])

    const handleValueChange = (input) => {
        props.onHandleOfficeChange(input)
    }

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/medical-offices/all')
            .then((response) => response.json())
            .then((json) => setOffices(json))
            .catch((error) => {
                console.log(error)
                Alert.alert(`Application facing issue ${error}`)
            })
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