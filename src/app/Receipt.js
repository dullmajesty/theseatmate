import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

const Receipt = () => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const { storeName, personName, location, rate, date, time, persons, subtotal, total } = useLocalSearchParams();

  const handleDownload = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Icon name="arrow-back" size={30} color="#09013A" /> {/* Adjusted size */}
        </TouchableOpacity>
        <Text style={styles.title}>e - Receipt</Text>
      </View>

      {/* White Receipt Container */}
      <View style={styles.receiptContainer}>
        {/* Reservation Details */}
        <View style={styles.detailsSection}>
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Icon name="storefront" size={20} color="#09013A" style={styles.icon} />
              <Text style={styles.text}>Store Name: {storeName}</Text>
            </View>
            <View style={styles.detailRow}>
              <Icon name="person" size={20} color="#09013A" style={styles.icon} />
              <Text style={styles.text}>Person Name: {personName}</Text>
            </View>
            <View style={styles.detailRow}>
              <Icon name="calendar" size={20} color="#09013A" style={styles.icon} />
              <Text style={styles.text}>Date: {date}</Text>
            </View>
            <View style={styles.detailRow}>
              <Icon name="people" size={20} color="#09013A" style={styles.icon} />
              <Text style={styles.text}>People: {persons}</Text>
            </View>
            <View style={styles.detailRow}>
              <Icon name="time" size={20} color="#09013A" style={styles.icon} />
              <Text style={styles.text}>Time: {time}</Text>
            </View>
            <View style={styles.detailRow}>
              <Icon name="star" size={20} color="#09013A" style={styles.icon} />
              <Text style={styles.Rate}>Rate: {rate}</Text>
            </View>
            <View style={styles.detailRow}>
              <Icon name="location" size={20} color="#09013A" style={styles.icon} />
              <Text style={styles.text}>Location: {location}</Text>
            </View>
          </View>
          <Image source={require('../assets/pic1.jpg')} style={styles.image} />
        </View>

        {/* Payment Details */}
        <View style={styles.paymentContainer}>
          <Text style={styles.paymentTitle}>Payment Details</Text>
          <View style={styles.paymentRow}>
            <Text style={styles.boldText}>Subtotal</Text>
            <Text style={styles.boldText}>₱{subtotal}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.boldText}>Total Payment</Text>
            <Text style={styles.boldText}>₱{total}</Text>
          </View>
        </View>
      </View>

      {/* Download Button */}
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
        <Text style={styles.downloadButtonText}>Download</Text>
      </TouchableOpacity>

      {/* Popup Message */}
      {showPopup && (
        <View style={styles.popupContainer}>
          <Text style={styles.popupText}>Receipt Saved!</Text>
          <Text style={styles.popupSubtext}>
            Go to your Phone Gallery app to view the downloaded image of your e-receipt.
          </Text>
          <TouchableOpacity
            style={styles.popupButton}
            onPress={() => {
              setShowPopup(false); // Close the popup
              router.push('Home'); // Navigate to the Home screen
            }}
          >
            <Text style={styles.popupButtonText}>Okay</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 25,  // Increased padding
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30, // Increased margin
  },
  backButton: {
    marginRight: 15, // Adjusted margin for back button
  },
  title: {
    fontSize: 24, // Larger font size
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
  },
  receiptContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12, // More rounded corners
    padding: 20, // Increased padding
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 8, 
    elevation: 4, // Shadow for a realistic look
    marginBottom: 30, // Increased margin
  },
  detailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30, // Increased margin
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12, // Increased margin
  },
  icon: {
    marginRight: 12, // Adjusted margin for icon
  },
  text: {
    fontSize: 16, // Increased text size
    color: '#333',
  },
  Rate: {
    fontSize: 16, // Increased text size
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: 140, // Increased image size
    height: 140,
    borderRadius: 8,
  },
  paymentContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12, // More rounded corners
    padding: 20, // Increased padding
    marginBottom: 30, // Increased margin
  },
  paymentTitle: {
    fontSize: 16, // Slightly larger font size
    fontWeight: 'bold',
    marginBottom: 12, // Increased margin
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12, // Increased margin
  },
  boldText: {
    fontWeight: '700',
    fontSize: 16, // Larger text
  },
  downloadButton: {
    backgroundColor: '#09013A',
    paddingVertical: 14, // Increased padding
    borderRadius: 8, // More rounded corners
    alignItems: 'center',
    marginBottom: 25, // Increased margin
  },
  downloadButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16, // Larger font size
  },
  popupContainer: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    right: '10%',
    backgroundColor: '#FFCC00',
    padding: 20, // Increased padding
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
  },
  popupText: {
    fontSize: 18, // Larger text
    fontWeight: 'bold',
    marginBottom: 10,
  },
  popupSubtext: {
    fontSize: 14, // Larger text
    textAlign: 'center',
    marginBottom: 18, // Increased margin
  },
  popupButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#09013A',
    borderRadius: 8,
  },
  popupButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Receipt;
