import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
  address?: string;
}

interface UseLocationReturn {
  location: LocationData | null;
  isTracking: boolean;
  error: string | null;
  startTracking: () => Promise<void>;
  stopTracking: () => void;
  getCurrentLocation: () => Promise<LocationData | null>;
}

export const useLocation = (): UseLocationReturn => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [subscription, setSubscription] = useState<Location.LocationSubscription | null>(null);

  const requestPermissions = async (): Promise<boolean> => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Location permission denied');
        return false;
      }

      const backgroundStatus = await Location.requestBackgroundPermissionsAsync();
      if (backgroundStatus.status !== 'granted') {
        console.warn('Background location permission denied');
      }

      return true;
    } catch (err) {
      setError('Failed to request location permissions');
      return false;
    }
  };

  const getCurrentLocation = async (): Promise<LocationData | null> => {
    try {
      const hasPermission = await requestPermissions();
      if (!hasPermission) return null;

      const locationResult = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
        maximumAge: 30000, // 30 seconds
      });

      const locationData: LocationData = {
        latitude: locationResult.coords.latitude,
        longitude: locationResult.coords.longitude,
        accuracy: locationResult.coords.accuracy || 0,
        timestamp: locationResult.timestamp,
      };

      // Get address from coordinates
      try {
        const addressResult = await Location.reverseGeocodeAsync({
          latitude: locationData.latitude,
          longitude: locationData.longitude,
        });

        if (addressResult.length > 0) {
          const addr = addressResult[0];
          locationData.address = `${addr.street || ''} ${addr.city || ''} ${addr.region || ''}`.trim();
        }
      } catch (addressError) {
        console.warn('Failed to get address:', addressError);
      }

      setLocation(locationData);
      setError(null);
      return locationData;
    } catch (err) {
      setError('Failed to get current location');
      console.error('Location error:', err);
      return null;
    }
  };

  const startTracking = async (): Promise<void> => {
    try {
      const hasPermission = await requestPermissions();
      if (!hasPermission) return;

      if (subscription) {
        subscription.remove();
      }

      const newSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 30000, // 30 seconds
          distanceInterval: 10, // 10 meters
        },
        (locationResult) => {
          const locationData: LocationData = {
            latitude: locationResult.coords.latitude,
            longitude: locationResult.coords.longitude,
            accuracy: locationResult.coords.accuracy || 0,
            timestamp: locationResult.timestamp,
          };

          setLocation(locationData);
          setError(null);
        }
      );

      setSubscription(newSubscription);
      setIsTracking(true);
      console.log('Location tracking started');
    } catch (err) {
      setError('Failed to start location tracking');
      console.error('Tracking error:', err);
    }
  };

  const stopTracking = (): void => {
    if (subscription) {
      subscription.remove();
      setSubscription(null);
    }
    setIsTracking(false);
    console.log('Location tracking stopped');
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [subscription]);

  return {
    location,
    isTracking,
    error,
    startTracking,
    stopTracking,
    getCurrentLocation,
  };
};