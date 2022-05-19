import React, { useState, useEffect} from 'react';
import { StyleSheet, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';

function AutoShopPicker() {
    const [autoshops,setAutoShops] = useState([])

    
    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/auto-repair-shops/all')
        .then((response) => response.json())
        .then((json) => setAutoShops(json))
        .catch((error) => console.log(error))
    }, [])
    
    const onHandleAutoShopChange = (input) => {
        setAutoShops(input)
    }

    console.log(autoshops)

    return (
        <Picker
            selectedValue={autoshops}
            onValueChange={onHandleAutoShopChange}
            mode="dropdown"
            style={styles.picker}
        >
            <Picker.Item value="Choose Auto Repair Shop" label="Choose Auto Repair Shop" />
            {autoshops &&
                autoshops.map((autoshop,index) => {
                    return (
                        <Picker.Item label={autoshop.autoShopName} value={autoshop.auto_shop_id} key={index} />
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
    }
})

export default AutoShopPicker;