import React from 'react';
import { StyleSheet,View } from 'react-native';
import { Divider } from 'react-native-paper';
import { Title } from 'react-native-paper';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Title />
            <Divider />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LoginScreen;