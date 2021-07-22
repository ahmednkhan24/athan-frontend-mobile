import { useState, useEffect, useCallback } from 'react';
import { reverseGeocodeAsync, LocationGeocodedAddress } from 'expo-location';
import { useCoordinates } from './useCoordinates';
import { UseCity } from '../types';

export const useCity = (): UseCity => {
  const { coordinates } = useCoordinates();
  const [city, setCity] = useState<string | null>(null);

  // convert latitude longitude object to an address
  const calculateCity = useCallback(async () => {
    try {
      setCity(null);
      if (coordinates) {
        // TODO: get geocoding to work in browser
        const [address]: LocationGeocodedAddress[] = await reverseGeocodeAsync(
          coordinates
        );
        setCity(address.city ? address.city : null);
      }
    } catch (err) {
      setCity(null);
    }
  }, [coordinates]);

  // recalculate city any time the coordinates object changes
  useEffect(() => {
    calculateCity();
  }, [coordinates]);

  return { city, calculateCity };
};
