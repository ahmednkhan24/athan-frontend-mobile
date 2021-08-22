import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useDate, useLocation } from '../hooks';

const SalahHeader: React.FC = () => {
  const {
    location: { city },
  } = useLocation();
  const { formattedDate, subtractOneDay, addOneDay } = useDate();

  return (
    <View style={styles.container}>
      <Text h1 style={styles.cityStyles}>
        {city}
      </Text>
      <Text style={styles.dateStyles}>{formattedDate}</Text>
      <Button onPress={subtractOneDay} title="Subtract a Day" />
      <Text></Text>
      <Button onPress={addOneDay} title="Add a Day" />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {},
  cityStyles: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateStyles: {
    flex: 1,
    justifyContent: 'flex-start',
    fontSize: 15,
    padding: 12,
    paddingLeft: 0,
  },
});

export default SalahHeader;
