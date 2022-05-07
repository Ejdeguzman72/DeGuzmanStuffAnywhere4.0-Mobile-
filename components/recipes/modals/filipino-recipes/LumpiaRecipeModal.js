import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const LumpiaRecipeModal = () => {
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
                            <Text style={styles.modalText}>Lumpia</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>1 lb of ground pork</Text>
                            <Text>2 cloves of crushed garlic</Text>
                            <Text>1/2 cup of chopped onion</Text>
                            <Text>1/2 cup of minced carrots</Text>
                            <Text>1/2 cup of green onions</Text>
                            <Text>1 tsp of ground black pepper</Text>
                            <Text>1 teaspoon of salt</Text>
                            <Text>1 teaspoon garlic powder</Text>
                            <Text>1 teaspoon soy sauce</Text>
                            <Text>lumpia wrappers</Text>
                            <Text>vegetable oil for frying</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Place a wok or large skillet over high heat, and pour in 1 tablespoon vegetable oil. Cook pork, stirring frequently, until no pink is showing. Remove pork from pan and set aside.</Text>
                            <Text style={styles.directionsText}>Drain grease from pan, leaving a thin coating. Cook garlic and onion in the same pan for 2 minutes. Stir in the cooked pork, carrots, green onions, and cabbage. Season with pepper, salt, garlic powder, and soy sauce. Remove from heat, and set aside until cool enough to handle.</Text>
                            <Text style={styles.directionsText}>Place three heaping tablespoons of the filling diagonally near one corner of each wrapper, leaving a 1 1/2 inch space at both ends. Fold the side along the length of the filling over the filling, tuck in both ends, and roll neatly.</Text>
                            <Text style={styles.directionsText}>Keep the roll tight as you assemble. Moisten the other side of the wrapper with water to seal the edge. Cover the rolls with plastic wrap to retain moisture.</Text>
                            <Text style={styles.directionsText}>Heat a heavy skillet over medium heat, add oil to 1/2 inch depth, and heat for 5 minutes. Slide 3 or 4 lumpia into the oil. Fry the rolls for 1 to 2 minutes, until all sides are golden brown. Drain on paper towels. Serve immediately.</Text>
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
                <Text style={styles.buttonText}>Lumpia</Text>
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

export default LumpiaRecipeModal;