import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const EnchiladasRecipeModal = () => {
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
                            <Text style={styles.modalText}>Enchiladas</Text>
                            <Text style={styles.modalText}>Ingredients - Enchiladas</Text>
                            <Text>Beef/Chicken</Text>
                            <Text>Two large onions</Text>
                            <Text>Two large green peppers</Text>
                            <Text>One large red pepper</Text>
                            <Text>One large yellow pepper</Text>
                            <Text>Limes, lots of limes</Text>
                            <Text>Nature's Seasoning</Text>
                            <Text>Crushed red pepper flakes</Text>
                            <Text>Tortillas</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Slice meat into thin strips</Text>
                            <Text style={styles.directionsText}>Sprinkle some crushed red pepper flakes on top of the meat</Text>
                            <Text style={styles.directionsText}>Squeeze limes over the meat (make sure you drain out the seeds)</Text>
                            <Text style={styles.directionsText}>Mix well and allow to marinate for about an hour (overnight is best)</Text>
                            <Text style={styles.directionsText}>Slice the onions and peppers</Text>
                            <Text style={styles.directionsText}>In a little oil, saute the onions and peppers together for a couple of minutes</Text>
                            <Text style={styles.directionsText}>Remove from pan</Text>
                            <Text style={styles.directionsText}>Place pan back on stove and place the strips of meat into the pan to cook</Text>
                            <Text style={styles.directionsText}>When all the meat is cooked, add in the onions and peppers</Text>
                            <Text style={styles.directionsText}>Add some nature's seasoning and stir for a minute or two to combine the flavors</Text>
                            <Text style={styles.directionsText}>Place in tortillas</Text>
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
                <Text style={styles.buttonText}>Enchiladas</Text>
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
        backgroundColor: "#0000CD",
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

export default EnchiladasRecipeModal;