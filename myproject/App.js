import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [ name, setName ] = useState('suki')
  const [ age, setAge ] = useState(24)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>His name is {name} and he is {age} years old</Text>
      </View>
      <View style={styles.body}>
        
        <View style={styles.buttonContainer}>
          <TextInput 
          style={styles.input} 
          placeholder='Name' 
          onChangeText={(value)=> setName(value)}
          multiline
          />
          <TextInput 
          style={styles.input} 
          placeholder='Age' 
          onChangeText={(value)=> setAge(value)}
          keyboardType='numeric'
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  body: {
    padding: 20
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 200
  }
});
