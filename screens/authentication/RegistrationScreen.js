import React, { useState } from 'react-native';
import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Axios from 'axios';
import RegisterComponent from '../../components/registration/RegistrationComponent';
import Title from '../../components/title/Title';

const RegisterScreen = ({ navigation }) => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("")
    // const [email, setEmail] = useState("")
    // const [submitted, setSubmitted] = useState(false)

    // const onHandleUsernameChange = (input) => {
    //     setUsername(input)
    // }

    // const onHandlePasswordChange = (input) => {
    //     setPassword(input)
    // }

    // const onHandleEmailChange = (input) => {
    //     setEmail(input)
    // }

    // const onSubmit = () => {
    //     Axios.post('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/api/auth/signup', {
    //         username: username, password: password, email: email
    //     }).then((response) => {
    //         setSubmitted(true)
    //         if (submitted) {
    //             Alert.alert(`${username} has been registered`)
    //         }
    //         // navigation.navigation('Login')
    //         console.log(response.data)
    //     })
    //         .catch((error) => console.log(error))
    // }

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