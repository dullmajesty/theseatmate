import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../lib/supabase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Attempt to log in with Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      Alert.alert('Success', 'Logged in successfully!');
      router.push('/Home'); // Navigate to Home page after successful login
    } catch (error) {
      Alert.alert('Error', error.message); // Show error message for failed login
    }
  };

  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={styles.appTitle}>SEATMATE</Text>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>WELCOME BACK</Text>

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#FFFFFF"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#FFFFFF"
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      {/* Options Row */}
      <View style={styles.optionsRow}>
        <Text style={styles.smallText}>□ Remember me</Text>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>

      {/* Sign-Up Option */}
      <View style={styles.signUpRow}>
        <Text style={styles.smallText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/SignUp')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Alternative Login Options */}
      <Text style={styles.orLoginText}>or log in with</Text>

      <View style={styles.socialButtonsRow}>
        {/* Google Button */}
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>

        {/* Facebook Button */}
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201B51', // Dark blue background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FFB400', // Yellow background
    borderRadius: 10,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 15,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  smallText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  forgotPasswordText: {
    fontSize: 12,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#201B51',
  },
  signUpRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 12,
    color: '#FFB400', // Yellow text
    textDecorationLine: 'underline',
  },
  orLoginText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#201B51',
  },
});

export default LoginPage;
