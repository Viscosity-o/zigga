import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Switch,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }: any) {
  const [voiceCommands, setVoiceCommands] = useState(true);
  const [textToSpeech, setTextToSpeech] = useState(false);
  const [realTimeTracking, setRealTimeTracking] = useState(true);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: () => {
            // Handle logout logic here
            Alert.alert('Logged out', 'You have been logged out successfully.');
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={20} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="ellipsis-vertical" size={20} color="#374151" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.section}>
          <View style={styles.profileCard}>
            <View style={styles.profileHeader}>
              <Text style={styles.profileTitle}>Digital ID Card</Text>
              <TouchableOpacity style={styles.qrButton}>
                <Ionicons name="qr-code-outline" size={18} color="#3B82F6" />
              </TouchableOpacity>
            </View>

            <LinearGradient
              colors={['#3B82F6', '#2563EB']}
              style={styles.idCard}
            >
              <View style={styles.cardContent}>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardLabel}>Tourist ID</Text>
                  <Text style={styles.cardValue}>TID-2024-789</Text>
                </View>
                <TouchableOpacity style={styles.cardMenuButton}>
                  <Ionicons name="qr-code-outline" size={18} color="white" />
                </TouchableOpacity>
              </View>

              <View style={styles.cardDetails}>
                <View style={styles.cardField}>
                  <Text style={styles.fieldLabel}>Name</Text>
                  <Text style={styles.fieldValue}>Rajesh Kumar</Text>
                </View>
                <View style={styles.cardField}>
                  <Text style={styles.fieldLabel}>Valid Until</Text>
                  <Text style={styles.fieldValue}>Dec 2024</Text>
                </View>
              </View>

              {/* Profile Image */}
              <View style={styles.profileImageContainer}>
                <View style={styles.profileImage}>
                  <Ionicons name="person" size={32} color="white" />
                </View>
                <View style={styles.verifiedBadge}>
                  <Ionicons name="checkmark" size={12} color="white" />
                </View>
              </View>
            </LinearGradient>

            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Rajesh Kumar</Text>
              <Text style={styles.profileId}>Tourist ID: TID-2024-789</Text>
              <View style={styles.verifiedTag}>
                <Text style={styles.verifiedText}>Verified Tourist</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Language Preferences */}
        <View style={styles.section}>
          <View style={styles.settingsCard}>
            <Text style={styles.settingsTitle}>Language Preferences</Text>
            
            <View style={styles.languageOption}>
              <View style={styles.languageInfo}>
                <Ionicons name="checkmark-circle" size={16} color="#3B82F6" />
                <Text style={styles.languageText}>English</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
            </View>

            <TouchableOpacity style={styles.languageButton}>
              <Text style={styles.languageButtonText}>हिंदी (Hindi)</Text>
              <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.languageButton}>
              <Text style={styles.languageButtonText}>বাংলা (Bengali)</Text>
              <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.languageButton}>
              <Text style={styles.languageButtonText}>தமிழ் (Tamil)</Text>
              <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewAllButton}>
              <Ionicons name="chevron-forward" size={16} color="#3B82F6" />
              <Text style={styles.viewAllText}>View All Languages</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Accessibility */}
        <View style={styles.section}>
          <View style={styles.settingsCard}>
            <Text style={styles.settingsTitle}>Accessibility</Text>
            
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <View style={[styles.settingIcon, { backgroundColor: '#D1FAE5' }]}>
                  <Ionicons name="mic" size={16} color="#10B981" />
                </View>
                <View style={styles.settingText}>
                  <Text style={styles.settingTitle}>Voice Commands</Text>
                  <Text style={styles.settingSubtitle}>Control app with voice</Text>
                </View>
              </View>
              <Switch
                value={voiceCommands}
                onValueChange={setVoiceCommands}
                trackColor={{ false: '#E5E7EB', true: '#10B981' }}
                thumbColor="white"
              />
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <View style={[styles.settingIcon, { backgroundColor: '#DBEAFE' }]}>
                  <Ionicons name="volume-high" size={16} color="#3B82F6" />
                </View>
                <View style={styles.settingText}>
                  <Text style={styles.settingTitle}>Text-to-Speech</Text>
                  <Text style={styles.settingSubtitle}>Read content aloud</Text>
                </View>
              </View>
              <Switch
                value={textToSpeech}
                onValueChange={setTextToSpeech}
                trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
                thumbColor="white"
              />
            </View>
          </View>
        </View>

        {/* Privacy & Security */}
        <View style={styles.section}>
          <View style={styles.settingsCard}>
            <Text style={styles.settingsTitle}>Privacy & Security</Text>
            
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <View style={[styles.settingIcon, { backgroundColor: '#FED7AA' }]}>
                  <Ionicons name="location" size={16} color="#F59E0B" />
                </View>
                <View style={styles.settingText}>
                  <Text style={styles.settingTitle}>Real-time Tracking</Text>
                  <Text style={styles.settingSubtitle}>Share location for safety</Text>
                </View>
              </View>
              <Switch
                value={realTimeTracking}
                onValueChange={setRealTimeTracking}
                trackColor={{ false: '#E5E7EB', true: '#F59E0B' }}
                thumbColor="white"
              />
            </View>

            <TouchableOpacity style={styles.privacyButton}>
              <View style={styles.privacyInfo}>
                <View style={styles.privacyIcon}>
                  <Ionicons name="shield-outline" size={16} color="#6B7280" />
                </View>
                <Text style={styles.privacyText}>Data & Privacy</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Logout Button */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={16} color="white" />
            <Text style={styles.logoutText}>Logout</Text>
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
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  backButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    fontFamily: 'Poppins-SemiBold',
  },
  menuButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  profileCard: {
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
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    fontFamily: 'Poppins-SemiBold',
  },
  qrButton: {
    backgroundColor: '#EBF4FF',
    borderRadius: 12,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  idCard: {
    borderRadius: 16,
    padding: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  cardInfo: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'Poppins-Regular',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginTop: 4,
    fontFamily: 'Poppins-SemiBold',
  },
  cardMenuButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardField: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'Poppins-Regular',
  },
  fieldValue: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginTop: 4,
    fontFamily: 'Poppins-Medium',
  },
  profileImageContainer: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  profileImage: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#3B82F6',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#10B981',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  profileInfo: {
    marginTop: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    fontFamily: 'Poppins-SemiBold',
  },
  profileId: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
  verifiedTag: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  verifiedText: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  settingsCard: {
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
  settingsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  languageOption: {
    backgroundColor: 'rgba(59, 130, 246, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.2)',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  languageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 16,
    color: '#111827',
    marginLeft: 12,
    fontFamily: 'Poppins-Regular',
  },
  languageButton: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  languageButtonText: {
    fontSize: 16,
    color: '#374151',
    fontFamily: 'Poppins-Regular',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  viewAllText: {
    fontSize: 16,
    color: '#3B82F6',
    fontWeight: '500',
    marginLeft: 8,
    fontFamily: 'Poppins-Medium',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    borderRadius: 12,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    fontFamily: 'Poppins-Medium',
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
    fontFamily: 'Poppins-Regular',
  },
  privacyButton: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  privacyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  privacyIcon: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  privacyText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    fontFamily: 'Poppins-Medium',
  },
  logoutButton: {
    backgroundColor: '#EF4444',
    borderRadius: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    fontFamily: 'Poppins-SemiBold',
  },
});