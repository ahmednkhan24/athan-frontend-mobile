import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useCoordinates, useCity } from '../hooks';

const LocationDisplay: React.FC = () => {
  const { calculateCoordinates } = useCoordinates();
  const { city } = useCity();

  return (
    <View style={styles.container}>
      <Text h1 style={styles.cityStyles}>
        {city ?? 'loading...'}
      </Text>
      <Text style={styles.elapsedTimeStyles}>3 secs ago</Text>
      <TouchableOpacity onPress={calculateCoordinates}>
        <Ionicons
          name="refresh"
          size={24}
          color="grey"
          style={styles.iconStyles}
        />
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  cityStyles: {
    flex: 1,
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  elapsedTimeStyles: {
    paddingTop: 25,
    paddingRight: 5,
  },
  iconStyles: {
    flex: 1,
    paddingTop: 15,
    // borderColor: 'black',
    // borderWidth: 1,
    fontSize: 35, // make icon size larger
    alignSelf: 'center', // keep icon in the center of it's area
    marginHorizontal: 15, // add extra space to the left and right of the icon
  },
});

export default LocationDisplay;
