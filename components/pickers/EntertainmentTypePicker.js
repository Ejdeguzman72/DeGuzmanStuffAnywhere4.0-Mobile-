import React, { useState, useEffect} from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import EntertainmentService from '../../services/EntertainmentService';

function EntertainmentTypePicker(props) {
    const [selectedValue,setSelectedValue] = useState('')
    const [types,setTypes] = useState([])
    
    useEffect(() => {
        getEntertainmentTypes()
        console.log(types)
    }, [])
    
    const getEntertainmentTypes = () => {
        EntertainmentService.getAllEntertainmentTypes()
            .then((response) => (response.data))
            .then((json) => setTypes(json.list))
            .catch((error) => console.log(error), [])
    }

    const handleValueChange = (input) => {
        props.onHandleEntertainmentTypeIdChange(input)
        setSelectedValue(input)
    }

    const renderTypeList = () => {
        return types.map((type) => {
            return <Picker.Item label={type.descr} value={type.entertainment_type_id} />
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
                <Picker.Item value="Choose Entertainment Type" label="Choose Entertainment Type" />
                {renderTypeList()}
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

export default EntertainmentTypePicker;