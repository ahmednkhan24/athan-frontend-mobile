import { LocationGeocodedAddress } from 'expo-location';
import { Action } from './store';

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type DeviceAddress =
  | LocationGeocodedAddress
  | {
      city: string;
    };

export type LocationState = {
  isLoading: boolean;
  coordinates: Coordinates;
  city: string;
  timings: Timings;
};

export type UseLocation = () => {
  location: LocationState;
  recalculateLocation: () => Action;
};

export type Timings = {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};
