import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import SalahItem from './SalahItem';
import PullToRefresh from './PullToRefresh';
import { LocationContext } from '../contexts';
import { useDate } from '../hooks';

const salahs = [
  { title: 'Fajr', time: '4:41 am' },
  { title: 'Dhur', time: '12:30 pm' },
  { title: 'Asr', time: '5:20 pm' },
  { title: 'Maghreb', time: '8:10 pm' },
  { title: 'Isha', time: '10:54 pm' },
];

const SalahList: React.FC = () => {
  const { city } = useContext(LocationContext);
  const { formattedDate, subtractOneDay, addOneDay } = useDate();

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={<PullToRefresh />}
        ListHeaderComponent={
          <>
            <Text h1 style={styles.cityStyles}>
              {city || 'Chicago'}
            </Text>
            <Text style={styles.dateStyles}>{formattedDate}</Text>
            <Button onPress={subtractOneDay} title="Subtract a Day" />
            <Text></Text>
            <Button onPress={addOneDay} title="Add a Day" />
          </>
        }
        data={salahs}
        keyExtractor={(salah) => salah.title}
        renderItem={({ item }) => (
          <SalahItem title={item.title} time={item.time} />
        )}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {},
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

export default SalahList;
