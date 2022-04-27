import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const CarrotCakeRecipeModal = () => {
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
                        <Text style={styles.modalText}>Dad's Carrot Cake</Text>
                            <Text style={styles.modalText}>Ingredients - Cake</Text>
                            <Text>2 C flaked coconut</Text>
                            <Text>2 C sugar</Text>
                            <Text>1 1/2 C veg.oil</Text>
                            <Text>3 eggs</Text>
                            <Text>2 tablespoon vanilla</Text>
                            <Text>2 tablespoon of cinnamon</Text>
                            <Text>3 Eggs</Text>
                            <Text>2 1/2 cups of All-Purpose Flour</Text>
                            <Text>2 tablespoon of baking soda</Text>
                            <Text>1 teaspoon of salt</Text>
                            <Text>2 cups of shredded carrots</Text>
                            <Text>1 8-Oz can drained pineapple</Text>
                            <Text>1 cup of drained pineapple</Text>
                            <Text style={styles.modalText}>Ingredients - Cream Cheese Frosting</Text>
                            <Text>8 oz softened cream cheese</Text>
                            <Text>6 teaspoons of softened sweet butter</Text>
                            <Text>3 cups of confectioners sugar</Text>
                            <Text>1 teaspoon of vanilla</Text>
                            <Text>1 teaspoon lemon juice</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Combine sugar, oil, eggs, and vanilla in a large bowl. Blend with a wooden spoon</Text>
                            <Text style={styles.directionsText}>Stir in flour, cinnamon, soda, salt and mix</Text>
                            <Text style={styles.directionsText}>Fold in carrots, cocnut, pineapple, and nuts</Text>
                            <Text style={styles.directionsText}>Pour into a prepared pan. Bake until tester inserted in center comes out clean (50 minutes)</Text>
                            <Text style={styles.directionsText}>Let it cool in pan approx 5 minutes. Invert on rack and cool</Text>
                            <Text style={styles.directionsText}>Cream together slowly for the cream cheese icing. Beat in vanilla and lemon juice</Text>
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
                <Text style={styles.buttonText}>Dad's Carrot Cake</Text>
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
        backgroundColor: "#FFB6C1",
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

export default CarrotCakeRecipeModal;