import React, { useState, useCallback } from 'react';
import { RefreshControl } from 'react-native';

const LocationRefresh: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setIsRefreshing(true);
    setInterval(() => setIsRefreshing(false), 500);
  }, [isRefreshing]);

  return <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />;
};

export default LocationRefresh;
