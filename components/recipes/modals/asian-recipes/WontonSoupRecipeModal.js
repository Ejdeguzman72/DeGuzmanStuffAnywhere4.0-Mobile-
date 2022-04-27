import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const WontonSoupRecipeModal = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={styles.view}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <ScrollView>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Wonton Soup</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>8 cups low sodium chicken broth</Text>
                            <Text>¼ cup low sodium soy sauce</Text>
                            <Text>3 tbsp rice vinegar</Text>
                            <Text>1 tbsp fresh ginger, minced</Text>
                            <Text>1 tbsp sesame oil</Text>
                            <Text>1/2 tbsp sambal oelek</Text>
                            <Text>A bunch of potstickers</Text>
                            <Text>8oz mushrooms, sliced</Text>
                            <Text>6oz raw baby spinach</Text>
                            <Text>rice noodles, 1 package (whatever you want, I don't care)</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>In a large pot over high heat, bring chicken broth, soy sauce, rice vinegar, ginger, sesame oil and sambal oelek to a boil, stirring occasionally.</Text>
                            <Text style={styles.directionsText}>One boiling, add frozen dumplings/potstickers, mushrooms, and baby spinach to the boiling broth and simmer for 35 minutes until dumplings are warmed through and spinach is wilted and mushrooms are tender.</Text>
                            <Text style={styles.directionsText}>Heat up a wok with enough oil, deep-fry pork slices for 5 minutes, or until color changes to golden brown and slightly crispy. Dish up, drain with paper towels and set aside.</Text>
                            <Text style={styles.directionsText}>Divide noodles between four bowls and cover with equal parts of the wonton soup.</Text>
                            <Pressable
                                style={[styles.modalButton, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text style={styles.buttonText}>Wonton Soup</Text>
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
        backgroundColor: "#663399",
        width: 340,
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
        fontSize: 21,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 20,
        textTransform: 'uppercase'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    addCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 5,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 100,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    addModalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 5,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 100,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 300,
        width: 300,
        fontSize: 20
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 30
    },
    closeButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 10,
    },
    buttonClose: {
        backgroundColor: 'black',
        width: 300
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
    directionsText: {
        margin: 10
    }
});

export default WontonSoupRecipeModal;