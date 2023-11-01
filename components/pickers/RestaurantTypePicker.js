import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import RestaurantService from '../../services/RestaurantRecommendationsService';

function RestaurantTypeDropDown(props) {
    const [selectedValue,setSelectedValue] = useState('')
    const [types,setTypes] = useState([]);

    useEffect(() => {
        RestaurantService.getAllRestaurantTypes()
            .then((response) => (response.data))
            .then((json) => setTypes(json.list))
            .catch((error) => console.log(`Error fetching data ${error}`))
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
                    <Picker.Item label={type.descr} value={type.restaurantTypeId} key={index} />
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