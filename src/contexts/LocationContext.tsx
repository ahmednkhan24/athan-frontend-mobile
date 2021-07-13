import { createContext } from 'react';

const initialLocationValues: any = {};

const LocationContext = createContext<any>(initialLocationValues);

const LocationProvider: React.FC = ({ children }) => {
  return (
    <LocationContext.Provider value={{}}>{children}</LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
