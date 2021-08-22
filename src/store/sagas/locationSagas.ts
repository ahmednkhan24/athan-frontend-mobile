import { put, takeEvery } from 'redux-saga/effects';
import {
  LocationObject,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { saveCoordinates } from '../actions';
import { CALCULATE_COORDINATES } from '../constants';
import { GRANTED } from '../../constants';

export function* attemptToCalculateCoordinates() {
  const { status } = yield requestForegroundPermissionsAsync();
  if (status === GRANTED) {
    const { coords }: LocationObject = yield getCurrentPositionAsync();
    // const latitude = parseFloat(coords.latitude.toFixed(5));
    // const longitude = parseFloat(coords.longitude.toFixed(5));
    yield put(
      saveCoordinates({
        latitude: parseFloat(coords.latitude.toFixed(5)),
        longitude: parseFloat(coords.longitude.toFixed(5)),
      })
    );
  }
}

export function* calculateCoordinates() {
  yield takeEvery(CALCULATE_COORDINATES, attemptToCalculateCoordinates);
}
