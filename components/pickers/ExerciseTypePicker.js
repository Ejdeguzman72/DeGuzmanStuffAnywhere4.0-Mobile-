import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";

function ExerciseTypePicker(props) {
    const [selectedValue,setSelectedValue] = useState('')
    const [types,setTypes] = useState([]);

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/exercise-type/all')
            .then((response) => response.json())
            .then((json) => setTypes(json))
            .catch((error) => {
                console.log(error)
                Alert.alert(`Mobile App facing issue: ${error}`)
            })
    }, [])

    const handleValueChange = (input) => {
        props.onHandleExerciseTypeChange(input)
    }

    return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            mode="dropdown"
            style={styles.picker}
        >
            <Picker.Item label="Choose an Exercise Type" value="Choose an Exercise Type" />
            {types && types.map((type,index) => {
                return (
                    <Picker.Item label={type.exercise_type_name} value={type.exercise_type_id} key={index} />
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

export default ExerciseTypePicker;