import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import UsersInfoService from '../../services/UsersInfoService';

function UserPicker(props) {
  const [users, setUsers] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);

  useEffect(() => {
    UsersInfoService.getAllUsersService()
      .then((response) => (response.data))
      .then((json) => setUsers(json.list))
      .catch((error) => console.log(`Error fetching data: ${error}`))
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
            <Picker.Item value={user.userId} label={user.username} key={index} />
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