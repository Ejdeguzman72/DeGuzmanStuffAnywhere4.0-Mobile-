import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import VehicleInformationService from '../../services/VehicleInformationService';

function VehiclePicker(props) {
    const [selectedValue, setSelectedValue] = useState('Choose a Vehicle')
    const [vehicles,setVehicles] = useState([])

    useEffect(() => {
        VehicleInformationService.getAllVehicleInformation()
            .then((response) => (response.data))
            .then((json) => setVehicles(json.list))
            .catch((error) => console.log(`Error fetching data: ${error}`))
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