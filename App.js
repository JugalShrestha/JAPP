import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, HomePage, SignUpPage } from './components';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';
import { User } from 'firebase/auth';

const Stack = createNativeStackNavigator();

export default function App() {

  const [user, setUser] = useState(null | User);

  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH,(user)=>{
      setUser(user);
    })
  },[])

  return (
    <>
    {
      user? 
      <HomePage/>
      :
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false,}}>
          <Stack.Screen name="login" component={LoginScreen}/>
          <Stack.Screen name="signUp" component={SignUpPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    }
  </>
  )
}