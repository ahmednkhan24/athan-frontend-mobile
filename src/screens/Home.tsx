import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import LocationDisplay from '../components/LocationDisplay';

export type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LocationDisplay />
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
