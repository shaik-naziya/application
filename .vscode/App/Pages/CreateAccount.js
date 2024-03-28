import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

export default function CreateAccount() {
  const navigation = useNavigation();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);


  const handleCreateAccount = () => {
    // Add your logic to handle account creation here
    console.log("Creating account with:", {
      fullname,
      email,
      password,
      confirmPassword,
    });
    
    navigation.navigate("CenterForm"); // Replace "YourTargetScreen" with the screen name you want to navigate to

  };

  useEffect(() => {
    // Check if the user is signed in and display a success message
    if (isSignedIn) {
      console.log("Successfully signed in!");
      // You can navigate to another screen or perform any other action here
    }
  }, [isSignedIn]);

  const handleSignIn = () => {
    // Add your actual sign-in logic here
    // For demonstration purposes, setting isSignedIn to true
    setIsSignedIn(true);
  };


  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Create Account</Text> */}
      {/* <Image
        style={styles.imageLogo}
        source={require("./../Assets/Images/logo.jpg")}
      /> */}

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={fullname}
        onChangeText={(text) => setFullname(text)}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />

      {/* <Button
        style={styles.button}
        title="Create Account"
        onPress={handleCreateAccount}
      >
        <Text style={styles.buttonText}>Create Account</Text>
        
        <Pressable onPress={() => navigation.navigate("CreateAccount")}>
          {" "}
        </Pressable>
        </Button>
      
      <Text style={styles.bottom}>Do you have an account?</Text>
      <Text style={styles.text}>Sign Up</Text> */}
      
      <TouchableOpacity 
      style={styles.CreateAccountButton}
       onPress={handleSignIn}>
        <Pressable onPress={() => navigation.navigate("CenterForm")}>
        <Text style={styles.createAccountButtonText}>Sign Up</Text></Pressable>
      </TouchableOpacity>
      <Text style={styles.bottom}>Already have an account? Sign Up</Text>
      <Text></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 42,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  bottom: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
  },
  text: {
    marginLeft: 130,
  },
  body: {
    backgroundColor: "white",
  },
  imageLogo: {
    width: 70,
    height: 50,
    marginLeft: 260,
  },
  CreateAccountButton: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 20,
    width: "85%",
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",

  },
});
