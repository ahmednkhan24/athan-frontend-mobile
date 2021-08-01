import React, { useContext } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Text, Button } from 'react-native-elements';
import SalahItem from './SalahItem';
import PullToRefresh from './PullToRefresh';
import { LocationContext } from '../contexts';
import { useDate } from '../hooks';

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
    <SafeAreaView style={styles.container}>
      <Swipeable
        renderLeftActions={LeftActions}
        renderRightActions={RightActions}
      >
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
      </Swipeable>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default SalahList;
