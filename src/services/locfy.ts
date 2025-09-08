// Locfy Service Integration for Tourist Digital ID App

export interface LocfyConfig {
  apiKey: string;
  baseUrl: string;
  enableRealTimeTracking: boolean;
  enableGeofencing: boolean;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: Date;
  address?: string;
  safetyScore?: number;
  nearbyServices?: NearbyService[];
}

export interface NearbyService {
  id: string;
  name: string;
  type: 'police' | 'hospital' | 'tourist_info' | 'embassy' | 'transport';
  distance: number;
  address: string;
  phone?: string;
  isOpen: boolean;
  safetyRating: number;
}

export interface SafetyAlert {
  id: string;
  type: 'crime' | 'weather' | 'traffic' | 'emergency';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  message: string;
  location: {
    latitude: number;
    longitude: number;
    radius: number; // meters
  };
  activeUntil: Date;
  instructions: string[];
}

export interface TouristZone {
  id: string;
  name: string;
  type: 'attraction' | 'shopping' | 'dining' | 'transport' | 'accommodation';
  safetyLevel: number;
  crowdLevel: 'low' | 'medium' | 'high';
  operatingHours: {
    open: string;
    close: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  amenities: string[];
}

class LocfyService {
  private config: LocfyConfig;
  private currentLocation: LocationData | null = null;
  private watchId: number | null = null;
  private eventListeners: Map<string, Function[]> = new Map();

  constructor(config: LocfyConfig) {
    this.config = config;
    this.initializeEventListeners();
  }

  private initializeEventListeners() {
    this.eventListeners.set('locationUpdate', []);
    this.eventListeners.set('safetyAlert', []);
    this.eventListeners.set('geofenceEnter', []);
    this.eventListeners.set('geofenceExit', []);
  }

  // Initialize Locfy SDK
  async initialize(): Promise<boolean> {
    try {
      // Mock Locfy SDK initialization
      console.log('Initializing Locfy SDK...');
      
      // Request location permissions
      const hasPermission = await this.requestLocationPermission();
      if (!hasPermission) {
        throw new Error('Location permission denied');
      }

      // Connect to Locfy servers
      await this.connectToLocfy();
      
      console.log('Locfy SDK initialized successfully');
      return true;
    } catch (error) {
      console.error('Failed to initialize Locfy:', error);
      return false;
    }
  }

