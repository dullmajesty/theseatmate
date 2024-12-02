import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={styles.appTitle}>SEATMATE</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>SIGN UP WITH SEATMATE</Text>

      {/* Name Input */}
      <TextInput
        placeholder="Name"
        placeholderTextColor="#FFFFFF"
        style={styles.input}
      />

      {/* Username Input */}
      <TextInput
        placeholder="Username"
        placeholderTextColor="#FFFFFF"
        style={styles.input}
      />

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#FFFFFF"
        style={styles.input}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#FFFFFF"
        secureTextEntry={true}
        style={styles.input}
      />

      {/* Terms and Conditions */}
      <View style={styles.termsContainer}>
        <Text style={styles.smallText}>
          □ Creating an account means you're okay with our{' '}
          <Text style={styles.linkText}>Terms of Service</Text>,{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>, and our default{' '}
          <Text style={styles.linkText}>Notification Settings</Text>.
        </Text>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity 
        style={styles.createAccountButton}
        onPress={() => router.navigate('Home')}  
        >
        <Text style={styles.createAccountButtonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>

      {/* Alternative Sign-Up Options */}
      <Text style={styles.orSignUpText}>or sign up with</Text>

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
  subtitle: {
    fontSize: 16,
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
  termsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  smallText: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#FFB400', // Yellow links
  },
  createAccountButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  createAccountButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#201B51',
  },
  orSignUpText: {
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

export default SignUpPage;
