import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

export default function Login() {
  const navigation = useNavigation(); // Get the navigation prop

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

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
      <Image
        style={styles.image}
        source={require("./../Assets/Images/logo.jpg")}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.signInButton1]}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.verticalLine} />
        <TouchableOpacity
          style={[styles.button, styles.createAccountButton]}
          onPress={() => navigation.navigate("CreateAccount")}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      {/* Closing tag for buttonContainer View */}
      <View style={styles.horizontalLineContainer}>
        <View style={styles.horizontalLine} />
        <View style={styles.horizontalLine1} />
      </View>
      {/* Horizontal lines below Sign In and Create Account buttons */}
      <Text style={styles.emailInput}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.passwordInput}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        secureTextEntry={true} // To mask the entered text
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Pressable onPress={() => navigation.navigate("CreateAccount")}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </Pressable>
      </TouchableOpacity>
      <Text style={styles.bottom}>Do you have an account? Sign Up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 550,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20, // Only bottom margin visible
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    borderRadius: 8,
  },
  signInButton1: {
    backgroundColor: "#ffffff", // Sign In button color
  },
  createAccountButton: {
    backgroundColor: "#ffffff", // Create Account button color
    marginLeft: 5,
    color: "#00000", // Adjust spacing between buttons
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  verticalLine: {
    borderRightWidth: 1, // Add a vertical line between buttons
    borderRightColor: "#A09F9F", // Vertical line color
    height: 20, // Adjust the height as needed
    // marginHorizontal: 10, // Adjust spacing between the buttons and the line
  },
  horizontalLineContainer: {
    flexDirection: "row", // Arrange the horizontal lines side by side
    marginBottom: 10, // Only bottom margin visible
  },
  horizontalLine: {
    flex: 1, // Take up equal space
    borderBottomWidth: 3,
    marginBottom: 10,
    // marginRight: 3, // Adjust spacing between the lines
    color: "#A09F9F",
    borderBottomColor: "#000000", // Horizontal line color
  },
  horizontalLine1: {
    flex: 1, // Take up equal space
    borderBottomWidth: 3,
    marginBottom: 10,
    color: "#A09F9F",
    borderBottomColor: "#A09F9F", // Horizontal line color
  },
  image: {
    backgroundColor: "white",
  },
  emailInput: {
    marginRight: 240,
  },
  passwordInput: {
    marginRight: 220,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%", // Adjust the width based on your design
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  signInButton: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    width: "75%",
  },
  signInButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  bottom: {
    marginTop: 10,
  },
});
