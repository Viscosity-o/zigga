import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface LoginScreenProps {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [digitalId, setDigitalId] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!digitalId.trim()) {
      Alert.alert('Error', 'Please enter your Digital ID');
      return;
    }
    if (!otp.trim()) {
      Alert.alert('Error', 'Please enter the OTP');
      return;
    }
    
    // Simulate login
    onLogin();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <LinearGradient
              colors={['#3B82F6', '#2563EB']}
              style={styles.logoBackground}
            >
              <Ionicons name="card" size={32} color="white" />
            </LinearGradient>
          </View>
          <Text style={styles.title}>Tourist Digital ID</Text>
          <Text style={styles.subtitle}>Secure access to your travel identity</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          <View style={styles.formContent}>
            {/* Digital ID Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Digital ID Number</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Digital ID"
                  placeholderTextColor="#ADAEBC"
                  value={digitalId}
                  onChangeText={setDigitalId}
                  autoCapitalize="none"
                />
                <Ionicons name="person-outline" size={16} color="#9CA3AF" style={styles.inputIcon} />
              </View>
            </View>

            {/* OTP Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>One-Time Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.otpInput]}
                  placeholder="Enter OTP"
                  placeholderTextColor="#ADAEBC"
                  value={otp}
                  onChangeText={setOtp}
                  secureTextEntry={!showPassword}
                  keyboardType="numeric"
                  maxLength={6}
                />
                <TouchableOpacity 
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.inputIcon}
                >
                  <Ionicons 
                    name={showPassword ? "eye-outline" : "eye-off-outline"} 
                    size={16} 
                    color="#9CA3AF" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Ionicons name="log-in-outline" size={18} color="white" />
              <Text style={styles.loginButtonText}>Login Securely</Text>
            </TouchableOpacity>
          </View>

          {/* Footer Links */}
          <View style={styles.footerLinks}>
            <TouchableOpacity>
              <Ionicons name="help-circle-outline" size={14} color="#3B82F6" />
            </TouchableOpacity>
            <View style={styles.linkSeparator}>
              <Text style={styles.separatorText}>|</Text>
              <TouchableOpacity>
                <Text style={styles.linkText}>Forgot Digital ID?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  keyboardView: {
    flex: 1,
  },
  headerSection: {
    alignItems: 'center',
    paddingTop: height * 0.08,
    paddingBottom: 40,
  },
  logoContainer: {
    marginBottom: 24,
  },
  logoBackground: {
    width: 80,
    height: 80,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Inter-Bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#6B7280',
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
  },
  formContainer: {
    flex: 1,
    marginHorizontal: 24,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  formContent: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    fontFamily: 'Inter-SemiBold',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    color: '#111827',
    paddingRight: 48,
  },
  otpInput: {
    textAlign: 'center',
    letterSpacing: 1.8,
  },
  inputIcon: {
    position: 'absolute',
    right: 16,
    top: 20,
  },
  loginButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
    marginTop: 16,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
    fontFamily: 'Inter-SemiBold',
  },
  footerLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
  },
  linkSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  separatorText: {
    fontSize: 16,
    color: '#9CA3AF',
    marginHorizontal: 8,
    fontFamily: 'Inter-Regular',
  },
  linkText: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
});