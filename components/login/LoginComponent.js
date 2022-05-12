import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Title from '../title/Title';
import deviceStorage from '../../helper/DeviceStorage';

export default function LoginComponent({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
        // Axios.post('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/api/auth/signin', {
        //     username: username,
        //     password: password
        // }).then((resposne) => {
        //     deviceStorage.saveKey(token, response.data.token);
        //     if (jwt) {
        //         Alert.alert(`${username}: you have logged in`)
        //         navigation.navigate('Root Tab')
        //     } else {
        //         Alert.alert('Invalid Credentials')
        //     }
        // }).catch((error) => console.log(error))
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
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={onHandlePasswordChange}
                    value={password}
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
                <Pressable
                    style={[styles.modalButton, styles.buttonClose]}
                    onPress={() => navigation.navigate('Root Tab')}
                >
                    <Text style={styles.textStyle}>Home</Text>
                </Pressable>
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