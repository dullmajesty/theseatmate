import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';  // Import icons

const ReservationSummary = () => {
  const [voucherCode, setVoucherCode] = useState('');
  const { storeName, personName, location, rate, date, time, persons, subtotal, total } = useLocalSearchParams();
  const router = useRouter();

  const applyVoucher = () => {
    if (voucherCode.trim() === '') {
      alert('Please enter a valid voucher code');
      return;
    }
    console.log('Voucher applied:', voucherCode);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={30} color="#09013A" /> {/* Adjusted back icon size */}
          </TouchableOpacity>
          <Text style={styles.headerText}>Reservation Summary</Text>
        </View>

        {/* Details and Image */}
        <View style={styles.detailsAndImageRow}>
          <View style={styles.detailsSection}>
            <View style={styles.iconTextRow}>
              <Ionicons name="storefront" size={20} color="#09013A" />
              <Text style={styles.detailText}>Store Name: {storeName}</Text>
            </View>
            <View style={styles.iconTextRow}>
              <Ionicons name="person" size={20} color="#09013A" />
              <Text style={styles.detailText}>Person Name: {personName}</Text>
            </View>
            <View style={styles.iconTextRow}>
              <Ionicons name="people" size={20} color="#09013A" />
              <Text style={styles.detailText}>Number of Persons: {persons}</Text>
            </View>
            <View style={styles.iconTextRow}>
              <Ionicons name="calendar" size={20} color="#09013A" />
              <Text style={styles.detailText}>Date: {date}</Text>
            </View>
            <View style={styles.iconTextRow}>
              <Ionicons name="time" size={20} color="#09013A" />
              <Text style={styles.detailText}>Time: {time}</Text>
            </View>
            <View style={styles.iconTextRow}>
              <Ionicons name="location" size={20} color="#09013A" />
              <Text style={styles.detailText}>Location: {location}</Text>
            </View>
            <View style={styles.iconTextRow}>
              <Ionicons name="cash" size={20} color="#09013A" />
              <Text style={styles.detailText}>Rate: ₱{rate}</Text>
            </View>
          </View>
          <Image source={require('../assets/pic1.jpg')} style={styles.image} />
        </View>

        {/* Voucher Section */}
        <View style={styles.voucherSection}>
          <TextInput
            style={styles.voucherInput}
            placeholder="Apply a voucher"
            placeholderTextColor="#A6A6A6"
            value={voucherCode}
            onChangeText={setVoucherCode}
          />
          <TouchableOpacity style={styles.applyButton} onPress={applyVoucher}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>

        {/* Terms and Conditions */}
        <View style={styles.termsSection}>
          <Text style={styles.termsTitle}>TERMS & CONDITIONS *</Text>
          <Text style={styles.termsText}>
            By using the Study Hub Reservation app, you agree to reserve hubs at least one hour in advance, with a maximum of four hours per day.
            Arriving more than 15 minutes late may result in cancellation. Cancellations should be made 30 minutes prior, and changes are based
            on availability. Keep the space clean, maintain low noise levels, and use the hub for academic purposes only. Personal accounts must
            be used for reservations, and sharing accounts is prohibited. The app securely collects only necessary data. By using the app, you
            accept these terms, which may be updated by management.
          </Text>
        </View>

        {/* Payment Section */}
        <View style={styles.paymentSection}>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Subtotal</Text>
            <Text style={styles.paymentValue}>₱{subtotal}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>TOTAL PAYMENT</Text>
            <Text style={styles.paymentValue}>₱{total}</Text>
          </View>
        </View>

        {/* Reserve Button */}
        <TouchableOpacity
          style={styles.reserveButton}
          onPress={() =>
            router.push({
              pathname: '/Receipt',
              params: {
                storeName,
                personName,
                location,
                rate,
                date,
                time,
                persons,
                subtotal,
                total,
              },
            })
          }
        >
          <Text style={styles.reserveButtonText}>Reserve</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  detailsAndImageRow: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  detailsSection: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginRight: 16,
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  image: {
    width: 137,
    height: 127,
    borderRadius: 10,
  },
  voucherSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  voucherInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  applyButton: {
    backgroundColor: '#F6B01A',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  termsSection: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  termsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  termsText: {
    fontSize: 14,
    color: '#333',
  },
  paymentSection: {
    marginBottom: 16,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  paymentLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  paymentValue: {
    fontSize: 14,
  },
  reserveButton: {
    backgroundColor: '#09013A',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  reserveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReservationSummary;
