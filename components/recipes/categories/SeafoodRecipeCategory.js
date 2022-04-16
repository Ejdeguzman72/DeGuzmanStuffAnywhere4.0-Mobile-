import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SeafoodRecipeCategory = ({ navigation }) => {


  return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Seafood Recipes')}
      >
        <Text style={styles.buttonText}>Seafood Recipes</Text>
      </TouchableOpacity>
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
    padding: 10,
    width: 160,
    height: 160,
    borderRadius: 50,
    margin: 10,
    shadowRadius: 50,
    margin: 10,
  },
  buttoniew: {
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 20,
    textTransform: 'uppercase'
  }
});

export default SeafoodRecipeCategory;