import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Pressable, Text, StyleSheet } from 'react-native';

const UserPicker = () => {

    const [user,setUser] = useState("")

    return (
        <Picker selectedValue={user}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
    )
}

export default UserPicker;