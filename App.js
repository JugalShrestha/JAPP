import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MapPage, TranslatePage, UserPage } from './components';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route})=>({
        headerShown: false,
        tabBarShowLabel: false,
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
        <Tab.Screen name="Map" component={MapPage}/>
        <Tab.Screen name="Translate" component={TranslatePage}/>
        <Tab.Screen name="Profile" component={UserPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
