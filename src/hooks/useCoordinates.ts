import { useState, useEffect, useCallback } from 'react';
import {
  LocationObject,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { GRANTED } from '../constants';
import type { Coordinates } from '../types';

export const useCoordinates = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  // get permission to access location and then retrieve it
  const calculateCoordinates = useCallback(async (): Promise<void> => {
    try {
      setCoordinates(null);
      const { status } = await requestForegroundPermissionsAsync();
      if (status === GRANTED) {
        const { coords }: LocationObject = await getCurrentPositionAsync();
        const latitude = parseFloat(coords.latitude.toFixed(5));
        const longitude = parseFloat(coords.longitude.toFixed(5));
        setCoordinates({ latitude, longitude });
      }
    } catch (err) {
      setCoordinates(null);
    }
  }, []);

  // fetch location on initial load
  useEffect(() => {
    calculateCoordinates();
  }, []);

  return { coordinates, calculateCoordinates };
};
