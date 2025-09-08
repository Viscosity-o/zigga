import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  initializeLocfy, 
  getLocfyInstance, 
  type LocfyConfig, 
  type LocationData, 
  type SafetyAlert, 
  type NearbyService,
  type TouristZone 
} from '../services/locfy';

interface UseLocfyReturn {
  // State
  isInitialized: boolean;
  isTracking: boolean;
  currentLocation: LocationData | null;
  safetyScore: number;
  nearbyServices: NearbyService[];
  touristZones: TouristZone[];
  activeAlerts: SafetyAlert[];
  error: string | null;
  
  // Actions
  initializeService: (config: LocfyConfig) => Promise<boolean>;
  startTracking: () => Promise<void>;
  stopTracking: () => void;
  shareEmergencyLocation: (contactIds: string[]) => Promise<string | null>;
  reportIncident: (incident: any) => Promise<string | null>;
  getDirections: (destination: {latitude: number, longitude: number}) => Promise<any>;
  refreshNearbyServices: (serviceType?: string) => Promise<void>;
  refreshTouristZones: () => Promise<void>;
}

export const useLocfy = (): UseLocfyReturn => {
  // State
  const [isInitialized, setIsInitialized] = useState(false);
  const [isTracking, setIsTracking] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<LocationData | null>(null);
  const [safetyScore, setSafetyScore] = useState(75);
  const [nearbyServices, setNearbyServices] = useState<NearbyService[]>([]);
  const [touristZones, setTouristZones] = useState<TouristZone[]>([]);
  const [activeAlerts, setActiveAlerts] = useState<SafetyAlert[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Refs
  const locfyServiceRef = useRef(getLocfyInstance());
  const alertsRef = useRef<SafetyAlert[]>([]);

  // Initialize Locfy service
  const initializeService = useCallback(async (config: LocfyConfig): Promise<boolean> => {
    try {
      setError(null);
      
      if (!locfyServiceRef.current) {
        locfyServiceRef.current = initializeLocfy(config);
      }

      const success = await locfyServiceRef.current.initialize();
      
      if (success) {
        setIsInitialized(true);
        setupEventListeners();
        console.log('Locfy service initialized successfully');
      } else {
        setError('Failed to initialize location services');
      }
      
      return success;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      console.error('Error initializing Locfy:', err);
      return false;
    }
  }, []);

  // Setup event listeners
  const setupEventListeners = useCallback(() => {
    const service = locfyServiceRef.current;
    if (!service) return;

    // Location updates
    const handleLocationUpdate = (location: LocationData) => {
      setCurrentLocation(location);
      if (location.safetyScore !== undefined) {
        setSafetyScore(location.safetyScore);
      }
      if (location.nearbyServices) {
        setNearbyServices(location.nearbyServices);
      }
    };

    // Safety alerts
    const handleSafetyAlert = (alert: SafetyAlert) => {
      setActiveAlerts(prev => {
        const filtered = prev.filter(a => a.id !== alert.id);
        const updated = [...filtered, alert];
        alertsRef.current = updated;
        return updated;
      });
    };

    // Geofence events
    const handleGeofenceEnter = (zone: any) => {
      console.log('Entered geofence:', zone);
    };

    const handleGeofenceExit = (zone: any) => {
      console.log('Exited geofence:', zone);
    };

    // Attach listeners
    service.on('locationUpdate', handleLocationUpdate);
    service.on('safetyAlert', handleSafetyAlert);
    service.on('geofenceEnter', handleGeofenceEnter);
    service.on('geofenceExit', handleGeofenceExit);

    // Cleanup function
    return () => {
      service.off('locationUpdate', handleLocationUpdate);
      service.off('safetyAlert', handleSafetyAlert);
      service.off('geofenceEnter', handleGeofenceEnter);
      service.off('geofenceExit', handleGeofenceExit);
    };
  }, []);

  // Start location tracking
  const startTracking = useCallback(async (): Promise<void> => {
    const service = locfyServiceRef.current;
    if (!service || !isInitialized) {
      setError('Locfy service not initialized');
      return;
    }

    try {
      setError(null);
      await service.startLocationTracking();
      setIsTracking(true);
      console.log('Location tracking started');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to start tracking';
      setError(errorMessage);
      console.error('Error starting location tracking:', err);
    }
  }, [isInitialized]);

  // Stop location tracking
  const stopTracking = useCallback((): void => {
    const service = locfyServiceRef.current;
    if (!service) return;

    service.stopLocationTracking();
    setIsTracking(false);
    console.log('Location tracking stopped');
  }, []);

  // Share emergency location
  const shareEmergencyLocation = useCallback(async (contactIds: string[]): Promise<string | null> => {
    const service = locfyServiceRef.current;
    if (!service || !isInitialized) {
      setError('Locfy service not initialized');
      return null;
    }

    try {
      setError(null);
      const shareId = await service.shareEmergencyLocation(contactIds);
      console.log('Emergency location shared:', shareId);
      return shareId;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to share location';
      setError(errorMessage);
      console.error('Error sharing emergency location:', err);
      return null;
    }
  }, [isInitialized]);

  // Report incident
  const reportIncident = useCallback(async (incident: any): Promise<string | null> => {
    const service = locfyServiceRef.current;
    if (!service || !isInitialized) {
      setError('Locfy service not initialized');
      return null;
    }

    try {
      setError(null);
      const incidentId = await service.reportIncident(incident);
      console.log('Incident reported:', incidentId);
      return incidentId;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to report incident';
      setError(errorMessage);
      console.error('Error reporting incident:', err);
      return null;
    }
  }, [isInitialized]);

  // Get directions
  const getDirections = useCallback(async (destination: {latitude: number, longitude: number}): Promise<any> => {
    const service = locfyServiceRef.current;
    if (!service || !isInitialized) {
      setError('Locfy service not initialized');
      return null;
    }

    try {
      setError(null);
      const route = await service.getDirections(destination);
      console.log('Directions retrieved:', route);
      return route;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get directions';
      setError(errorMessage);
      console.error('Error getting directions:', err);
      return null;
    }
  }, [isInitialized]);

  // Refresh nearby services
  const refreshNearbyServices = useCallback(async (serviceType?: string): Promise<void> => {
    const service = locfyServiceRef.current;
    if (!service || !isInitialized) return;

    try {
      const services = await service.getNearbyServices(serviceType);
      setNearbyServices(services);
      console.log('Nearby services refreshed:', services.length);
    } catch (err) {
      console.error('Error refreshing nearby services:', err);
    }
  }, [isInitialized]);

  // Refresh tourist zones
  const refreshTouristZones = useCallback(async (): Promise<void> => {
    const service = locfyServiceRef.current;
    if (!service || !isInitialized) return;

    try {
      const zones = await service.getTouristZones();
      setTouristZones(zones);
      console.log('Tourist zones refreshed:', zones.length);
    } catch (err) {
      console.error('Error refreshing tourist zones:', err);
    }
  }, [isInitialized]);

  // Cleanup expired alerts
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setActiveAlerts(prev => {
        const active = prev.filter(alert => alert.activeUntil > now);
        if (active.length !== prev.length) {
          alertsRef.current = active;
        }
        return active;
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  // Auto-refresh nearby services when location changes
  useEffect(() => {
    if (currentLocation && isInitialized) {
      refreshNearbyServices();
      refreshTouristZones();
    }
  }, [currentLocation, isInitialized, refreshNearbyServices, refreshTouristZones]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      const service = locfyServiceRef.current;
      if (service) {
        service.destroy();
      }
    };
  }, []);

  return {
    // State
    isInitialized,
    isTracking,
    currentLocation,
    safetyScore,
    nearbyServices,
    touristZones,
    activeAlerts,
    error,
    
    // Actions
    initializeService,
    startTracking,
    stopTracking,
    shareEmergencyLocation,
    reportIncident,
    getDirections,
    refreshNearbyServices,
    refreshTouristZones
  };
};

export default useLocfy;