import React, { useState } from 'react'
import { Button, View ,Text, StyleSheet, TextInput } from 'react-native'

const Counter = () => {
    const [time,setTime] = useState(0)
    const [text,setText] = useState("")
  
    const addNumber=(text:string)=>{
        setTime(+text)
        setText("")
    }
  return (
    <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{time}</Text>
    <View style={styles.sectionDescription}>
    <Button title='add one' onPress={()=>setTime(time+1)}/>
    <Button title='reset' onPress={()=>setTime(0)}/>
    <Button title='Subtract one' onPress={()=>setTime(time-1)}/>
    </View>

    <View>
      <TextInput placeholder='enter Number' value={text} onChangeText={(e)=>setText(e)}/>
      <Button title={"add as much as you want"}  onPress={()=>addNumber(text)}/>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      alignItems:"center",
      justifyContent:"center",
      border:1,
      borderColor:"red"
    },
    sectionTitle: {
      fontSize: 24,
      color:"black",
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  

export default Counter