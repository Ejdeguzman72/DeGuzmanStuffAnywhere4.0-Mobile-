import React, { useState, useEffect} from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function GenresPicker() {
    const [selectedValue,setSelectedValue] = useState('')
    const [genres,setGenres] = useState([
        { label: 'Rock', value: 'Rock'},
        { label: 'Pop', value: 'Pop'},
        { label: 'Classical', value: 'Classical'},
        { label: 'Electronic', value: 'Electronic'},
        { label: 'Lofi Beats', value: 'Lofi Beats'},
        { label: 'Metal', value: 'Metal'},
        { label: 'Blues', value: 'Blues'},
        { label: 'Rap', value: 'Rap'},
        { label: 'Hip Hop', value: 'Hip Hop'},
        { label: 'Jazz', value: 'Jazz'}
    ])
    
    const handleValueChange = (input) => {
        setSelectedValue(input)
    }

    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                onValueChange={handleValueChange}
                mode="dropdown"
                style={styles.picker}
            >
                <Picker.Item value="Choose A Genre" label="Choose A Genre" />
                {genres && genres.map((genre,index) => {
                    return (
                        <Picker.Item label={genre.label} value={genre.value} key={index} />
                    )
                })}
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

export default GenresPicker;