import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SalahList from '../components/SalahList';

const Home: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <SalahList />
  </SafeAreaView>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 15,
    marginRight: 15,
  },
});

export default Home;
