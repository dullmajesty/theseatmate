import React, { useState } from "react";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("Home");

  // Define a color map for each tab
  const colorMap = {
    Home: "#F6B01A", 
    Like: "#09013A", 
    Timeline: "#F6B01A", 
    Profile: "#09013A",
  };

  return (
    <Tabs
      screenListeners={({ navigation }) => ({
        state: (e) => {
          const currentRoute = e.data.state.routes[e.data.state.index].name;
          setActiveTab(currentRoute); // Update activeTab based on the current route
        },
      })}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute", // Floating effect
          bottom: 40, // Distance from the bottom
          left: 20,
          right: 20,
          height: 57, // Adjust height for better spacing
          borderRadius: 35, // Rounded corners
          backgroundColor: "#FFFFFF",
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
          elevation: 5, // Shadow for Android
        },
        tabBarShowLabel: false, // Hide default labels
        tabBarActiveTintColor: "#7F3DFF", // Active color
        tabBarInactiveTintColor: "gray", // Inactive color
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="home"
                color={activeTab === "Home" ? colorMap["Home"] : "gray"}
                size={24}
              />
              {activeTab === "Home" && <Text style={[styles.label, { color: colorMap["Home"] }]}>Home</Text>}
            </View>
          ),
        }}
      />

      {/* Like Tab */}
      <Tabs.Screen
        name="Like"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="heart"
                color={activeTab === "Like" ? colorMap["Like"] : "gray"}
                size={24}
              />
              {activeTab === "Like" && <Text style={[styles.label, { color: colorMap["Like"] }]}>Likes</Text>}
            </View>
          ),
        }}
      />

      {/* Timeline Tab */}
      <Tabs.Screen
        name="Timeline"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="clock-time-four-outline"
                color={activeTab === "Timeline" ? colorMap["Timeline"] : "gray"}
                size={24}
              />
              {activeTab === "Timeline" && (
                <Text style={[styles.label, { color: colorMap["Timeline"] }]}>Timeline</Text>
              )}
            </View>
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="account"
                color={activeTab === "Profile" ? colorMap["Profile"] : "gray"}
                size={24}
              />
              {activeTab === "Profile" && (
                <Text style={[styles.label, { color: colorMap["Profile"] }]}>Profile</Text>
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    height: 50, // Adjust height to align the icon properly
    marginTop: 15, // Add spacing to lower the icon slightly
  },
  label: {
    fontSize: 12,
    marginTop: 1, // Space between icon and label
  },
});

export default DashboardLayout;
