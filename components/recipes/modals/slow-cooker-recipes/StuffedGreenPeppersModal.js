import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const StuffedGreenPepeprsModal = () => {
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
                        <Text style={styles.modalText}>Stuffed Green Peppers</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>Ground beef</Text>
                            <Text>Green peppers</Text>
                            <Text>Cooked rice</Text>
                            <Text>2 eggs</Text>
                            <Text>Can of crushed tomatoes</Text>
                            <Text>Nature's seasoning</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Chop onion</Text>
                            <Text style={styles.directionsText}>Cut tops off the green peppers</Text>
                            <Text style={styles.directionsText}>Chop the tops of the green peppers</Text>
                            <Text style={styles.directionsText}>In bowl, mix ground beef, 3/4 chopped onion, 3/4 choppedpepper, eggs and rice</Text>
                            <Text style={styles.directionsText}>Add some nature's seasoning and mix well</Text>
                            <Text style={styles.directionsText}>Fill green pepper bottoms with mixture. Do not pack tightly</Text>
                            <Text style={styles.directionsText}>Place stuffed peppers into slow cooker</Text>
                            <Text style={styles.directionsText}>Add remainder chopped onion and chopped pepper</Text>
                            <Text style={styles.directionsText}>Add crushed tomato</Text>
                            <Text style={styles.directionsText}>3/4 fill empty crushed tomato can with water and swirl to get the rest of the crushed tomato. Add to slow cooker</Text>
                            <Text style={styles.directionsText}>Add Nature's Seasoning</Text>
                            <Text style={styles.directionsText}>Set on low and allow to simmer 4-6 hours. On high for about 3 hours</Text>
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
                <Text style={styles.buttonText}>Stuffed Green Peppers</Text>
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
        backgroundColor: "#2F4F4F",
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

export default StuffedGreenPepeprsModal;