import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Notifications");

  const notifications = [
    { title: "New Deal Alert!", description: "Reserve a study spot at Study Hub and get ₱50 off your booking! Offer valid until October 31. Don't miss out!" },
    { title: "Last Chance!", description: "Promo code SEAT10 expires tonight! Use it for 10% off your next reservation. Secure your spot before it's gone!" },
    { title: "Booking Reminder", description: "You have a reservation at Fruition Co-working Space tomorrow at 10:00 AM. Don't forget to check in on time!" },
    { title: "Reservation Confirmed", description: "Your booking at Fruition Co-working Space for October 25, 2:00 PM is confirmed!" },
  ];

  const history = {
    upcoming: [
      {
        title: "Fruition Co-working Space",
        date: "October 25, 2024",
        time: "2:00 PM - 5:00 PM",
        people: 4,
        location: "Lourdes Dormitory Bldg, 17th St.",
        image: require("../../assets/pic2.jpg"),
      },
    ],
    past: [
      {
        title: "Tech Space CDO",
        date: "October 10, 2024",
        time: "10:00 AM - 12:00 PM",
        people: 2,
        location: "6th Nazareth, across 19-6th corner",
        image: require("../../assets/pic4.jpg"),
      },
      {
        title: "Fruition Co-working Space",
        date: "September 28, 2024",
        time: "1:00 PM - 3:00 PM",
        people: 1,
        location: "Lourdes Dormitory Bldg, 17th St.",
        image: require("../../assets/pic2.jpg"),
      },
    ],
  };

  const renderNotifications = () => (
    <ScrollView style={styles.scrollView}>
      {notifications.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );

  const renderHistory = () => (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.sectionTitle}>Upcoming Reservation</Text>
      {history.upcoming.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={item.image} style={styles.storeImage} />
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.date}</Text>
          <Text style={styles.cardDescription}>{item.time}</Text>
          <Text style={styles.cardDescription}>For {item.people} People</Text>
          <Text style={styles.cardDescription}>{item.location}</Text>
        </View>
      ))}
      <Text style={styles.sectionTitle}>Past Reservation</Text>
      {history.past.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={item.image} style={styles.storeImage} />
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.date}</Text>
          <Text style={styles.cardDescription}>{item.time}</Text>
          <Text style={styles.cardDescription}>For {item.people} People</Text>
          <Text style={styles.cardDescription}>{item.location}</Text>
        </View>
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Timeline</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Notifications" && styles.activeTab]}
          onPress={() => setActiveTab("Notifications")}
        >
          <Text style={styles.tabText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "History" && styles.activeTab]}
          onPress={() => setActiveTab("History")}
        >
          <Text style={styles.tabText}>History</Text>
        </TouchableOpacity>
      </View>
      {activeTab === "Notifications" ? renderNotifications() : renderHistory()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#333",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#C4B5E0",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  storeImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default Home;
