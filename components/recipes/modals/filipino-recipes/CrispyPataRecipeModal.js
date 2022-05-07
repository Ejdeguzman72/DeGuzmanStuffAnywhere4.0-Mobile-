import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const CrispyPataRecipeModal = () => {
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
                            <Text style={styles.modalText}>Crispy Pata</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>1 piece whole pig leg cleaned</Text>
                            <Text>6 pieces dried bay leaves</Text>
                            <Text>2 tablespoons whole peppercorn</Text>
                            <Text>4 pieces star anise optional</Text>
                            <Text>6 teaspoons salt</Text>
                            <Text>2 teaspoons ground black pepper</Text>
                            <Text>2 teaspoons garlic powder</Text>
                            <Text>12 cups water</Text>
                            <Text>6 cups cooking oil</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Pour water in a cooking pot then let boil.</Text>
                            <Text style={styles.directionsText}>Put-in dried bay leaves, whole peppercorn, star anise, and 4 teaspoons of salt.</Text>
                            <Text style={styles.directionsText}>Add the whole pig’s legs in the cooking pot then simmer until the leg becomes tender (about 45 to 60 minutes).</Text>
                            <Text style={styles.directionsText}>Remove the tender leg from the cooking pot and set aside until the temperature goes down.</Text>
                            <Text style={styles.directionsText}>Rub the leg with garlic powder, ground black pepper, and remaining salt. Let stand for 15 minutes to absorb the rub.</Text>
                            <Text style={styles.directionsText}>Heat a clean large cooking pot (preferably with cover) and pour-in cooking oil.</Text>
                            <Text style={styles.directionsText}>When the oil becomes hot, deep fry the rubbed pork leg. Continue cooking in medium heat until one side becomes crispy, and then cautiously flip the leg to crisp the other side. Note: Be extra careful in doing this procedure.</Text>
                            <Text style={styles.directionsText}>Turn-off the heat; remove the crispy pork leg; and transfer it to a wide serving plate.</Text>
                            <Text style={styles.directionsText}>Serve with atcharang papaya and soy sauce – vinegar dipping sauce.</Text>
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
                <Text style={styles.buttonText}>Crispy Pata</Text>
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

export default CrispyPataRecipeModal;