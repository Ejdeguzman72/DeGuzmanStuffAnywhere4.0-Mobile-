import React, { useState, useEffect} from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function AutoShopPicker(props) {
    const [selectedValue,setSelectedValue] = useState('')
    const [autoshops,setAutoShops] = useState([])
    
    useEffect(() => {
        getAutoShopList()
    }, [])
    
    const getAutoShopList = () => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/auto-repair-shops/all')
            .then((response) => response.json())
            .then((json) => setAutoShops(json))
            .catch((error) => {
                console.log(error)
                Alert.alert(`Error: ${error}`)
            })
    }

    const handleValueChange = (input) => {
        props.onHandleAutoShopChange(input)
    }

    const renderAutoShopList = () => {
        return autoshops.map((autoshop) => {
            return <Picker.Item label={autoshop.autoShopName} value={autoshop.auto_shop_id} />
        })
    }

    console.log(autoshops)

    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                onValueChange={handleValueChange}
                mode="dropdown"
                style={styles.picker}
            >
                <Picker.Item value="Choose Auto Repair Shop" label="Choose Auto Repair Shop" />
                {renderAutoShopList()}
            </Picker>
        </View>
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