import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const PecanPieRecipeModal = () => {
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
                            <Text style={styles.modalText}>Pecan Pie</Text>
                            <Text style={styles.modalText}>Ingredients - Pie Crust</Text>
                            <Text>3 cups all-purpose flour</Text>
                            <Text>1 teaspoon salt</Text>
                            <Text>3/4 cup vegetable shortening/lard</Text>
                            <Text>1 egg</Text>
                            <Text>1 tablespoon distilled white vinegar</Text>
                            <Text>Onion</Text>
                            <Text style={styles.modalText}>Ingredients - Filling</Text>
                            <Text>1 cup of granulated sugar</Text>
                            <Text>3 tablespoons brown sugar</Text>
                            <Text>1/2 teaspoons of salt</Text>
                            <Text>1 teaspoon of vanilla</Text>
                            <Text>3 whole eggs beaten</Text>
                            <Text>1 cup of chopped pecans</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>First whip up the pie crust: Mix the flour and salt in a bowl. Add the shortening and slated butter. Work the butter into the flour usign a dough cutter until the mixture resembles tiny pebbles</Text>
                            <Text style={styles.directionsText}>Add the egg, 5 tablespoons cold water and the white vinegar. Stir until just combined. Divide the dough in half and chill until needed. (You will only need one half for this recipe, reserve the other half for another use</Text>
                            <Text style={styles.directionsText}>Next make the filling: Mix the granulated sugar, brown sugar, salt, corn syrup, butter, vanilla and eggs together in a bowl.</Text>
                            <Text style={styles.directionsText}>Preheat the oven to 350 degrees F. Roll out one dough half on a lightly floured surface to fit your pie pan. Pour the pecans in the bottom of the unbaked pie shell. Pour the syrup mixture over the top. Cover the top and crust lightly/gently with foil</Text>
                            <Text style={styles.directionsText}>Bake the pie for 30 minutes. Remove the foil, and then continue baking for 20 minutes, being careful not to burn the crust or pecans. The pie should not be overly jiggly when you remove it from the oven (though it will jiggle a bit). If it shakes a lot, cover with foil and bake for an additional 20 minute or until set. Required baking time seems to vary widely with this recipe. Sometimes it takes 50 minutes, sometimes it takes 75!</Text>
                            <Text style={styles.directionsText}>Allow to cool for several hours or overnight. Serve in thin slivers.</Text>
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
                <Text style={styles.buttonText}>Pecan Pie</Text>
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

export default PecanPieRecipeModal;