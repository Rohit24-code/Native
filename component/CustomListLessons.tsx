import React from 'react'
import { StyleSheet, Text, View , ScrollView } from 'react-native'
import { users } from './FlatListLessons'

const CustomListLessons = () => {
  return (
    <View>
      <ScrollView style={{marginBottom:60}}>
     {
      users.map((item)=><Text style={styles?.item}>{item.name}</Text>)
     }
     </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
  item:{
      fontSize:24,
      padding:20,
      color:"#fff",
      backgroundColor:"teal",
      borderColor:"black",
      borderWidth:1,
      margin:10
  }
})

export default CustomListLessons