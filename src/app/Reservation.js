import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons"; // Importing Ionicons for the back icon

const Reservation = () => {
  const { name, location, imageId } = useLocalSearchParams();
  const router = useRouter();

  // State for reservation form
  const [selectedPerson, setSelectedPerson] = useState("Enter Number of Persons");
  const [selectedDate, setSelectedDate] = useState("mm/dd/yyyy");
  const [selectedTime, setSelectedTime] = useState("00:00 AM/PM"); // New state for time
  const [selectedRate, setSelectedRate] = useState(""); // Track selected rate

  // State for handling image
  const imageMap = {
    "1": require("../assets/pic1.jpg"),
    "2": require("../assets/pic1.jpg"),
  };

  const image = imageMap[String(imageId)] || null;

  // Handle date and time input changes
  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the selected date in the state
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time); // Update the selected time in the state
  };

  // Handle rate selection
  const handleRateSelect = (rate) => {
    setSelectedRate(rate); // Update selected rate
  };

  // Navigate to reservation summary
  const navigateToSummary = () => {
    router.push({
      pathname: "/reservation-summary",
      params: {
        name,
        location,
        rate: selectedRate,
        date: selectedDate,
        time: selectedTime, // Include selected time
        persons: selectedPerson,
      },
    });
  };

  // Navigate back to home
  const navigateBackHome = () => {
    router.push("Home");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBackHome}>
          <Ionicons
            name="arrow-back"
            size={20}
            color="#fffff"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reservation</Text>
      </View>

      {/* Image and Details Section */}
      <View style={styles.card}>
        <View style={styles.cardImageContainer}>
          {image ? (
            <Image source={image} style={styles.cardImage} />
          ) : (
            <Text style={{ color: "red" }}>Image not found</Text>
          )}
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardSubtitle}>{location}</Text>
          <Text style={styles.cardDescription}>
            Smart Work Study Hub & Workspace in Cagayan de Oro is a great spot
            for studying or working. It has fast internet, comfy seating, and a
            quiet environment perfect for focus. The space is modern, clean, and
            affordable, making it ideal for students and professionals.
          </Text>
        </View>
      </View>

      {/* Reservation Form Section */}
      <View style={styles.reservationSection}>
        <Text style={styles.sectionTitle}>Reservation Form</Text>
        <View style={styles.row}>
          {/* Number of persons input */}
          <TextInput
            style={styles.personInput}
            placeholder="Enter number of persons"
            value={selectedPerson}
            onChangeText={setSelectedPerson}
          />

          {/* Date input */}
          <TextInput
            style={styles.dateInput}
            placeholder="mm/dd/yyyy"
            value={selectedDate}
            onChangeText={handleDateChange}
            keyboardType="numeric"
          />
        </View>

        {/* Time input */}
        <TextInput
          style={styles.timeInput}
          placeholder="hh:mm AM/PM"
          value={selectedTime}
          onChangeText={handleTimeChange}
          keyboardType="default"
        />

        <Text style={styles.sectionTitle}>Rate</Text>
        <View style={styles.rateRow}>
          <TouchableOpacity
            style={styles.rateBox}
            onPress={() => handleRateSelect("₱35 / hour")}
          >
            <Text style={styles.ratePrice}>₱35</Text>
            <Text style={styles.rateLabel}>/ hour</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rateBox}
            onPress={() => handleRateSelect("₱100 / 3 hours")}
          >
            <Text style={styles.ratePrice}>₱100</Text>
            <Text style={styles.rateLabel}>/ 3 hours</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rateBox}
            onPress={() => handleRateSelect("₱300 / day")}
          >
            <Text style={styles.ratePrice}>₱300</Text>
            <Text style={styles.rateLabel}>/ day</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Person Info</Text>
        {/* Name input */}
        <TextInput style={styles.nameInput} placeholder="Name" />
        {/* Phone number input */}
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.button} onPress={navigateToSummary}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CAC4D0",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    marginBottom: 16,
    flexDirection: "row", // Aligns items in a row
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A1A1A",
    flex: 1, // Ensures the title is centered
  },
  backIcon: {
    marginRight: 10,
    top: 7,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImageContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  cardImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
  },
  reservationSection: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  personInput: {
    backgroundColor: "#F6B01A",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  dateInput: {
    backgroundColor: "#F6B01A",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  timeInput: {
    backgroundColor: "#F6B01A",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  rateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  rateBox: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    width: "30%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  ratePrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F6B01A",
  },
  rateLabel: {
    fontSize: 12,
    color: "#555",
  },
  nameInput: {
    backgroundColor: "#F6B01A",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  phoneInput: {
    backgroundColor: "#F6B01A",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  button: {
    backgroundColor: "#09013A",
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 16,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default Reservation;
