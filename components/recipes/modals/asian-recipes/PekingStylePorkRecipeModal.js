import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const PekingStylePorkChopsModal = () => {
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
                            <Text style={styles.modalText}>Peking Style Porkchops</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>Large package of pork tenderloin / pork spare ribs</Text>
                            <Text>Vegetable / Canola Oil</Text>
                            <Text>1 teaspoon of toasted sesame seeds, OPTIONAL</Text>
                            <Text>2 eggs</Text>
                            <Text>1 tablespoon corn starch</Text>
                            <Text>Nature's seasoning</Text>
                            <Text>1/2 teaspoon salt</Text>
                            <Text>1.5 tablespoons tomato ketchup</Text>
                            <Text>1/2 tablespoon plum sauce</Text>
                            <Text>1/2 tablespoon chili sauce</Text>
                            <Text>1/4 teapsoon hoisin sauce</Text>
                            <Text>1 tablespoon Worchestershire sauce</Text>
                            <Text>1 1/2 table spoons of sugar</Text>
                            <Text>2 tablespoons of water</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Pound pork slices with mallet, or with the back of a kitchen knife until tender. Set aside. In a bowl, mix the Marinade ingredients, add in pork slices, mix well, and marinade for 30 minutes.</Text>
                            <Text style={styles.directionsText}>In a separate bowl, mix the Sauce ingredients. You may add more or less sugar, or other sauce ingredients to your own liking. Set sauce mixture aside.</Text>
                            <Text style={styles.directionsText}>Heat up a wok with enough oil, deep-fry pork slices for 5 minutes, or until color changes to golden brown and slightly crispy. Dish up, drain with paper towels and set aside.</Text>
                            <Text style={styles.directionsText}>Bring sauce to a quick boil, add deep-fried pork, and stir until all the meat is well coated with sauce. Dish up and sprinkle the pork chops with some toasted sesame seeds. Serve over a bowl of hot steamed rice.</Text>
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
                <Text style={styles.buttonText}>Peking Style Porkchops</Text>
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

export default PekingStylePorkChopsModal;