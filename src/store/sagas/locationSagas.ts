import { put, takeEvery } from 'redux-saga/effects';
import {
  LocationObject,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  reverseGeocodeAsync,
  LocationGeocodedAddress,
} from 'expo-location';
import { saveCoordinates, saveCity } from '../actions';
import { CALCULATE_COORDINATES, SAVE_COORDINATES } from '../constants';
import { GRANTED } from '../../constants';

export function* attemptToCalculateCoordinates() {
  const { status } = yield requestForegroundPermissionsAsync();
  if (status === GRANTED) {
    const { coords }: LocationObject = yield getCurrentPositionAsync();
    yield put(
      saveCoordinates({
        latitude: parseFloat(coords.latitude.toFixed(5)),
        longitude: parseFloat(coords.longitude.toFixed(5)),
      })
    );
  }
}

export function* attemptToCalculateCity(action: any) {
  const [address]: LocationGeocodedAddress[] = yield reverseGeocodeAsync(
    action.payload
  );
  yield put(saveCity((address as any).city));
}

export function* calculateCoordinates() {
  yield takeEvery(CALCULATE_COORDINATES, attemptToCalculateCoordinates);
}

export function* calculateCity() {
  yield takeEvery(SAVE_COORDINATES, attemptToCalculateCity);
}

export default () => {
  return [calculateCoordinates(), calculateCity()];
};
