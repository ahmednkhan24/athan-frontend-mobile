import { useState, useEffect } from 'react';
import { reverseGeocodeAsync, LocationGeocodedAddress } from 'expo-location';
import { useCoordinates } from './useCoordinates';

export const useCity = () => {
  const { coordinates } = useCoordinates();
  const [city, setCity] = useState<string | null>(null);

  // check if we have to recalculate the user's city any time the coordinates object changes
  useEffect(() => {
    // convert latitude longitude object to an address
    const geocode = async () => {
      if (coordinates) {
        // TODO: get geocoding to work in browser
        const [address]: LocationGeocodedAddress[] = await reverseGeocodeAsync(
          coordinates
        ); // expensive function
        if (address.city) {
          setCity(address.city);
        }
      }
    };

    const geocodeIfNecessary = async () => {
      if (!coordinates) {
        return;
      }
      // TODO: use cache to determine if we need to geocode again
      geocode();
    };

    setCity(null);
    geocodeIfNecessary().catch(() => setCity(null));
  }, [coordinates]);

  return { city };
};
