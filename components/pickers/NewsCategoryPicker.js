import React, { useState, useEffect} from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

function NewsCategoryPicker(props) {
    const [selectedValue,setSelectedValue] = useState('')
    const [types,setTypes] = useState(['Top Headlines','Business News','Finance News','Political News','Sports News','Technology News']);

    const navigation = useNavigation();

    const handleValueChange = (input) => {
        setSelectedValue(input);
        // Navigate to the corresponding screen based on the selected category
        if (input === types[0]) {
          navigation.navigate(types[0], { category: types[0] });
        } else if (input === types[1]) {
          navigation.navigate(types[1], { category: types[1] });
        } else if (input === types[2]) {
          navigation.navigate(types[2], { category: types[2] });
        } else if (input === types[3]) {
          navigation.navigate(types[3], { category: types[3] });
        } else if (input === types[4]) {
          navigation.navigate(types[4], { category: types[4] });
        } else if (input === types[5]) {
          navigation.navigate(types[5], { category: types[5] });
        }
      };

    const renderCategoryList = () => {
        return types.map((type) => {
            return <Picker.Item label={type} value={type} />
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
                <Picker.Item label="Choose a category"/>
                {renderCategoryList()}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    picker: {
        flex: 1,
        marginVertical: 30,
        width: '100%',
        padding: 10,
        borderWidth: 5,
        borderColor: "black",
        backgroundColor: 'white'
    }
})

export default NewsCategoryPicker;