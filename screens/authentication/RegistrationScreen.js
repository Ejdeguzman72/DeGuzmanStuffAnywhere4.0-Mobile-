import React, { useState } from 'react-native';
import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Axios from 'axios';
import RegisterComponent from '../../components/registration/RegistrationComponent';
import Title from '../../components/title/Title';

const RegisterScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Title />
            <RegisterComponent navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    loginButton: {
        margin: 10,
        padding: 10
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 25,
        borderRadius: 10
    },
    boxWithShadow: {
        borderColor: 'black',
        borderWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5
    },
    titleContainer: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 20,
        margin: 10
    },
    buttonClose: {
        backgroundColor: "black",
    },
    modalButton: {
        borderRadius: 20,
        padding: 10,
        margin: 10,
        fontSize: 20,
        height: 50,
        justifyContent: 'center',
        alignContent: 'center'
      },
});

export default RegisterScreen;