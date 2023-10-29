import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";

function RestaurantTypeDropDown(props) {
    const [selectedValue,setSelectedValue] = useState('')
    const [types,setTypes] = useState([]);

    useEffect(() => {
        fetch('http://ec2-3-89-42-57.compute-1.amazonaws.com:8080/app/restaurant-types/all')
            .then((response) => response.json())
            .then((json) => setTypes(json))
            .catch((error) => {
                console.log(error)
                Alert.alert(`Mobile App facing issue: ${error}`)
            })
    }, [])

    const handleValueChange = (input) => {
        props.onHandleRestaurantType(input)
        setSelectedValue(input);
    }

    return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            mode="dropdown"
            style={styles.picker}
        >
            <Picker.Item label="Choose A Restaurant Type" value="Choose A Restaurant Type" />
            {types && types.map((type,index) => {
                return (
                    <Picker.Item label={type.descr} value={type.restaurant_type_id} key={index} />
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

export default RestaurantTypeDropDown;