import { useState, useEffect, useCallback } from 'react';
import {
  LocationObject,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

export const useLocation = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // get permission to access location and then retrieve it
  const fetchLocation = useCallback(async (): Promise<void> => {
    try {
      const { status } = await requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Permission to access location was denied');
        return;
      }

      const location = await getCurrentPositionAsync({});
      setLocation(location);
    } catch (err) {
      setErrorMessage('Error fetching user location');
    }
  }, []);

  // fetch location on initial load
  useEffect(() => {
    fetchLocation();
  }, []);

  return { location, fetchLocation, errorMessage };
};
