import React, { useState,useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';

const VehicleList = () => {
    const [vehicles,setVehicles] = useState([]);

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/vehicles/all')
            .then((response) => response.json())
            .then((json) => setVehicles(json))
            .catch((error) => console.log(error))
    }, [])

    console.log(vehicles)

    return (
        <ScrollView>
            <View style={styles.table}>
                {vehicles &&
                    vehicles.map((vehicle, index) => (
                        <TouchableOpacity style={styles.container} key={vehicles.vehicle_id} avatar>
                            <Text>{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</Text>
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

export default VehicleList;