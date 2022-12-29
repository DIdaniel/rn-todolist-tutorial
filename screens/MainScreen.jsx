import React from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useSelector } from 'react-redux';
import { InputForm } from '../components/InputForm';
import { TodoItem } from '../components/TodoItem';

export const MainScreen = () => {
  /** Property */
  const todos = useSelector((state) => state.todo.todos);
  const todoTasks = todos.filter((item) => item.state === 'todo');
  const completedTasks = todos.filter((item) => item.state === 'done');

  /** Function */

  /** Render */
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} />
      <Text style={styles.pageTitle}>Todo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>My Todo</Text>
        {todoTasks.length !== 0 ? (
          <FlatList
            data={todoTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.emptyListText}>할 일이 없습니다</Text>
        )}
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>Completed</Text>
        {completedTasks.length !== 0 ? (
          <FlatList
            data={completedTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.emptyListText}>완료 된 일이 없습니다</Text>
        )}
      </View>
      <InputForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: '#F7F0FA',
    height: '100%'
  },
  pageTitle: {
    flexDirection: 'column',
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: '600'
  },
  listView: {
    flex: 1
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: '500'
  },
  separator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)'
  },
  emptyListText: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373'
  }
});
