import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Text } from 'react-native-elements';
import SalahList from '../components/SalahList';
import LocationHeader from '../components/LocationHeader';
import PullToRefresh from '../components/PullToRefresh';

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
    <ScrollView
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshControl={<PullToRefresh />}
    >
      <LocationHeader />
      <Swipeable
        renderLeftActions={LeftActions}
        renderRightActions={RightActions}
      >
        <SalahList />
      </Swipeable>
    </ScrollView>
  </SafeAreaView>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 15,
    marginRight: 15,
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default Home;
