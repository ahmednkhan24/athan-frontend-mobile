import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

const salahs = [
  { title: 'Fajr', time: '4:41 am' },
  { title: 'Dhur', time: '12:30 pm' },
  { title: 'Asr', time: '5:20 pm' },
  { title: 'Maghreb', time: '8:10 pm' },
  { title: 'Isha', time: '10:54 pm' },
];

const SalahDisplay: React.FC = () => {
  return (
    <FlatList
      data={salahs}
      keyExtractor={(salah) => salah.title}
      renderItem={({ item }) => (
        <ListItem key={item.title} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.time}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      )}
    />
  );
};

export default SalahDisplay;
