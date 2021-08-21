import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import SalahList from '../components/SalahList';
import LocationHeader from '../components/LocationHeader';
import PullToRefresh from '../components/PullToRefresh';
import Swipe from '../components/Swipe';
import { fetchTodos } from '../store/actions';

const Home: React.FC = () => {
  const todos = useSelector((state) => (state as any).todos.todos);
  console.log('todos: ', todos);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewStyles}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshControl={<PullToRefresh />}
      >
        <LocationHeader />
        <Text />
        <Button onPress={() => dispatch(fetchTodos())} title="Fetch todos" />
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
