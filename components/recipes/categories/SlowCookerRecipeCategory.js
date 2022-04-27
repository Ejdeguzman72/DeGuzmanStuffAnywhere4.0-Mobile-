import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PotRoastRecipeModal from "../modals/slow-cooker-recipes/PotRoastRecipeModal";
import PulledPorkRecipeModal from "../modals/slow-cooker-recipes/PulledPorkRecipeModal";

const SlowCookerRecipeCategory = ({ navigation }) => {


  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Slow Cooker Recipes')}
    >
      <Text style={styles.buttonText}>Slow Cooker Recipes</Text>
      <PotRoastRecipeModal />
      <PulledPorkRecipeModal />
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
    backgroundColor: "#2F4F4F",
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

export default SlowCookerRecipeCategory;