import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const BeefStewRecipeModal = () => {
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
                        <Text style={styles.modalText}>Beef Stew</Text>
                            <Text style={styles.modalText}>Beef Stew - Red Sauce</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>Beef Chuck</Text>
                            <Text>Tomato</Text>
                            <Text>Carrots</Text>
                            <Text>Celery</Text>
                            <Text>Green Pepper</Text>
                            <Text>Onion</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Chop onion</Text>
                            <Text style={styles.directionsText}>Slice beef into small slices</Text>
                            <Text style={styles.directionsText}>Add beef</Text>
                            <Text style={styles.directionsText}>Add nature's seasoning and allow beef to brown</Text>
                            <Text style={styles.directionsText}>Chop tomato and place into pot</Text>
                            <Text style={styles.directionsText}>Cut celery into small pieces and add to pot</Text>
                            <Text style={styles.directionsText}>Cut pepper into small pieces and place in pot</Text>
                            <Text style={styles.directionsText}>Cover and allow tosimme until carots are soft</Text>
                            <Text style={styles.directionsText}>can eat as is or over rice</Text>
                            <Text style={styles.modalText}>Beef Stew - Brown Sauce</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>Beef Chuck</Text>
                            <Text>Potatoes</Text>
                            <Text>Carrots</Text>
                            <Text>Celery</Text>
                            <Text>Brown gravy mix</Text>
                            <Text>Onion</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>slice beef chuck into small cubes</Text>
                            <Text style={styles.directionsText}>chop onion</Text>
                            <Text style={styles.directionsText}>peel potatoes and carrots. slice into bit sized pieces</Text>
                            <Text style={styles.directionsText}>slice celery into bit sized pieces</Text>
                            <Text style={styles.directionsText}>place onion in pot with oil and saute the onion</Text>
                            <Text style={styles.directionsText}>add cubed beef and allow to brown</Text>
                            <Text style={styles.directionsText}>add nature's seasoning</Text>
                            <Text style={styles.directionsText}>add potatoes, carrots, and celery</Text>
                            <Text style={styles.directionsText}>place contents of brown gravy mix into a glass and add water</Text>
                            <Text style={styles.directionsText}>mix and add to pot</Text>
                            <Text style={styles.directionsText}>allow to simmer until carrots are soft</Text>
                            <Text style={styles.directionsText}>serve as is or with rice</Text>
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
                <Text style={styles.buttonText}>Beef Stew</Text>
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

export default BeefStewRecipeModal;