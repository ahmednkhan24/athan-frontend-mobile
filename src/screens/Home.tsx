import React, { useContext } from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Text, Button } from 'react-native-elements';
import { LocationContext } from '../contexts';
import { useDate } from '../hooks';
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

const Home: React.FC = () => {
  const { city } = useContext(LocationContext);
  const { formattedDate, addOneDay, subtractOneDay } = useDate();

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
        <Swipeable
          renderLeftActions={LeftActions}
          renderRightActions={RightActions}
        >
          <Text style={styles.dateStyles}>{formattedDate}</Text>
          <Button onPress={subtractOneDay} title="Subtract a Day" />
          <Text></Text>
          <Button onPress={addOneDay} title="Add a Day" />
        </Swipeable>
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
