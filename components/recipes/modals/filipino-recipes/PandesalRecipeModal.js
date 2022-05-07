import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const PandesalRecipeModal = () => {
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
                            <Text style={styles.modalText}>Pandesal</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>¼ cup warm water</Text>
                            <Text>1 (1/4 ounce) package active dry yeast</Text>
                            <Text>1 cup lukewarm milk</Text>
                            <Text>2 ounces butter, room temperature</Text>
                            <Text>2 eggs, beaten</Text>
                            <Text>½ cup sugar</Text>
                            <Text>1-1/2 teaspoons salt</Text>
                            <Text>4 1/4 cups flour and ¼ to ½ cup more for kneading</Text>
                            <Text>1/2 cup of fine breadcrumbs</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>In a large bowl,, combine water and yeast. Allow to sit for 10 minutes until mixture becomes bubbly. Stir well.</Text>
                            <Text style={styles.directionsText}>In a small bowl, combine milk, butter, eggs, sugar and salt. Stir together until incorporated.</Text>
                            <Text style={styles.directionsText}>Add milk mixture and 2 cups flour to yeast mixture. Using an electric mixer, beat to combine. Gradually add theremaining 2-1/4 cup flour in ½ cup increments and continue to combine all ingredients.</Text>
                            <Text style={styles.directionsText}>On a lightlyfloured surface, turn over dough and knead, lightly adding flour as necessary, for about 10 minutes or until smooth, supple and elastic.</Text>
                            <Text style={styles.directionsText}>In a lightlyoiled large bowl, place dough. Cover with film and allow to rise for about 1 to 1-1/2 hours or until double in size.</Text>
                            <Text style={styles.directionsText}>On a lightlyfloured surface, transfer dough and divide into 24 pieces. Shape each piece into a ball and roll on breadcrumbs to coat. Arrange balls about 1inch apart on a lightlygreased baking sheet.</Text>
                            <Text style={styles.directionsText}>Cover with a cloth and allow to rise for about 1 to 1-1/2 hours or until double in size.</Text>
                            <Text style={styles.directionsText}>Bake in a 350 F oven for about 15 to 20 minutes or until golden brown. Serve hot.</Text>
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
                <Text style={styles.buttonText}>Pandesal</Text>
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
        backgroundColor: "#3CB371",
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

export default PandesalRecipeModal;