import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

export type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
}

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h3>
        Hello World
      </Text>
      <Button
        title="Go to Sample Page"
        onPress={() => navigation.navigate('Sample')}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;