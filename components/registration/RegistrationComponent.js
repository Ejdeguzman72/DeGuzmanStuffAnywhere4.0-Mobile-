import React, { useState } from 'react-native';
import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Axios from 'axios';

const RegisterComponent = ({ navigation }) => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("")
    const [email, setEmail] = useState("")

    const onHandleUsernameChange = (input) => {
        setUsername(input)
    }

    const onHandlePasswordChange = (input) => {
        setPassword(input)
    }

    const onHandleEmailChange = (input) => {
        setEmail(input)
    }
}