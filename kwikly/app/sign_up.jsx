import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Make sure email and password are not empty
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    // Handle password mismatch
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Send sign-up data to backend
    fetch('http://<your-server-ip>:5000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, confirmPassword }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("Sign up successful!");
          navigation.navigate("Login");
        } else {
          alert("Sign up failed. Please try again.");
        }
      })
      .catch(err => {
        console.error(err);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <View style={styles.container}>
      {/* Illustration */}
      {/* <Image source={require('../assets/images/login-bg.jpg')} style={styles.illustration} /> */}

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Email/Phone number"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Social Sign-Up */}
      <Text style={styles.orText}>Or Sign up with</Text>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialText}>Sign up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialText}>Sign up with Facebook</Text>
      </TouchableOpacity>

      {/* Navigate to Sign In */}
      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Text style={styles.linkText} onPress={() => navigation.navigate("Login")}>
          Sign in here
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: "100%",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    marginVertical: 10,
    fontSize: 14,
    color: "#888",
  },
  socialButton: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#eee",
    alignItems: "center",
    marginBottom: 10,
  },
  socialText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 15,
    fontSize: 14,
  },
  linkText: {
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default SignUpScreen;

