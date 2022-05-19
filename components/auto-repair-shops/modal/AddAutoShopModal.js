import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default class AddAutoRepairShopModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            auto_shop_id: 0,
            name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            modalVisible: false,
            submitted: false
        };
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    onHandleNameChange = (input) => {
        this.setState({
            name: input
        })
    }

    onHandleAddressChange = (input) => {
        this.setState({
            address: input
        })
    }

    onHandleCityChange = (input) => {
        this.setState({
            city: input
        })
    }

    onHandleStateChange = (input) => {
        this.setState({
            state: input
        })
    }

    onHandleZipChange = (input) => {
        this.setState({
            zip: input
        })
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const data = {
            auto_shop_id: this.state.auto_shop_id,
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }

        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/auto-repair-shops/add-auto-shop', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            console.log("Added new auto repair shop")
            this.setState({
                submitted: true
            })
        }).catch((error) => console.log(error))
    }

    newAutoShop = () => {
        this.setState({
            name: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        })
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
                                <Text style={styles.modalText}>Add Auto Repair Shop</Text>
                                <Text>{this.state.name} has been submitted!</Text>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={this.newSong}
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
                                <Text style={styles.modalText}>Add Auto Repair Shop</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Auto Shop Name"
                                    value={this.state.name}
                                    onChangeText={(event) => this.onHandleNameChange(event)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Address"
                                    value={this.state.address}
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
                                {/* <TextInput
                                    style={styles.input}
                                    placeholder="State"
                                    value={this.state.state}
                                    onChangeText={(event) => this.onHandleStateChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                /> */}
                                <Picker
                                    selectedValue={this.state.state}
                                    onValueChange={(event) => this.onHandleStateChange(event)}
                                    mode="dropdown"
                                    style={styles.picker}
                                >
                                    <Picker.Item value="Alabama" label="Alabama" />
                                    <Picker.Item value="Alaska" label="Alaska" />
                                    <Picker.Item value="Arizona" label="Arizona" />
                                    <Picker.Item value="Arkansas" label="Arkansas" />
                                    <Picker.Item value="California" label="California" />
                                    <Picker.Item value="Colorado" label="Colorado" />
                                    <Picker.Item value="Conneticut" label="Conneticut" />
                                    <Picker.Item value="Delaware" label="Delaware" />
                                    <Picker.Item value="Florida" label="Florida" />
                                    <Picker.Item value="Georgia" label="Georgia" />
                                    <Picker.Item value="Hawaii" label="Hawaii" />
                                    <Picker.Item value="Idaho" label="Idaho" />
                                    <Picker.Item value="Illinois" label="Illinois" />
                                    <Picker.Item value="Indiana" label="Indiana" />
                                    <Picker.Item value="Iowa" label="Iowa" />
                                    <Picker.Item value="Kansas" label="Kansas" />
                                    <Picker.Item value="Kentucky" label="Kentucky" />
                                    <Picker.Item value="Louisiana" label="Louisiana" />
                                    <Picker.Item value="Maine" label="Maine" />
                                    <Picker.Item value="Maryland" label="Maryland" />
                                    <Picker.Item value="Massachussetts" label="Massachussetts" />
                                    <Picker.Item value="Michigan" label="Michigan" />
                                    <Picker.Item value="Minnesota" label="Minnesota" />
                                    <Picker.Item value="Mississippi" label="Mississippi" />
                                    <Picker.Item value="Missouri" label="Missouri" />
                                    <Picker.Item value="Montana" label="Montana" />
                                    <Picker.Item value="Nebraska" label="Nebraska" />
                                    <Picker.Item value="Nevaada" label="Nevada" />
                                    <Picker.Item value="New Hampshire" label="New Hampshire" />
                                    <Picker.Item value="New Jersey" label="New Jersey" />
                                    <Picker.Item value="New Mexico" label="New Mexico" />
                                    <Picker.Item value="New York" label="New York" />
                                    <Picker.Item value="North Carolina" label="North Carolina" />
                                    <Picker.Item value="North Dakota" label="North Dakota" />
                                    <Picker.Item value="Ohio" label="Ohio" />
                                    <Picker.Item value="Oklahoma" label="Oklahoma" />
                                    <Picker.Item value="Oregon" label="Oregon" />
                                    <Picker.Item value="Pennsylvania" label="Pennsylvania" />
                                    <Picker.Item value="Rhode Island" label="Rhode Island" />
                                    <Picker.Item value="South Carolina" label="South Carolina" />
                                    <Picker.Item value="South Dakota" label="South Dakota" />
                                    <Picker.Item value="Tennessee" label="Tennessee" />
                                    <Picker.Item value="Texas" label="Texas" />
                                    <Picker.Item value="Utah" label="Utah" />
                                    <Picker.Item value="Vermont" label="Vermont" />
                                    <Picker.Item value="Virginia" label="Virginia" />
                                    <Picker.Item value="Washington" label="Washington" />
                                    <Picker.Item value="West Virginia" label="West Virginia" />
                                    <Picker.Item value="Wisconsin" label="Wisconsin" />
                                    <Picker.Item value="Wyoming" label="Wyoming" />
                                </Picker>
                                <TextInput
                                    style={styles.input}
                                    placeholder="ZipCode"
                                    value={this.state.zip}
                                    onChangeText={(event) => this.onHandleZipChange(event)}
                                    multiline={true}
                                    numberOfLines={4}
                                />
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
                    <Text style={styles.buttonText}>Add Auto Repair Shop</Text>
                </TouchableOpacity>
            </View>
        );
    }

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
        backgroundColor: '#FFEBCD'
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