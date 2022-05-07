import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const QuicheRecipeModal = () => {
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
                            <Text style={styles.modalText}>Quiche</Text>
                            <Text style={styles.modalText}>Ingredients - Pie Crust</Text>
                            <Text>1.5 cups All-Purpose Flour</Text>
                            <Text>1/2 teaspoon of Salt</Text>
                            <Text>10 tablespoons Unsalted Butter</Text>
                            <Text>One Large Egg</Text>
                            <Text>Ice Water</Text>
                            <Text style={styles.modalText}>Ingredients - Custard</Text>
                            <Text>1/2 cup heavy cream or heavy whipping cream*</Text>
                            <Text>1/2 cup whole milk</Text>
                            <Text>4 large eggs</Text>
                            <Text>1/4 teaspoon each salt and pepper*</Text>
                            <Text>Spinach</Text>
                            <Text>caramelized onions</Text>
                            <Text>chopped parsley</Text>
                            <Text>shredded mozarella - up to 1 cup shredded or crumbled cheese</Text>
                            <Text>Mushrooms</Text>
                            <Text style={styles.modalText}>Tips</Text>
                            <Text>Stick to 1/2 – 1 cup cheese and up to 2 cups vegetables and/or meat add-ins. (Fresh spinach packs down, so you can go heavy on it</Text>
                            <Text style={styles.modalText}>Directions - Pie Crust</Text>
                            <Text style={styles.directionsText}>In a small mixing bowl add the egg and ice water. Whisk until combined, then set the bowl aside.</Text>
                            <Text style={styles.directionsText}>In the bowl of a food processor, add the flour and salt. Pulse briefly to mix the ingredients.</Text>
                            <Text style={styles.directionsText}>Add in the butter pieces. Pulse until the mixture resembles coarse meal.</Text>
                            <Text style={styles.directionsText}>Add in the egg/ice-water mixture. Pulse until a lovely dough forms.</Text>
                            <Text style={styles.directionsText}>Transfer the dough to a lightly-floured board.</Text>
                            <Text style={styles.directionsText}>Roll out the quiche crust to fit the approximate measurements of your quiche pan. Lay the crust on top of the quiche pan and with your hands, lightly press it into place.</Text>
                            <Text style={styles.directionsText}>Stick the quiche pan with the dough into the freezer for approximately 20-25 minutes</Text>
                            <Text style={styles.directionsText}>Roll it out, then fit into your 9-inch pie dish. Crimp or flute the edges.</Text>
                            <Text style={styles.directionsText}>Chill the shaped pie crust for at least 30 minutes. This prevents shrinking. Remember that pie dough must be cold.</Text>
                            <Text style={styles.directionsText}>Fill with pie weights</Text>
                            <Text style={styles.directionsText}>Bake until the edges are lightly brown, about 15 minutes. Remove pie weights</Text>
                            <Text style={styles.modalText}>Directions - Filling</Text>
                            <Text style={styles.directionsText}>In a small mixing bowl add the egg and ice water. Whisk until combined, then set the bowl aside.</Text>
                            <Text style={styles.directionsText}>In the bowl of a food processor, add the flour and salt. Pulse briefly to mix the ingredients.</Text>
                            <Text style={styles.directionsText}>Add in the butter pieces. Pulse until the mixture resembles coarse meal.</Text>
                            <Text style={styles.directionsText}>Add in the egg/ice-water mixture. Pulse until a lovely dough forms.</Text>
                            <Text style={styles.directionsText}>Place sliced mushrooms in a skillet coated with 1 teaspoon olive oil or nonstick spray, add the garlic, and a sprinkle of salt and pepper. Turn the heat on to medium-high and sauté the mushrooms until they release all of their moisture and no more water remains on the bottom of the skillet, about 6-7 minutes.</Text>
                            <Text style={styles.directionsText}>Whisk the eggs, milk, and parmesan cheese together until combined. Sprinkle with a pinch of salt and pepper. Set aside.</Text>
                            <Text style={styles.directionsText}>Bake the quiche until the center is just about set, about 50-60 minutes. Don’t over-bake. Use a pie crust shield to prevent the pie crust edges from over-browning. Cool for 15 minutes before slicing and serving. Or you can cool the quiche completely before serving– it’s fantastic at room temperature!</Text>
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
                <Text style={styles.buttonText}>Quiche</Text>
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

export default QuicheRecipeModal;