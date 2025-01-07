import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { supabase } from "../../lib/supabase"; // Import Supabase client
import { useNavigation } from "@react-navigation/native";

const UserProfile = () => {
  const navigation = useNavigation();

  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", username: "", email: "" }); // State to store user info

  useEffect(() => {
    fetchUserProfile(); // Fetch user profile on component mount
  }, []);

  const fetchUserProfile = async () => {
    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      const { data: profile, error: profileError } = await supabase
        .from("profiles") // Replace "profiles" with your Supabase table name
        .select("name, username, email")
        .eq("id", user.id);

      if (profileError) throw profileError;
      if (profile && profile.length > 0) {
        setUserInfo(profile[0]); // Set the first profile entry in case there are multiple records
      } else {
        console.log("No profile found for the user");
        Alert.alert("Error", "Profile not found.");
      }
    } catch (error) {
      Alert.alert("Error", error.message); // Handle errors
    }
  };

  const navigateToEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const handleSignIn = () => {
    navigation.navigate("SignIn"); // Navigate to SignIn screen
  };

  // Toggle Handlers
  const toggleNotifications = () => {
    setIsNotificationsEnabled((prevState) => !prevState);
    console.log("Notifications:", !isNotificationsEnabled ? "Enabled" : "Disabled");
  };

  const toggleDarkMode = () => {
    setIsDarkModeEnabled((prevState) => !prevState);
    console.log("Dark Mode:", !isDarkModeEnabled ? "Enabled" : "Disabled");
  };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require("../../assets/DefaultProfile.jpg")} // Replace with your actual path
          style={styles.avatarImage}
        />
        <Text style={styles.name}>{userInfo.name || "Name not set"}</Text>
        <Text style={styles.username}>{userInfo.username || "Username not set"}</Text>
        <Text style={styles.email}>{userInfo.email || "Email not set"}</Text>
        <TouchableOpacity style={styles.editButton} onPress={navigateToEditProfile}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Settings Section */}
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingsOption} onPress={navigateToEditProfile}>
          <View style={styles.optionLeft}>
            <Icon name="settings" size={20} color="#333" style={styles.icon} />
            <Text style={styles.settingsText}>Account Settings</Text>
          </View>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
        {/* Notifications Toggle */}
        <View style={styles.settingsOption}>
          <View style={styles.optionLeft}>
            <Icon name="notifications" size={20} color="#333" style={styles.icon} />
            <Text style={styles.settingsText}>Notifications</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.toggle,
              isNotificationsEnabled ? styles.toggleEnabled : styles.toggleDisabled,
            ]}
            onPress={toggleNotifications}
          >
            <View
              style={[
                styles.toggleCircle,
                isNotificationsEnabled ? styles.toggleCircleEnabled : styles.toggleCircleDisabled,
              ]}
            />
          </TouchableOpacity>
        </View>
        {/* Dark Mode Toggle */}
        <View style={styles.settingsOption}>
          <View style={styles.optionLeft}>
            <MaterialCommunityIcons
              name="moon-waning-crescent"
              size={20}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.settingsText}>Dark Mode</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.toggle,
              isDarkModeEnabled ? styles.toggleEnabled : styles.toggleDisabled,
            ]}
            onPress={toggleDarkMode}
          >
            <View
              style={[
                styles.toggleCircle,
                isDarkModeEnabled ? styles.toggleCircleEnabled : styles.toggleCircleDisabled,
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleSignIn}>
        <View style={styles.logoutButtonContent}>
          <Icon name="logout" size={20} color="#FFF" style={styles.logoutIcon} />
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 20,
  },
  profileSection: {
    alignItems: "center",
    padding: 50,
  },
  avatarImage: {
    width: 130,
    height: 130,
    borderRadius: 80,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  username: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  editButton: {
    backgroundColor: "#FFCC00",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 20,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  settingsContainer: {
    backgroundColor: "#FFF",
    width: "90%",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 50,
  },
  settingsOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  settingsText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  arrow: {
    fontSize: 16,
    color: "#666",
  },
  toggle: {
    width: 40,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  toggleEnabled: {
    backgroundColor: "#4CAF50",
  },
  toggleDisabled: {
    backgroundColor: "#D3D3D3",
  },
  toggleCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  toggleCircleEnabled: {
    backgroundColor: "#FFF",
    alignSelf: "flex-end",
  },
  toggleCircleDisabled: {
    backgroundColor: "#FFF",
    alignSelf: "flex-start",
  },
  logoutButton: {
    backgroundColor: "#201b51",
    width: "40%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 20,
  },
  logoutButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserProfile;
