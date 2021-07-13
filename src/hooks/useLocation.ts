import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  LocationObject,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  reverseGeocodeAsync,
} from 'expo-location';

// TODO: obtain default location from localStorage
const defaultLocation = {
  // the bean in downtown Chicago
  coords: {
    latitude: 41.882691985764495,
    longitude: -87.62336315997155,
    altitude: null,
    accuracy: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  },
  timestamp: 123,
};

export const useLocation = () => {
  const [location, setLocation] = useState<LocationObject>(defaultLocation);
  const [city, setCity] = useState<string>('Chicago');
  const [errorMessage, setErrorMessage] = useState<string>('');

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

  // convert location object to an adress any time the location object changes
  useEffect(() => {
    const gecode = async () => {
      try {
        const { coords } = location;
        // TODO: get geocoding to work in browser
        const [address] = await reverseGeocodeAsync(coords);
        setCity(address.city || 'Chicago');
      } catch (err) {
        setErrorMessage('Error converting user location to an address');
      }
    };

    gecode();
  }, [location]);

  return { location, fetchLocation, city, errorMessage };
};
