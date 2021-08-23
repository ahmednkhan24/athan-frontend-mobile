import { put, takeEvery } from 'redux-saga/effects';
import { saveCoordinates, saveCity, setIsLoading } from '../actions';
import { CALCULATE_COORDINATES, SAVE_COORDINATES } from '../constants';
import {
  retrieveDeviceCoordinates,
  convertDeviceCoordinatesToAddress,
} from '../../utils';
import { Coordinates, DeviceAddress } from '../../types';

export function* attemptToCalculateCoordinates() {
  yield put(setIsLoading(true));
  const { latitude, longitude }: Coordinates =
    yield retrieveDeviceCoordinates();
  yield put(
    saveCoordinates({
      latitude: parseFloat(latitude.toFixed(5)),
      longitude: parseFloat(longitude.toFixed(5)),
    })
  );
}

export function* attemptToCalculateCity(action: any) {
  const { city }: DeviceAddress = yield convertDeviceCoordinatesToAddress(
    action.payload
  );
  yield put(saveCity(city));
  yield put(setIsLoading(false));
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
