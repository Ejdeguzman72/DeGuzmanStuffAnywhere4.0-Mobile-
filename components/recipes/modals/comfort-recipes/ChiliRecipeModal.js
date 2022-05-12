import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const ChilliRecipeModal = () => {
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
                            <Text style={styles.modalText}>Chilli</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>Marinara Sauce</Text>
                            <Text>Garlic</Text>
                            <Text>Onion</Text>
                            <Text>Ground beef</Text>
                            <Text>Nature's seasoning</Text>
                            <Text>Chili powder</Text>
                            <Text>Red pepper flakes</Text>
                            <Text>Crushed Cayenne Pepper</Text>
                            <Text>Can crushed tomatoes</Text>
                            <Text>2-3 cans of dark red kidney beans</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Mince garlic</Text>
                            <Text style={styles.directionsText}>Chop onion</Text>
                            <Text style={styles.directionsText}>In pot, place a little of oil and saute garlic and onion</Text>
                            <Text style={styles.directionsText}>Put in ground beef, and allow to brown. Mix frequently to break up the champs of the ground beef</Text>
                            <Text style={styles.directionsText}>Drain off some of the liquid</Text>
                            <Text style={styles.directionsText}>Add in nature's seasoning, chili powder, red pepper flakes, and crushed cayenne pepper to taste.</Text>
                            <Text style={styles.directionsText}>Drain the liquid from the cans of kidney beans and then add beans only to the pot</Text>
                            <Text style={styles.directionsText}>Stir in the crushed tomatoes</Text>
                            <Text style={styles.directionsText}>3/4 fill the crushed tomatoes can with water and swirl. Add to pot and stir to mix</Text>
                            <Text style={styles.directionsText}>Allow to simmer. Can eat as is or served with rice</Text>
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
                <Text style={styles.buttonText}>Chili</Text>
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

export default ChilliRecipeModal;