import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AddBookBtn = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('American')}
            >
                <Text style={styles.buttonText}>Add Book</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    view: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#ADD8E6",
        padding: 10,
        width: 160,
        height: 160,
        borderRadius: 50,
        margin: 10,
        backgroundColor: '#20B2AA'
    },
    buttonView: {
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 20,
        textTransform: 'uppercase'
    }
});

export default AddBookBtn;