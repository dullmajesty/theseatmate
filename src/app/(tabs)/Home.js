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
import { useRouter } from "expo-router";

const Home = () => {
  const [searchText, setSearchText] = useState(""); // State for the search input
  const router = useRouter();

  // Local image
  const pic1 = require("../../assets/pic1.jpg");

  // Initial dummy data for recommendations
  const initialRecommendations = [
    { id: 1, name: "Study Hub CDO", location: "San Agustin St, Cagayan de Oro", image: pic1 },
    { id: 2, name: "Fruition Co-working Space", location: "Lourdes Dormitory Bldg, Ilig", image: pic1 },
    { id: 3, name: "Precious MZone Learning Hub", location: "8th St beside Church, Nazareth", image: pic1 },
    { id: 4, name: "Tech Space CDO", location: "Rizal St, Cagayan de Oro", image: pic1 },
    { id: 5, name: "The Hive Co-working", location: "Centrio Mall, Cagayan de Oro", image: pic1 },
    { id: 6, name: "Study Corner", location: "Puntod, Cagayan de Oro", image: pic1 },
    { id: 7, name: "Work Together Hub", location: "Gusa, Cagayan de Oro", image: pic1 },
    { id: 8, name: "Idea Space", location: "Macapagal St, Cagayan de Oro", image: pic1 },
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
            placeholderTextColor="#fff"
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
                <Text style={styles.cardLocation}>
                  <Icon name="map-pin" size={16} color="#F6B01A" /> {item.location}
                </Text>
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
  searchBar: { flexDirection: "row", alignItems: "center", backgroundColor: "#F6B01A", borderRadius: 25, height: 50, paddingHorizontal: 20 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: "#fff" },
  recommendationHeader: { padding: 15 },
  recommendationHeaderText: { fontSize: 20, fontWeight: "bold", color: "#333" },
  recommendationContainer: { padding: 15 },
  card: { backgroundColor: "#FFF", borderRadius: 10, marginBottom: 15, overflow: "hidden" },
  cardImage: { width: "100%", height: 150 },
  cardContent: { padding: 10 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#333" },
  cardRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  cardLocation: { fontSize: 14, color: "#666", flex: 1 },
  likeButton: { marginLeft: 10 },
});

export default Home;
