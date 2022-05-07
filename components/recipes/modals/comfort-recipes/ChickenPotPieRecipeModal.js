import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const ChickenPotPieRecipeModal = () => {
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
                            <Text style={styles.modalText}>Chicken Pot Pie</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>2 pounds cooked boneless, skinless chicken, shredded</Text>
                            <Text>Salt</Text>
                            <Text>Freshly ground black pepper</Text>
                            <Text>4 Tablespoons vegetable oil</Text>
                            <Text>4 Tablespoons unsalted butter, at room temperature</Text>
                            <Text>4 Tablespoons all purpose flour</Text>
                            <Text>1/2 pound red-skinned potatoes, cut into 1/2-inch pieces</Text>
                            <Text>1/2 pound carrots, peeled and cut into 1/2-inch pieces</Text>
                            <Text>1 medium yellow onion, peeled and diced</Text>
                            <Text>2 garlic cloves, minced</Text>
                            <Text>Pinch cayenne (optional)</Text>
                            <Text>2 cups good-quality canned chicken broth</Text>
                            <Text>1-2 Tablespoons heavy cream</Text>
                            <Text>1/2 cup shelled fresh peas or frozen peas</Text>
                            <Text>Approximately 1/2 pound frozen puff pastry, defrosted following package instructions</Text>
                            <Text>1 large egg</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Melt the butter in a large, tall saucepan. Add flour and whisk to ensure there are no lumps before adding the chicken stock. Cook out this mixture for 5-10 minutes whilecontinuously stirring</Text>
                            <Text style={styles.directionsText}>Check the consistency by dipping the back of a spoon into the sauce and running your finger along the spoon. You want the sauce to cling to thespoon and not run over the swipe you made.</Text>
                            <Text style={styles.directionsText}>Continue to cook and stir the sauce over medium heat until you reach the correct consistency. Season with the salt, pepper, and cayenne (if using). Taste the sauce andsee if your sauce needs more seasoning.</Text>
                            <Text style={styles.directionsText}>Next, add the cream and stir to combine. Then, add the shredded chicken potatoes, carrots, onion, and garlic to the sauce.Cook the vegetables in the sauce for two to three minutes.</Text>
                            <Text style={styles.directionsText}>Transfer the filling into a clean bowl and chill in the fridge for one hour, or until cool.</Text>
                            <Text style={styles.directionsText}>Preheat the oven to 400˚F / 200 ˚C.</Text>
                            <Text style={styles.directionsText}>Roll out the puff pastry, using a bit of extra flour to ensure the pastry doesn’t stick to your work surface. Use a bowl or plate about an inch larger than the dish you are cooking your pot pie in as a guide to cut out your pastry.</Text>
                            <Text style={styles.directionsText}>Carefully spoon in your chilled filling into your dish.</Text>
                            <Text style={styles.directionsText}>Break the egg in a small dish and add a tablespoon of water or cream. Whisk with a fork and brush this egg wash on the edges of your dish. Brush a little of your egg wash on the rim of your dish. Lay your pastry over the top, being careful not to stretch the pastry.</Text>
                            <Text style={styles.directionsText}>Seal the edges of the pastry by lightly pushing it onto the rim of your dish to make sure it is secure. Then brush the top and sides with more egg wash. Place your pot pies on a large baking sheet and bake for 25-35 minutes</Text>
                            <Text style={styles.directionsText}>Bake until your pastry is a nice golden, dark brown and there are no more grayish raw patches</Text>
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
                <Text style={styles.buttonText}>Chicken Pot Pie</Text>
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

export default ChickenPotPieRecipeModal;