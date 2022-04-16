import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AddVehicleBtn = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('American')}
            >
                <Text>Add Vehicle Information</Text>
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
    },
    buttonView: {
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center'
    }
});

export default AddVehicleBtn;