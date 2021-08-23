import {
  LocationObject,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  reverseGeocodeAsync,
  LocationGeocodedAddress,
} from 'expo-location';
import { initialState as initialLocationState } from '../store/reducers/locationReducers';
import { Coordinates, DeviceAddress } from '../types';

export const retrieveDeviceCoordinates = async (): Promise<Coordinates> => {
  try {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const { coords }: LocationObject = await getCurrentPositionAsync();
      return coords;
    }
  } catch (err) {
    console.log('Error trying to retrieve device location.');
  }
  return initialLocationState.coordinates;
};

export const convertDeviceCoordinatesToAddress = async (
  coords: Coordinates
): Promise<DeviceAddress> => {
  try {
    const [address]: LocationGeocodedAddress[] = await reverseGeocodeAsync(
      coords
    );
    return address;
  } catch (err) {
    console.log('Error trying to reverse geocode device coordinates.');
  }
  return { city: 'Indianapolis' };
};
