import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Home = () => {
  const [searchText, setSearchText] = useState(""); // State for the search input

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.text}>SEATMATE!</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          placeholderTextColor="#aaa"
          value={searchText}
          onChangeText={(text) => setSearchText(text)} // Update the state with entered text
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  mainContent: {
    paddingTop: 20,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  searchContainer: {
    paddingHorizontal: 20, // Add padding to the sides
    paddingBottom: 20, // Space below the search bar
  },
  searchInput: {
    height: 50, // Height of the input
    backgroundColor: "#F6B01A", // Orange background for the input
    borderRadius: 25, // Rounded edges
    paddingHorizontal: 20, // Internal padding
    fontSize: 16, // Font size
    color: "#FFF", // Text color
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.1, // iOS shadow opacity
    shadowRadius: 4, // iOS shadow radius
    elevation: 3, // Android shadow
  },
  text: {
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Home;
