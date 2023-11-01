import AsyncStorage from '@react-native-async-storage/async-storage';
import deviceStorage from '../helper/DeviceStorage';

export default function authHeader() {
    const token = AsyncStorage.getItem('DeGuzmanStuffAnywhere_Mobile_Token');
    return token;
}