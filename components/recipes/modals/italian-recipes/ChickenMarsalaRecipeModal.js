import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const ChickenMarsalaRecipeModal = () => {
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
                            <Text style={styles.modalText}>Chicken Marsala</Text>
                            <Text style={styles.modalText}>Ingredients - Chicken</Text>
                            <Text>1-1/2 pounds boneless skinless chicken breasts, pounded ¼-inch thick (see note), or chicken tenderloins</Text>
                            <Text>3 tablespoons all-purpose flour</Text>
                            <Text>Salt and pepper to season</Text>
                            <Text>1 tablspoon olive oil for frying (canola oil/vegetable oil are fine)</Text>
                            <Text>3 tablespoons unsalted butter, divided</Text>
                            <Text>1 (8-oz) package pre-sliced bella or button mushrooms</Text>
                            <Text>3 tablespoons finely chopped shallots, from 1 medium shallot</Text>
                            <Text>2 cloves garlic, minced</Text>
                            <Text>2/3 cup chicken broth</Text>
                            <Text>2/3 cup dry Marsala wine</Text>
                            <Text>2/3 cup heavy cream</Text>
                            <Text>2 teaspoons chopped fresh thyme</Text>
                            <Text>2 tablespoons chopped fresh Italian parsley, for serving (optional)</Text>
                            <Text style={styles.modalText}>Directions</Text>
                            <Text style={styles.directionsText}>Place the flour, 3/4 teaspoon salt, and 1/4 teaspoon pepper in a ziplock bag. Add the chicken to the bag; seal bag tightly and shake to coat chicken evenly. Set aside.</Text>
                            <Text style={styles.directionsText}>Heat the oil and 2 tablespoons of the butter in a large skillet over medium-high heat.</Text>
                            <Text style={styles.directionsText}>Place the flour-dusted chicken in the pan, shaking off any excess first, and cook, turning once, until the chicken is golden and just barely cooked through, about 5 to 6 minutes total.</Text>
                            <Text style={styles.directionsText}>Transfer the chicken to a plate and set aside.</Text>
                            <Text style={styles.directionsText}>Melt the remaining tablespoon of butter in the pan. Add the mushrooms and cook, stirring frequently, until the mushrooms begin to brown, 3 to 4 minutes. Add the shallots, garlic, and 1/4 teaspoon of salt; cook for 1 to 2 minutes more.</Text>
                            <Text style={styles.directionsText}>Add the broth, Marsala, heavy cream, thyme, 1/4 teaspoon salt, and 1/8 teaspoon of pepper; use a wooden spoon to scrape any brown bits from the pan into the liquid.</Text>
                            <Text style={styles.directionsText}>Bring the liquid to a boil, then reduce the heat to medium and gently boil, uncovered, until the sauce is reduced by about half, slightly thickened, and darkened in color, 10 to 15 minutes (you’re going for a thin cream sauce; it won’t start to thicken until the very end of the cooking time)</Text>
                            <Text style={styles.directionsText}>Add the chicken back to the pan, along with any juices that accumulated on the plate. Reduce the heat to low and simmer until the chicken is warmed through and the sauce thickens a bit more, 2 to 3 minutes.</Text>
                            <Text style={styles.directionsText}>Sprinkle with parsley, if using, and serve.</Text>
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
                <Text style={styles.buttonText}>Chicken Parmesan</Text>
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
        backgroundColor: "#483D8B",
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

export default ChickenMarsalaRecipeModal;