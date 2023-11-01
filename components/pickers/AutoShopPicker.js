import React, { useState, useEffect} from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AutoShopService from '../../services/AutoShopService';

function AutoShopPicker(props) {
    const [selectedValue,setSelectedValue] = useState('')
    const [autoshops,setAutoShops] = useState([])
    
    useEffect(() => {
        getAutoShopList()
    }, [])
    
    const getAutoShopList = () => {
        AutoShopService.getAllAutoShopsInfo()
            .then((response) => (response.data))
            .then((json) => {
                console.log(json)
                setAutoShops(json.list)
            })
            .catch((error) => console.log(`Error fetching data: ${error}`))
    }

    const handleValueChange = (input) => {
        props.onHandleAutoShopChange(input)
        setSelectedValue(input)
    }

    const renderAutoShopList = () => {
        return autoshops.map((autoshop) => {
            return <Picker.Item label={autoshop.autoShopName} value={autoshop.autoShopId} />
        })
    }

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