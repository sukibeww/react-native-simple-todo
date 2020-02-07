import React, { useState } from 'react';
import Header from './components/header'
import TodoItem from './components/todoItem'
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const [ todos, setTodos ] = useState([
    { text: 'buy a coffee' , key: '1'},
    { text: 'create an app' , key: '2'},
    { text: 'play on the switch' , key: '3'},
  ])

  const pressHandler = (key) => {
    setTodos((prev) => {
      return prev.filter(todo => todo.key != key)
    })
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item})=> (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
