import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const CornedBeefRecipeModal = () => {
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
                            <Text style={styles.modalText}>Corned Beef</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>1 lb baking (russet) potatoes, peeled and cut into 1/4-inch dice</Text>
                            <Text>1-lb piece cooked corned beef, cut into chunks</Text>
                            <Text>beef, cut into chunks 1 cup chopped onion</Text>
                            <Text>1 medium onion, chopped</Text>
                            <Text>1 large red bell pepper, cut into 1/4-inch pieces</Text>
                            <Text>2 tablespoons unsalted butter</Text>
                            <Text>1/4 cup heavy cream</Text>
                            <Text>4 large eggs (optional)</Text>
                            <Text>1 tbsp chopped fresh flat-leaf parsley</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Cook potatoes in boiling salted water to cover until just tender, about 3 minutes, then drain. Pulse corned beef in a food processor until coarsely chopped.</Text>
                            <Text style={styles.directionsText}>Sauté onion and bell pepper in butter in a 12-inch nonstick skillet over moderately high heat, stirring, until lightly browned, about 5 minutes. Add potatoes and sauté over moderately high heat, stirring occasionally, until browned, about 5 minutes.</Text>
                            <Text style={styles.directionsText}>Stir in corned beef and salt and pepper to taste, then cook, stirring occasionally, until browned. Add cream and cook, stirring, 1 minute.</Text>
                            <Text style={styles.directionsText}>If desired, make 4 holes in hash and break 1 egg into each. Cook over moderately low heat, covered, 5 minutes, or until eggs are cooked to desired doneness, and season with salt and pepper. Sprinkle hash with parsley.</Text>
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
                <Text style={styles.buttonText}>Corned Beef Hash</Text>
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
        backgroundColor: "#FFEBCD",
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

export default CornedBeefRecipeModal;