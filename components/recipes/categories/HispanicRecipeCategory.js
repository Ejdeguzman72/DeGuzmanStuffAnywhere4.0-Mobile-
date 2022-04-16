import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HispanicRecipeCategory = ({ navigation }) => {


  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Hispanic Recipes')}
    >
      <Text style={styles.buttonText}>Hispanic Recipes</Text>
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
    backgroundColor: "#0000CD",
    padding: 10,
    width: 160,
    height: 160,
    borderRadius: 50,
    margin: 10,
  },
  buttonView: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10
  },
  buttonText: {
    fontSize: 20,
    flexWrap: 'wrap',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 20,
    textTransform: 'uppercase'
  }
});

export default HispanicRecipeCategory;