import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AutoShopScreen from '../screens/auto-repair-shops/AutoShopScreen';
import BookScreen from '../screens/book-recommendations/BookScreen';
import ContactInfoScreen from '../screens/contact-info/ContactInfoScreen';
import GymTrackerScreen from '../screens/gym-tracker/GymTrackerScreen';
import HomeScreen from '../screens/home/HomeScreen';
import MusicScreen from '../screens/music-recommendations/MusicScreen';
import RestaurantScreen from '../screens/restaurant-recommendations/RestaurantScreen';
import FinanceScreen from '../screens/finance/FinanceScreen';
import AutoFinanceScreen from '../screens/finance/auto-finances/AutoFinanceScreen';
import GeneralFinanceScreen from '../screens/finance/general-finances/GeneralFinanceScreen';
import MedicalFinanceScreen from '../screens/finance/medical-finances/MedicalFinanceScreen';
import MedicalOfficeScreen from '../screens/medical-offices/MedicalOfficeScreen';
import VehicleScreen from '../screens/vehicles/VehicleScreen';
import SocialMediaScreen from '../screens/social-media/SocialMediaScreen';
import UtilityScreen from '../screens/utility-info/UtilityScreen';
import DetailsScreen from '../screens/details/DetailsScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {    return (
        <NavigationContainer>
            <Stack.Navigator intialRouteName="Home">
                {/* <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} /> */}
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
                <Stack.Screen name="Books" component={BookScreen} options={{ title: 'Book'}} />
                <Stack.Screen name="Contact Info" component={ContactInfoScreen} options={{ title: 'Contact Info' }} />
                <Stack.Screen name="Gym Tracker" component={GymTrackerScreen} options={{ title: 'Gym Tracker'}} />

                <Stack.Screen name="Finances" component={FinanceScreen} options={{ title: 'Finance' }} />
                <Stack.Screen name="Auto-Finances" component={AutoFinanceScreen} options={{ title: 'Auto Finances' }} />
                <Stack.Screen name="Auto-Shops" component={AutoShopScreen} options={{ title: 'Auto Shops' }} />
                <Stack.Screen name="Vehicles" component={VehicleScreen} options={{ title: 'Vehicles' }} />
                <Stack.Screen name="General-Finances" component={GeneralFinanceScreen} options={{ title: 'General Finances'}} />
                <Stack.Screen name="Medical-Finances" component={MedicalFinanceScreen} options={{ title: 'Medical Finances' }} />
                <Stack.Screen name="Medical-Offices" component={MedicalOfficeScreen} options={{ title: 'Medical Offices' }} />

                <Stack.Screen name="Music" component={MusicScreen} options={{ title: 'Music' }} />
                <Stack.Screen name="Restaurants" component={RestaurantScreen} options={{ title: 'Restaurants' }} />
                <Stack.Screen name="Social Media" component={SocialMediaScreen} options={{ title: 'Social Media' }} />
                <Stack.Screen name="Utility Info" component={UtilityScreen} options={{title: 'Utility Info' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;