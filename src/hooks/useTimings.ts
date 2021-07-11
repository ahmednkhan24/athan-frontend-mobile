import { useEffect, useCallback } from 'react';
import { fetchTimingsByCity } from 'athan-shared';
// import { useLocation } from './useLocation';

export const useTimings = () => {
  // const { location } = useLocation();

  const fetchPrayerTimings = useCallback(async () => {
    const params = {
      city: 'Streamwood',
      state: 'Illinois',
      country: 'US',
      method: 2, // ISNA
      school: 1, // Hanafi
      tune: '0,0,0,0,0,0,0,0,0',
    };

    const timings = await fetchTimingsByCity(params);
    console.log('timings: ', timings);
  }, []);

  useEffect(() => {
    fetchPrayerTimings();
  }, []);

  return { fetchPrayerTimings };
};
