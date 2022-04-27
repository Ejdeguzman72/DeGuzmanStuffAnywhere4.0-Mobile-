import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const PancakeRecipeModal = () => {
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
                            <Text style={styles.modalText}>Pancakes</Text>
                            <Text style={styles.modalText}>Ingredients</Text>
                            <Text>1.5 (386g) cups milk</Text>
                            <Text>1 egg</Text>
                            <Text>2 cups (300g) all-purpose flour</Text>
                            <Text>1/4 cup (62g) granulated sugar</Text>
                            <Text>1 tsp (4g) salt</Text>
                            <Text>1/4 tsp (1g) baking soda</Text>
                            <Text>1 Tbsp (12g) baking powder</Text>
                            <Text>2 (21g) Tbsp melted butter</Text>
                            <Text>2 tbsp of vanilla extract</Text>
                            <Text>1 tbsp of ground cinnamon</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>In a small bowl, whisk together egg and milk.</Text>
                            <Text style={styles.directionsText}>In a separate bowl, whisk and combine all-purpose flour with granulated sugar, salt, baking soda, and baking powder.</Text>
                            <Text style={styles.directionsText}>Mix the dry ingredients with the wet ingredients while constantly whisking.</Text>
                            <Text style={styles.directionsText}>While whisking add in melted unsalted butter. Whisk until combined. Rest for 5 minutes.</Text>
                            <Text style={styles.directionsText}>Preheat a nonstick skillet over medium. Spray with spray oil or unsalted butter.</Text>
                            <Text style={styles.directionsText}>Once hot spoon ¼” dollops of the pancake batter. Cook for 2-3 minutes or until golden brown on the bottom.</Text>
                            <Text style={styles.directionsText}>Flip and cook for an additional 2-3 minutes. Repeat with the rest of the batter.</Text>
                            <Text style={styles.directionsText}>Top with butter and drizzle with maple syrup to serve.</Text>
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
                <Text style={styles.buttonText}>Pancakes</Text>
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
        backgroundColor: "#FFEBCD",
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

export default PancakeRecipeModal;