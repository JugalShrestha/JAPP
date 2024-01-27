// LoginScreen.js
import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Text } from "react-native";
const LoginScreen = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here, e.g., validate credentials
    if (username === "" && password === "") {
      alert("Login successful!");
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <View style={styles.modalContainer}>
        <View style={styles.loginbox}></View>
        <View style={styles.container}>
          <Text style={styles.logintitle}>Login to LocalGuide</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
          <Button title="Login" onPress={handleLogin} />
          <View style={styles.signupbox}>
            <Text style={styles.signup}>
              Don't have an account?Sign up here.
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end", // Align to the bottom
    backgroundColor: "white", // Set a background color if needed
    marginBottom: 120,
    alignItems: "center",
  },
  container: {
    flex: 5.6,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 60,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
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
