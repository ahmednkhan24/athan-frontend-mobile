import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const Sample: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text h3>Settings Screen</Text>
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

export default Sample;
