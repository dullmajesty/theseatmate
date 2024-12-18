import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import icon package
import Icon from "react-native-vector-icons/FontAwesome";

const data = [
  {
    id: "1",
    title: "Study Hub CDO",
    location: "San Agustin St. corner Pabayo St.",
    image: require("../../assets/pic1.jpg"), // Update with correct path
    initialRating: 0,
  },
  {
    id: "2",
    title: "Smart Work CDO",
    location: "6th Nazareth, across 19-6th corner",
    image: require("../../assets/pic1.jpg"), // Update with correct path
    initialRating: 0,
  },
  {
    id: "3",
    title: "D' Study Hub",
    location: "Capistrano-Echem Street CDO",
    image: require("../../assets/pic1.jpg"), // Update with correct path
    initialRating: 0,
  },
];

const Like = () => {
  const [likedItems, setLikedItems] = useState({});
  const [ratings, setRatings] = useState(
    data.reduce((acc, item) => ({ ...acc, [item.id]: item.initialRating }), {})
  );

  // Toggle like functionality
  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Update rating functionality
  const setRating = (id, rating) => {
    setRatings((prev) => ({
      ...prev,
      [id]: rating,
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Top part: Image */}
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        {/* Heart icon stays at the top-right of the image */}
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => toggleLike(item.id)}
        >
          <Icon
            name={likedItems[item.id] ? "heart" : "heart-o"}
            size={20}
            color={likedItems[item.id] ? "red" : "#888"}
          />
        </TouchableOpacity>
      </View>
      {/* Bottom part: Title, rating, and location */}
      <View style={styles.infoContainer}>
        <View style={styles.titleAndStarsContainer}>
          <TouchableOpacity style={styles.titleButton}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
          {/* Rating stars placed beside the title */}
          <View style={styles.ratingContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <TouchableOpacity key={index} onPress={() => setRating(item.id, index + 1)}>
                <Text style={styles.star}>{ratings[item.id] > index ? "★" : "☆"}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Location */}
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={16} color="#E53935" />
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Likes</Text>
      </View>
      {/* Content */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CAC4D0",
  },
  header: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF", // White text
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: "#FFF",
    marginBottom: 16,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 125,
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  infoContainer: {
    padding: 10,
  },
  titleAndStarsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    fontSize: 20,
    color: "#FFD700",
    marginRight: 2,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  location: {
    fontSize: 14,
    color: "#777",
    marginLeft: 4,
  },
});

export default Like;
