import React from 'react';
import { View, StyleSheet } from 'react-native';
import LocationDisplay from '../components/LocationDisplay';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <LocationDisplay />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
