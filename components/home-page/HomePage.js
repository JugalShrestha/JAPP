import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MapPage, UserPage, ExplorePage } from '..';
import { COLORS } from '../../constant';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import {StyleSheet,View,Text,TouchableOpacity,} from "react-native";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Tab = createBottomTabNavigator();

const HomePage = () => {
    useEffect(() => {
        const requestLocationPermission = async () => {
            try {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status === 'granted') {
                console.log('Foreground location permission granted');
            } else {
                console.log('Foreground location permission denied');
            }
            } catch (error) {
            console.error('Error requesting foreground location permission:', error);
            }
        };
        requestLocationPermission();
    }, []);

    return (
    <NavigationContainer independent>
        <Tab.Navigator screenOptions={({route})=>({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: COLORS.p1,
            borderTopWidth: 1,
            borderTopColor: COLORS.p2,
            height:50,
        },
        tabBarIcon: ({ focused })=>{
            let iconName;
            let opacity = focused ?  1:.5 ;
            let size= focused? 25:25;

            if (route.name === 'Map') {
                iconName = "map";
            } else if (route.name === 'explore') {
                iconName = "compass";
            }else if (route.name === 'Profile') {
                iconName = "user";
            }else if (route.name === 'Sos') {
            iconName = "bell";
            }
            return <View style={{ opacity, padding: 2, borderRadius: 20 }}>
            <Feather name={iconName} size={size} color={COLORS.p2} />
            </View>
        }
        })}>
        <Tab.Screen name="Map" component={MapPage}/>
        <Tab.Screen name="explore" component={ExplorePage}/>
        <Tab.Screen name="Profile" component={UserPage}/>
        </Tab.Navigator>
    </NavigationContainer>
    );    
}


const styles = StyleSheet.create({
    modalco1: {
      width: 200,
      height: 70,
      borderRadius: 12,
      marginTop: 50,
      marginLeft: 15,
      marginRight: 15,
      backgroundColor: "#CCC1C1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 50, // Adjust padding based on your design
    },
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end", // Align to the bottom
      backgroundColor: "white", // Set a background color if needed
      marginBottom: 120,
      alignItems: "center",
    },
    modalButton: {
      alignItems: "center",
      justifyContent: "center",
      height: 50, // Adjust height based on your design
      marginBottom: 30, // Add margin between buttons
      fontSize: 20,
    },
    imageContainer: {},
    img: {
      height: 300,
      width: 300,
    },
  });

export default HomePage