import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const [ people, setPeople ] = useState([
    {name: 'suki', id: "1"},
    {name: 'shaun', id: "2"},
    {name: 'sherry', id: "3"},
    {name: 'sean', id: "4"},
    {name: 'shuri', id: "5"},
    {name: 'soham', id: "6"},
    {name: 'saki', id: "7"},
    {name: 'stan', id: "8"},
  ])

  const pressHandler = (id) =>{
    setPeople(()=> {return people.filter((item) => item.id != id)})
  }
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map((item)=>{
          return(
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
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
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 20
  }
});
