# Locfy Integration Setup Guide

This guide will help you connect your Tourist Digital ID application to Locfy's location services platform.

## 🚀 Quick Start

### 1. Get Locfy API Credentials

1. Sign up for a Locfy developer account at [https://developer.locfy.com](https://developer.locfy.com)
2. Create a new project for your Tourist Digital ID app
3. Generate API keys for your project
4. Note down your API key and base URL

### 2. Environment Configuration

Create a `.env` file in your project root:

```env
# Locfy Configuration
REACT_APP_LOCFY_API_KEY=your_actual_api_key_here
REACT_APP_LOCFY_BASE_URL=https://api.locfy.com/v1

# Optional: Development mode
REACT_APP_LOCFY_DEVELOPMENT_MODE=true
```

### 3. API Key Setup

Replace the demo API key in your configuration:

```typescript
// In /config/locfy.config.ts
export const LOCFY_CONFIG = {
  API_KEY: process.env.REACT_APP_LOCFY_API_KEY || "your_locfy_api_key_here",
  BASE_URL: process.env.REACT_APP_LOCFY_BASE_URL || "https://api.locfy.com/v1",
  // ... other config
};
```

## 🔧 Integration Features

### Core Location Services

✅ **Real-time Location Tracking**
- Continuous GPS tracking for safety monitoring
- Automatic location updates every 30 seconds
- High-accuracy positioning for emergency situations

✅ **Safety Score Calculation**
- Dynamic safety scoring based on current location
- Real-time crime data integration
- Local safety incident analysis

✅ **Emergency Location Sharing**
- Instant location sharing with emergency contacts
- Integration with local emergency services
- Automatic SOS activation with location data

### Tourist-Specific Features

✅ **Nearby Services Discovery**
- Police stations, hospitals, tourist info centers
- Embassy and consulate locations
- Transportation hubs and safe accommodation

✅ **Tourist Zone Information**
- Popular attractions with safety ratings
- Crowd level monitoring
- Operating hours and amenities

✅ **Incident Reporting with Location**
- Automatic location attachment to incident reports
- GPS coordinates for precise incident mapping
- Integration with local authorities

### Navigation & Directions

✅ **Safe Route Planning**
- Avoid dangerous areas in route calculation
- Tourist-friendly walking directions
- Public transportation integration

✅ **Geofencing & Alerts**
- Safety zone entry/exit notifications
- Dangerous area warnings
- Tourist zone recommendations

## 🛠️ Technical Implementation

### Location Tracking Flow

```typescript
// Initialize Locfy
const locfy = useLocfy();

// Start tracking when user logs in
useEffect(() => {
  if (user && locfy.isInitialized) {
    locfy.startTracking();
  }
}, [user, locfy.isInitialized]);

// Handle location updates
locfy.on('locationUpdate', (location) => {
  console.log('New location:', location);
  // Update UI with new safety score, nearby services, etc.
});
```

### Emergency Integration

```typescript
// SOS Button with Locfy
const handleSOS = async () => {
  try {
    // Share location with emergency contacts
    const shareId = await locfy.shareEmergencyLocation([
      'police',
      'family_contact_1',
      'tourism_authority'
    ]);
    
    console.log('Emergency location shared:', shareId);
  } catch (error) {
    console.error('Emergency sharing failed:', error);
  }
};
```

### Incident Reporting

```typescript
// Report incident with automatic location
const reportIncident = async (incidentData) => {
  const incidentId = await locfy.reportIncident({
    type: incidentData.type,
    description: incidentData.description,
    priority: incidentData.priority,
    // Location automatically attached by Locfy
  });
  
  return incidentId;
};
```

## 📱 Mobile Permissions

### Required Permissions

Your app will need to request these permissions:

```javascript
// Location permissions
navigator.geolocation.getCurrentPosition(
  (position) => { /* Success */ },
  (error) => { /* Handle error */ },
  {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 60000
  }
);
```

### Permission Handling

The app gracefully handles permission scenarios:

- ✅ **Granted**: Full Locfy functionality
- ⚠️ **Denied**: Limited functionality with manual location entry
- 🔄 **Prompt**: Request permissions when needed

## 🔒 Security & Privacy

### Data Protection

- All location data is encrypted in transit
- User location history is stored securely
- Location sharing can be disabled anytime
- Emergency sharing has automatic expiration

### Privacy Controls

Users can control:
- Real-time tracking on/off
- Location sharing preferences
- Data retention periods
- Emergency contact management

## 🧪 Testing & Development

### Mock Mode

For development without Locfy API access:

```typescript
// Enable mock mode
const DEVELOPMENT_MODE = true;

if (DEVELOPMENT_MODE) {
  // Use mock data from MOCK_DATA constant
  // Simulate location updates, safety scores, etc.
}
```

### Testing Scenarios

Test these key scenarios:

1. **Location Permission Granted/Denied**
2. **Network Connectivity Issues**
3. **Emergency Location Sharing**
4. **Incident Reporting**
5. **Real-time Safety Score Updates**

## 📊 API Endpoints Used

### Core Endpoints

- `POST /connect` - Initialize connection
- `POST /location/update` - Send location updates
- `POST /safety/score` - Get safety score
- `POST /safety/alerts` - Check safety alerts
- `POST /nearby-services` - Find nearby services
- `POST /tourist-zones` - Get tourist zones
- `POST /emergency/share` - Share emergency location
- `POST /incidents/report` - Report incidents
- `POST /directions` - Get navigation directions

### Authentication

All API calls include:

```javascript
headers: {
  'Authorization': `Bearer ${LOCFY_API_KEY}`,
  'Content-Type': 'application/json'
}
```

## 🚨 Error Handling

The integration handles various error scenarios:

- Network connectivity issues
- API rate limiting
- Location service unavailability
- Invalid API credentials
- Service maintenance windows

## 📞 Support

### Locfy Support

- Documentation: [https://docs.locfy.com](https://docs.locfy.com)
- Developer Support: [developer-support@locfy.com](mailto:developer-support@locfy.com)
- Status Page: [https://status.locfy.com](https://status.locfy.com)

### Integration Issues

If you encounter issues:

1. Check your API key validity
2. Verify network connectivity
3. Review browser console for errors
4. Test with mock mode enabled
5. Contact Locfy support with error details

## 🔄 Updates & Maintenance

### Keeping Updated

- Monitor Locfy API version updates
- Update SDK when new features are released
- Test location accuracy regularly
- Review safety score algorithms
- Update emergency contact integrations

### Performance Monitoring

Monitor these metrics:
- Location update frequency
- API response times
- Safety score accuracy
- Emergency response times
- User engagement with location features

---

## ✅ Next Steps

1. **Get Locfy API credentials**
2. **Update environment variables**
3. **Test location permissions**
4. **Verify emergency integration**
5. **Test incident reporting**
6. **Deploy and monitor**

Your Tourist Digital ID app is now ready to provide world-class location-based safety services to tourists worldwide! 🌍✈️🛡️