import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { useCoordinates, useCity } from '../hooks';

export type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { coordinates, calculateCoordinates } = useCoordinates();
  const { city } = useCity();

  return (
    <View style={styles.container}>
      <Text h3>city: {coordinates && city ? city : 'null'}</Text>
      <Text></Text>
      <Text h3>coordinates: {JSON.stringify(coordinates)}</Text>
      <Button title="Refetch Coordinates" onPress={calculateCoordinates} />
      <Text></Text>
      <Button
        title="Go to Sample Page"
        onPress={() => navigation.navigate('Sample')}
      />
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
