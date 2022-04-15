import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ComfortRecipeCategory = ({ navigation }) => {


  return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Comfort Recipes')}
      >
        <Text>Comfort Recipes</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#ADD8E6",
    padding: 10,
    borderRadius: 50,
    margin: 10,
    shadowRadius: 50,
  },
  buttoniew: {
      fontSize: 30
  }
});

export default ComfortRecipeCategory;