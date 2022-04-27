import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, ScrollView, Alert } from "react-native";

const RedVelvetCakeRecipeModal = () => {
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
                            <Text style={styles.modalText}>Red Velvet Cake</Text>
                            <Text style={styles.modalText}>Ingredients - Dry</Text>
                            <Text style={styles.directionsText}>2 2/3 cups (400 g) plain cake flour</Text>
                            <Text style={styles.directionsText}>2 tbsp (10 g) cocoa powder , unsweetened</Text>
                            <Text style={styles.directionsText}>1 tsp (5 g) baking soda / bi-carb soda , NOT baking powder (Note 2)</Text>
                            <Text style={styles.directionsText}>Pinch of salt</Text>
                            <Text style={styles.mdoalText}>Ingredients - Wet</Text>
                            <Text style={styles.directionsText}>1/2 cup (115 g) unsalted butter</Text>
                            <Text style={styles.directionsText}>1 1/2 cups (330 g) caster / superfine white sugar</Text>
                            <Text style={styles.directionsText}>2 eggs</Text>
                            <Text style={styles.directionsText}>1 cup (250ml) vegetable oil</Text>
                            <Text style={styles.directionsText}>2 tsp vanilla extract (or essence)</Text>
                            <Text style={styles.directionsText}>1 cup (250 ml) buttermilk , at room temperature (Note 4)</Text>
                            <Text style={styles.directionsText}>2 1/2 tbsp red food colouring liquid (UK: use Gel, Note 7)</Text>
                            <Text style={styles.modalText}>Ingredients - Frosting</Text>
                            <Text style={styles.directionsText}>▢14 oz (400 g) Philadelphia Cream Cheese, block , softened but not too soft</Text>
                            <Text style={styles.directionsText}>1/2 cup (115 g) unsalted butter , softened (but not too soft)</Text>
                            <Text style={styles.directionsText}>1 1/2 tsp vanilla extract</Text>
                            <Text style={styles.directionsText}>4 cups (450 g) soft icing sugar / powdered sugar</Text>
                            <Text style={styles.modalText}>Directions - Cake</Text>
                            <Text style={styles.directionsText}>Preheat oven to 180C/350F (all oven types). Butter 2 x 21cm / 8″ round cake pans (sides and base) and dust with cocoa powder.</Text>
                            <Text style={styles.directionsText}>Sift the Dry Ingredients and whisk to combine in a bowl.</Text>
                            <Text style={styles.directionsText}>Place butter and sugar in a bowl and beat with electric beater or in stand mixer until smooth and well combined (use paddle)</Text>
                            <Text style={styles.directionsText}>Add eggs, one at a time, beating in between to combine. At first it will look curdle – keep beating until it’s smooth.</Text>
                            <Text style={styles.directionsText}>Add vegetable oil, vinegar, vanilla, buttermilk and red food colouring. Beat until combined and smooth (Note 5).</Text>
                            <Text style={styles.directionsText}>Add Dry Ingredients. Beat until just combined – some small lumps is ok, that’s better than over mixing.</Text>
                            <Text style={styles.directionsText}>Divide batter between cake pans. Bake for 25 – 30 minutes on the same shelf, or until a toothpick inserted into the centre comes out clean. (Note 6)</Text>
                            <Text style={styles.directionsText}>Rest for 10 minutes in the pan then turn out onto a cooling rack and allow to cool.</Text>
                            <Text style={styles.modalText}>Directions - Frosting</Text>
                            <Text style={styles.directionsText}>Beat together the cream cheese, butter, and vanilla for 3 minutes. Add icing sugar and beat for two minutes or until frosting is light and fluffy
                                NOTE: if frosting is too runny, just add more icing sugar</Text>
                            <Text style={styles.directionsText}>cut top off the cake using a serrated knife</Text>
                            <Text style={styles.directionsText}>Spread one cake with 1 1/2 cups of forsting. Top with the other cake. Spread top and sides with remaining frosting</Text>
                            <Text style={styles.directionsText}>Optional: Crumble offcuts and use to decorate the top tim and base of the cake</Text>
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
                <Text style={styles.buttonText}>Red Velvet Cake</Text>
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

export default RedVelvetCakeRecipeModal;