import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker'; 
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons from expo
import { useRouter } from "expo-router";

const EditProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const router = useRouter();

  const handleSave = () => {
    router.push('/Profile'); // Navigate to the desired screen
  };
  // Request permission to access media library
  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access media library is required!');
      }
    };
    requestPermission();
  }, []);

  // Function to handle image selection
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
        console.log(result.uri);  // Add this to check the image URI
        setProfilePicture(result.uri);
      }
      
  };


  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Profile Picture Section */}
      <View style={styles.profilePictureWrapper}>
        <TouchableOpacity style={styles.profilePictureContainer} onPress={pickImage}>
        {profilePicture ? (
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        ) : (
        <Image 
            source={require('../assets/DefaultProfile.jpg')}  // Use a default image
            style={styles.profilePicture} 
          />
        )}

        </TouchableOpacity>

        {/* Edit Icon outside the profile picture */}
        <TouchableOpacity style={styles.editIconContainer} onPress={pickImage}>
          <MaterialIcons name="edit" size={15} color="#FFF" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subHeader}>Update your profile and information</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="person" size={20} color="#333" />
          <TextInput style={styles.input} placeholder="First Name" />
        </View>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="person" size={20} color="#333" />
          <TextInput style={styles.input} placeholder="Last Name" />
        </View>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="email" size={20} color="#333" />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="location-on" size={20} color="#333" />
          <TextInput style={styles.input} placeholder="Address" />
        </View>
      </View>

      {/* Password Setting Section */}
      <Text style={styles.subHeader}>Password Setting</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="lock" size={20} color="#333" />
          <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry />
        </View>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="lock" size={20} color="#333" />
          <TextInput style={styles.input} placeholder="Re-enter Password" secureTextEntry />
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]}
        onPress={handleSave}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.saveButton,]}
        onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  contentContainer: {
    padding: 20,
  },
  profilePictureWrapper: {
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 20,
  },
  profilePictureContainer: {
    position: "relative", 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#EEE",
    borderRadius: 50,
    height: 100,
    width: 100,
    overflow: "hidden", 
  },  
  profilePicture: {
    height: "100%",
    width: "100%",
  },
  profilePictureText: {
    fontSize: 14,
    color: "#333",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  editIconContainer: {
    position: 'absolute', 
    bottom: 5, 
    right: '40%', 
    backgroundColor: "#808080",
    borderRadius: 50,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  subHeader: {
    fontSize: 16,
    marginVertical: 10,
    color: "#666",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 14,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 20,
  },
  saveButton: {
    backgroundColor: "#FFCC00",
  },
  cancelButton: {
    backgroundColor: "#DDD",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#333",
  },
});

export default EditProfile;
