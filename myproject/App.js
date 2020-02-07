import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {
  const [ people, setPeople ] = useState([
    {name: 'suki', key: 1},
    {name: 'shaun', key: 2},
    {name: 'sherry', key: 3},
    {name: 'sean', key: 4},
    {name: 'shuri', key: 5},
    {name: 'soham', key: 6},
    {name: 'saki', key: 7},
    {name: 'stan', key: 8},
  ])
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item)=>{
          return(
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
