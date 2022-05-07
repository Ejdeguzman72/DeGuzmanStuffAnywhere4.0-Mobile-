import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const StuffedShellsRecipeModal = () => {
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
                            <Text style={styles.modalText}>Stuffed Shells Pasta</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>Large package of jumbo pasta shells</Text>
                            <Text>Medium Onion</Text>
                            <Text>1 egg</Text>
                            <Text>Ricotta cheese</Text>
                            <Text>Nature's seasoning</Text>
                            <Text>2 cans of crushed tomatoes</Text>
                            <Text>Sugar</Text>
                            <Text>salt</Text>
                            <Text>freshly ground black pepper</Text>
                            <Text>shredded mozarella cheese</Text>
                            <Text>spinach</Text>
                            <Text>Italian Seasoning</Text>
                            <Text>Parmesan Cheese</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Preheat oven to 375 degrees F</Text>
                            <Text style={styles.directionsText}>Coat a 9 x 13 baking pan with cooking spray</Text>
                            <Text style={styles.directionsText}>Spread 1 1/2 cups of the marinara sauce in an even layer in the bottom of the pan.</Text>
                            <Text style={styles.directionsText}>Place the ricotta cheese, 1 1/2 cups of mozzarella cheese, spinach, Italian seasoning, egg, onion, salt, pepper and parmesan cheese in a bowl. Stir to combine.</Text>
                            <Text style={styles.directionsText}>Spoon the remaining marinara sauce over the shells, then sprinkle the other 1 1/2 cups of cheese over the top.</Text>
                            <Text style={styles.directionsText}>Cover the dish with foil. Bake for 20 minutes. Uncover the pan, then bake for an additional 10 minutes or until cheese is melted and starting to brown.</Text>
                            <Text style={styles.directionsText}>Sprinkle with parsley, then serve.</Text>
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
                <Text style={styles.buttonText}>Stuffed Shells</Text>
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
        backgroundColor: "#483D8B",
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

export default StuffedShellsRecipeModal;