// LoginScreen.js
import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constant";
import { Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH} from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigation = useNavigation();

  const auth = FIREBASE_AUTH;
  
  const handleLogin = async () => {
    try{
      const response = await signInWithEmailAndPassword(auth,email,password);
      alert("Logged in!"); 
    }
    catch(error){
      alert("Wrong Credentials!");
    }
  };

  return (
    <>
      <View style={styles.modalContainer}>
        <Image source={require("../../assets/demologo.png")} style={{width:300,height:220}}/>
        <View style={styles.container}>
          <TextInput
            placeholder="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            autoCapitalize="none"
            style={styles.input}
          />
          <View style={{flexDirection: "row",gap:10,alignItems:"center",justifyContent:"center"}}>
            <Text style={{}}>Don't have an account?</Text>
            <Button title="Sign up!"  color={COLORS.s1} onPress={()=>{navigation.navigate("signUp")}}/>
          </View>
        </View>
          <TouchableOpacity style={{width: "80%",}} onPress={handleLogin}>
            <Text style={{padding:15,backgroundColor:COLORS.n1,borderRadius:20,fontSize:15,textTransform:"uppercase",fontWeight:"bold",color:COLORS.p1,paddingLeft:25,paddingRight:25,alignSelf:"flex-end"}}>Login</Text>
          </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "white", 
    alignItems: "center",
    gap: 25,
  },
  container: {
    width: "80%",
    padding: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    backgroundColor: COLORS.n1,
  },
  input: {
    width: "100%",
    padding: 15,
    backgroundColor: COLORS.s2,
    borderWidth: 1,
    borderRadius: 25,
  },
  loginbox: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  logintitle: {
    marginBottom: 40,
    fontSize: 35,
  },
  signup: {
    color: "#716969",
    paddingTop: 20,
    textDecorationLine: "underline",
  },
  signupbox: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
