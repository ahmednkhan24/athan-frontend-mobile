import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-elements';

// TODO: type this as React.FC
const SalahDisplay = ({ title, time }: any) => {
  return (
    <Card containerStyle={[styles.cardStyles, styles.inactiveStyles]}>
      <View style={styles.contentStyles}>
        <Text h4>{title}</Text>
        <Text h4>{time}</Text>
      </View>
    </Card>
  );
};

export const styles = StyleSheet.create({
  cardStyles: {
    flex: 1,
    borderRadius: 8,
    padding: 20,
  },
  activeStyles: {},
  inactiveStyles: {
    backgroundColor: '#34dceb',
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
