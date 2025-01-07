import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Home = () => {
  const [searchText, setSearchText] = useState(""); // State for the search input
  const router = useRouter();

  // Local image
  const pic1 = require("../../assets/pic1.jpg");
  const pic2 = require("../../assets/pic2.jpg");
  const pic3 = require("../../assets/pic3.jpg");
  const pic4 = require("../../assets/pic4.jpg");
  const pic5 = require("../../assets/pic5.jpg");
  const pic6 = require("../../assets/pic6.jpg");
  const pic7 = require("../../assets/pic7.jpg");
  const pic8 = require("../../assets/pic8.jpg");
  


  // Initial dummy data for recommendations
  const initialRecommendations = [
    { id: 1, name: "Study Hub CDO", location: "San Agustin St, Cagayan de Oro", image: pic1 },
    { id: 2, name: "Fruition Co-working Space", location: "Lourdes Dormitory Bldg, Ilig", image: pic2 },
    { id: 3, name: "Precious MZone Learning Hub", location: "8th St beside Church, Nazareth", image: pic3 },
    { id: 4, name: "Tech Space CDO", location: "Rizal St, Cagayan de Oro", image: pic4 },
    { id: 5, name: "The Hive Co-working", location: "Centrio Mall, Cagayan de Oro", image: pic5 },
    { id: 6, name: "Study Corner", location: "Puntod, Cagayan de Oro", image: pic6 },
    { id: 7, name: "Work Together Hub", location: "Gusa, Cagayan de Oro", image: pic7 },
    { id: 8, name: "Idea Space", location: "Macapagal St, Cagayan de Oro", image: pic8 },
  ];

  const [recommendations, setRecommendations] = useState(
    initialRecommendations.map((item) => ({ ...item, liked: false }))
  );

  // Function to handle heart icon click
  const handleLike = (id) => {
    setRecommendations((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Search Section */}
      <View style={styles.searchContainer}>
        <Text style={styles.title}>SEATMATE 🪑</Text>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#fff" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search here..."
            placeholderTextColor="#ddd"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
      </View>

      {/* Recommendations Section */}
      <View style={styles.recommendationHeader}>
        <Text style={styles.recommendationHeaderText}>Recommendations</Text>
      </View>

      <ScrollView contentContainerStyle={styles.recommendationContainer}>
        {recommendations.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() =>
              router.push(
                `/Reservation?name=${encodeURIComponent(item.name)}&location=${encodeURIComponent(
                  item.location
                )}&imageId=${item.id}`
              )
            }
          >
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <View style={styles.cardRow}>
                <View style={styles.locationContainer}>
                  <Ionicons name="location-sharp" size={16} color="#E53935" />
                  <Text style={styles.cardLocation}>{item.location}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleLike(item.id)}
                  style={styles.likeButton}
                >
                  <Icon
                    name={item.liked ? "heart" : "heart-o"}
                    size={20}
                    color={item.liked ? "red" : "#888"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#CAC4D0" },
  searchContainer: { paddingVertical: 20, paddingHorizontal: 15 },
  title: { fontSize: 24, fontWeight: "bold", color: "#FFF", textAlign: "center" },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6B01A",
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 20,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: "#fff" },
  recommendationHeader: { padding: 15 },
  recommendationHeaderText: { fontSize: 20, fontWeight: "bold", color: "#333" },
  recommendationContainer: { padding: 15 },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  cardImage: { width: "100%", height: 150 },
  cardContent: { padding: 10 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#333" },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  cardLocation: { fontSize: 14, color: "#666", marginLeft: 5 },
  likeButton: { marginLeft: 10 },
});

export default Home;
