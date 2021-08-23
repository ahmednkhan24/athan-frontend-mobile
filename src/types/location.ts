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

export type UseCoordinates = {
  coordinates: Coordinates | null;
  calculateCoordinates: () => any;
};

export type LocationState = {
  coordinates: Coordinates;
  city: string;
};

export type UseLocation = () => {
  location: LocationState;
  recalculateLocation: () => Action;
};

export type UseCity = {
  city: string | null;
  calculateCity: () => any;
};
