import React, { useContext, useState, useCallback } from 'react';
import { RefreshControl } from 'react-native';
import { LocationContext } from '../contexts/LocationContext';

const LocationRefresh: React.FC = () => {
  const { calculateCoordinates } = useContext(LocationContext);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await calculateCoordinates();
    setIsRefreshing(false);
  }, []);

  return <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />;
};

export default LocationRefresh;
