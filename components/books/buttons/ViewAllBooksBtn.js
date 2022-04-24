import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ViewAllBooksBtn = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={styles.button}
                title="View All"
                onPress={() => navigation.navigate('All Books')}
            >
                <Text style={styles.buttonText}>View All</Text>
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
        shadowRadius: 50,
        margin: 10,
        backgroundColor: '#FFEBCD'
    },
    buttoniew: {
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10
    },
    buttonText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 20,
        textTransform: 'uppercase'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 25,
        width: 300,
        borderRadius: 10
    },
    modalButton: {
        // width: 200,
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
});

export default ViewAllBooksBtn;