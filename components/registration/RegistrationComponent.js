import React, { useState } from 'react';
import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Axios from 'axios';

const RegisterComponent = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const onHandleUsernameChange = (input) => {
        setUsername(input)
    }

    const onHandlePasswordChange = (input) => {
        setPassword(input)
    }

    const onHandleEmailChange = (input) => {
        setEmail(input)
    }

    const onSubmit = () => {
        Axios.post('http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/api/auth/signup', {
            username: username, password: password, email: email
        }).then((response) => {
            setSubmitted(true)
            if (submitted) {
                Alert.alert(`${username} has been registered`)
            }
            navigation.navigate('Login')
            console.log(response.data)
        })
            .catch((error) => console.log(error))
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <View>
                    <View style={styles.titleContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            onChangeText={onHandleUsernameChange}
                            value={username}
                            keyboardAppearance='dark'
                            autoFocus={true}
                        />
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={onHandlePasswordChange}
                            value={password}
                            placeholder="Password"
                            keyboardAppearance='dark'
                            autoFocus={true}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onHandleEmailChange}
                            value={email}
                            placeholder="Email"
                            keyboardType="email-address"
                            keyboardAppearance='dark'
                            autoFocus={true}
                        />
                        <Pressable
                            style={[styles.modalButton, styles.buttonClose]}
                            onPress={onSubmit}
                        >
                            <Text style={styles.textStyle}>Register</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
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
        justifyContent: 'center',
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5
    },
    titleContainer: {
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
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});

export default RegisterComponent;