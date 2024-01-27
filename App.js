import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image } from "react-native";
import { MapPage, TranslatePage, UserPage, LoginScreen } from './components';
import { Feather } from '@expo/vector-icons';
import { COLORS } from './constant';
import * as Location from 'expo-location';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";

const Tab = createBottomTabNavigator();

export default function App() {
  
  const [modalOpen, setModalOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setModalOpen(false);
  };

  useEffect(() => {
    setModalOpen(true);
  }, []);

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
      {isLoggedIn ? (
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
      </Tab.Navigator>): (
        <>
          {modalOpen && (
            <View style={styles.batta}>
              <Modal
                visible={modalOpen}
                transparent={false}
                animationType="slide"
              >
                <View style={styles.modalContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.img}
                      source={require("./assets/demologo.jpg")}
                    />
                  </View>

                  <View style={styles.modalco1}>
                    <TouchableOpacity
                      onPress={() => {
                        setModalOpen(false);
                      }}
                    >
                      <Text style={styles.modalButton}>Want a guide</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalco1}>
                    <TouchableOpacity
                      onPress={() => {
                        setModalOpen(false);
                      }}
                    >
                      <Text style={styles.modalButton}>Want to guide</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          )}
          <LoginScreen setIsLoggedIn={setIsLoggedIn} />
        </>
      )}
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
    height: 150,
    width: 150,
  },
});