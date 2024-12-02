import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={styles.appTitle}>SEATMATE</Text>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>WELCOME BACK</Text>

      {/* Username Input */}
      <TextInput
        placeholder="Username"
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

      {/* Options Row */}
      <View style={styles.optionsRow}>
        <Text style={styles.smallText}>
          □ Remember me
        </Text>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => router.navigate('Home')}
        >
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>

      {/* Sign-Up Option */}
      <View style={styles.signUpRow}>
        <Text style={styles.smallText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}
          onPress={() => router.navigate('SignUp')}>Sign Up</Text>
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
