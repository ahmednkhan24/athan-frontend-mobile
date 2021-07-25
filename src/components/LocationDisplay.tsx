import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { LocationContext } from '../contexts/LocationContext';
import LocationRefresh from './LocationRefresh';

const LocationDisplay: React.FC = () => {
  const { city } = useContext(LocationContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshControl={<LocationRefresh />}
      >
        <Text h1 style={styles.cityStyles}>
          {city}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  scrollView: {
    flex: 1,
  },
  cityStyles: {
    flex: 1,
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default LocationDisplay;
