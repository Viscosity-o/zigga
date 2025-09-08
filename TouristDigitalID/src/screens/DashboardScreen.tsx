import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

const { width } = Dimensions.get('window');

export default function DashboardScreen({ navigation }: any) {
  const [safetyScore, setSafetyScore] = useState(85);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        setIsTracking(true);
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };

  const handleSOS = () => {
    Alert.alert(
      'Emergency SOS',
      'Are you sure you want to trigger an emergency alert?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Yes, Send SOS', 
          style: 'destructive',
          onPress: () => navigation.navigate('Emergency')
        }
      ]
    );
  };

  const handleShareLocation = () => {
    Alert.alert('Location Shared', 'Your live location has been shared with emergency contacts.');
  };

  const handleReportIssue = () => {
    Alert.alert('Report Issue', 'Issue reporting feature will be available soon.');
  };

  const handleViewItinerary = () => {
    Alert.alert('Itinerary', 'Itinerary feature will be available soon.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.headerTitle}>Dashboard</Text>
              <Text style={styles.headerSubtitle}>Stay safe on your journey</Text>
            </View>
            <TouchableOpacity 
              style={styles.notificationButton}
              onPress={() => navigation.navigate('Profile')}
            >
              <Ionicons name="notifications-outline" size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Digital ID Card */}
        <View style={styles.section}>
          <LinearGradient
            colors={['#2563EB', '#1D4ED8']}
            style={styles.digitalIdCard}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.cardTitle}>Tourist Digital ID</Text>
                  <Text style={styles.cardId}>ID: TDI-2024-8847</Text>
                </View>
                <View style={styles.avatarContainer}>
                  <View style={styles.avatar}>
                    <Ionicons name="person" size={24} color="white" />
                  </View>
                </View>
              </View>
              <View style={styles.statusIndicator}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Verified • Active</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Safety Score */}
        <View style={styles.section}>
          <View style={styles.safetyCard}>
            <View style={styles.safetyContent}>
              <View>
                <Text style={styles.safetyTitle}>Safety Score</Text>
                <Text style={styles.safetySubtitle}>Current location status</Text>
              </View>
              <View style={styles.scoreContainer}>
                <View style={styles.scoreIconContainer}>
                  <Ionicons name="shield-checkmark" size={20} color="#10B981" />
                </View>
                <View style={styles.scoreTextContainer}>
                  <Text style={styles.scoreNumber}>{safetyScore}</Text>
                  <Text style={styles.scoreLabel}>SAFE</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* SOS Button */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.sosButton} onPress={handleSOS}>
            <View style={styles.sosContent}>
              <Ionicons name="warning" size={24} color="white" />
              <Text style={styles.sosText}>SOS</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionCard} onPress={handleShareLocation}>
              <View style={[styles.actionIcon, { backgroundColor: '#DBEAFE' }]}>
                <Ionicons name="location" size={20} color="#3B82F6" />
              </View>
              <Text style={styles.actionTitle}>Share</Text>
              <Text style={styles.actionTitle}>Live</Text>
              <Text style={styles.actionSubtitle}>Location</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard} onPress={handleReportIssue}>
              <View style={[styles.actionIcon, { backgroundColor: '#FED7AA' }]}>
                <Ionicons name="flag" size={20} color="#F59E0B" />
              </View>
              <Text style={styles.actionTitle}>Report</Text>
              <Text style={styles.actionSubtitle}>Issue</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard} onPress={handleViewItinerary}>
              <View style={[styles.actionIcon, { backgroundColor: '#D1FAE5' }]}>
                <Ionicons name="map" size={20} color="#10B981" />
              </View>
              <Text style={styles.actionTitle}>View</Text>
              <Text style={styles.actionSubtitle}>Itinerary</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityList}>
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, { backgroundColor: '#D1FAE5' }]}>
                <Ionicons name="checkmark" size={16} color="#10B981" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Check-in completed</Text>
                <Text style={styles.activitySubtitle}>Downtown Hotel • 2 hours ago</Text>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, { backgroundColor: '#DBEAFE' }]}>
                <Ionicons name="share-outline" size={16} color="#3B82F6" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Location shared</Text>
                <Text style={styles.activitySubtitle}>With emergency contact • 4 hours ago</Text>
              </View>
            </View>
          </View>
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
  header: {
    backgroundColor: 'white',
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    fontFamily: 'Poppins-Bold',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
  notificationButton: {
    backgroundColor: '#F3F4F6',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  digitalIdCard: {
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  cardId: {
    fontSize: 14,
    color: '#BFDBFE',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
  avatarContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
  },
  avatar: {
    backgroundColor: '#1F2937',
    borderRadius: 8,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  safetyCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  safetyContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  safetyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    fontFamily: 'Poppins-SemiBold',
  },
  safetySubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreIconContainer: {
    backgroundColor: '#D1FAE5',
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  scoreTextContainer: {
    alignItems: 'center',
  },
  scoreNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#10B981',
    fontFamily: 'Poppins-Bold',
  },
  scoreLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontFamily: 'Poppins-Regular',
  },
  sosButton: {
    backgroundColor: '#EF4444',
    borderRadius: 64,
    width: 128,
    height: 128,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.25,
    shadowRadius: 50,
    elevation: 25,
  },
  sosContent: {
    alignItems: 'center',
  },
  sosText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
    fontFamily: 'Poppins-Bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    width: (width - 72) / 3,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  actionIcon: {
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
  activityList: {
    gap: 12,
  },
  activityItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  activityIcon: {
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    fontFamily: 'Poppins-Medium',
  },
  activitySubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
    fontFamily: 'Poppins-Regular',
  },
});