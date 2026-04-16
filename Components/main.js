import React from 'react'
import {StyleSheet, View, Text, Pressable } from 'react-native'
import todosServices from '../Axios/todosServices'


const handlePress = async() => {
    const data = await todosServices.getAllTodos();
    console.log(data)
}

const main = () => {
  return (
   <View>
    <Text>Main</Text>
    <Pressable style = {{backgroundColor: '#999', padding: 10, borderRadius: 10}} onPress={handlePress}>
        <Text>Obtener Info</Text>
    </Pressable>
   </View>
  )
}

export default main