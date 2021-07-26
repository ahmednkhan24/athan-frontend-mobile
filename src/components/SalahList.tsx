import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SalahItem from './SalahItem';

const salahs = [
  { title: 'Fajr', time: '4:41 am' },
  { title: 'Dhur', time: '12:30 pm' },
  { title: 'Asr', time: '5:20 pm' },
  { title: 'Maghreb', time: '8:10 pm' },
  { title: 'Isha', time: '10:54 pm' },
];

const SalahList: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
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
  container: {
    flex: 1,
  },
});

export default SalahList;
