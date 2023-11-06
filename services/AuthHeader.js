import AsyncStorage from '@react-native-async-storage/async-storage';

const authHeader = () => {
  // try {
  //   // Retrieve the JWT token from AsyncStorage
  //   const token = AsyncStorage.getItem('DeGuzmanStuffAnywhere_Mobile_Token');

  //   if (token) {
  //     // Set the token in the request headers

  //     response = {
  //       'Authorization': `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     }
  //     console.log(response)
  //     return response;
  //   } else {
  //     console.log('Token is not found')
  //     return {
  //       'Content-Type': 'application/json',
  //     };
  //   }
  // } catch (error) {
  //   console.error('Error while getting the JWT token from AsyncStorage:', error);
  //   return {
  //     'Content-Type': 'application/json',
  //   };
  // }

  const token = AsyncStorage.getItem('DeGuzmanStuffAnywhere_Mobile_Token')
};

export default authHeader;
