import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const PineappleUpsideDownCakeRecipeModal = () => {
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
                            <Text style={styles.modalText}>Dad's Pineapple Upside Down Cake</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>1/2 Cup butter (1 stick), melted</Text>
                            <Text>1/2 Cup packed brown sugar</Text>
                            <Text>1 Can pineapple rings in 100% juice (reserve the juice)</Text>
                            <Text>1 Jar maraschino cherries</Text>
                            <Text>1 Box yellow or pineapple cake mix</Text>
                            <Text>1 4-serving box instant vanilla pudding</Text>
                            <Text>3 Eggs</Text>
                            <Text>Vegetable Oil</Text>
                            <Text>Milk</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Preheat the oven to 350 degrees F.</Text>
                            <Text style={styles.directionsText}>Prepare the bundt pan by generously applying pan release (recipe below) or non-stick spray.</Text>
                            <Text style={styles.directionsText}>Melt the butter and evenly pour into the bottom of the pan. Sprinkle with the brown sugar. Cut the pineapple rings in half and alternate with the maraschino cherries around the bundt pan</Text>
                            <Text style={styles.directionsText}>In a stand mixer or large bowl, stir the cake mix and pudding mix together. Drain the pineapple juice into a measuring cup and add enough milk to make 1 Cup of liquid.</Text>
                            <Text style={styles.directionsText}>Add this with the eggs and the amount of oil called for in the recipe to the cake mixture; following the instructions on the box.</Text>
                            <Text style={styles.directionsText}>Carefully pour the batter over the fruit and bake as instructed for a bundt cake. The cake is done when an inserted knife comes out clean. Cool for 10 minutes in the pan. Slide a knife around the edges including the inner ring.</Text>
                            <Text style={styles.directionsText}>Invert the cake onto a serving plate. Slice between the pineapple rings and serve warm or room temperature.</Text>
                            <Text style={styles.directionsText}>Mix equal parts of vegetable shortening, vegetable oil, and all-purpose flour until smooth. Using a pastry brush or paper towel, apply to the pans paying special attention to corners, nooks, and crannies.</Text>
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
                <Text style={styles.buttonText}>Dad's Pineapple Upside Down Cake</Text>
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

export default PineappleUpsideDownCakeRecipeModal;