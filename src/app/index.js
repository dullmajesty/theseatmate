import { router } from 'expo-router'; 
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <Image
        source={require('../../assets/icon.png')} // Replace with your actual image path
        style={styles.splashImage}
      />
      

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate('SignIn')} // Navigates to the next page
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#201B51', // Dark blue background color
  },
  splashImage: {
    width: 200, // Increased width
    height: 400, // Increased height
    marginBottom: 20, // Space between the image and text
  },
  button: {
    backgroundColor: '#FFFFFF', // White button color
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25, // Rounded corners
  },
  buttonText: {
    fontSize: 16,
    color: '#201B51', // Dark blue text for the button
    fontWeight: 'bold',
  },
});

export default WelcomePage;
