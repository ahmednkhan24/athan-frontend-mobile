import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import SalahItem from './SalahItem';

const salahs = [
  { title: 'Fajr', time: '4:41 am' },
  { title: 'Dhur', time: '12:30 pm' },
  { title: 'Asr', time: '5:20 pm' },
  { title: 'Maghreb', time: '8:10 pm' },
  { title: 'Isha', time: '10:54 pm' },
];

const SalahList: React.FC = () => {
  const salahItems = useMemo(() => {
    return salahs.map(({ title, time }) => (
      <SalahItem key={title} title={title} time={time} />
    ));
  }, [salahs]);

  return <View style={styles.container}>{salahItems}</View>;
};

export const styles = StyleSheet.create({
  container: {},
});

export default SalahList;
