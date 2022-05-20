import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput } from "react-native";
import RestaurantTypePicker from '../../pickers/RestaurantTypePicker';

export default class AddRestaurantModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurant_id: 0,
            name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            restaurant_type_id: 0,
            submitted: false,
            modalVisible: false
        }
    }

    setModalVisible = (visible) => { this.setState({ modalVisible: visible })}
    newRestaurant = () => { this.setState({ name: "", address: "", city: "", state: "", zip: "", restaurant_type_id: 0 })}
    onHandleNameChange = (input) => { this.setState({ name: input }) }
    onHandleAddressChange = (input) => { this.setState({ address: input }) }
    onHandleCityChange = (input) => { this.setState({ city: input }) }
    onHandleStateChange = (input) => { this.setState({ state: input }) }
    onHandleZipChange = (input) => { this.setState({ zip: input }) }
    onHandleRestaurantTypeChange = (input) => { this.setState({ restaurant_type_id: input }) }

    onHandleRestaurantType = (restaurant_type_id) => {
        this.setState({
            restaurant_type_id:restaurant_type_id
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            restaurant_type_id: this.state.restaurant_type_id
        }

        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/restaurants/add-restaurant-information', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(() => this.setState({ submitted: true})).catch((error) => console.log(error))
    }

    render() {
        const { modalVisible } = this.state
        return (
            <View style={styles.view}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    {this.state.submitted ? (
                        <View style={styles.addCenteredView}>
                            <View style={styles.addModalView}>
                                <Text style={styles.modalText}>Add Restaurant</Text>
                                <Text>{this.state.name} has been submitted!</Text>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={this.newRestaurant}
                                >
                                    <Text style={styles.textStyle}>Add</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={() => this.setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Close </Text>
                                </Pressable>
                            </View>
                        </View>
                    ) : (
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Add Restaurant</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Address"
                                    value={this.state.address}
                                    onChangeText={(event) => this.onHandleNameChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Address"
                                    value={this.state.author}
                                    onChangeText={(event) => this.onHandleAddressChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="City"
                                    value={this.state.city}
                                    onChangeText={(event) => this.onHandleCityChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="State"
                                    value={this.state.state}
                                    onChangeText={(event) => this.onHandleStateChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Zip"
                                    value={this.state.zip}
                                    onChangeText={(event) => this.onHandleZipChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Restaurant Type ID"
                                    value={this.state.restaurant_type_id}
                                    onChangeText={(event) => this.onHandleRestaurantTypeChange(event)}
                                />
                                <RestaurantTypePicker />
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={(event) => this.onSubmit(event)}
                                >
                                    <Text style={styles.textStyle}>Submit</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={() => this.setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Close </Text>
                                </Pressable>
                            </View>
                        </View>
                    )}

                </Modal>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text style={styles.buttonText}>Add Restaurant</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    view: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#663399",
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
});
