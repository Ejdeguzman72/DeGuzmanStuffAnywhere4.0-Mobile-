import React from 'react';
import { StyleSheet,View } from 'react-native';
import { Divider } from 'react-native-paper';
import { Title } from 'react-native-paper';
import LoginComponent from '../../components/login/LoginComponent';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title />
            <Divider />
            <LoginComponent navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LoginScreen;