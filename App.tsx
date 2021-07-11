import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text h3>
          Hello World
        </Text>
      </View>
    </NavigationContainer>
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

export default App;