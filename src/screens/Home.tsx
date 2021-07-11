import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { useLocation, useTimings } from '../hooks';

export type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { location } = useLocation();
  const { fetchPrayerTimings } = useTimings();

  return (
    <View style={styles.container}>
      <Text h3>Hello World</Text>
      <Text h4>{JSON.stringify(location)}</Text>
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
