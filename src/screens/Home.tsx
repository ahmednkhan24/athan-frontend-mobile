import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Text } from 'react-native-elements';
import SalahList from '../components/SalahList';

const LeftActions = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}
    >
      <Text
        style={{
          color: 'white',
          paddingHorizontal: 10,
          fontWeight: '600',
        }}
      >
        Left Action
      </Text>
    </View>
  );
};

const RightActions = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
      <Text
        style={{
          color: 'white',
          paddingHorizontal: 10,
          fontWeight: '600',
        }}
      >
        Right Action
      </Text>
    </View>
  );
};

const Home: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <Swipeable
      renderLeftActions={LeftActions}
      renderRightActions={RightActions}
    >
      <SalahList />
    </Swipeable>
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
