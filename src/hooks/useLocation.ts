import { useState, useEffect, useCallback } from 'react';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

export const useLocation = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchLocation = useCallback(async (): Promise<void> => {
    try {
      const { status } = await requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Permission to access location was denied');
        return;
      }

      const location = await getCurrentPositionAsync({});
      setLocation(JSON.stringify(location));
    } catch (err) {
      setErrorMessage('Error');
    }
  }, []);

  useEffect(() => {
    fetchLocation();
  }, []);

  return { location, fetchLocation, errorMessage };
};
