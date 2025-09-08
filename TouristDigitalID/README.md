# Tourist Digital ID - React Native App

A secure digital identity app for tourists built with React Native and Expo.

## Features

- 🔐 Secure digital ID authentication
- 📍 Real-time location tracking and safety scoring
- 🚨 Emergency SOS with automatic location sharing
- 👥 Emergency contact notifications
- 🗺️ Tourist zone information and safety alerts
- 🌍 Multi-language support
- ♿ Accessibility features
- 📱 Cross-platform (iOS & Android)

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- Expo CLI
- Expo Go app on your mobile device

### Installation

1. **Install Expo CLI globally:**
   ```bash
   npm install -g @expo/cli
   ```

2. **Install dependencies:**
   ```bash
   cd TouristDigitalID
   npm install
   ```

3. **Add font files:**
   - Download Inter, Poppins, and Rubik fonts from Google Fonts
   - Place the .ttf files in `assets/fonts/` directory
   - See `assets/fonts/README.md` for details

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open in Expo Go:**
   - Install Expo Go app on your phone
   - Scan the QR code displayed in terminal/browser
   - The app will load on your device

### Development Commands

- `npm start` - Start the Expo development server
- `npm run android` - Start and open on Android emulator
- `npm run ios` - Start and open on iOS simulator
- `npm run web` - Start web version

## Project Structure

```
TouristDigitalID/
├── src/
│   ├── screens/
│   │   ├── LoginScreen.tsx
│   │   ├── DashboardScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── EmergencyScreen.tsx
│   ├── components/
│   │   └── SafetyScoreCard.tsx
│   ├── hooks/
│   │   └── useLocation.ts
│   └── utils/
│       └── constants.ts
├── assets/
│   └── fonts/
├── app.json
└── App.tsx
```

## Key Features Implementation

### Location Services
- Uses `expo-location` for GPS tracking
- Real-time location updates every 30 seconds
- Background location permissions for emergency features

### Emergency Features
- SOS button with confirmation dialog
- Automatic emergency contact notifications
- Live location sharing during emergencies
- Integration with local emergency services

### Safety & Security
- Dynamic safety score calculation
- Location-based safety alerts
- Secure digital ID verification
- Privacy controls for location sharing

### Accessibility
- Voice command support
- Text-to-speech functionality
- Multi-language interface
- High contrast mode support

## Permissions Required

### iOS (Info.plist)
- `NSLocationWhenInUseUsageDescription`
- `NSLocationAlwaysAndWhenInUseUsageDescription`

### Android (AndroidManifest.xml)
- `ACCESS_FINE_LOCATION`
- `ACCESS_COARSE_LOCATION`
- `VIBRATE`

## Building for Production

### Android APK
```bash
expo build:android
```

### iOS IPA
```bash
expo build:ios
```

### App Store Deployment
```bash
expo submit:android
expo submit:ios
```

## Environment Variables

Create a `.env` file for configuration:

```env
EXPO_PUBLIC_API_URL=https://api.touristdigitalid.com
EXPO_PUBLIC_LOCFY_API_KEY=your_locfy_api_key
EXPO_PUBLIC_EMERGENCY_NUMBER=911
```

## Testing

### On Device
1. Install Expo Go app
2. Scan QR code from `npm start`
3. Test all features including location services

### Emulator Testing
- Android: Use Android Studio emulator
- iOS: Use Xcode Simulator (macOS only)

## Troubleshooting

### Common Issues

1. **Location not working:**
   - Check device location permissions
   - Ensure location services are enabled
   - Test on physical device (not simulator)

2. **Fonts not loading:**
   - Verify font files are in `assets/fonts/`
   - Check font file names match imports
   - Clear Expo cache: `expo start -c`

3. **Build errors:**
   - Clear node modules: `rm -rf node_modules && npm install`
   - Clear Expo cache: `expo start -c`
   - Check Expo CLI version: `expo --version`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on both platforms
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@touristdigitalid.com or create an issue in the repository.