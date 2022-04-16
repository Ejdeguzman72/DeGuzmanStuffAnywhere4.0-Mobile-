import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ViewAllVehiclesBtn = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('American')}
            >
                <Text>View All Vehicles Information</Text>
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
    buttoniew: {
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center'
    }
});

export default ViewAllVehiclesBtn;