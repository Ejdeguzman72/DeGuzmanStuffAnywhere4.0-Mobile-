import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import deviceStorage from '../../helper/DeviceStorage';

const LogoutBtn = ({ navigation }) => {

    const removeToken = () => {
        deviceStorage.deleteJwt();
        navigation.navigate('Login')
    }

    return (
        <Pressable
            style={[styles.modalButton, styles.buttonClose]}
            onPress={removeToken}
        >
            <Text style={styles.textStyle}>Sign Out</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    modalButton: {
        borderRadius: 20,
        padding: 10,
        margin: 10,
        fontSize: 20,
        // height: 50,
        justifyContent: 'center',
        alignContent: 'center'
    },
    buttonClose: {
        backgroundColor: "black",
        justifyContent: 'center',
        textAlign: 'center'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
})

export default LogoutBtn;