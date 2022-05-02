import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const ChilaquilesRecipeModal = () => {
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
                            <Text style={styles.modalText}>Chilaquiles</Text>
                            <Text style={styles.modalText}>Ingredients - Tortilla Chips</Text>
                            <Text>1/4 cup vegetable oil, for frying</Text>
                            <Text>12 corn tortillas, cut into 8 wedges each</Text>
                            <Text>Kosher salt</Text>
                            <Text style={styles.modalText}>Ingredients - Salsa Roja</Text>
                            <Text>4 Roma tomatoes or 2 large tomatoes (about 1 1/2 pounds), chopped</Text>
                            <Text>1/2 large yellow onion, chopped</Text>
                            <Text>1 medium jalapeño, sliced (remove the seeds for a less spicy dish)</Text>
                            <Text>2 cloves of garlic</Text>
                            <Text>1 1/4 cups low-sodium chicken or vegetable broth, divided</Text>
                            <Text>2 teaspoons vegetable oil</Text>
                            <Text>Kosher salt</Text>
                            <Text style={styles.modalText}>To Serve With</Text>
                            <Text>Avocado/guacamole</Text>
                            <Text>Crema</Text>
                            <Text>Queso Frescro</Text>
                            <Text>Fried Eggs</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Fry the tortillas. Heat 1/4 cup oil in a large skillet over medium-high heat until shimmering. Add about a quarter of the tortilla wedges and cook, flipping once, until lightly brown and crisp.</Text>
                            <Text style={styles.directionsText}>Drain the tortilla chips. Drain the freshly fried tortilla chips on a paper towel-lined baking sheet. Sprinkle lightly with salt. Repeat this process until all tortillas are fried, adding more oil if needed.</Text>
                            <Text style={styles.directionsText}>Make the salsa roja. Place the tomatoes, onion, jalapeño, and garlic in a blender or food processor fitted with the blade attachment. Pour in 1 cup of the broth. Blend until smooth.</Text>
                            <Text style={styles.directionsText}>Cook the salsa. Heat 2 teaspoons oil in a large skillet over medium-high heat until shimmering. Add the salsa and cook, stirring occasionally, until slightly thickened, 5 to 10 minutes (the consistency of the salsa will vary depending on the size and juiciness of the tomatoes). Add additional broth to thin out the salsa, if needed. Taste and season with salt as needed.</Text>
                            <Text style={styles.directionsText}>Coat the chips with the salsa. Add the tortilla chips and stir carefully to coat the chips. Cook until the tortillas are heated through, about 3 minutes. Taste and season with salt as needed.</Text>
                            <Text style={styles.directionsText}>Drain the tortilla chips. Drain the freshly fried tortilla chips on a paper towel-lined baking sheet. Sprinkle lightly with salt. Repeat this process until all tortillas are fried, adding more oil if needed.</Text>
                            <Text style={styles.directionsText}>Serve warm. Serve warm garnished with avocado or guacamole, crema, queso fresco, and/or fried eggs, if desired.</Text>
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
                <Text style={styles.buttonText}>Chilaquiles</Text>
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
        backgroundColor: "#0000CD",
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

export default ChilaquilesRecipeModal;