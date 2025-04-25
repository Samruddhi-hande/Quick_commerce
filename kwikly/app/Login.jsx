import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground style={styles.background}>
        <Image source={require('../assets/images/login-bg.jpg')} style={styles.illustration} />

        {/* Title */}
        <Text style={styles.title}>Getting Started</Text>
        <Text style={styles.subtitle}>Let's sign up and start shopping</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#414141" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            placeholderTextColor="#414141"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={20} color="#414141" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#414141"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <TouchableOpacity onPress={() => navigation.navigate("sign_up")}>
          <Text style={styles.footerText}>
            Don't have an account? <Text style={styles.loginText}>Sign up</Text>
          </Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  illustration: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.53)',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    elevation: 3,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  forgotPassword: {
    fontSize: 12,
    color: '#F36060',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  footerText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
  loginText: {
    color: '#007bff',
    fontWeight: '700',
  },
});
