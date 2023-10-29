import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";

function UserPicker(props) {
  const [users, setUsers] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);

  useEffect(() => {
    fetch('http://ec2-3-89-42-57.compute-1.amazonaws.com:8080/app/users/all')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => {
        console.log(error)
        Alert.alert(`Application facing issue: ${error}` )
      })
  }, [])

  const handleValueChange = (input) => {
    props.onHandleUserChange(input)
    setSelectedValue(input)
  }

  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={handleValueChange}
      mode="dropdown"
      style={styles.picker}
    >
      <Picker.Item label="Choose User" value="Choose User" />
      {users &&
        users.map((user,index) => {
          return (
            <Picker.Item value={user.user_id} label={user.username} key={index} />
          )
        })}
    </Picker>
  );
}

const styles = StyleSheet.create({
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  }
})

export default UserPicker;