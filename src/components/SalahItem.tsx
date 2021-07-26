import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, ListItem } from 'react-native-elements';

// TODO: type this as React.FC
const SalahDisplay = ({ title, time }: any) => {
  return (
    <View style={styles.container}>
      <ListItem key={title} bottomDivider>
        <ListItem.Content style={styles.contentStyles}>
          <ListItem.Title style={styles.salahNameStyles}>
            <Text h4>{title}</Text>
          </ListItem.Title>
          <ListItem.Subtitle style={styles.salahTimeStyles}>
            <Text h4>{time}</Text>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  salahNameStyles: {},
  salahTimeStyles: {},
});

export default SalahDisplay;
