import pick from 'lodash/fp/pick';
import {
  fetchTimingsByCoordinates,
  FetchTimingsByCoordsParams,
} from 'athan-shared';
import {
  LocationObject,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  reverseGeocodeAsync,
  LocationGeocodedAddress,
} from 'expo-location';
import { initialState as initialLocationState } from '../store/reducers/locationReducers';
import { Coordinates, DeviceAddress, Timings } from '../types';

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

export const fetchTimingsBasedOnCoordinates = async (
  coords: Coordinates
): Promise<Timings> => {
  try {
    const params: FetchTimingsByCoordsParams = {
      ...coords,
      method: 2, // ISNA
      school: 1, // Hanafi
      tune: '0,0,0,0,0,0,0,0,0',
    };

    const timings = await fetchTimingsByCoordinates(params);
    const filteredTimings = pick(
      ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'],
      timings
    );

    return filteredTimings;
  } catch (err) {
    console.log('Error trying to fetch timings based on coordinates.');
    return {
      Fajr: '',
      Dhuhr: '',
      Asr: '',
      Maghrib: '',
      Isha: '',
    };
  }
};
