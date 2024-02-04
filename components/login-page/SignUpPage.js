import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import {FIREBASE_AUTH, FIREBASE_DB} from '../../firebaseConfig';
import { COLORS } from '../../constant';
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [languages, setLanguages] = useState('');

  const navigation = useNavigation();
  
  const auth = FIREBASE_AUTH;

  const handleSignUp = async () => {
    try {
        // Create user with email and password
        const response = await createUserWithEmailAndPassword(auth,email, password);
        const user = response.user;

        // Update user profile with display name
        await updateProfile(user,{displayName: name});

        try{
            await setDoc(doc(FIREBASE_DB,"users",user.uid),{
                name: name,
                address: address,
                languages: languages.split(",").map(lang=>lang.trim()),
            });
            console.log("created data named users");
        }catch(error){
            console.log(error.message+" failed to create!");
        }

        alert('Success! User registered successfully!');
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Registration failed. Please check your information.');
    }
  };

  return (
    <View style={{width: "100%",height: "100%",justifyContent: "center",backgroundColor: COLORS.p1, alignItems: "center",gap: 25,}}>
      <View style={{width:"80%",gap:10}}>
        <Text>Email:</Text>
        <TextInput style={{borderWidth:1,width:"100%",padding:10,borderRadius:15}} value={email} onChangeText={setEmail} autoCapitalize="none" />

        <Text>Name:</Text>
        <TextInput style={{borderWidth:1,width:"100%",padding:10,borderRadius:15}} value={name} onChangeText={setName} autoCapitalize="none" />

        <Text>Address:</Text>
        <TextInput style={{borderWidth:1,width:"100%",padding:10,borderRadius:15}} value={address} onChangeText={setAddress} autoCapitalize="none" />

        <Text>Password:</Text>
        <TextInput style={{borderWidth:1,width:"100%",padding:10,borderRadius:15}} secureTextEntry value={password} onChangeText={setPassword} autoCapitalize="none"/>

        <Text>Languages Spoken (comma-separated):</Text>
        <TextInput style={{borderWidth:1,width:"100%",padding:10,borderRadius:15}} value={languages} onChangeText={setLanguages}/>

        <Button title="Sign Up" onPress={handleSignUp} />
        <Button title="go back" onPress={()=>navigation.navigate("login")}/>
      </View>
    </View>
  );
};

export default SignUpPage;