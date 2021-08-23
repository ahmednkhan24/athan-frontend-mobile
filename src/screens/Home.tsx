import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import SalahList from '../components/SalahList';
import LocationHeader from '../components/LocationHeader';
import Swipe from '../components/Swipe';
import { useLocation } from '../hooks';

const Home: React.FC = () => {
  const {
    location: { isLoading },
    recalculateLocation,
  } = useLocation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewStyles}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={recalculateLocation}
          />
        }
      >
        <LocationHeader />
        <Swipeable
          renderLeftActions={() => <Swipe swipeType="LEFT" />}
          renderRightActions={() => <Swipe swipeType="RIGHT" />}
        >
          <SalahList />
        </Swipeable>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 15,
    marginRight: 15,
  },
  scrollViewStyles: {
    flexGrow: 1,
  },
});

export default Home;
