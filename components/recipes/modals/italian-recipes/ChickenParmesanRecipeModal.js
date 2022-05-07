import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const ChickenParmesanRecipeModal = () => {
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
                            <Text style={styles.modalText}>Chicken Parmesan</Text>
                            <Text style={styles.modalText}>Ingredients - Chicken</Text>
                            <Text>2 large eggs</Text>
                            <Text>1 tablespoon minced garlic</Text>
                            <Text>2 tablespoons fresh chopped parsley</Text>
                            <Text>Salt and pepper to season</Text>
                            <Text>3 large chicken breasts halved horizontally to make 6 fillets</Text>
                            <Text>2 cans of crushed tomatoes</Text>
                            <Text>1 cup Panko breadcrumbs</Text>
                            <Text>1/2 cup fresh grated parmesan cheese</Text>
                            <Text>1 teaspoon garlic or onion powder</Text>
                            <Text>shredded mozarella cheese</Text>
                            <Text>1/2 cup olive oil for frying (canola oil/vegetable oil are fine)</Text>
                            <Text style={styles.modalText}>Ingredients - Sauce</Text>
                            <Text>2 large eggs</Text>
                            <Text>1 tablespoon minced garlic</Text>
                            <Text>2 tablespoons fresh chopped parsley</Text>
                            <Text>Salt and pepper to season</Text>
                            <Text>3 large chicken breasts halved horizontally to make 6 fillets</Text>
                            <Text>2 cans of crushed tomatoes</Text>
                            <Text>1 cup Panko breadcrumbs</Text>
                            <Text>1/2 cup fresh grated parmesan cheese</Text>
                            <Text>1 teaspoon garlic or onion powder</Text>
                            <Text>shredded mozarella cheese</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>1 tablespoon olive oil</Text>
                            <Text style={styles.directionsText}>1 tablespoon minced garlic</Text>
                            <Text style={styles.directionsText}>1 large onion chopped</Text>
                            <Text style={styles.directionsText}>2 cans of crushed tomatoes</Text>
                            <Text style={styles.directionsText}>3 large chicken breasts halved horizontally to make 6 fillets</Text>
                            <Text style={styles.directionsText}>sugar</Text>
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
                <Text style={styles.buttonText}>Chicken Parmesan</Text>
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

export default ChickenParmesanRecipeModal;