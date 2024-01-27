import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { GuidePage, MapPage, TranslatePage, UserPage } from './components';
import { Feather } from '@expo/vector-icons';
import { COLORS } from './constant';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  const [guide, setGuide] = useState([{
    name: 'John Doe',
    profileImage: require('./assets/guide.png'), // Add an image for the guide
    description: 'Experienced guide ready to assist you on your journey.',
    guided: "2",
  }]);

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
        tabBarIcon: ({ focused })=>{
          let iconName;
          let opacity = focused ?  1:.2 ;
          let size= focused? 35:24;

            if (route.name === 'Map') {
              iconName = "compass";
            } else if (route.name === 'Translate') {
              iconName = "camera";
            }else if (route.name === 'Profile') {
              iconName = "user";
            }
            return <View style={{ opacity, padding: 2, borderRadius: 20 }}>
            <Feather name={iconName} size={size} color="black" />
          </View>
        }
      })}>
        <Tab.Screen name="Translate" component={TranslatePage}/>
        <Tab.Screen name="Map" component={MapPage}/>
        <Tab.Screen name="Profile" component={UserPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
