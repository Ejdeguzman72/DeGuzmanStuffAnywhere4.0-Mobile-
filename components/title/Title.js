import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <View style={styles.view}>
            <View>
                <Text style={styles.text}>DeGuzmanStuffAnywhere</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        flexWrap: "wrap",
        textAlign: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        margin: 10,
        backgroundColor: 'black',
        color: 'white',
        padding: 20,
        borderRadius: 30,
        opacity: 0.8
    }
});

export default Title;