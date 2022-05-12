import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BarbequeRecipeCategory = ({ navigation }) => {


  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Barbeque Recipes')}
    >
      <Text style={styles.buttonText}>Barbeque Recipes</Text>
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
    backgroundColor: "#ADD8E6",
    padding: 10,
    width: 160,
    height: 160,
    borderRadius: 50,
    margin: 10,
    backgroundColor: '#20B2AA'
  },
  buttonView: {
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

export default BarbequeRecipeCategory;