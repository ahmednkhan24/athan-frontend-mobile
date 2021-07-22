import React, { createContext } from 'react';
import { useCoordinates, useCity } from '../hooks';
import { LocationContextValues } from '../types';

const initialLocationValues: LocationContextValues = {
  coordinates: null,
  calculateCoordinates: () => {},
  city: null,
  calculateCity: () => {},
};

const LocationContext = createContext<LocationContextValues>(
  initialLocationValues
);

const LocationProvider: React.FC = ({ children }) => {
  const coordValues = useCoordinates();
  const cityValues = useCity();

  return (
    <LocationContext.Provider value={{ ...coordValues, ...cityValues }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
