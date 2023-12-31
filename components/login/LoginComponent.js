import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Title from '../title/Title';
import deviceStorage from '../../helper/DeviceStorage';
import Axios from 'axios';
import { jwtHelper } from '../../helper/jwtHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginComponent({ navigation }) {

    const jwt = jwtHelper();
    const [dsaToken, setDsaToken] = useState('');
    const [username, setUsername] = useState("ejdeguzman72");
    const [password, setPassword] = useState("Fighter63!");

    const onHandleUsernameChange = (input) => {
        setUsername(input.nativeEvent.text);
    }

    const onHandlePasswordChange = (input) => {
        setPassword(input.nativeEvent.text);
    }

    _storeToken = async (tokenName, value) => {
        try {
            const response = await AsyncStorage.setItem(tokenName, value)
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit = async () => {
        try {
            const response = await Axios.post('http://ec2-23-20-134-157.compute-1.amazonaws.com:8080/api/auth/signin', {
                username: username,
                password: password
            });

            if (response && response.data && response.data.accessToken) {
                const accessToken = response.data.accessToken;
                setDsaToken(accessToken);
                await _storeToken('DeGuzmanStuffAnywhere', accessToken);

                const storedToken = await AsyncStorage.getItem('DeGuzmanStuffAnywhere');
                console.log("Stored token: " + storedToken);

                if (jwt != null) {
                    Alert.alert(`${username}: you have logged in!`)
                    navigation.navigate('Root Tab')
                } else {
                    Alert.alert('Invalid Credentials')
                }
            } else {
                Alert.alert('Invalid Response from the server')
            }


        } catch (error) {
            console.log(error)
            Alert.alert(error.message);
        }
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
    );
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
        alignItems: 'center' // Use alignItems to center content horizontally
    },
    modalButton: {
        borderRadius: 20,
        padding: 10,
        margin: 10,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center', // Use alignItems to center content horizontally
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
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});
