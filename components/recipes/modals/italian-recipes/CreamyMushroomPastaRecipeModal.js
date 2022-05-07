import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const CreamyMushroomPastaRecipeModal = () => {
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
                            <Text style={styles.modalText}>Creamy Mushroom Pasta</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>4 Tbsp. extra-virgin olive oil</Text>
                            <Text>1 lb. mixed mushrooms</Text>
                            <Text>Salt</Text>
                            <Text>2 medium shallots,finely chopped (garlic/onion substitute)</Text>
                            <Text>1lb. spaghettit or bucatini</Text>
                            <Text>1/2 cup heavy cream</Text>
                            <Text>1/3 cup finely chopped parsley</Text>
                            <Text>Zest and juice of 1/2 lemon</Text>
                            <Text>2 Tbsp. unsalted butter, cut into pieces</Text>
                            <Text>1/2oz. Parmesan, finely grated (about 1/2 cup), plus more for serving</Text>
                            <Text>freshly ground black pepper</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Heat 2 Tbsp. oil in a large pot over medium-high</Text>
                            <Text style={styles.directionsText}>Cook half of mushrooms in a single layer, ubdisturbed, until edges are brown and crispy</Text>
                            <Text style={styles.directionsText}>Give mushrooms a toss and continue to cool, tossing occassionally, until all sides are brown and crisp, about 5 minutes more</Text>
                            <Text style={styles.directionsText}>Using a slotted spoon, transfer mushrooms to a plate, season with salt. Repeat with remaining 2 Tbsp oil and mushrooms and more salt</Text>
                            <Text style={styles.directionsText}>Reduce heat to medium-low and return all of the mushrooms to the pot. Add shallots and cool, stirring often, until shallots are translucent and softened, about 2 minutes</Text>
                            <Text style={styles.directionsText}>Cook pasta in a pot of boiling and salted water.</Text>
                            <Text style={styles.directionsText}>Use tongs to transfer pasta to pot with mushrooms and add cream and 1 cup of pasta cooked water. Increase heat to medium and bring to a simmer</Text>
                            <Text style={styles.directionsText}>Remove from heat and add lemon zest,lemon juice, parsley, butter, parmesan, and lots of pepper</Text>
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
                <Text style={styles.buttonText}>Creamy Mushroom Pasta</Text>
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

export default CreamyMushroomPastaRecipeModal;