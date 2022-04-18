import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ViewAllBUtton = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={styles.button}
                title="View All"
                onPress={() => navigation.navigate('All Contacts')}
            >
                <Text style={styles.buttonText}>View All Contacts</Text>
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
        backgroundColor: "#B0C4DE",
        padding: 10,
        width: 160,
        height: 160,
        borderRadius: 50,
        margin: 10,
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

export default ViewAllBUtton;