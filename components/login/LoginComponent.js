import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Title from '../title/Title';
import deviceStorage from '../../helper/DeviceStorage';
import Axios from 'axios';
import { jwtHelper } from '../../helper/jwtHelper';

export default function LoginComponent({ navigation }) {

    const jwt = jwtHelper();
    const token = "DeGuzmanStuffAnywhere_Mobile_Token";
    const [username, setUsername] = useState("global");
    const [password, setPassword] = useState("global");
    const [submitted, setSubmitted] = useState(false);
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(false)

    onHandleUsernameChange = (input) => {
        setUsername(input)
    }

    onHandlePasswordChange = (input) => {
        setPassword(input)
    }

    const onSubmit = () => {
        Axios.post('http://ec2-3-89-42-57.compute-1.amazonaws.com:8080/api/auth/signin', {
            username: username,
            password: password
        }).then((response) => {
            deviceStorage.saveKey(token, response.data.token);
            if (jwt) {
                Alert.alert(`${username}: you have logged in`)
                navigation.navigate('Root Tab')
            } else {
                Alert.alert('Invalid Credentials')
            }
        }).catch((error) => console.log(error))
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={onHandleUsernameChange}
                    value={username}
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={onHandlePasswordChange}
                    value={password}
                    autoCapitalize='none'
                />
                <Pressable
                    style={[styles.modalButton, styles.buttonClose]}
                    onPress={onSubmit}
                >
                    <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
                <Pressable
                    style={[styles.modalButton, styles.buttonClose]}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.textStyle}>Register</Text>
                </Pressable>
                {/* <Pressable
                    style={[styles.modalButton, styles.buttonClose]}
                    onPress={() => navigation.navigate('Root Tab')}
                >
                    <Text style={styles.textStyle}>Home</Text>
                </Pressable> */}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    buttonClose: {
        backgroundColor: "black",
        justifyContent: 'center',
        textAlign: 'center'
    },
    modalButton: {
        borderRadius: 20,
        padding: 10,
        margin: 10,
        fontSize: 20,
        // height: 50,
        justifyContent: 'center',
        alignContent: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 25,
        // width: 400,
        borderRadius: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
})