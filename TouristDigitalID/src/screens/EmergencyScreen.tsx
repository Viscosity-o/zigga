import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

export default function EmergencyScreen({ navigation }: any) {
  const [isSOSActive, setIsSOSActive] = useState(true);
  const [alertTime, setAlertTime] = useState('9:41 AM');
  const [isLocationSharing, setIsLocationSharing] = useState(true);

  useEffect(() => {
    // Set current time when component mounts
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setAlertTime(timeString);
  }, []);

  const handleCallEmergency = () => {
    Alert.alert(
      'Call Emergency Services',
      'This will call local emergency services. Continue?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Call Now', 
          style: 'destructive',
          onPress: () => {
            // In a real app, this would call the local emergency number
            Linking.openURL('tel:911');
          }
        }
      ]
    );
  };

  const handleCancelSOS = () => {
    Alert.alert(
      'Cancel SOS Alert',
      'Are you sure you want to cancel the emergency alert?',
      [
        { text: 'No', style: 'cancel' },
        { 
          text: 'Yes, Cancel', 
          onPress: () => {
            setIsSOSActive(false);
            navigation.goBack();
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusLeft}>
          <View style={styles.signalDot} />
          <Text style={styles.timeText}>9:41</Text>
        </View>
        <View style={styles.statusRight}>
          <Ionicons name="signal" size={14} color="#4B5563" />
          <Ionicons name="wifi" size={14} color="#4B5563" style={{ marginLeft: 4 }} />
          <Ionicons name="battery-half" size={14} color="#4B5563" style={{ marginLeft: 4 }} />
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={20} color="#4B5563" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Emergency Active</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Emergency Alert Card */}
        <View style={styles.section}>
          <View style={styles.emergencyCard}>
            <View style={styles.emergencyIcon}>
              <Ionicons name="warning" size={36} color="white" />
            </View>
            <Text style={styles.emergencyTitle}>SOS ACTIVE</Text>
            <Text style={styles.emergencySubtitle}>Emergency alert has been triggered</Text>
            <View style={styles.alertTimeContainer}>
              <Text style={styles.alertTimeText}>Alert sent at {alertTime}</Text>
            </View>
          </View>
        </View>

        {/* Alerts Sent To */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Alerts Sent To:</Text>
          
          <View style={styles.contactCard}>
            <View style={styles.contactInfo}>
              <View style={[styles.contactIcon, { backgroundColor: '#DBEAFE' }]}>
                <Ionicons name="shield-checkmark" size={18} color="#2563EB" />
              </View>
              <View style={styles.contactText}>
                <Text style={styles.contactName}>Police Department</Text>
                <Text style={styles.contactType}>Emergency Services</Text>
              </View>
            </View>
            <Ionicons name="checkmark-circle" size={20} color="#22C55E" />
          </View>

          <View style={styles.contactCard}>
            <View style={styles.contactInfo}>
              <View style={[styles.contactIcon, { backgroundColor: '#D1FAE5' }]}>
                <Ionicons name="people" size={18} color="#16A34A" />
              </View>
              <View style={styles.contactText}>
                <Text style={styles.contactName}>Family Contacts</Text>
                <Text style={styles.contactType}>3 contacts notified</Text>
              </View>
            </View>
            <Ionicons name="checkmark-circle" size={20} color="#22C55E" />
          </View>

          <View style={styles.contactCard}>
            <View style={styles.contactInfo}>
              <View style={[styles.contactIcon, { backgroundColor: '#F3E8FF' }]}>
                <Ionicons name="business" size={18} color="#9333EA" />
              </View>
              <View style={styles.contactText}>
                <Text style={styles.contactName}>Tourism Department</Text>
                <Text style={styles.contactType}>Local authorities</Text>
              </View>
            </View>
            <Ionicons name="checkmark-circle" size={20} color="#22C55E" />
          </View>
        </View>

        {/* Live Location Sharing */}
        <View style={styles.section}>
          <View style={styles.locationCard}>
            <View style={styles.locationHeader}>
              <Text style={styles.locationTitle}>Live Location</Text>
              <View style={styles.sharingBadge}>
                <Text style={styles.sharingText}>SHARING ON</Text>
              </View>
            </View>
            
            <View style={styles.trackingInfo}>
              <View style={[styles.trackingIcon, { backgroundColor: '#FEE2E2' }]}>
                <Ionicons name="location" size={20} color="#DC2626" />
              </View>
              <View style={styles.trackingText}>
                <Text style={styles.trackingTitle}>Real-time tracking active</Text>
                <Text style={styles.trackingSubtitle}>
                  Your location is being shared with emergency contacts
                </Text>
              </View>
            </View>

            <View style={styles.updateInfo}>
              <View style={styles.updateDot} />
              <Text style={styles.updateText}>Live updating every 30 seconds</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.callButton} onPress={handleCallEmergency}>
            <Ionicons name="call" size={20} color="white" />
            <Text style={styles.callButtonText}>Call Emergency Services</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={handleCancelSOS}>
            <Ionicons name="close-circle-outline" size={20} color="white" />
            <Text style={styles.cancelButtonText}>Cancel SOS Alert</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  statusBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signalDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 8,
  },
  timeText: {
    fontSize: 14,
    color: '#4B5563',
    fontFamily: 'Rubik-Regular',
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    color: '#111827',
    fontFamily: 'Rubik-Regular',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  emergencyCard: {
    backgroundColor: '#EF4444',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  emergencyIcon: {
    marginBottom: 16,
  },
  emergencyTitle: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Rubik-Regular',
  },
  emergencySubtitle: {
    fontSize: 16,
    color: '#FEE2E2',
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'Rubik-Regular',
  },
  alertTimeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  alertTimeText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Rubik-Regular',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#111827',
    marginBottom: 16,
    fontFamily: 'Rubik-Regular',
  },
  contactCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  contactIcon: {
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  contactText: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    color: '#111827',
    fontFamily: 'Rubik-Regular',
  },
  contactType: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
    fontFamily: 'Rubik-Regular',
  },
  locationCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationTitle: {
    fontSize: 18,
    color: '#111827',
    fontFamily: 'Rubik-Regular',
  },
  sharingBadge: {
    backgroundColor: '#D1FAE5',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  sharingText: {
    fontSize: 14,
    color: '#059669',
    fontFamily: 'Rubik-Regular',
  },
  trackingInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  trackingIcon: {
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  trackingText: {
    flex: 1,
  },
  trackingTitle: {
    fontSize: 16,
    color: '#111827',
    fontFamily: 'Rubik-Regular',
  },
  trackingSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    lineHeight: 20,
    fontFamily: 'Rubik-Regular',
  },
  updateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  updateDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    opacity: 0.543,
    marginRight: 8,
  },
  updateText: {
    fontSize: 14,
    color: '#4B5563',
    fontFamily: 'Rubik-Regular',
  },
  actionButtons: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    gap: 16,
  },
  callButton: {
    backgroundColor: '#EF4444',
    borderRadius: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  callButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 12,
    fontFamily: 'Rubik-Regular',
  },
  cancelButton: {
    backgroundColor: '#6B7280',
    borderRadius: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 12,
    fontFamily: 'Rubik-Regular',
  },
});