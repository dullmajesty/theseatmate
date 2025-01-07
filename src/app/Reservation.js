import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"; // Import the DateTimePicker
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Back Icon

const Reservation = () => {
  const { name, location, imageId } = useLocalSearchParams();
  const [selectedPersonName, setSelectedPersonName] = useState("");
  const router = useRouter();

  // States
  const [selectedPerson, setSelectedPerson] = useState("Enter Number of Persons");
  const [selectedDate, setSelectedDate] = useState(new Date()); // State for date
  const [selectedTime, setSelectedTime] = useState(new Date()); // State for time
  const [showDatePicker, setShowDatePicker] = useState(false); // Toggle date picker
  const [showTimePicker, setShowTimePicker] = useState(false); // Toggle time picker
  const [selectedRate, setSelectedRate] = useState("");

  const imageMap = {
    "1": require("../assets/pic1.jpg"),
    "2": require("../assets/pic2.jpg"),
    "3": require("../assets/pic3.jpg"),
    "4": require("../assets/pic4.jpg"),
    "5": require("../assets/pic5.jpg"),
    "6": require("../assets/pic6.jpg"),
    "7": require("../assets/pic7.jpg"),
    "8": require("../assets/pic8.jpg"),
  };
  const image = imageMap[String(imageId)] || null;

  // Handlers
  const handleDateChange = (event, date) => {
    setShowDatePicker(Platform.OS === "ios");
    if (date) setSelectedDate(date);
  };

  const handleTimeChange = (event, time) => {
    setShowTimePicker(Platform.OS === "ios");
    if (time) setSelectedTime(time);
  };

  const navigateToSummary = () => {
    const subtotal = selectedRate * selectedPerson; // Just an example of calculation
    const total = subtotal; // Add logic for taxes, discounts, etc.

    router.push({
      pathname: "/reservation-summary",
      params: {
        storeName: name,
        personName: selectedPersonName,
        location,
        rate: selectedRate,
        date: selectedDate.toDateString(),
        time: selectedTime.toLocaleTimeString(),
        persons: selectedPerson,
        subtotal: subtotal,
        total: total,
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("Home")}>
          <Ionicons name="arrow-back" size={20} color="#fffff" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reservation</Text>
      </View>

      {/* Image Card */}
      <View style={styles.card}>
        {image && <Image source={image} style={styles.cardImage} />}
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardSubtitle}>{location}</Text>
        </View>
      </View>

      {/* Reservation Form */}
      <View style={styles.reservationSection}>
        <Text style={styles.sectionTitle}>Reservation Form</Text>

        {/* Number of persons input */}
        <View style={styles.inputRow}>
          <Ionicons name="people" size={24} color="#F6B01A" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter number of persons"
            value={selectedPerson}
            onChangeText={setSelectedPerson}
          />
        </View>

        {/* Date input */}
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.inputRow}>
          <Ionicons name="calendar" size={24} color="#F6B01A" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="mm/dd/yyyy"
            editable={false}
            value={selectedDate.toDateString()} // Display the selected date
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        {/* Time input */}
        <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.inputRow}>
          <Ionicons name="time" size={24} color="#F6B01A" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="hh:mm AM/PM"
            editable={false}
            value={selectedTime.toLocaleTimeString()} // Display the selected time
          />
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={selectedTime}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}

        <Text style={styles.sectionTitle}>Rate</Text>
        <View style={styles.rateRow}>
          <TouchableOpacity
            style={styles.rateBox}
            onPress={() => setSelectedRate("₱35 / hour")}
          >
            <Text style={styles.ratePrice}>₱35</Text>
            <Text style={styles.rateLabel}>/ hour</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rateBox}
            onPress={() => setSelectedRate("₱100 / 3 hours")}
          >
            <Text style={styles.ratePrice}>₱100</Text>
            <Text style={styles.rateLabel}>/ 3 hours</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rateBox}
            onPress={() => setSelectedRate("₱300 / day")}
          >
            <Text style={styles.ratePrice}>₱300</Text>
            <Text style={styles.rateLabel}>/ day</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Person Info</Text>

        {/* Name input */}
        <View style={styles.inputRow}>
          <Ionicons name="person" size={24} color="#F6B01A" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={selectedPersonName}
            onChangeText={setSelectedPersonName}
          />
        </View>

        {/* Phone number input */}
        <View style={styles.inputRow}>
          <Ionicons name="call" size={24} color="#F6B01A" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />
        </View>

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
    alignItems: "center", // Align items vertically in the center
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A1A1A",
    flex: 1, // Ensures the title is centered
  },
  backIcon: {
    marginRight: 10,
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
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    backgroundColor: "#F6B01A",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: "80%",
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
  button: {
    backgroundColor: "#09013A",
    borderRadius: 8,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Reservation;
