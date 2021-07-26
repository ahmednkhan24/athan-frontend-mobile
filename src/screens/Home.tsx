import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { LocationContext } from '../contexts';
import { useDate } from '../hooks';
import PullToRefresh from '../components/PullToRefresh';

const Home: React.FC = () => {
  const { city } = useContext(LocationContext);
  const { formattedDate } = useDate();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshControl={<PullToRefresh />}
      >
        <Text h1 style={styles.cityStyles}>
          {city || 'Chicago'}
        </Text>
        <Text style={styles.dateStyles}>{formattedDate}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  cityStyles: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateStyles: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default Home;
