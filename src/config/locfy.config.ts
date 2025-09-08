// Locfy Configuration for Tourist Digital ID App

export const LOCFY_CONFIG = {
  // API Configuration
  API_KEY: process.env.REACT_APP_LOCFY_API_KEY || "your_locfy_api_key_here",
  BASE_URL: process.env.REACT_APP_LOCFY_BASE_URL || "https://api.locfy.com/v1",
  
  // Feature Flags
  ENABLE_REAL_TIME_TRACKING: true,
  ENABLE_GEOFENCING: true,
  ENABLE_SAFETY_ALERTS: true,
  ENABLE_TOURIST_ZONES: true,
  
  // Location Settings
  LOCATION_UPDATE_INTERVAL: 30000, // 30 seconds
  HIGH_ACCURACY_MODE: true,
  LOCATION_TIMEOUT: 15000, // 15 seconds
  MAX_LOCATION_AGE: 60000, // 1 minute
  
  // Safety Settings
  SAFETY_CHECK_RADIUS: 5000, // 5km
  NEARBY_SERVICES_RADIUS: 10000, // 10km
  TOURIST_ZONES_RADIUS: 25000, // 25km
  
  // Emergency Settings
  EMERGENCY_CONTACT_TYPES: [
    'police',
    'medical',
    'fire',
    'tourism_authority',
    'embassy',
    'family',
    'friends'
  ],
  
  // Service Types for Nearby Services
  SERVICE_TYPES: {
    EMERGENCY: ['police', 'hospital', 'fire_station'],
    TOURISM: ['tourist_info', 'attraction', 'hotel', 'restaurant'],
    TRANSPORT: ['bus_stop', 'taxi_stand', 'metro_station', 'airport'],
    UTILITIES: ['bank', 'pharmacy', 'post_office', 'embassy']
  },
  
  // Map Configuration
  MAP_SETTINGS: {
    DEFAULT_ZOOM: 15,
    MIN_ZOOM: 10,
    MAX_ZOOM: 20,
    SHOW_TRAFFIC: true,
    SHOW_TRANSIT: true,
    SHOW_TOURIST_ATTRACTIONS: true
  },
  
  // Notification Settings
  NOTIFICATIONS: {
    SHOW_LOCATION_UPDATES: false,
    SHOW_SAFETY_ALERTS: true,
    SHOW_GEOFENCE_EVENTS: true,
    VIBRATE_ON_ALERTS: true,
    SOUND_ON_EMERGENCY: true
  }
};

// Locfy API Endpoints
export const LOCFY_ENDPOINTS = {
  CONNECT: '/connect',
  LOCATION_UPDATE: '/location/update',
  SAFETY_SCORE: '/safety/score',
  SAFETY_ALERTS: '/safety/alerts',
  NEARBY_SERVICES: '/services/nearby',
  TOURIST_ZONES: '/zones/tourist',
  EMERGENCY_SHARE: '/emergency/share',
  REPORT_INCIDENT: '/incidents/report',
  DIRECTIONS: '/navigation/directions',
  REVERSE_GEOCODE: '/geocoding/reverse',
  GEOFENCE_CREATE: '/geofence/create',
  GEOFENCE_DELETE: '/geofence/delete'
};

// Error Messages
export const LOCFY_ERRORS = {
  INITIALIZATION_FAILED: 'Failed to initialize Locfy services',
  LOCATION_PERMISSION_DENIED: 'Location permission denied',
  LOCATION_UNAVAILABLE: 'Location services unavailable',
  NETWORK_ERROR: 'Network connection error',
  API_KEY_INVALID: 'Invalid API key',
  SERVICE_UNAVAILABLE: 'Locfy service temporarily unavailable'
};

// Mock Data for Development (when Locfy API is not available)
export const MOCK_DATA = {
  SAFETY_SCORE: 85,
  CURRENT_LOCATION: {
    latitude: 40.7128,
    longitude: -74.0060,
    accuracy: 10,
    address: "Downtown District, Main Street"
  },
  NEARBY_SERVICES: [
    {
      id: "service_1",
      name: "Central Police Station",
      type: "police",
      distance: 450,
      address: "123 Main St",
      phone: "+1-555-911-1234",
      isOpen: true,
      safetyRating: 95
    },
    {
      id: "service_2", 
      name: "City General Hospital",
      type: "hospital",
      distance: 800,
      address: "456 Health Ave",
      phone: "+1-555-hospital",
      isOpen: true,
      safetyRating: 90
    },
    {
      id: "service_3",
      name: "Tourist Information Center",
      type: "tourist_info",
      distance: 200,
      address: "789 Tourism Blvd",
      phone: "+1-555-info",
      isOpen: true,
      safetyRating: 88
    }
  ],
  TOURIST_ZONES: [
    {
      id: "zone_1",
      name: "Historic District",
      type: "attraction",
      safetyLevel: 90,
      crowdLevel: "medium",
      operatingHours: { open: "09:00", close: "18:00" },
      location: { latitude: 40.7128, longitude: -74.0060 },
      amenities: ["restrooms", "wifi", "parking", "food"]
    }
  ]
};

export default LOCFY_CONFIG;