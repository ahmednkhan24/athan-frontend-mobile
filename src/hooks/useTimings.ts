import { useEffect, useCallback } from 'react';
import { fetchTimingsByCity, fetchTimingsByCoordinates } from 'athan-shared';
// import { useLocation } from './useLocation';

export const useTimings = () => {
  // const { location } = useLocation();

  const fetchPrayerTimings = useCallback(async () => {
    console.log('fetching...');
    const paramsCity = {
      city: 'Streamwood',
      state: 'Illinois',
      country: 'US',
      method: 2, // ISNA
      school: 1, // Hanafi
      tune: '0,0,0,0,0,0,0,0,0',
    };

    const paramsCoords = {
      latitude: 41.882691985764495,
      longitude: -87.62336315997155,
      country: 'US',
      method: 2, // ISNA
      school: 1, // Hanafi
      tune: '0,0,0,0,0,0,0,0,0',
    };

    const timings = await fetchTimingsByCity(paramsCity);
    console.log('timings: ', timings);

    const timings2 = await fetchTimingsByCoordinates(paramsCoords);
    console.log('timings2: ', timings2);
  }, []);

  useEffect(() => {
    fetchPrayerTimings();
  }, []);

  return { fetchPrayerTimings };
};