  private async requestLocationPermission(): Promise<boolean> {
    return new Promise((resolve) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          () => resolve(true),
          () => resolve(false),
          { enableHighAccuracy: true, timeout: 10000 }
        );
      } else {
        resolve(false);
      }
    });
  }

  private async connectToLocfy(): Promise<void> {
    // Mock API connection
    const response = await fetch(`${this.config.baseUrl}/connect`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        deviceId: this.generateDeviceId(),
        appVersion: '1.0.0',
        userType: 'tourist'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to connect to Locfy servers');
    }
  }

  private generateDeviceId(): string {
    return 'device_' + Math.random().toString(36).substr(2, 9);
  }

  // Real-time location tracking
  async startLocationTracking(): Promise<void> {
    if (this.watchId) {
      console.log('Location tracking already active');
      return;
    }

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        const locationData: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date(position.timestamp)
        };

        this.currentLocation = locationData;
        this.processLocationUpdate(locationData);
      },
      (error) => {
        console.error('Location tracking error:', error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 30000, // 30 seconds
        timeout: 15000
      }
    );
  }

  stopLocationTracking(): void {
    if (this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
      console.log('Location tracking stopped');
    }
  }

  private async processLocationUpdate(location: LocationData): Promise<void> {
    try {
      // Enhance location data with Locfy services
      const enhancedLocation = await this.enhanceLocationData(location);
      
      // Check for safety alerts in the area
      const alerts = await this.checkSafetyAlerts(location);
      
      // Update safety score
      const safetyScore = await this.calculateSafetyScore(location);
      enhancedLocation.safetyScore = safetyScore;

      // Emit location update event
      this.emit('locationUpdate', enhancedLocation);

      // Process any safety alerts
      alerts.forEach(alert => {
        this.emit('safetyAlert', alert);
      });

    } catch (error) {
      console.error('Error processing location update:', error);
    }
  }

  private async enhanceLocationData(location: LocationData): Promise<LocationData> {
    try {
      // Mock API call to get address and nearby services
      const response = await fetch(`${this.config.baseUrl}/enhance-location`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude
        })
      });

      if (response.ok) {
        const data = await response.json();
        return {
          ...location,
          address: data.address,
          nearbyServices: data.nearbyServices
        };
      }
    } catch (error) {
      console.error('Error enhancing location data:', error);
    }

    return location;
  }

  async calculateSafetyScore(location: LocationData): Promise<number> {
    try {
      const response = await fetch(`${this.config.baseUrl}/safety-score`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
          timestamp: location.timestamp
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.safetyScore;
      }
    } catch (error) {
      console.error('Error calculating safety score:', error);
    }

    // Return default safety score
    return 75;
  }

  async checkSafetyAlerts(location: LocationData): Promise<SafetyAlert[]> {
    try {
      const response = await fetch(`${this.config.baseUrl}/safety-alerts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
          radius: 5000 // 5km radius
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.alerts;
      }
    } catch (error) {
      console.error('Error checking safety alerts:', error);
    }

    return [];
  }

  // Get nearby services (hospitals, police, tourist info, etc.)
  async getNearbyServices(serviceType?: string): Promise<NearbyService[]> {
    if (!this.currentLocation) {
      throw new Error('Current location not available');
    }

    try {
      const response = await fetch(`${this.config.baseUrl}/nearby-services`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          latitude: this.currentLocation.latitude,
          longitude: this.currentLocation.longitude,
          radius: 10000, // 10km
          serviceType: serviceType || 'all'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.services;
      }
    } catch (error) {
      console.error('Error getting nearby services:', error);
    }

    return [];
  }

  // Get tourist zones and attractions
  async getTouristZones(): Promise<TouristZone[]> {
    if (!this.currentLocation) {
      throw new Error('Current location not available');
    }

    try {
      const response = await fetch(`${this.config.baseUrl}/tourist-zones`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          latitude: this.currentLocation.latitude,
          longitude: this.currentLocation.longitude,
          radius: 25000 // 25km
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.zones;
      }
    } catch (error) {
      console.error('Error getting tourist zones:', error);
    }

    return [];
  }

  // Emergency location sharing
  async shareEmergencyLocation(contactIds: string[]): Promise<string> {
    if (!this.currentLocation) {
      throw new Error('Current location not available');
    }

    try {
      const response = await fetch(`${this.config.baseUrl}/emergency-share`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          location: this.currentLocation,
          contactIds: contactIds,
          emergencyType: 'sos',
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.shareId;
      }
    } catch (error) {
      console.error('Error sharing emergency location:', error);
    }

    throw new Error('Failed to share emergency location');
  }

  // Route planning and directions
  async getDirections(destination: {latitude: number, longitude: number}): Promise<any> {
    if (!this.currentLocation) {
      throw new Error('Current location not available');
    }

    try {
      const response = await fetch(`${this.config.baseUrl}/directions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          origin: {
            latitude: this.currentLocation.latitude,
            longitude: this.currentLocation.longitude
          },
          destination: destination,
          mode: 'walking', // walking, driving, transit
          avoidDangerousAreas: true
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.route;
      }
    } catch (error) {
      console.error('Error getting directions:', error);
    }

    return null;
  }

  // Report incident with location
  async reportIncident(incident: {
    type: string;
    description: string;
    priority: string;
    photos?: string[];
  }): Promise<string> {
    if (!this.currentLocation) {
      throw new Error('Current location not available');
    }

    try {
      const response = await fetch(`${this.config.baseUrl}/report-incident`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...incident,
          location: this.currentLocation,
          timestamp: new Date().toISOString(),
          userId: this.generateDeviceId()
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.incidentId;
      }
    } catch (error) {
      console.error('Error reporting incident:', error);
    }

    throw new Error('Failed to report incident');
  }

  // Event system
  on(event: string, callback: Function): void {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event)!.push(callback);
  }

  off(event: string, callback: Function): void {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  private emit(event: string, data: any): void {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      listeners.forEach(callback => callback(data));
    }
  }

  // Utility methods
  getCurrentLocation(): LocationData | null {
    return this.currentLocation;
  }

  async getLocationAddress(latitude: number, longitude: number): Promise<string> {
    try {
      const response = await fetch(`${this.config.baseUrl}/reverse-geocode`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ latitude, longitude })
      });

      if (response.ok) {
        const data = await response.json();
        return data.address;
      }
    } catch (error) {
      console.error('Error getting address:', error);
    }

    return 'Unknown location';
  }

  // Cleanup
  destroy(): void {
    this.stopLocationTracking();
    this.eventListeners.clear();
    console.log('Locfy service destroyed');
  }
}

// Singleton instance
let locfyInstance: LocfyService | null = null;

export const initializeLocfy = (config: LocfyConfig): LocfyService => {
  if (!locfyInstance) {
    locfyInstance = new LocfyService(config);
  }
  return locfyInstance;
};

export const getLocfyInstance = (): LocfyService | null => {
  return locfyInstance;
};

export default LocfyService;