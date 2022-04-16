import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AmericanCategories = ({ navigation }) => {


  return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('American')}
      >
        <Text style={styles.buttonText}>American Recipes</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    textAlign: 'center',
    justifyContent: 'center',
},
button: {
    alignItems: "center",
    backgroundColor: "#191970",
    padding: 10,
    width: 160,
    height: 160,
    borderRadius: 50,
    margin: 10,
    elevation: 2,
},
buttonView: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
    flexWrap: 'wrap',
    flexShrink: 1
},
buttonText: {
    fontSize: 20,
    flexWrap: 'wrap',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 20,
    textTransform: 'uppercase',
    flexWrap: 'wrap',
    flexShrink: 1
}
});

export default AmericanCategories;