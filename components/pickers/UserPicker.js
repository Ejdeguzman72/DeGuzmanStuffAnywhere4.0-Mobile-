import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const UserPicker = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

//   useEffect(() => {
//       fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/users/all')
//         .then((response) => setItems(response.data))
//         .then((error) => console.log(error))
//   }, [])

//   const handleChange = (input) => {
//     props.handleUser(input);
//     console.log(input)
//   }

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}

export default UserPicker;