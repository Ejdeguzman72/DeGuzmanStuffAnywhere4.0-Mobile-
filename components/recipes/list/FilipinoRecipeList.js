import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal, Pressable, FlatList } from 'react-native';
import { Divider } from 'react-native-paper';
import RecipeService from '../../../services/RecipeService';
import { Alert } from 'react-native';

const FilipinoRecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentRecipe, setCurrentRecipe] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [modalVisible, setModalVisible] = useState(!modalVisible)

    setActiveRecipe = (recipe, index) => {
        setCurrentRecipe(recipe);
        setCurrentIndex(index)
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        const recipeTypeId = 7;
        RecipeService.getRecipesByType(recipeTypeId)
            .then((response) => (response.data))
            .then((json) => {
                setRecipes(json.list)
                console.log(recipes)
            })
            .catch((error) => {
                console.log(`Error fetching data: ${error}`)
                Alert.alert(`Error fetching data: ${error}`)
            })
    }, [])
    
    return (
        <ScrollView>
            <View style={styles.table}>
                {recipes &&
                    recipes.map((recipe, index) => (
                        <TouchableOpacity style={styles.container} key={index} avatar onPress={() => setCurrentRecipe(recipe, index)}>
                            <Text>{`Name: ${recipe.name}`}</Text>
                            <Text>{`Type: ${recipe.descr}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
                {currentRecipe ? (
                    <View style={styles.view}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(!modalVisible)}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Recipe</Text>
                                    <View style={styles.indexText}>
                                        <Text>Name:</Text><Text>{currentRecipe.name}</Text>
                                    </View>
                                    <View style={styles.indexText}>
                                        <Text>Description:</Text><Text>{currentRecipe.descr}</Text>
                                    </View>
                                    <FlatList
                                        data={currentRecipe.ingredients}
                                        keyExtractor={(item, index) => index.toString()}
                                        renderItem={({ item }) => <Text>{item}</Text>}
                                    />
                                    <Text>Directions:</Text>
                                    <FlatList
                                        data={currentRecipe.directions}
                                        keyExtractor={(item, index) => index.toString()}
                                        renderItem={({ item }) => <Text>{item}</Text>}
                                    />
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Close </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </View>
                ) : null}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    table: {
        padding: 10,
        flex: 1
    },
    view: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        textAlign: 'center',
        padding: 20,
        borderBottomWidth:1,
        borderTopWidth:1
    },
    contact: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black',
        fontFamily: 'monospace',
        fontSize: 15,
        justifyContent: 'center'
    },
    row: {
        padding: 10
    },
    listItem: {
        color: 'green'
    },
    centeredView: {
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
    buttonClose: {
        backgroundColor: 'black',
        width: 350,
        margin: 10,
        padding: 10
    },
    modalButton: {
        // width: 200,
        borderRadius: 20,
        padding: 10,
        margin: 10
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
    indexText: {
        height: 100,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 35,
        width: 300,
        textAlign: 'center',
        justifyContent: 'center',
        borderBottomWidth:1,
        borderTopWidth:1
    },
});

export default FilipinoRecipeList;