// App Constants
export const APP_CONFIG = {
  name: 'Tourist Digital ID',
  version: '1.0.0',
  supportEmail: 'support@touristdigitalid.com',
};

// Colors
export const COLORS = {
  primary: '#3B82F6',
  primaryDark: '#2563EB',
  secondary: '#10B981',
  danger: '#EF4444',
  warning: '#F59E0B',
  success: '#10B981',
  
  // Grays
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  
  // Background colors
  background: '#F9FAFB',
  surface: '#FFFFFF',
  
  // Text colors
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
};

// Spacing
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// Font Sizes
export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 30,
};

// Border Radius
export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

// Emergency Contact Types
export const EMERGENCY_CONTACTS = {
  POLICE: 'police',
  MEDICAL: 'medical',
  FIRE: 'fire',
  TOURISM: 'tourism_authority',
  EMBASSY: 'embassy',
  FAMILY: 'family',
  FRIENDS: 'friends',
};

// Safety Score Thresholds
export const SAFETY_THRESHOLDS = {
  SAFE: 80,
  CAUTION: 60,
  DANGER: 40,
};

// Location Update Intervals
export const LOCATION_CONFIG = {
  UPDATE_INTERVAL: 30000, // 30 seconds
  HIGH_ACCURACY: true,
  TIMEOUT: 15000, // 15 seconds
  MAX_AGE: 60000, // 1 minute
};