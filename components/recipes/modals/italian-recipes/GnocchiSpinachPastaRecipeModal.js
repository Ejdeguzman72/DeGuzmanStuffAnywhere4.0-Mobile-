import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const GnocchiSpinachPastaRecipeModal = () => {
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
                            <Text style={styles.modalText}>Gnocchi Spinach Pesto Pasta</Text>
                            <Text style={styles.modalText}>Ingredients - Gnocchi Pasta</Text>
                            <Text>4 potatoes</Text>
                            <Text>2 egg</Text>
                            <Text>4 cups of flour</Text>
                            <Text style={styles.modalText}>Ingedients - Pesto Sauce</Text>
                            <Text>spinach</Text>
                            <Text>basil</Text>
                            <Text>clove of garlic</Text>
                            <Text>1/2 cup of olive oil</Text>
                            <Text>salt and pepper to taste</Text>
                            <Text>oregano</Text>
                            <Text>parmesan cheese</Text>
                            <Text>lemon juice</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Bring a large pot of salted water to a boil. Peel potatoes and add to pot. Cook until tender but still firm, about 15 minutes. Drain, cool and mash with a fork or potato masher.</Text>
                            <Text style={styles.directionsText}>Combine 1 cup mashed potato, flour and egg in a large bowl. Knead until dough forms a ball. Shape small portions of the dough into long "snakes". On a floured surface, cut snakes into half-inch pieces.</Text>
                            <Text style={styles.directionsText}>Bring a large pot of lightly salted water to a boil. Drop in gnocchi and cook for 3 to 5 minutes or until gnocchi have risen to the top; drain and serve.</Text>
                            <Text style={styles.directionsText}>Using a slotted spoon, transfer mushrooms to a plate, season with salt. Repeat with remaining 2 Tbsp oil and mushrooms and more salt</Text>
                            <Text style={styles.directionsText}>In the bowl of a food processor or blender add the spinach, garlic, pine nuts, cheese, salt and pepper and pulse until well combined, but not totally smooth. Slowly drizzle in the olive oil while pulsing. Add lemon juice, salt and pepper to taste.</Text>
                            <Text style={styles.directionsText}>Add some chicken breast strips in there</Text>
                            <Text style={styles.directionsText}></Text>
                            <Text style={styles.directionsText}></Text>
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
                <Text style={styles.buttonText}>Gnocchi Spinach Pesto Pasta</Text>
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

export default GnocchiSpinachPastaRecipeModal;