import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useDate } from '../hooks';

export type SwipeProps = {
  swipeType: 'RIGHT' | 'LEFT';
};

const SwipeAction: React.FC<SwipeProps> = ({ swipeType }) => {
  const { subtractOneDay, addOneDay } = useDate();

  return (
    <View style={styles.swipeViewStyles}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export const styles = StyleSheet.create({
  swipeViewStyles: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default SwipeAction;
