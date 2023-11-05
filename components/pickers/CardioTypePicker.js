import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CardioTrackerService from '../../services/CardioTrackerService';

function CardioTypePicker(props) {
    const [selectedValue, setSelectedValue] = useState('')
    const [types, setTypes] = useState([])

    useEffect(() => {
        getCardioTypes()
    }, [])

    const getCardioTypes = () => {
        CardioTrackerService.getAllCardioTypes()
            .then((response) => (response.data))
            .then((json) => {
                console.log(json)
                setTypes(json.list)
            })
            .catch((error) => {
                console.log(`Error fetching data: ${error}`)
                Alert.alert(`Error fetching data: ${error}`)
                }, [])
    }

    const handleValueChange = (input) => {
        props.onHandleCardioType(input)
        setSelectedValue(input)
    }

    const renderTypeList = () => {
        return types.map((type) => {
            return <Picker.Item label={type.descr} value={type.cardioTypeId} />
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
                <Picker.Item value="Choose Cardio Type" label="Choose Cardio Type" />
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

export default CardioTypePicker;