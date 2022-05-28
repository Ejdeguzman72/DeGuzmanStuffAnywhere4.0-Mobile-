import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";

function VehiclePicker(props) {
    const [selectedValue, setSelectedValue] = useState('Choose a Vehicle')
    const [vehicles,setVehicles] = useState([])

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/vehicles/all')
            .then((response) => response.json())
            .then((json) => setVehicles(json))
            .catch((error) => {
                console.log(error)
                Alert.alert(`Error: ${error}`)
            })
    }, [])

    const handleValueChange = (input) =>  {
        props.onHandleVehicleChange(input)
        setSelectedValue(input)
    }

    return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            mode="dropdown"
            style={styles.picker}
        >
            <Picker.Item label="Choose a Vehicle" value="Choose a Vehicle" />
            {vehicles && vehicles.map((vehicle,index) => {
                return (
                    <Picker.Item label={`${vehicle.year + ' ' +  vehicle.make + ' ' + vehicle.model}`} value={vehicle.vehicleId} key={index} />
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

export default VehiclePicker;