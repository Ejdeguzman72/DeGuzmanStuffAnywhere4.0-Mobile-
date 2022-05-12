import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const HoneyGarlicPorkRecipeModal = () => {
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
                            <Text style={styles.modalText}>Hoeny Garlic Pork</Text>
                            <Text style={styles.modalText}>Ingredients - Pork</Text>
                            <Text>2 Pork Tenderloins</Text>
                            <Text>1 1/2 tbsp olive oil</Text>
                            <Text>3 Garlic Gloves</Text>
                            <Text style={styles.modalText}>Ingredients - Pork Rub</Text>
                            <Text>1/2 tsp garlic powder</Text>
                            <Text>1/2 tsp paprika</Text>
                            <Text>1 tsp salt</Text>
                            <Text>1/2 tsp black pepper</Text>
                            <Text style={styles.modalText}>Ingredients - Honey Garlic Sauce</Text>
                            <Text>3 tbsp cider vinegar</Text>
                            <Text>1 1/2 tbsp soy sauce</Text>
                            <Text>1/2 cup of honey</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Preheat oven to 350 degrees Fahrenheit</Text>
                            <Text style={styles.directionsText}>Mix sauce ingredients together</Text>
                            <Text style={styles.directionsText}>Mix rub ingredients and sprinkle over pork</Text>
                            <Text style={styles.directionsText}>Heat oil in a large oven proff skillet over high heat. </Text>
                            <Text style={styles.directionsText}>Add pork and sear until golden pour sauce in, turn pork once and then immediately transfer to oven</Text>
                            <Text style={styles.directionsText}>Roast 15-18 minutes</Text>
                            <Text style={styles.directionsText}>Place skillet with sauce on stove over medium high heat, simmer rapidly for 3 minutes until liquid reduces down to thin syrup</Text>
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
                <Text style={styles.buttonText}>Honey Garlic Pork</Text>
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

export default HoneyGarlicPorkRecipeModal;