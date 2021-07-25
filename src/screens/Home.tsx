import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LocationDisplay from '../components/LocationDisplay';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LocationDisplay />
    </SafeAreaView>
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
