import React, { useState } from 'react';
import { StyleSheet, TextInput, Button , View } from 'react-native';

const AddTodo = ({submitHandler}) => {
  const [ text, setText ] = useState('')
  const changeHandler = (value) => {
    setText(value)
  }
  return(
    <View>
      <TextInput
        placeholder="new todo..."
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button onPress={()=> submitHandler(text)} title='add todo' color='coral'/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  }
})

export default AddTodo