import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const EggFuYungRecipeModal = () => {
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
                            <Text style={styles.modalText}>Egg Fu Yung</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>vegetable oil, as needed</Text>
                            <Text>3 shallots, thinly sliced</Text>
                            <Text>1 green pepper, seeded and diced</Text>
                            <Text>1 celery stalk, chopped</Text>
                            <Text>2 garlic cloves, minced</Text>
                            <Text>1 cup bean sprouts</Text>
                            <Text>4oz ﴾115g﴿ small shrimp, peeled and deveined</Text>
                            <Text>5 eggs, beaten</Text>
                            <Text>3/4 cup vegetable stock</Text>
                            <Text>1 tbsp oyster sauce</Text>
                            <Text>1 tbsp soy sauce</Text>
                            <Text>2 tsp corn starchrice to servce</Text>
                            <Text>rice to serve</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Heat 2 tbsp oil in a wok over high heat. Add the shallots, bell pepper, celery, and garlic and stir‐fry for 3 minutes. Add the bean sprouts, stir‐fry for 1 minute, then add the shrimp and stir‐fry for 1 minute, or until the shrimp turn pink. Transfer to a bowl and let cool.</Text>
                            <Text style={styles.directionsText}>Add the beaten eggs, stirring until well combined. Wash the wok and wipe dry with paper towels</Text>
                            <Text style={styles.directionsText}>Return the wok to high heat and pour in 2in ﴾5cm﴿ oil.When the oil is hot, ladle 1/4 of the mixture into the oil. Fry about 2 minutes, until the underside is lightly browned, spooning a little of the hot oil over the eggs so the top starts to set.</Text>
                            <Text style={styles.directionsText}>Carefully turn the egg cake over and cook 1 minute, until lightly browned on the other side. Transfer to paper towels to drain. Keep warm in a 200°F ﴾95°C﴿ oven while making the remaining cakes.</Text>
                            <Text style={styles.directionsText}>Meanwhile, mix the stock, oyster sauce, soy sauce, and rice wine in a saucepan. Dissolve the cornstarch in 2 tbsp cold water, and stir into the stock mixture. Bring to a boil over high heat, stirring constantly until thickened; simmer for 1 minute. Serve the cakes with the sauce and rice.</Text>
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
                <Text style={styles.buttonText}>Egg Fu Yung</Text>
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
        backgroundColor: "#663399",
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

export default EggFuYungRecipeModal;