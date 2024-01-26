import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MapPage, TranslatePage, UserPage } from './components';
import { Feather } from '@expo/vector-icons';
import { COLORS } from './constant';
import * as Location from 'expo-location';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status === 'granted') {
          console.log('Foreground location permission granted');
          // Now you can use Expo Location APIs
        } else {
          console.log('Foreground location permission denied');
          // Handle the case where the user denies location permission
        }
      } catch (error) {
        console.error('Error requesting foreground location permission:', error);
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route})=>({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.p1,
        },
        tabBarIcon: ()=>{
          let iconName;

            if (route.name === 'Map') {
              iconName = "compass";
            } else if (route.name === 'Translate') {
              iconName = "camera";
            }else if (route.name === 'Profile') {
              iconName = "user";
            }
            return <Feather name={iconName} size={24} color="black" />
        }
      })}>
        <Tab.Screen name="Translate" component={TranslatePage}/>
        <Tab.Screen name="Map" component={MapPage}/>
        <Tab.Screen name="Profile" component={UserPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
