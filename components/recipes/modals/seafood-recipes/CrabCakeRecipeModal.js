import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const CrabCakesRecipeModal = () => {
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
                            <Text style={styles.modalText}>Crab Cakes</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>1/2 cup mayonnaise</Text>
                            <Text>1 large egg, beaten</Text>
                            <Text>1 tablespoon Dijon mustard</Text>
                            <Text>1 tablespoon Worcestershire sauce</Text>
                            <Text>1/2 teaspoon hot sauce</Text>
                            <Text>1 pound jumbo lump crab meat, picked over</Text>
                            <Text>20 saltine crackers, finely crushed</Text>
                            <Text>1/4 cup canola oil</Text>
                            <Text>lemon wedges, for serving</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>In a small bowl, whisk the mayonnaise with the egg, mustard, Worcestershire sauce and hot sauce until smooth.</Text>
                            <Text style={styles.directionsText}>In a medium bowl, lightly toss the crabmeat with the cracker crumbs. Gently fold in the mayonnaise mixture. Cover and refrigerate for at least 1 hour</Text>
                            <Text style={styles.directionsText}>Scoop the crab mixture into eight 1/3‐cup mounds; lightly pack into 8 patties, about 1 1/2 inches thick. In a large skillet, heat the oil until shimmering. Add the crab cakes and cook over moderately high heat until deeply golden and heated through, about 3 minutes per side. Transfer the crab cakes to plates and serve with lemon wedges.</Text>
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
                <Text style={styles.buttonText}>Crab Cakes</Text>
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

export default CrabCakesRecipeModal;