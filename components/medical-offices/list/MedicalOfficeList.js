import React, { useState,useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';

const MedicalOfficeList = () => {
    const [offices,setOffices] = useState([]);

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/medical-offices/all')
            .then((response) => response.json())
            .then((json) => setOffices(json))
            .catch((error) => console.log(error))
    }, [])

    console.log(offices)

    return (
        <ScrollView>
            <View style={styles.table}>
                {offices &&
                    offices.map((office, index) => (
                        <TouchableOpacity style={styles.container} key={office.medical_office_id} avatar>
                            <Text>{`${office.name}`}</Text>
                            <Text>{`${office.address} ${office.city} ${office.state} ${office.zip}`}</Text>
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

export default MedicalOfficeList;