import React from 'react'
import {StyleSheet, View, Text, Pressable } from 'react-native'
import todosServices from '../Axios/todosServices'
import { useEffect } from 'react';





useEffect(() => {

    const handlePress = async () => {
        try {
            const data = await todosServices.getAllTodos();
            console.log(data);
        } catch (error) {
            console.error("Error al obtener los todos:", error);
        }
    };

    
    handlePress();

    
}, []); 

/*en vez de usar esto tenemos que usar el useEffect
const handlePress = async() => {
    const data = await todosServices.getAllTodos();
    console.log(data)
}
    */

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